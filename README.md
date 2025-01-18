
# FastPrez

FastPrez is a Vue.js application that automatically generates BBCode from NFO files using data from TMDB (The Movie Database). This tool simplifies the process of creating BBCode for media sharing by extracting relevant information from NFO files and formatting it for easy use in forums and other platforms.

## Features

- 🔎 Automatically reads NFO files and extracts metadata.
- ⬇️ Fetches additional information from TMDB to enrich the BBCode output.
- ✨ Generates BBCode snippets for movies

## Website

You can visit it at this address: https://fast-prez.onrender.com/.
Currently, FastPrez is hosted on Render, this can change in the future.

## Development

### EditorConfig

This project uses [EditorConfig](https://editorconfig.org). Most IDE come bundled with native support for EditorConfig. If yours does not, see to download a plugin (needed on VS Code).

### TMDB account

FastPrez needs a TMDB account to work.

1. **Create your accont**:
    - Go to [TMDB (The Movie Database)](https://www.themoviedb.org/) and sign up for an account if you don't already have one.

2. **Generate your API key**:
    - After logging in, navigate to the API section of the website.
    - Follow the instructions to request and generate your API key.

3. **Create a .env file**:
    - Copy the `.env.example` to a `.env` file.
    - Copy your TMDB API key inside.

### Project Setup

To get started with the project, follow these steps:

1. Install dependencies using `npm install`.
1. Start the project `npm run dev` with hot-reloading.
