---
description: Create a new Today I Learned (TIL) blog post from notes
---

You are helping the user create a new TIL (Today I Learned) post for their Hugo blog.

## Instructions

1. **Get the content**: The user will provide notes or content for the TIL post after the `/til` command. If no content is provided, ask the user for their notes.

2. **Extract title**: From the user's notes:
   - If the notes start with a clear title (like "# Title" or a short first line), use that as the title
   - Otherwise, generate a concise, descriptive title (5-10 words max) that captures the main learning
   - The title should be in sentence case (not Title Case)

3. **Generate slug**: Create a URL-friendly slug from the title:
   - Convert to lowercase
   - Replace spaces with hyphens
   - Remove special characters
   - Keep it short and descriptive

4. **Format the content**:
   - Remove any title line from the content if you extracted it as the title
   - Clean up the formatting to be proper markdown
   - Ensure code blocks are properly formatted
   - Keep it concise (TIL posts should be brief)

5. **Create the file**: Generate a new markdown file in `content/post/til/` with:
   - Filename format: `YYYY-MM-DD-slug.md` (using today's date)
   - Proper frontmatter (see template below)
   - The formatted content

## TIL Post Frontmatter Template

```yaml
---
title: [Generated or extracted title]
date: [Today's date in YYYY-MM-DDTHH:MM:SS.000Z format]
categories:
    - Today I Learned
image: /images/til.png
tags:
    - [Relevant tags based on content]
---
```

## Example

User input: "You can use `git check-ignore -v path/to/file` to debug which .gitignore rule is excluding a file"

Generated file: `content/post/til/2025-11-10-git-check-ignore-debugging.md`

```yaml
---
title: Debugging .gitignore with git check-ignore
date: 2025-11-10T00:00:00.000Z
categories:
    - Today I Learned
image: /images/til.png
tags:
    - git
---

You can use `git check-ignore -v path/to/file` to debug which .gitignore rule is excluding a file from version control.
```

## Important Notes

- TIL posts should be concise (1-3 paragraphs typically)
- Always use the `/images/til.png` image
- Always include the "Today I Learned" category
- Add relevant tags to help with organization
- Use today's date automatically
- After creating the file, show the user the file path and suggest they can edit it if needed
