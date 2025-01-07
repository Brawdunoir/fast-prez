
# Fastprez

A Vue.js application that automatically generates BBCode from NFO files using data from TMDB (The Movie Database). This tool simplifies the process of creating BBCode for media sharing by extracting relevant information from NFO files and formatting it for easy use in forums and other platforms.

## Features

- Automatically reads NFO files and extracts metadata.
- Fetches additional information from TMDB to enrich the BBCode output.
- Generates BBCode snippets for movies 

## Website

[Website](https://quick-media-craft.onrender.com/)

## Installation

To get started with the project, follow these steps:


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
1. **Create an Account on TMDB**:
   - Go to [TMDB (The Movie Database)](https://www.themoviedb.org/) and sign up for an account if you don't already have one.

2. **Generate Your API Key**:
   - After logging in, navigate to the API section of the website.
   - Follow the instructions to request and generate your API key.

3. **Create a .env File**:
   - In the root directory of your project, create a file named `.env`.

4. **Add Your API Key**:
   - Open the `.env` file and add your API key in the following format:

   ```plaintext
   VITE_TMDB_API_KEY=your_api_key_here

### Compile and Minify for Production

```sh
npm run build
```
