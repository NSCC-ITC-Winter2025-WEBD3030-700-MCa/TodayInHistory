const axios = require("axios");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected";
const OUTPUT_DIR = path.join(__dirname);
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function fetchDayData(month, day) {
  try {
    const response = await axios.get(`${BASE_URL}/${month}/${day}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch data for ${MONTHS[month - 1]} ${day}:`, error.message);
    return null;
  }
}

function sanitizeText(text) {
  return text.replace(/"/g, "'");
}

function formatMarkdown(month, events) {
  let markdown = `---
title: ${month}
subtitle: Subtitle for ${month}
image: assets/img/portfolio/01-full.jpg
alt: "${month} events"

caption:
  title: "${month}"
  subtitle: "Events in ${month}"
  thumbnail: assets/img/portfolio/01-thumbnail.jpg

days:
`;

  events.forEach(({ day, title, year, description }) => {
    markdown += `  - date: "${month} ${day}"
    title: "${title}"
    thumbnail: "assets/img/history/${month.toLowerCase()}-${day}.jpg"
    years:
      ${year}:
        events:
          - title: "${title}"
            description: "${description}"
            type: "Culture"
`;
  });

  return markdown + "\n---";
}

async function generateMarkdownFileForMonth(monthIndex) {
  const month = MONTHS[monthIndex];
  let eventsForMonth = [];

  for (let day = 1; day <= 31; day += 2) {
    const data = await fetchDayData(monthIndex + 1, day);
    if (!data || !data.selected) continue;

    const event = data.selected[0];
    if (event && event.year && event.text) {
      eventsForMonth.push({
        day: day.toString(),
        title: sanitizeText(event.text),
        year: event.year,
        description: sanitizeText(event.pages?.[0]?.extract || "No description available.")
      });
    }
  }

  if (eventsForMonth.length > 0) {
    const markdown = formatMarkdown(month, eventsForMonth);
    const fileName = `${month.toLowerCase()}.md`;

    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), markdown);
    console.log(`Saved: ${fileName}`);
  }
}

async function generateMarkdownFiles() {
  for (let monthIndex = 0; monthIndex < MONTHS.length; monthIndex++) {
    await generateMarkdownFileForMonth(monthIndex);
  }
  console.log("MD generation complete");
}

generateMarkdownFiles();
