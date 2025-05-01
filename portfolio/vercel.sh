#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Move build files to the correct location
mv dist/* .

# Make sure the dist directory exists
if [ ! -d "dist" ]; then
  echo "Build failed: dist directory not found"
  exit 1
fi

# Copy index.html to 404.html for SPA routing
cp dist/index.html dist/404.html 