#!/usr/bin/env bash 
# bash boilerplate
set -euo pipefail # strict mode
readonly SCRIPT_NAME="$(basename "$0")"
readonly SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
function l { # Log a message to the terminal.
    echo
    echo -e "[${SCRIPT_NAME}] ${1:-}"
}

echo rsync --version

EXCLUDES=(".github" ".git" "sadishag.github.io")


echo "Copying dev.sadishag.github.io"
EXCLUDE_STRING=""
for i in ${EXCLUDES[@]}; do 
  EXCLUDE_STRING+="--exclude '${i}' "
done
echo ${EXCLUDE_STRING}
# copy with rsync to use exclude feature
rsync -av ${EXCLUDE_STRING} ./ ./sadishag.github.io/
echo "rsync -av ${EXCLUDE_STRING} ./ ./sadishag.github.io/"


echo "Repo copied to ${DESTINATION_PATH}"
pwd 
ls -la ./sadishag.github.io