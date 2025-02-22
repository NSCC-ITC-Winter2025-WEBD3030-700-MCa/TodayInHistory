require 'yaml'
require 'date'  # Add this to handle date parsing properly

# Ensure the _days directory exists
Dir.mkdir('_days') unless Dir.exist?('_days')

# Loop through all month files in `_portfolio/`
Dir.glob('_portfolio/*.md') do |month_file|
  data = YAML.load_file(month_file)

  # Extract the month name from the filename (e.g., `february.md` -> `february`)
  month = File.basename(month_file, ".md").downcase

  puts "📂 Processing month: #{month}"  # Debug output

  data['days'].each do |day|
    begin
      # Convert date to ensure correct parsing
      date_obj = Date.parse(day['date'])  # Ensures we get a valid date
      day_number = date_obj.day  # Extracts only the day as an integer

      filename = "_days/#{month}-#{day_number}.md"  # Correct format (e.g., `september-5.md`)

      puts "📝 Creating file: #{filename}"  # Debug output

      File.open(filename, 'w') do |file|
        file.puts "---"
        file.puts "layout: day"
        file.puts "title: #{day['title'].inspect}"
        file.puts "date: #{day['date'].inspect}"
        file.puts "years:"

        day['years'].each do |year, details|
          file.puts "  #{year}:"
          file.puts "    events:"

          details['events'].each do |event|
            if event.is_a?(Hash) # Ensure events have title & description
              file.puts "      - title: #{event['title'].inspect}"
              file.puts "        description: #{event['description'].inspect}"
            else
              # Fallback in case of old format (just a string)
              file.puts "      - title: #{event.inspect}"
              file.puts "        description: \"No description available.\""
            end
          end
        end

        file.puts "---"
      end
    rescue StandardError => e
      puts "❌ Error processing date for #{day['date']}: #{e.message}"
    end
  end
end

puts "✅ Finished! Check the _days/ directory."
