require 'yaml'

# Load the data from `_portfolio/february.md`
data = YAML.load_file('_portfolio/february.md')

# Ensure the _days directory exists
Dir.mkdir('_days') unless Dir.exist?('_days')

data['days'].each do |day|
  filename = "_days/#{day['date'].downcase.gsub(' ', '-')}.md"
  
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
end
