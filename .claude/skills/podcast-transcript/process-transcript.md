---
name: podcast-transcript
description: Convert raw automated podcast transcripts into polished show notes and transcript pages for tdhopper.com. Cleans up speech, generates verified links, creates topic headers, and flags uncertain transcriptions. Outputs Hugo-ready markdown matching existing podcast post format.
---

# Process Podcast Transcript

Transform a raw automated podcast transcript into a polished episode page for Into the Hopper podcast.

## Input

The user will provide either:
1. A file path to a raw transcript (e.g., `content/drafts/episode-raw.txt`)
2. Raw transcript text pasted directly

If no input is provided, ask the user for the transcript.

## Required Information

Before processing, gather from the user:
1. **Guest name** and their title/affiliation
2. **Episode date** (or use today's date)
3. **Any specific links** the user wants included

The Spotify embed will be added later - leave a placeholder.

## Processing Steps

### Step 1: Read and Analyze the Transcript

Read the raw transcript and identify:
- Guest name and how it's spelled
- Main topics discussed
- Any proper nouns (companies, products, books, people) that need link verification
- Potential transcription errors (unusual words, garbled phrases, inconsistent names)

### Step 2: Clean Up the Transcript

Apply these transformations while **preserving the speaker's voice and conversational tone**:

**DO:**
- Fix obvious grammar issues that came from speech-to-text
- Remove excessive filler words (um, uh, like, you know) but keep some natural speech patterns
- Correct clear transcription errors (wrong words, garbled text)
- Add punctuation for readability
- Break long rambling sentences into readable chunks
- Preserve personality, humor, and the speaker's characteristic phrases
- Keep contractions and casual language where it fits the speaker's style

**DO NOT:**
- Make the speaker sound overly formal or academic
- Remove all personality from the speech
- Add words or ideas the speaker didn't express
- Change the meaning of what was said
- Over-polish to the point it doesn't sound like natural speech

### Step 3: Add Structure

**Topic Headers:**
- Insert `---` horizontal rules between major topic shifts
- Add `### Topic Name` headers for major sections
- Keep headers concise (2-5 words)

**Speaker Labels:**
- Format as `**Tim:**` and `**GuestName:**`
- Each speaker turn gets its own paragraph

**Formatting within transcript:**
- Use `**bold**` for emphasis on key terms or important points
- Use `*italics*` for book titles, publication names
- Use `>` blockquotes for notable quotes worth highlighting

### Step 4: Generate Links Section

For every company, product, book, person, or resource mentioned:

1. **Research the link** using WebSearch or WebFetch
2. **Verify the URL exists** and goes to the right place
3. **Only include verified links** - NEVER fabricate or guess URLs

Format:
```markdown
## Links
- [Guest's Twitter](https://twitter.com/handle)
- [Guest's Website](https://example.com)
- [Company Name](https://company.com)
- [Book Title - Publisher](https://publisher.com/book)
```

If you cannot verify a link, either:
- Omit it entirely, OR
- Note it in the uncertainties section for the user to provide

### Step 5: Write the Summary

Create a 1-2 paragraph summary that:
- Introduces the guest and their background
- Highlights 2-3 key topics or insights from the conversation
- Written in first person from Tim's perspective (optional) or third person

### Step 6: Flag Uncertainties

After processing, report to the user any:
- Names or terms you're unsure about the spelling
- Phrases that seemed garbled or unclear
- Links you couldn't verify
- Technical terms that might be transcribed incorrectly

Format these as a checklist for the user to review.

## Output Template

Generate this exact structure:

```markdown
---
title: [Episode Title with Guest Name]
date: [YYYY-MM-DDTHH:MM:00.000-05:00]
description: "[1-2 sentence description for SEO/social sharing]"
categories:
  - Podcast
image: /images/podcast.png
---
## Listen
<iframe src="[SPOTIFY_EMBED_PLACEHOLDER]" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

## Links
- [Link 1](url)
- [Link 2](url)

## Subscribe
* [RSS Feed](https://feedpress.me/intothehopper)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/into-the-hopper/id1499693201)
* [Spotify](https://open.spotify.com/show/63NrgKMVb0VTwkklGboIjy)
* [Overcast](https://overcast.fm/itunes1499693201/into-the-hopper)

## Summary

[1-2 paragraph summary]

## Transcript

**Tim:** [Opening]

**Guest:** [Response]

---

### [Topic Header]

**Tim:** [Question/comment]

**Guest:** [Response]

[Continue transcript...]
```

## File Naming

Save to: `content/post/podcasts/[slug-from-title].md`

Use kebab-case derived from the episode title, e.g.:
- "The Evolution of AI Agents with Ben Labaschin" → `the-evolution-of-ai-agents-with-ben-labaschin.md`

## After Processing

1. Show the user the generated file path
2. Present the list of uncertainties/items needing verification
3. Remind them to add the Spotify embed URL when available
4. Offer to make any adjustments

## Quality Checklist

Before finalizing, verify:
- [ ] All speaker names are consistently spelled
- [ ] Topic headers break up the transcript at natural points
- [ ] Links section only contains verified URLs
- [ ] Transcript reads naturally (not robotic or over-edited)
- [ ] Summary accurately represents the conversation
- [ ] Frontmatter is complete and properly formatted
- [ ] Subscribe section uses the standard feed URLs
