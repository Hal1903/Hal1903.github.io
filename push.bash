#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Prompt for the Git commit message
echo "Please enter your Git commit message:"
read commit_message

# Check if the input is empty
if [ -z "$commit_message" ]; then
    echo "Error: No commit message provided. Aborting."
    exit 1
fi

## The Git Operations

echo "Committing changes to Git with message: \"$commit_message\""
git add .
git commit -m "$commit_message"

echo "Pushing changes to remote repository..."
git push

echo "Script finished successfully!"