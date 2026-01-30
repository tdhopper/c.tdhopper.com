# Podcast Transcript Processing Skill

Convert raw automated podcast transcripts into polished show notes and transcript pages for tdhopper.com.

## Quick Start

```
/podcast-transcript
```

Then provide the path to your raw transcript file or paste the transcript content.

## What It Does

1. **Cleans up the transcript** - Fixes grammar, removes filler words, corrects obvious transcription errors while preserving the speaker's voice and conversational tone
2. **Generates show notes** - Creates a summary, links section, and topic headers
3. **Verifies links** - Researches and provides real URLs for mentioned resources (never fabricates links)
4. **Flags uncertainties** - Alerts you to potential transcription errors or names/terms that need verification
5. **Outputs Hugo-ready markdown** - Matches the format of existing podcast posts

## Output Format

The skill generates a complete markdown file with:
- YAML frontmatter (title, date, description, categories, image)
- Listen section (placeholder for Spotify embed)
- Links section (verified URLs only)
- Subscribe section (standard podcast feed links)
- Summary (1-2 paragraph overview)
- Transcript (cleaned, with topic headers and speaker labels)

## Files

- `process-transcript.md` - Main skill definition with detailed instructions
- `SKILL.md` - This file

## Example Usage

```
/podcast-transcript content/drafts/episode-raw.txt
```

Or just run `/podcast-transcript` and paste the transcript when prompted.
