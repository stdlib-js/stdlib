<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Git Cheatsheet

> Git Cheatsheet for stdlib

## Introduction

Welcome to `stdlib`! [Git][git] can feel overwhelming at times, but don't worry! This cheatsheet will walk you through the essential Git commands you'll need in a structured and easy-to-follow manner. Think of it as your go-to guide for a smooth and hassle-free workflow.

## Configuration

Before you start using [Git][git], it's important to introduce yourself. This step ensures that your commits are linked to your identity, making it easier to track contributions.

<!-- run-disable -->

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

> You only need to do this once.

To confirm that your identity is set correctly, run:

<!-- run-disable -->

```bash
git config --global user.name
git config --global user.email
```

This should display the name and email you configured. If there's a mistake, simply re-run the configuration commands with the correct details.

## Cloning

To contribute to `stdlib`, you first need to [fork][github-fork] the repository on GitHub. This creates a copy of the repository under your GitHub account where you have write access.

Once you've forked the repository, clone your fork onto your local machine:

<!-- run-disable -->

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/stdlib.git
cd stdlib
```

Since the official `stdlib` repository keeps updating, link it as the [upstream][git-remotes] remote to fetch the latest changes:

<!-- run-disable -->

```bash
git remote add upstream https://github.com/stdlib-js/stdlib.git
git fetch upstream
```

> In [Git][git], a [remote][github-remote] is a reference to a repository. Your fork is called `origin`, while the official `stdlib` repository is referred to as `upstream`. Adding an upstream remote allows you to consistently fetch the latest updates from the original repository and incorporate them into your work.

## Branching

In `stdlib`, the `develop` branch is the primary branch for development. Instead of making changes directly in the `develop` branch of your forked repository, it's best to create a separate branch for each feature or fix. This keeps your `develop` branch clean and makes it easier to pull updates from the official repository. To create a new branch for your work, use:

<!-- run-disable -->

```bash
git checkout -b feature/my-new-feature
```

## Changes

Now comes the fun part of actually writing code! After making your changes, it's always good to check what’s modified:

<!-- run-disable -->

```bash
git status
```

Once you're happy with your changes, add them to the staging area for a final confirmation:

<!-- run-disable -->

```bash
git add <file1> <file2>  # Add specific files
git add .                # Add all changes
```

Then, commit with a meaningful message:

<!-- run-disable -->

```bash
git commit -m "feat: add support for new function"
```

Try to keep your commit messages clear and concise! Adhering to stdlib's [Git Style Guide][github-style-guide] ensures a well-structured and understandable commit history.

## Pushing

Once your branch is ready, you need to push your **local** changes to your forked repository on GitHub using:

<!-- run-disable -->

```bash
git push
```

If this is the first time you’re pushing the branch, [Git][git] may prompt you to set an upstream branch. You can do this manually by running:

<!-- run-disable -->

```bash
git push --set-upstream origin feature/my-new-feature
```

> **Note:** This is a **one-time setup** for this branch. After this, you can simply use `git push` for future updates.

Once pushed, your changes will be available on GitHub, and you can proceed to create a pull request.

## Pull Request

A pull request (PR) is a way to suggest changes to a project. It lets maintainers review your work, give feedback, and approve the changes before adding them to the main repository. This is how you officially submit your contributions to `stdlib` after pushing your changes:

1. Go to your fork on GitHub.
2. Click "Compare & pull request."
3. Add a clear title and description (mention what you changed and why).

Once you create your pull request, a review request will be **automatically** sent to the maintainers via `stdlib-bot`. Your code will then be reviewed, and you may need to make some tweaks before it gets merged.

## Syncing

The `develop` branch of your forked repository should always stay **identical** to the official `stdlib` repository. If you accidentally add commits to your local `develop` branch, you need to remove them before updating it.

To update your local `develop` branch while making sure there are no unwanted changes, run:

<!-- run-disable -->

```bash
git checkout develop
git pull --ff-only upstream develop
```

> **Why use `--ff-only`?**
> This ensures your branch updates **only if no merge commits are needed**. If your `develop` branch has unexpected changes, this command will fail, alerting you that something is wrong.

If the above pull fails because you accidentally made changes to `develop`, you can **reset** it to match the official repository:

<!-- run-disable -->

```bash
git checkout develop
git reset --hard upstream/develop
```

> **Warning:** This will delete any changes you made to `develop`. Make sure you don’t have important work in this branch before running this command.

After updating `develop`, you can push it to your fork to keep everything in sync:

<!-- run-disable -->

```bash
git push origin develop
```

## Integration

While working on a feature branch, new changes might be added to the `develop` branch after syncing it as described above. To ensure your feature branch stays updated with these latest changes, you need to integrate them before pushing your work. There are two main ways to do this: rebasing and merging.

### Rebase

Rebasing **moves** your commits on top of the latest `develop`, as if you had started working after the newest updates.

#### Steps to Rebase:

<!-- run-disable -->

```bash
git checkout feature/my-branch
git rebase develop
```

If there are conflicts, resolve them and continue:

<!-- run-disable -->

```bash
git add <resolved-file>
git rebase --continue
```

#### Example: How Rebase Works

Before rebasing (`develop` has new commits `C` and `D`):
```
      X---Y---Z (feature/my-branch)
     /
A---B---C---D (develop)
```
After rebasing (`X, Y, Z` are reapplied on top of `D`):
```
                  X'--Y'--Z' (feature/my-branch, rebased)
                 /
A---B---C---D (develop)
```

### Merge

Merging **combines** your feature branch with `develop`, keeping both histories intact and adding a new merge commit.

#### Steps to Merge:

<!-- run-disable -->

```bash
git checkout feature/my-branch
git merge develop
```

If there are conflicts, resolve them, then commit the merge. Finally, push the updated branch:

<!-- run-disable -->

```bash
git push origin feature/my-branch
```

> Alternatively, if you have a running PR and want to update that branch directly to the `stdlib` develop branch, comment `/stdlib merge` on the PR, wait for the bot to merge your branch automatically, and then run `git pull`.

#### Example: How Merge Works

Before merging (`develop` has new commits `C` and `D`):
```
      X---Y---Z (feature/my-branch)
     /
A---B---C---D (develop)
```
After merging (`W` is a new merge commit):
```
      X---Y---Z---W (feature/my-branch, merged)
     /           /
A---B---C-------D (develop)
```

### Which one should you use?

Use **Rebase** if:
- You want a clean, linear history.
- You are working alone or sure that no one else depends on your commits.

Use **Merge** if:
- You want a safer approach that doesn’t rewrite history.
- You are unsure about rebase or are collaborating on the branch.

> **When in doubt, use merge.** It is safer and avoids potential conflicts caused by rewriting history. If you use the GitHub UI to update your branches, it also performs a merge.

## Conclusion

Congratulations! You now have all the essential Git commands to navigate your workflow smoothly while contributing to `stdlib`. Whether you're fixing a bug, adding a feature, or just getting started, this cheatsheet will help you stay organized and avoid common pitfalls. Keep practicing, stay curious, and enjoy the process. Happy coding!

To get started with your first contribution, check out the [Contributing Guide][stdlib-contributing] and [Development Guide][stdlib-development]. If you have any further questions, feel free to join our [Gitter][stdlib-gitter] channel to connect with the community and get support.

<section class="links">

[stdlib-contributing]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[stdlib-development]: https://github.com/stdlib-js/stdlib/blob/develop/docs/contributing/development.md

[stdlib-gitter]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[git]: http://git-scm.com/

[github-remote]: https://help.github.com/articles/configuring-a-remote-for-a-fork/

[git-clone-depth]: https://git-scm.com/docs/git-clone#git-clone---depthltdepthgt

[git-remotes]: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes

[github-fork]: https://help.github.com/articles/fork-a-repo/

[github-style-guide]: https://github.com/stdlib-js/stdlib/tree/develop/docs/style-guides/git#git-commit-messages

</section>

<!-- /.links -->
