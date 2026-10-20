# Essential Git Commands Professionals Use

## 1. Setup
- `git config --global user.name "Your Name"` — sets your name for commits
- `git config --global user.email "you@example.com"` — sets your email
- `git config --list` — shows current Git configuration
- `git --version` — checks Git version

## 2. Starting a repository
- `git init` — initializes a new Git repository
- `git clone <repo-url>` — copies a remote repository to your local machine

## 3. Checking repo status
- `git status` — shows modified, staged, and untracked files
- `git status -sb` — compact status summary

## 4. Tracking and staging files
- `git add <file>` — stages a file
- `git add .` — stages all changes in the folder
- `git add -A` — stages all tracked and new files
- `git restore --staged <file>` — unstages a file
- `git restore <file>` — discards local changes to a file

## 5. Committing changes
- `git commit -m "message"` — creates a commit with a message
- `git commit -am "message"` — stages tracked modified files and commits in one step
- `git commit --amend` — modifies the last commit
- `git log` — shows commit history
- `git log --oneline --decorate --graph --all` — nice compact commit graph

## 6. Viewing changes
- `git diff` — shows unstaged differences
- `git diff --staged` — shows staged differences
- `git show <commit>` — shows details of a specific commit
- `git diff <commit1> <commit2>` — compares two commits

## 7. Branching
- `git branch` — lists branches
- `git branch <branch-nagitme>` — creates a new branch
- `git checkout <branch-name>` — switches to a branch
- `git checkout -b <branch-name>` — creates and switches to a new branch
- `git switch <branch-name>` — modern way to switch branches
- `git switch -c <branch-name>` — creates and switches to new branch
- `git branch -d <branch-name>` — deletes a merged branch
- `git branch -D <branch-name>` — force deletes a branch

## 8. Merging and rebasing
- `git merge <branch-name>` — merges another branch into current branch
- `git rebase <branch-name>` — moves commits onto another branch
- `git merge --abort` — cancels a merge in progress
- `git rebase --abort` — cancels a rebase in progress

## 9. Remote repositories
- `git remote -v` — shows remote URLs
- `git remote add origin <url>` — adds a remote repository
- `git remote remove origin` — removes a remote
- `git fetch` — downloads remote changes without merging
- `git pull` — fetches and merges remote changes
- `git push origin <branch-name>` — uploads local branch to remote
- `git push -u origin <branch-name>` — sets upstream and pushes

## 10. Working with history
- `git reset --soft HEAD~1` — undo last commit but keep changes staged
- `git reset --mixed HEAD~1` — undo last commit and unstage changes
- `git reset --hard HEAD~1` — permanently discard last commit and changes
- `git revert <commit>` — creates a new commit that reverses an old commit
- `git checkout HEAD -- <file>` — restores file from last commit
- `git reflog` — shows recent HEAD movements; useful for recovery

## 11. Tagging
- `git tag` — lists tags
- `git tag <tag-name>` — creates a lightweight tag
- `git tag -a v1.0 -m "Version 1.0"` — creates an annotated tag
- `git push origin --tags` — pushes tags to remote

## 12. Stash
- `git stash` — saves current uncommitted work temporarily
- `git stash list` — shows saved stashes
- `git stash apply` — applies the latest stash
- `git stash pop` — applies and removes the latest stash
- `git stash drop` — deletes a stash

## 13. Cleaning and removing files
- `git rm <file>` — removes a file from repo and working tree
- `git clean -n` — previews files to remove
- `git clean -fd` — deletes untracked files/directories

## 14. Ignoring files
- `.gitignore` — file used to ignore unnecessary files like `node_modules`, `.env`, etc.
- `git check-ignore -v <file>` — checks why a file is ignored

## 15. Advanced but very useful
- `git cherry-pick <commit>` — applies a specific commit to current branch
- `git bisect` — finds the bad commit causing a bug
- `git blame <file>` — shows who changed each line
- `git ls-files` — lists tracked files
- `git shortlog` — summarizes commit history by author
- `git submodule add <url> <path>` — adds a submodule
- `git archive` — creates a tar/zip of project state

## 16. Most common workflow
This is the usual professional flow:
- `git status`
- `git add .`
- `git commit -m "feat: add new feature"`
- `git pull --rebase origin main`
- `git push origin main`

## 17. Best practice commands professionals use often
- `git fetch --all --prune`
- `git pull --rebase`
- `git checkout -b feature/my-change`
- `git merge --no-ff feature/my-change`
- `git push origin HEAD`
- `git branch --set-upstream-to=origin/main main`

If you want, I can also give you:
- a “Git cheat sheet” in one page
- beginner-friendly commands only
- branch workflow commands for teams
- Git commands used in DevOps and CI/CD pipelines
