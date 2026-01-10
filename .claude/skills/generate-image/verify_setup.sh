#!/bin/bash
# Verify that the illustration generation setup is working correctly

set -e

echo "Verifying illustration generation setup..."
echo

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 not found. Install Python 3 to use this skill."
    exit 1
fi
echo "✓ Python 3 found: $(python3 --version)"

# Check requests module
if ! python3 -c "import requests" 2>/dev/null; then
    echo "❌ 'requests' module not found. Install with: pip install requests"
    exit 1
fi
echo "✓ Python 'requests' module installed"

# Check API key
if [ -z "$AI_STUDIO_API_KEY" ]; then
    echo "❌ AI_STUDIO_API_KEY environment variable not set"
    echo "   Set it with: export AI_STUDIO_API_KEY='your-key-here'"
    exit 1
fi
echo "✓ AI_STUDIO_API_KEY is set (${#AI_STUDIO_API_KEY} characters)"

# Check script is executable
if [ ! -x ".claude/skills/generate_image.py" ]; then
    echo "⚠ generate_image.py is not executable. Fixing..."
    chmod +x .claude/skills/generate_image.py
    echo "✓ Made generate_image.py executable"
else
    echo "✓ generate_image.py is executable"
fi

# Check images directory exists
if [ ! -d "images" ]; then
    echo "⚠ images/ directory not found. Creating..."
    mkdir -p images
    echo "✓ Created images/ directory"
else
    echo "✓ images/ directory exists"
fi

echo
echo "🎉 Setup verification complete! Ready to generate illustrations."
echo
echo "Test it with:"
echo "  .claude/skills/generate_image.py \"simple blue geometric shape\" \"1:1\""
echo
echo "Or in Claude Code:"
echo "  /generate-illustration"
