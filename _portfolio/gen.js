const axios = require("axios");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected";
const OUTPUT_DIR = __dirname; // Set the directory where files will be saved
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
  return text.replace(/"/g, "'").replace(/:/g, "-"); // Avoid YAML formatting issues
}

function formatMarkdown(month, eventsByDay) {
  let markdown = `---
title: ${month}
subtitle: Historical Events in ${month}
image: assets/img/portfolio/01-full.jpg
alt: "${month} events"

caption:
  title: "${month}"
  subtitle: "Events in ${month}"
  thumbnail: assets/img/portfolio/01-thumbnail.jpg

days:
`;

  Object.keys(eventsByDay)
    .sort((a, b) => a - b) // Sort by day
    .forEach((day) => {
      markdown += `  - date: "${month} ${day}"
    title: "Significant Events on ${month} ${day}"
    thumbnail: "assets/img/history/${month.toLowerCase()}-${day}.jpg"
    years:
`;

      Object.keys(eventsByDay[day])
        .sort((a, b) => a - b) // Sort by year
        .forEach((year) => {
          markdown += `      ${year}:
        events:
`;

          eventsByDay[day][year].forEach(({ title, description }) => {
            markdown += `          - title: "${title}"
            description: "${description}"
`;
          });
        });
    });

  markdown += "---";
  return markdown;
}

async function generateMarkdownFileForMonth(monthIndex) {
  const month = MONTHS[monthIndex];
  let eventsByDay = {};

  for (let day = 1; day <= 31; day++) {
    const data = await fetchDayData(monthIndex + 1, day);
    if (!data || !data.selected) continue;

    data.selected.forEach((event) => {
      if (event.year && event.text) {
        const title = sanitizeText(event.text);
        const description = sanitizeText(event.pages?.[0]?.extract || "No description available.");

        if (!eventsByDay[day]) {
          eventsByDay[day] = {};
        }

        if (!eventsByDay[day][event.year]) {
          eventsByDay[day][event.year] = [];
        }

        eventsByDay[day][event.year].push({ title, description });
      }
    });
  }

  if (Object.keys(eventsByDay).length > 0) {
    const markdown = formatMarkdown(month, eventsByDay);
    const fileName = `${month.toLowerCase()}.md`;

    fs.writeFileSync(`${OUTPUT_DIR}/${fileName}`, markdown);
    console.log(`Saved: ${fileName}`);
  }
}

async function generateMarkdownFiles() {
  for (let monthIndex = 0; monthIndex < MONTHS.length; monthIndex++) {
    await generateMarkdownFileForMonth(monthIndex);
  }
  console.log("Markdown generation complete!");
}

generateMarkdownFiles();
