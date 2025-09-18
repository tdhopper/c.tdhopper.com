# tdhopper.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/da967bf7-a528-483c-8afd-aa63b4a1b75e/deploy-status)](https://app.netlify.com/sites/ctdhopper/deploys)

Tim Hopper's personal blog and website built with Hugo static site generator using the Stack theme.

## Quick Start

Start the development server:
```bash
hugo server
```

Create a new blog post:
```bash
hugo new post/title-of-post.md
```

Create a new podcast episode:
```bash
hugo new --kind podcast post/podcasts/episode-name.md
```

Build for production:
```bash
hugo --gc --minify
```

## Project Structure

- `content/post/` - Blog posts and articles
- `config/_default/` - Hugo configuration files
- `layouts/` - Custom Hugo templates and partials
- `static/` - Static assets (images, PDFs, CSS, JS)
- `assets/` - Theme assets and custom SCSS

## Content Types

- **Articles** - Technical posts about data science, ML, Python
- **TIL** - Today I Learned quick tips in `post/til/`
- **Podcasts** - Audio content episodes in `post/podcasts/`
- **Links** - External link collections in `post/links/`
- **Photography** - Image collections (e.g., `post/sonya7iii/`)

## Theme and Configuration

- Uses Hugo Stack theme (v3.30.0) managed via Go modules
- Configured for English with pagination of 5 posts per page
- RSS feed includes full content
- Search functionality and tag cloud widgets on homepage
- Hugo version: 0.123.0

## Deployment

Hosted on Netlify with automatic deployments from the master branch.
- Build command: `hugo --gc --minify -b ${URL}`
- Publish directory: `public`
- Domain: tdhopper.com

## Content History

The site contains blog posts dating back to 2012 covering various technical topics including data science, machine learning, Python programming, and personal updates.
