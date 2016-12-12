# Git Style Guide

> Style guide for [Git][git].


## Commits

* All commits should follow the [seven rules][git-seven-rules] of a [Git][git] commit message:

  1. Use the [imperative mood][imperative-mood] in the [Git][git] commit subject line.

     ``` text
     # Do not...
     Fixed Markdown lint errors
     ```

     ``` text
     # Do...
     Fix Markdown lint errors
     ```

  1. Capitalize the first word of the subject line.

     ``` text
     # Do not...
     fix Markdown lint errors
     ```

     ``` text
     # Do...
     Fix Markdown lint errors
     ```

  1. Do __not__ end the subject line with a period.

     ``` text
     # Do not...
     Fix Markdown lint errors.
     ```

     ``` text
     # Do...
     Fix Markdown lint errors
     ```

  1. Separate the subject line from the body with a blank line.

     ``` text
     # Do not...
     This is the subject line
     This is the body body body body body body body body body body body body
     body body body body body body body body body body body body body body
     ```

     ``` text
     # Do...
     This is the subject line

     This is the body body body body body body body body body body body body
     body body body body body body body body body body body body body body
     ```

  1. Try to limit the subject line to `50` characters.

     ``` text
     # Do not...
     This is the subject line line line line line line line line line line line line line line
     ```

     ``` text
     # Do...
     This is the subject line
     ```

  1. Use the body to explain the *what* and *why*, and not the *how*.

     ``` text
     # Do not...
     Change Markdown heading style

     Update various Markdown files to stop lint errors. Change the heading
     style from `===` to `#`.
     ```

     ``` text
     # Do...
     Change Markdown heading style

     Change the heading style to ensure consistency with `remark` output.
     This ensures that all Markdown files are all of the same style, thus
     reducing the number of edge cases Markdown parsers need to consider.
     ```  

  1. Try to wrap the body at `72` characters.

     ``` text
     # Do not...
     This is the subject line

     This is the body body body body body body body body body body body body body body body body body body body body body body body body body body
     ```

     ``` text
     # Do...
     This is the subject line

     This is the body body body body body body body body body body body body
     body body body body body body body body body body body body body body
     ```

---

## Branching

This project follows the branching model articulated in ["A successful Git branching model"][git-flow].

### Master

* The `master` branch is __protected__.

* The `master` branch should __only__ include source code which is stable, tested, and peer reviewed. In short, the source code should __always__ reflect a "production-ready" state.

* Each commit on the `master` branch should have an associated tag.

  ``` bash
  $ git tag -a 2.0.0
  $ git push origin --tags
  ```


### Develop

* The `develop` branch is __protected__.
* The `develop` branch should __only__ include code which is tested, peer reviewed, and passes continuous integration tests.
* The source code should __always__ reflect the latest development changes for the __next__ release.


### Features

* A feature branch should use the naming convention: `feature/<name>`.

* A feature branch should branch from the `develop` branch.

  ``` bash
  $ git checkout -b feature/<name> develop
  ```

* Once a feature is complete, [squash][git-squash] commits into a single commit.

* In order to merge a feature branch into the `develop` branch, submit a pull request against the `develop` branch.

* Before merging a feature branch into the `develop` branch, the source code __must__ be peer reviewed.


### Releases

* A release branch should use the naming convention: `release-<major>.<minor>.<patch>`.

* The release number should follow [semantic versioning][semver].

* A release branch should branch from the `develop` branch.

  ``` bash
  $ git checkout -b release-2.0.0 develop
  ```

* Active development should __not__ occur on a release branch. A release branch is a preparation branch (vetting, testing, updating meta data, et cetera) before merging into the `master` branch.

* Once a release branch is complete, submit a pull request against the `master` branch.

* Before merging the release branch into the `master` branch, the changes __must__ be peer reviewed.

* Once merged into `master`, submit a pull request against the `develop` branch to retain the changes made in the release branch.


### Hotfixes

* A hotfix branch should use the naming convention: `hotfix/<name>`.

* The purpose of a hotfix branch is to immediately patch a bug on the `master` branch. Accordingly, a hotfix branch should branch from the `master` branch.

  ``` bash
  $ git checkout -b hotfix/<name> master
  ```

* The hotfix branch should increment the ["patch"][semver] version number.

* Once a hotfix is complete, [squash][git-squash] commits into a single commit.

* Submit a pull request against the `master` branch.

* Before merging a hotfix branch into the `master` branch, the changes __must__ pass continuous integration tests and be peer reviewed.

* Once merged into `master`, if a release branch currently exists, submit a pull request against the `release` branch. Otherwise, submit a pull request against the `develop` branch. By merging a hotfix into a release branch, the hotfix changes should be propagated to the `develop` branch upon merging the release branch into the `develop` branch. 


---

## Pull Requests

* All feature pull requests should be [rebased][git-rebase] against the latest `develop` branch.
* All feature pull requests should be submitted against the `develop` branch.


---

## License

This document may be reused under a [Creative Commons Attribution-ShareAlike License][license].


<section class="links">

[git]: https://git-scm.com/
[git-rebase]: https://git-scm.com/docs/git-rebase
[git-squash]: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Squashing-Commits

[git-seven-rules]: http://chris.beams.io/posts/git-commit/
[imperative-mood]: https://en.wikipedia.org/wiki/Imperative_mood

[git-flow]: http://nvie.com/posts/a-successful-git-branching-model/

[semantic-versioning]: http://semver.org/

[license]: https://creativecommons.org/licenses/by-sa/4.0/

</section>

<!-- /.links -->
