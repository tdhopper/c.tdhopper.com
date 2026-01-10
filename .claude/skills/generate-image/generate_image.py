#!/usr/bin/env python3
# /// script
# dependencies = [
#   "requests",
# ]
# ///
"""
Helper script for generating Mr Men style blog illustrations using Gemini Image Generation API.
Called by the /image skill.

Usage: generate_image.py "prompt" "filename.png"
"""

import os
import sys
import json
import base64
import requests
import subprocess
from pathlib import Path

def call_gemini_api(prompt):
    """Call Gemini Image Generation API. Always generates 1:1 square images."""
    api_key = os.environ.get('AI_STUDIO_API_KEY')

    if not api_key:
        print("Error: AI_STUDIO_API_KEY environment variable not set", file=sys.stderr)
        print("Set it with: export AI_STUDIO_API_KEY='your-key-here'", file=sys.stderr)
        sys.exit(1)

    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent"

    headers = {
        "Content-Type": "application/json",
        "x-goog-api-key": api_key
    }

    # Generate at 16:9 - closest standard ratio to OG (1.91:1)
    payload = {
        "contents": [{
            "role": "user",
            "parts": [{"text": prompt}]
        }],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"],
            "imageConfig": {
                "aspectRatio": "16:9",
                "imageSize": "2K"
            }
        }
    }

    print(f"Generating image...", file=sys.stderr)

    try:
        response = requests.post(url, headers=headers, json=payload, timeout=60)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error calling Gemini API: {e}", file=sys.stderr)
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response: {e.response.text}", file=sys.stderr)
        sys.exit(1)

def save_image(image_data_base64, output_path):
    """Decode and save base64 image data, then resize to Open Graph dimensions."""
    try:
        image_bytes = base64.b64decode(image_data_base64)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # Save the raw image first
        with open(output_path, 'wb') as f:
            f.write(image_bytes)

        print(f"Raw image saved, resizing to 1200x630...", file=sys.stderr)

        # Resize to exact Open Graph dimensions (1200x630)
        # 16:9 (1.78:1) is very close to OG (1.91:1), minimal distortion
        result = subprocess.run([
            "magick", str(output_path),
            "-resize", "1200x630!",  # ! forces exact dimensions
            str(output_path)
        ], capture_output=True, text=True)

        if result.returncode != 0:
            print(f"Warning: ImageMagick resize failed: {result.stderr}", file=sys.stderr)
            print("Image saved but not resized to OG dimensions", file=sys.stderr)

        print(f"Image saved to: {output_path}", file=sys.stderr)
        return True
    except Exception as e:
        print(f"Error saving image: {e}", file=sys.stderr)
        return False

def main():
    if len(sys.argv) < 3:
        print("Usage: generate_image.py <prompt> <filename.png>", file=sys.stderr)
        print("  prompt: Full prompt including style guidance", file=sys.stderr)
        print("  filename: Output filename (e.g., podcast.png)", file=sys.stderr)
        sys.exit(1)

    prompt = sys.argv[1]
    filename = sys.argv[2]

    # Ensure filename ends with .png
    if not filename.endswith('.png'):
        filename = filename + '.png'

    print(f"Generating: {filename}", file=sys.stderr)

    # Call API
    response = call_gemini_api(prompt)

    # Extract image data from generateContent response
    try:
        candidates = response.get('candidates', [])
        if not candidates:
            print("Error: No candidates in API response", file=sys.stderr)
            print(f"Response: {json.dumps(response, indent=2)}", file=sys.stderr)
            sys.exit(1)

        content = candidates[0].get('content', {})
        parts = content.get('parts', [])

        image_data = None
        for part in parts:
            if 'inlineData' in part:
                inline_data = part['inlineData']
                image_data = inline_data.get('data')
                break

        if not image_data:
            print("Error: No image data in API response", file=sys.stderr)
            print(f"Response: {json.dumps(response, indent=2)}", file=sys.stderr)
            sys.exit(1)

    except (KeyError, IndexError) as e:
        print(f"Error parsing API response: {e}", file=sys.stderr)
        print(f"Response: {json.dumps(response, indent=2)}", file=sys.stderr)
        sys.exit(1)

    # Save to static/images/
    script_dir = Path(__file__).parent
    project_root = script_dir.parent.parent  # Go up from .claude/skills/generate-image to project root
    output_path = project_root / "static" / "images" / filename

    if save_image(image_data, output_path):
        # Output the path for Claude to use
        print(f"static/images/{filename}")
    else:
        sys.exit(1)

if __name__ == "__main__":
    main()
