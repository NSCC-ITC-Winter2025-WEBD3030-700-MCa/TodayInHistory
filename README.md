# Jekyll Project Setup Guide

## Prerequisites
Before running this Jekyll project, ensure you have the following installed:

- **Ruby** (2.7.0 or higher)
  - We are using **Ruby+Devkit 3.3.7-1 (x64)**

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

## Creating a New Jekyll Project
To create a new Jekyll project from scratch, use:

```sh
jekyll new nameofproject
```

Then, navigate into the project folder and start the server:

```sh
cd nameofproject
bundle exec jekyll serve
```

---

Happy coding! 🚀

