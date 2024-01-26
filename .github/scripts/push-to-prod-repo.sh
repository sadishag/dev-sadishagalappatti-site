#!/usr/bin/env bash 
# bash boilerplate
set -euo pipefail # strict mode
readonly SCRIPT_NAME="$(basename "$0")"
readonly SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
function l { # Log a message to the terminal.
    echo
    echo -e "[${SCRIPT_NAME}] ${1:-}"
}

# move to the root the sadishag.github.io repo
cd "./sadishag.github.io"
echo "Open root of the prod repo (sadishag.github.io)"

# check if there's already a currently existing feature branch in sadishag.github.io for this branch
echo "Check if feature branch ${BRANCH} already exists in sadishag.github.io"
git ls-remote --exit-code --heads origin ${BRANCH} > /dev/null 2>&1
EXIT_CODE=$?
echo "EXIT CODE ${EXIT_CODE}"

if [[ ${EXIT_CODE} == "0" ]]; then
  echo "Git branch '${BRANCH}' exists in the remote repository"
  # fetch branches from sadishag.github.io
  git fetch
  # stash currently copied file/folder changes
  git stash
  # check out existing branch from sadishag.github.io
  git checkout ${BRANCH} 
  # overwrite any previous file/folder changes with current ones
  git checkout stash -- .
else
  echo "Git branch '${BRANCH}' does not exist in the remote repository"
  # create a new branch in sadishag.github.io 
  git checkout -b ${BRANCH}
fi

git add -A .
git config user.name github-actions
git config user.email github-actions@github.com
git commit -am "feat: Update source files to match with dev.sadishag.github.io"
git push --set-upstream origin ${BRANCH}

echo "Updated repo file successfully pushed to sadishag.github.io repo"