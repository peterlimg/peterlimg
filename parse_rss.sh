#!/bin/bash

# RSS Parser for Substack feeds
# Parses RSS XML and outputs markdown list of latest articles

set -e

RSS_URL="${1:-https://peterlimg.substack.com/feed}"
MAX_ARTICLES="${2:-5}"

echo "=== RSS Parser Debug Info ===" >&2
echo "RSS URL: $RSS_URL" >&2
echo "Max articles: $MAX_ARTICLES" >&2

# Fetch RSS feed
if ! rss_content=$(curl -s "$RSS_URL"); then
    echo "Error: Failed to fetch RSS feed from $RSS_URL" >&2
    exit 1
fi

echo "RSS content length: ${#rss_content} characters" >&2

# Check if we got valid content
if [[ -z "$rss_content" ]]; then
    echo "Error: Empty RSS content" >&2
    exit 1
fi

echo "Parsing RSS items..." >&2

# Extract titles and links directly using multiple passes
article_count=0

# Extract all titles first
titles=()
while IFS= read -r title; do
    if [[ $article_count -lt $MAX_ARTICLES ]]; then
        titles+=("$title")
        ((article_count++))
    fi
done < <(echo "$rss_content" | grep -o '<title><!\[CDATA\[[^]]*\]\]></title>' | sed 's/<title><!\[CDATA\[\([^]]*\)\]\]><\/title>/\1/' | tail -n +2)

# Extract all links
links=()
link_count=0
while IFS= read -r link; do
    if [[ $link_count -lt $MAX_ARTICLES ]]; then
        links+=("$link")
        ((link_count++))
    fi
done < <(echo "$rss_content" | grep -o '<link>https://peterlimg\.substack\.com/p/[^<]*</link>' | sed 's/<link>\([^<]*\)<\/link>/\1/')

echo "Found ${#titles[@]} titles and ${#links[@]} links" >&2

# Combine and output
for i in $(seq 0 $((MAX_ARTICLES-1))); do
    if [[ $i -lt ${#titles[@]} && $i -lt ${#links[@]} ]]; then
        title="${titles[$i]}"
        link="${links[$i]}"
        if [[ -n "$title" && -n "$link" ]]; then
            echo "- [$title]($link)"
            echo "Extracted: $title -> $link" >&2
        fi
    fi
done

echo "=== End RSS Parser Debug ===" >&2