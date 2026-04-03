#!/bin/bash

# Force the shell to use UTF-8
export LANG="C.UTF-8"
export LC_ALL="C.UTF-8"

SAVE_DIR="C:/Users/Haruku/Documents/myWeb/public/vocabs/images"
PY_PATH="C:/Users/Haruku/Documents/myWeb/src/utils/get_urls.py"
mkdir -p "$SAVE_DIR"

echo "--- Starting UTF-8 Image Sync ---"

# Use -o (raw) for python to keep encoding intact if necessary
python "$PY_PATH" | tr -d '\r' | while IFS="|" read -r sheet_name url; do
    
    if [[ -z "$url" ]]; then continue; fi

    # Extract extension (everything after the last dot)
    # We use a safer method to avoid mangling the name
    ext=$(echo "$url" | grep -oE "\.[a-zA-Z0-9]+$" | tr -d '.')
    
    # If extension extraction failed, default to png
    if [[ -z "$ext" ]]; then ext="png"; fi
    
    clean_ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]' | cut -d'?' -f1)
    
    # Use quotes religiously to protect Japanese characters in the filename
    filename="${sheet_name}.${clean_ext}"
    filepath="$SAVE_DIR/$filename"

    if [[ -f "$filepath" ]]; then
        echo "[Skip] $filename already exists."
    else
        echo "[Sync] Downloading: $url"
        echo "       Saving as: $filename"
        
        # Download
        curl -L --fail "$url" -o "$filepath"
        
        if [ $? -eq 0 ]; then
            echo "       Success!"
        else
            echo "       ERROR: Failed to download $filename"
        fi
    fi
done

echo "--- Process Complete ---"