# Blog Image Generation Skill

Generate minimalist Mr Men-style illustrations for tdhopper.com using Gemini's image generation API.

## Quick Start

1. **Set your API key:**
   ```bash
   export AI_STUDIO_API_KEY='your-gemini-api-key-here'
   ```

2. **Use in Claude Code:**
   ```
   /image
   ```
   Then describe what you want illustrated.

## Style

All images are generated in the style of **Mr Men books by Roger Hargreaves**:
- Round, blob-like cartoon characters
- Bold black outlines
- Solid flat colors (no gradients)
- Simple facial features
- White background
- No text

## Output

- **Format:** PNG
- **Size:** 1200x630 (Open Graph standard, generated at 16:9 then resized)
- **Location:** `static/images/`

## Files

- `generate-illustration.md` - Skill definition with style guidelines
- `generate_image.py` - Python script for API calls and image processing
- `SKILL.md` - This file

## Manual Usage

```bash
uv run .claude/skills/generate-image/generate_image.py "Your prompt here. Style: Mr Men books..." "filename.png"
```

## Requirements

- `AI_STUDIO_API_KEY` environment variable
- ImageMagick (`magick` command) for resizing
- `uv` for running Python scripts

## Cost

~$0.04 per image via Gemini API.
