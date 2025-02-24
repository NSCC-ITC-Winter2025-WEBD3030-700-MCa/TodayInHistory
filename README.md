# Jekyll Project Setup Guide

## **Contributor Resources**  

Liquid is a templating language that allows Jekyll to dynamically pull content from different folders and Markdown files. It helps organize content without using a backend database.

📖 **Liquid Template Language Docs:**  
[Shopify Liquid Docs](https://shopify.github.io/liquid/basics/introduction/)

### **🎨 Project Theme - Minima**
This project is based on **Minima**, the default Jekyll theme.  

🔗 **Minima GitHub Repository:**  
[https://github.com/jekyll/minima](https://github.com/jekyll/minima)

---

# **Windows Installation**  

## **Prerequisites**
Before running this Jekyll project, ensure you have the following installed:

- **Ruby** (2.7.0 or higher)  
  - We are using **Ruby+Devkit 3.3.7-1 (x64)**  
  - 📥 **Download Ruby for Windows:**  
    [https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)

### **Ruby Installation Steps**
1. **Use all of the default settings during installation.**  
2. When prompted in the Ruby Installer command prompt, **press Enter** to continue.

### ✅ **Verify Installation**
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
Use the following commands to start the Jekyll server:


```sh
jekyll build  

jekyll serve  --future 
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

## Linux Installation
In Dabain/Ubantu
sudo apt update && sudo apt install ruby-full build-essential zlib1g-dev

In Fedora 
sudo dnf install ruby ruby-devel

In Arch Linux
sudo pacman -S ruby


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

You can view the live version of the site at: [Today in History](https://todayinhistory-nscc.netlify.app/)