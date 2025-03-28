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

> A cheatsheet for using Git to develop stdlib.

## Introduction

Welcome to `stdlib`! [Git][git] can feel overwhelming at times, but don't worry! This cheatsheet will walk you through the essential Git commands you'll need in a structured and easy-to-follow manner. Think of it as your go-to guide for a smooth and hassle-free workflow.

## Configuration

Before you start using [Git][git], it's important to introduce yourself. This step ensures that your commits are linked to your identity, making it easier to track contributions.

<!-- run-disable -->

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "your.email@example.com"
```

> You only need to do this once.

To confirm that your identity is set correctly, run:

<!-- run-disable -->

```bash
$ git config --global user.name
$ git config --global user.email
```

This should display the name and email you configured. If there's a mistake, simply re-run the configuration commands with the correct details.

## Cloning

To contribute to `stdlib`, you first need to [fork][github-fork] the repository on GitHub. This creates a copy of the repository under your GitHub account where you have write access.

Once you've forked the repository, clone your fork onto your local machine:

<!-- run-disable -->

```bash
$ git clone https://github.com/YOUR_GITHUB_USERNAME/stdlib.git
$ cd stdlib
```

Since the official `stdlib` repository keeps updating, link it as the [upstream][git-remotes] remote to fetch the latest changes:

<!-- run-disable -->

```bash
$ git remote add upstream https://github.com/stdlib-js/stdlib.git
$ git fetch upstream
```

> In [Git][git], a [remote][github-remote] is a reference to a repository. Your fork is called `origin`, while the official `stdlib` repository is referred to as `upstream`. Adding an [upstream][git-remotes] remote allows you to consistently fetch the latest updates from the original repository and incorporate them into your work.

## Branching

In `stdlib`, the `develop` branch is the primary branch for development. Instead of making changes directly in the `develop` branch of your forked repository, it's best to create a separate branch for each feature or fix. This keeps your `develop` branch clean and makes it easier to pull updates from the official repository. To create a new branch for your work, use:

<!-- run-disable -->

```bash
$ git checkout -b feature/my-new-feature
```

## Changes

Now comes the fun part of actually writing code! After making your changes, it's always good to check what's modified:

<!-- run-disable -->

```bash
$ git status
```

Once you're happy with your changes, add them to the staging area for a final confirmation:

<!-- run-disable -->

```bash
$ git add <file1> <file2>  # Add specific files
$ git add .                # Add all changes
```

Then, commit with a meaningful message:

<!-- run-disable -->

```bash
$ git commit -m "feat: add support for new function"
```

For **multi-line** commit messages (like when you want to include a longer description), you can use:

<!-- run-disable -->

```bash
$ git commit
```

This opens an editor where you can write something like:

```plaintext
feat: add support for new function

This adds the initial version of <function_name>, with support for <brief explanation>.
```

**After writing your message:**

-   **Vim**: press `Esc`, type `:wq`, then press `Enter`
-   **Nano**: `Ctrl+O`, then `Enter`, then `Ctrl+X`
-   **VS Code**: save and close the editor

> Multi-line commits are especially useful for giving extra context on why the change was made, or summarizing multiple related changes.

To make this even easier, you can also use:

<!-- run-disable -->

```bash
$ make commit
```

This gives you an interactive prompt to help you craft a properly formatted commit message. Super handy!

Try to keep your commit messages clear and concise! Adhering to stdlib's [Git Style Guide][github-style-guide] ensures a well-structured and understandable commit history.

## Pushing

Once your branch is ready, you need to push your **local** changes to your forked repository on GitHub using:

<!-- run-disable -->

```bash
$ git push
```

If this is the first time you're pushing the branch, [Git][git] may prompt you to set an [upstream][git-remotes] branch. You can do this manually by running:

<!-- run-disable -->

```bash
$ git push --set-upstream origin feature/my-new-feature
```

> **Note:** This is a **one-time setup** for this branch. After this, you can simply use `git push` for future updates.

Once pushed, your changes will be available on GitHub, and you can proceed to create a pull request.

## Pull Request

A pull request (PR) is a way to suggest changes to a project. It lets maintainers review your work, give feedback, and approve the changes before adding them to the main repository. This is how you officially submit your contributions to `stdlib` after pushing your changes:

1.  Go to your fork on GitHub.
2.  Click "Compare & pull request."
3.  Add a clear title and description (mention what you changed and why).

Once you create your pull request, a review request will be **automatically** sent to the maintainers via `stdlib-bot`. Your code will then be reviewed, and you may need to make some tweaks before it gets merged.

## Syncing

The `develop` branch of your forked repository should always stay **identical** to the official `stdlib` repository. If you accidentally add commits to your local `develop` branch, you need to remove them before updating it.

To update your local `develop` branch while making sure there are no unwanted changes, run:

<!-- run-disable -->

```bash
$ git checkout develop
$ git pull --ff-only upstream develop
```

> **Why use `--ff-only`?** This ensures your branch updates **only if no merge commits are needed**. If your `develop` branch has unexpected changes, this command will fail, alerting you that something is wrong.

If the above pull fails because you accidentally made changes to `develop`, you can **reset** it to match the official repository:

<!-- run-disable -->

```bash
$ git checkout develop
$ git reset --hard upstream/develop
```

> **Warning:** This will delete any changes you made to `develop`. Make sure you don't have important work in this branch before running this command.

After updating `develop`, you can push it to your fork to keep everything in sync:

<!-- run-disable -->

```bash
$ git push origin develop
```

## Integration

While working on a feature branch, new changes might be added to the `develop` branch after syncing it as described above. To ensure your feature branch stays updated with these latest changes, you need to integrate them before pushing your work. There are two main ways to do this: rebasing and merging.

### Rebase

Rebasing **moves** your commits on top of the latest `develop`, as if you had started working after the newest updates.

#### Steps to Rebase

<!-- run-disable -->

```bash
$ git checkout feature/my-branch
$ git rebase develop
```

If there are conflicts, resolve them and continue:

<!-- run-disable -->

```bash
$ git add <resolved-file>
$ git rebase --continue
```

#### Example: How Rebase Works

Before rebasing (`develop` has new commits `C` and `D`):

```plaintext
      X---Y---Z (feature/my-branch)
     /
A---B---C---D (develop)
```

After rebasing (`X, Y, Z` are reapplied on top of `D`):

```plaintext
                  X'--Y'--Z' (feature/my-branch, rebased)
                 /
A---B---C---D (develop)
```

### Merge

Merging **combines** your feature branch with `develop`, keeping both histories intact and adding a new merge commit.

#### Steps to Merge

<!-- run-disable -->

```bash
$ git checkout feature/my-branch
$ git merge develop
```

If there are conflicts, resolve them, then commit the merge. Finally, push the updated branch:

<!-- run-disable -->

```bash
$ git push origin feature/my-branch
```

> Alternatively, if you have a running PR and want to update that branch directly to the `stdlib` develop branch, comment `/stdlib merge` on the PR, wait for the bot to merge your branch automatically, and then run `git pull`.

#### Example: How Merge Works

Before merging (`develop` has new commits `C` and `D`):

```plaintext
      X---Y---Z (feature/my-branch)
     /
A---B---C---D (develop)
```

After merging (`W` is a new merge commit):

```plaintext
      X---Y---Z---W (feature/my-branch, merged)
     /           /
A---B---C-------D (develop)
```

### Choosing the Right One

Use **Rebase** if:

-   You want a clean, linear history.
-   You are working alone or sure that no one else depends on your commits.

Use **Merge** if:

-   You want a safer approach that doesn't rewrite history.
-   You are unsure about rebase or are collaborating on the branch.

> **When in doubt, use merge.** It is safer and avoids potential conflicts caused by rewriting history. If you use the GitHub UI to update your branches, it also performs a merge.

## Merge Conflicts

Merge conflicts occur when Git can't automatically resolve differences between two commits (e.g., your branch and `develop`). This usually happens when you rebase or merge branches with conflicting changes. This is how a conflict looks in a file:

```plaintext
function isEven(x) {
<<<<<<< HEAD
    return ( x % 2 ) === 0;
=======
    return ( x & 1 ) === 0;
>>>>>>> feature/bitwise-check
}
```

> Note: The `HEAD` section represents your current branch (`feature/bitwise-check`), while the `incoming` section represents the branch you're merging or rebasing (e.g., `develop`).

To resolve a merge conflict:

-   Open the file in your editor.
-   Choose which changes to keep.
-   Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
-   Save the file.
-   Add the file to the staging area.
-   Continue the rebase or merge process.

### Example

We will consider the conflict in the `isEven` function above. Let's say you want to keep your changes and use the bitwise AND operator (`&`) instead of the modulo operator (`%`). Here's how you can resolve the conflict:

-   Modify the file to look like this:

    ```plaintext
    function isEven(x) {
        return ( x & 1 ) === 0;
    }
    ```

-   Add the file to the staging area:

    <!-- run-disable -->

    ```bash
    $ git add <file>
    ```

-   Continue the rebase or merge:

    <!-- run-disable -->

    ```bash
    $ git rebase --continue # If rebasing
    $ git merge --continue  # If merging
    ```

> **Tip:** Many editors like VS Code highlight conflicts and even give you buttons to accept incoming or current changes. This can make resolving conflicts much easier.

Merge conflicts can be annoying, but they're a natural part of working with others. Take your time, and don't hesitate to ask for help if you're stuck.

## Example Workflow

Now that you have all the essential commands, let's put them together in a typical workflow:

**Goal**: Add a new function `isEven` to `stdlib`.

Assuming you've already cloned the repository and set up your identity:

1.  **Sync `develop`**:

    <!-- run-disable -->

    ```bash
    $ git checkout develop
    $ git pull --ff-only upstream develop
    $ git push origin develop # Optional: Update your fork
    ```

2.  **Create a new branch**:

    <!-- run-disable -->

    ```bash
    $ git checkout -b feature/is-even
    ```

3.  **Make changes**: This could involve adding the new function, writing tests, benchmarks, examples, updating documentation, etc.

4.  **Commit your changes**:

    <!-- run-disable -->

    ```bash
    $ git status # Optional: Check what's modified
    $ git add .
    $ git commit -m "feat: add isEven function"
    ```

    If you prefer a multi-line commit message, use:

    <!-- run-disable -->

    ```bash
    $ git commit
    ```

    Then write your message like:

    ```plaintext
    feat: add isEven function

    This adds the complete implementation of the isEven function, along with benchmarks, examples, tests, and documentation. The implementation is based on the modulo operator.
    ```

    Save and close the editor. As mentioned earlier, you can also use `make commit` for an interactive prompt.

5.  **Push your branch**:

    <!-- run-disable -->

    ```bash
    $ git push --set-upstream origin feature/is-even
    ```

    > **Note:** As mentioned earlier, this is a one-time setup for this branch. After this, you can simply use `git push` for future updates.

6.  **Create a pull request**: Go to your fork on GitHub, click "Compare & pull request", add a title and description, and create the PR.

7.  **Review and update**: If you or the reviewers make changes to your PR through the GitHub UI, you need to update your local branch with those changes:

    <!-- run-disable -->

    ```bash
    $ git pull origin feature/is-even # git pull also works
    ```

    Additionally, if new changes are added to the [upstream][git-remotes] `develop` branch, you can integrate them into your feature branch using rebase or merge:

    <!-- run-disable -->

    ```bash
    $ git checkout develop
    $ git pull --ff-only upstream develop # Update local develop first
    $ git checkout feature/is-even
    $ git rebase develop # or git merge develop
    ```

    Resolve any conflicts with the steps mentioned earlier, then continue the rebase:

    <!-- run-disable -->

    ```bash
    $ git rebase --continue
    ```

    Finally, push your changes:

    <!-- run-disable -->

    ```bash
    $ git push --force # Force push after rebasing
    ```

    > **Note:** Force pushing is required after rebasing because it rewrites history. This is safe as long as you're the only one working on the branch. If you want to avoid force pushing, use merge instead of rebase.

8.  **Repeat**: After resolving conflicts and updating your branch, you can continue making changes, committing, and pushing until your PR is ready to be merged.

## Conclusion

Congratulations! You now have all the essential Git commands to navigate your workflow smoothly while contributing to `stdlib`. Whether you're fixing a bug, adding a feature, or just getting started, this cheatsheet will help you stay organized and avoid common pitfalls. Keep practicing, stay curious, and enjoy the process. Happy coding!

To get started with your first contribution, check out the [Contributing Guide][stdlib-contributing] and [Development Guide][stdlib-development]. If you have any further questions, feel free to join our [Gitter][stdlib-gitter] channel to connect with the community and get support.

## Other Links

-   [GitHub Education Cheat Sheet][github-edu]
-   [GitHub Training Cheat Sheet][github-training]

<section class="links">

[stdlib-contributing]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[stdlib-development]: https://github.com/stdlib-js/stdlib/blob/develop/docs/contributing/development.md

[stdlib-gitter]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[git]: http://git-scm.com/

[github-remote]: https://help.github.com/articles/configuring-a-remote-for-a-fork/

[git-remotes]: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes

[github-fork]: https://help.github.com/articles/fork-a-repo/

[github-style-guide]: https://github.com/stdlib-js/stdlib/tree/develop/docs/style-guides/git#git-commit-messages

[github-edu]: https://education.github.com/git-cheat-sheet-education.pdf

[github-training]: https://training.github.com/downloads/github-git-cheat-sheet.pdf

</section>

<!-- /.links -->
