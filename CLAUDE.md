# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Peter's personal GitHub profile repository that showcases his professional background and latest writings. The repository contains:
- A comprehensive README.md with professional profile information
- GitHub Pages portfolio website (index.html, styles.css, script.js)
- GitHub Actions workflow for automatically updating the latest Substack article

## Key Commands

### GitHub Pages
- The portfolio website is hosted at https://peterlimg.github.io/peterlimg/
- GitHub Pages is configured to deploy from the main branch root directory
- The website includes responsive design and interactive features

### GitHub Actions
- The workflow runs automatically every 6 hours or can be triggered manually via GitHub Actions UI
- To test the workflow locally, you would need to simulate the RSS feed fetching and README update logic

### Development Notes
- The repository uses GitHub Actions with a scheduled cron job to update the README.md with the latest Substack article
- The update mechanism uses AWK to replace content between `<!-- SUBSTACK:START -->` and `<!-- SUBSTACK:END -->` markers
- The workflow uses `stefanzweifel/git-auto-commit-action@v5` to automatically commit and push changes

## Architecture

The repository structure:
- `README.md` - GitHub profile README with professional information
- `index.html` - Main portfolio website homepage
- `styles.css` - Portfolio website styling with responsive design
- `script.js` - Interactive features including mobile navigation, smooth scrolling, and animations
- `.github/workflows/update-substack.yml` - Automated workflow to fetch and update the latest Substack article link

### Portfolio Website Features
- Responsive design that works on desktop and mobile
- Interactive navigation with mobile hamburger menu
- Smooth scrolling between sections
- Animated skill cards and social links
- Scroll-to-top functionality
- Professional styling with modern UI/UX

The GitHub Actions workflow fetches RSS feed from `https://substack.com/feed/@peterlimg` and extracts the latest article title and link to update both the README and potentially the portfolio website automatically.