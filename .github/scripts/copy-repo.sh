#!/usr/bin/env bash 
# bash boilerplate
set -euo pipefail # strict mode
readonly SCRIPT_NAME="$(basename "$0")"
readonly SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
function l { # Log a message to the terminal.
    echo
    echo -e "[${SCRIPT_NAME}] ${1:-}"
}

# File to copy from Notehub
REPO_FS=./dev.sadishag.github.io

EXCLUDES=[".github" ".git" ".DS_Store"]

# if folder exists, copy
if [ -d "${REPO_FS}" ]; then
    echo "Copying ${REPO_FS}"
    EXCLUDE_STRING=""
    for i in ${EXCLUDES[@]}; do 
      EXCLUDE_STRING+="--exclude '${i}' "
    done

    # copy with rsync to use exclude feature
    rsync -av ${EXCLUDE_STRING} ./dev.sadishag.github.io/ ./sadishag.github.io/
fi

echo "Repo copied to ${DESTINATION_PATH}"