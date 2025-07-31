# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Tim Hopper's personal blog and website (tdhopper.com) built with Hugo static site generator using the Stack theme. The site contains blog posts about data science, machine learning, Python programming, and various technical topics dating back to 2012.

## Development Commands

### Build and Serve
- `hugo server` or `hugo serve` - Start local development server with live reload
- `hugo --gc --minify` - Build production site (same as Netlify build command)
- `hugo --gc --minify -b ${URL}` - Build with specific base URL (Netlify command)

### Content Management
- `hugo new post/title-of-post.md` - Create new blog post
- `hugo new --kind podcast post/podcasts/episode-name.md` - Create new podcast episode

## Architecture and Structure

### Content Organization
- **Blog posts**: Located in `content/post/` with various categories:
  - Articles, humor, links, podcasts, presentations, TIL (Today I Learned)
  - Posts use frontmatter with title, date, categories, and optional images
  - Historical posts dating back to 2012 with varied naming conventions

### Key Directories
- `content/`: All markdown content including posts, pages, and categories
- `config/_default/`: Hugo configuration files (config.toml, params.toml, etc.)
- `layouts/`: Custom Hugo templates and partials
- `static/`: Static assets (images, PDFs, CSS, JS)
- `assets/`: Theme assets and custom SCSS

### Hugo Configuration
- Uses Hugo Stack theme (v3.30.0) managed via Go modules
- Site configured for English with pagination of 5 posts per page
- Netlify deployment with Hugo version 0.123.0
- RSS feed includes full content
- No comments system enabled
- Search functionality and tag cloud widgets on homepage

### Deployment
- Hosted on Netlify with automatic deployments
- Build command: `hugo --gc --minify -b ${URL}`
- Publish directory: `public`
- Domain: tdhopper.com

## Content Patterns

### Blog Post Structure
Posts typically include:
- YAML frontmatter with title, date, categories, and optional image
- Markdown content with technical discussions
- Many posts include code examples, mathematical content, and external links
- Historical posts may have different URL structures and naming conventions

### Special Content Types
- **Podcasts**: Stored in `post/podcasts/` subdirectory
- **TIL posts**: Technical tips and quick learnings in `post/til/`
- **Links**: External link collections in `post/links/`
- **Photography**: Image collections in directories like `post/sonya7iii/`