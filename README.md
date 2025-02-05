## Contributor Resources 

Liquid is a templating language that allows Jekyll to dynamically pull content from different folders and Markdown files. It helps organize content without using a backend database.
Liquid Template Language Docs:
https://shopify.github.io/liquid/basics/introduction/


Here is this projects theme "Minima". It is the default Jekyll theme.
It is also the codebase which this project was built off. 
https://github.com/jekyll/minima

# Jekyll Project Setup Guide

## Prerequisites
Before running this Jekyll project, ensure you have the following installed:

- **Ruby** (2.7.0 or higher)
  - We are using **Ruby+Devkit 3.3.7-1 (x64)**

Link for Windows Download: https://rubyinstaller.org/downloads/

## Ruby Installation Instructions

1. **Use all of the default settings for installation.**  
2. In the Command Prompt for Ruby Installer, when it prompts you with options and says:  
   _"If unsure, press Enter,"_  
   simply press **Enter** to continue.

### Verify Installation
Run the following commands to check if Ruby and Gem are installed correctly:

```sh
ruby -v
gem -v
```

- We have **Gem 3.5.22** installed.

## Install Jekyll and Bundler
To install Jekyll and Bundler, run:

```sh
gem install bundler jekyll
```

## Start the Application
Use one of the following commands to start the Jekyll server:

**Recommended:**
```sh
bundle exec jekyll serve
```  
**Alternatively:**
```sh
jekyll serve
```
