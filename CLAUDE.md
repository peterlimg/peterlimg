# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Peter's personal GitHub profile repository that showcases his professional background and latest writings. The repository contains:
- A comprehensive README.md with professional profile information
- GitHub Actions workflow for automatically updating the latest Substack article

## Key Commands

### GitHub Actions
- The workflow runs automatically every 6 hours or can be triggered manually via GitHub Actions UI
- To test the workflow locally, you would need to simulate the RSS feed fetching and README update logic

### Development Notes
- The repository uses GitHub Actions with a scheduled cron job to update the README.md with the latest Substack article
- The update mechanism uses AWK to replace content between `<!-- SUBSTACK:START -->` and `<!-- SUBSTACK:END -->` markers
- The workflow uses `stefanzweifel/git-auto-commit-action@v5` to automatically commit and push changes

## Architecture

The repository has a simple structure:
- `README.md` - The main profile page
- `.github/workflows/update-substack.yml` - Automated workflow to fetch and update the latest Substack article link

The workflow fetches RSS feed from `https://substack.com/feed/@peterlimg` and extracts the latest article title and link to update the README automatically.