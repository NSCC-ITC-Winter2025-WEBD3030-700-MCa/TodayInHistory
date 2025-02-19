## Contributor Resources 

Liquid is a templating language that allows Jekyll to dynamically pull content from different folders and Markdown files. It helps organize content without using a backend database.
Liquid Template Language Docs:
https://shopify.github.io/liquid/basics/introduction/


Here is this projects theme "Minima". It is the default Jekyll theme.
It is also the codebase which this project was built off. 
https://github.com/jekyll/minima

# Jekyll Project Setup Guide

## Windows Installation

## Prerequisites
Before running this Jekyll project, ensure you have the following installed:

- **Ruby** (2.7.0 or higher)
  - We are using **Ruby+Devkit 3.3.7-1 (x64)**

Link for Windows Download: https://rubyinstaller.org/downloads/

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

## Install Dependencies
Use the following command to install dependencies:
```sh
bundle install
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

## Mac Installation

## Install Ruby
First, install Ruby using Homebrew:

```bash
brew install ruby
```

## Verify Ruby Installation
Check if Ruby and Gem were successfully installed by running the following commands:

```bash
ruby -v
gem -v
```

## Install Jekyll and Bundler
To install Jekyll and Bundler, run:

```bash
gem install jekyll bundler
```

## Install Dependencies
Use the following command to install dependencies:
```bash
bundle install
```

## Start the Application
Use the following commands to start the Jekyll server:
```bash
jekyll serve
```

## Live Deployed Site

You can view the live version of the site at:

[https://deploy-preview-39--todayinhistory-nscc.netlify.app/](https://deploy-preview-39--todayinhistory-nscc.netlify.app/)