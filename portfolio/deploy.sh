#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "Files in dist directory:"
    ls -la dist/
    echo ""
    echo "Contents of index.html:"
    head -20 dist/index.html
else
    echo "Build failed!"
    exit 1
fi 