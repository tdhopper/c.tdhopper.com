---
name: image
description: Generate minimalist Mr Men-style illustrations for the blog. Creates cheerful, simple cartoon characters with bold outlines, solid colors, and white backgrounds. Perfect for blog post headers, podcast images, and social sharing. Outputs PNG at Open Graph size (1200x630) to static/images/. Requires AI_STUDIO_API_KEY.
---

# Generate Blog Image

Generate minimalist illustrations in the style of Mr Men books by Roger Hargreaves.

## Visual Style Guidelines

All illustrations must follow this consistent style:

**Target aesthetic:** Mr Men children's book illustrations - simple, cheerful, iconic characters with bold outlines.

**Style:** Minimalist cartoon illustrations
**Color palette:**
- Primary character colors: Orange/red, blue, yellow, green (solid, saturated)
- Outlines: Bold black lines (2-3pt)
- Background: Pure white
- Use solid colors only - no gradients, textures, or shading

**Core Principles:**
- **Simple shapes** - Round, blob-like characters with stick arms and legs
- **Bold black outlines** - Clean, consistent line weight throughout
- **Flat solid colors** - No gradients, shadows, or shading
- **Minimal details** - Simple dot eyes, curved smile lines
- **White background** - Clean, uncluttered
- **Cheerful expressions** - Happy, friendly characters
- **No text** - Images should work without any text labels

**Required Elements:**
- Round or oval body shapes for characters
- Simple stick limbs
- Bold black outlines on everything
- Solid flat color fills
- Minimal facial features (dots for eyes, simple curve for mouth)
- White or very light background

**Absolutely Avoid:**
- 3D effects, shadows, gradients, shading
- Realistic proportions or detailed anatomy
- Complex backgrounds or scenery
- Text or labels in the image
- Photorealistic elements
- Too many details or decorative elements
- Multiple visual styles

## Technical Requirements

**Format:** PNG
**Aspect ratio:** Open Graph standard (1.91:1, output as 1200x630 pixels)
**Output directory:** Save all images to `static/images/` with descriptive kebab-case filenames

## Usage

When invoked, this skill:

1. Takes the user's description of what to illustrate
2. Enhances the prompt with Mr Men style guidelines
3. Calls the Gemini Image Generation API using AI_STUDIO_API_KEY
4. Generates at 16:9 (closest to OG ratio), resizes to exact 1200x630
5. Saves to `static/images/` with a descriptive filename
6. Returns the file path

## Implementation Instructions

When this skill is invoked:

1. **Get the illustration concept** from the user's input
2. **Build the full prompt** by combining the user's concept with Mr Men style requirements
3. **Call the helper script**:
   ```bash
   uv run .claude/skills/generate-image/generate_image.py "full prompt with style" "filename.png"
   ```

   The script will:
   - Call Gemini's Image Generation API (generates 16:9)
   - Resize to exact 1200x630 (Open Graph dimensions)
   - Save to `static/images/[filename].png`
   - Output the file path

4. **Show the image** to the user using the Read tool
5. **Report the file path** for use in blog posts

**Prompt Template:**

Always append this style guidance to the user's concept:

```
[User's concept description]

Style: Mr Men books by Roger Hargreaves. Round, blob-like cartoon characters with stick arms and legs. Bold black outlines. Solid flat colors (no gradients or shading). Simple dot eyes and curved smile. White background. No text. Minimalist children's book illustration.
```

**Example invocations:**

```bash
# Podcast characters
uv run .claude/skills/generate-image/generate_image.py "Two round cartoon characters sitting at a table with microphones, wearing headphones. One orange/red, one blue. Style: Mr Men books by Roger Hargreaves. Bold black outlines. Solid flat colors. Simple faces. White background. No text." "podcast.png"

# Writing/blogging character
uv run .claude/skills/generate-image/generate_image.py "A round blue cartoon character sitting at a desk typing on a laptop, looking happy. Style: Mr Men books by Roger Hargreaves. Bold black outlines. Solid flat colors. Simple face. White background. No text." "writing.png"

# Coding character
uv run .claude/skills/generate-image/generate_image.py "A round green cartoon character looking at a computer screen with code symbols floating around. Style: Mr Men books by Roger Hargreaves. Bold black outlines. Solid flat colors. Simple face. White background. No text." "coding.png"
```

## Error Handling

If the API call fails:
- Check that AI_STUDIO_API_KEY is set: `echo $AI_STUDIO_API_KEY`
- Verify ImageMagick is installed for resizing: `which magick`
- Check the response for error messages

**Quality Verification Checklist:**
- [ ] Are the characters round/blob-like with simple shapes?
- [ ] Are there bold black outlines on everything?
- [ ] Are colors solid (no gradients, shadows, or shading)?
- [ ] Is the background white/clean?
- [ ] Is there no text in the image?
- [ ] Does it look like a Mr Men illustration?

If the style is off, try adding more explicit guidance like "Roger Hargreaves style", "children's book illustration", "extremely simple and minimalist".

## Notes

- Each API call costs ~$0.04
- Images are generated at 16:9, then resized to exact 1200x630 for Open Graph
- Output goes to `static/images/` for Hugo to find
- Use descriptive filenames like `podcast.png`, `coding.png`, `writing.png`
