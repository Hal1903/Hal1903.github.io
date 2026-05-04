#!/bin/bash

# Usage: ./create_articles.sh <target_directory>

# Check argument
if [ -z "$1" ]; then
  echo "Usage: $0 <target_directory>"
  exit 1
fi

DIR="$1"

# Create directory if it doesn't exist
mkdir -p "$DIR"

# Loop to create files
for i in $(seq -w 1 10); do
  FILE="$DIR/article${i}_0.js"

  cat <<EOF > "$FILE"
import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "";

export default function Article${i}() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">

                

            </div>
        </div>
    );
}
EOF

  echo "Created $FILE"
done