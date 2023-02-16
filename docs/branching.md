<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Branching

> Guide for [Git][git] branching.

This project follows the branching model articulated in ["A successful Git branching model"][git-flow].

## Master

-   The `master` branch is **protected**.

-   The `master` branch should **only** include source code which is stable, tested, and peer reviewed. In short, the source code should **always** reflect a "production-ready" state.

-   Each commit on the `master` branch should have an associated tag.

    <!-- run-disable -->

    ```bash
    $ git tag -a v2.0.0
    $ git push origin --tags
    ```

## Develop

-   The `develop` branch is **protected**.
-   The `develop` branch should **only** include code which is tested, peer reviewed, and passes continuous integration tests.
-   The source code should **always** reflect the latest development changes for the **next** release.

## Features

-   A feature branch should use the naming convention: `feature/<name>`.

-   A feature branch should branch from the `develop` branch.

    <!-- run-disable -->

    ```bash
    $ git checkout -b feature/<name> develop
    ```

-   Once a feature is complete, [squash][git-squash] commits into a single commit.

-   In order to merge a feature branch into the `develop` branch, submit a pull request against the `develop` branch.

-   Before merging a feature branch into the `develop` branch, the source code **must** be peer reviewed and pass continuous integration tests.

## Releases

-   A release branch should use the naming convention: `release-<major>.<minor>.<patch>`.

-   The release number should follow [semantic versioning][semver].

-   A release branch should branch from the `develop` branch.

    <!-- run-disable -->

    ```bash
    $ git checkout -b release-2.0.0 develop
    ```

-   Active development should **not** occur on a release branch. A release branch is a preparation branch (vetting, testing, updating meta data, et cetera) before merging into the `master` branch.

-   Once a release branch is complete, submit a pull request against the `master` branch.

-   Before merging the release branch into the `master` branch, the changes **must** be peer reviewed and pass continuous integration tests.

-   Once merged into `master`, submit a pull request against the `develop` branch to retain the changes made in the release branch.

## Hotfixes

-   A hotfix branch should use the naming convention: `hotfix/<name>`.

-   The purpose of a hotfix branch is to immediately patch a bug on the `master` branch. Accordingly, a hotfix branch should branch from the `master` branch.

    <!-- run-disable -->

    ```bash
    $ git checkout -b hotfix/<name> master
    ```

-   The hotfix branch should increment the ["patch"][semver] version number.

-   Once a hotfix is complete, [squash][git-squash] commits into a single commit.

-   Submit a pull request against the `master` branch.

-   Before merging a hotfix branch into the `master` branch, the changes **must** be peer reviewed and pass continuous integration tests.

-   Once merged into `master`, if a release branch currently exists, submit a pull request against the `release` branch. Otherwise, submit a pull request against the `develop` branch. By merging a hotfix into a release branch, the hotfix changes should be propagated to the `develop` branch upon merging the release branch into the `develop` branch. 

* * *

## Pull Requests

-   All feature pull requests should be [rebased][git-rebase] against the latest `develop` branch.
-   All feature pull requests should be submitted against the `develop` branch.

* * *

## License

This document may be reused under a [Creative Commons Attribution-ShareAlike License][license].

<section class="links">

[git]: https://git-scm.com/

[git-rebase]: https://git-scm.com/docs/git-rebase

[git-squash]: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Squashing-Commits

[git-flow]: http://nvie.com/posts/a-successful-git-branching-model/

[semver]: http://semver.org/

[license]: https://creativecommons.org/licenses/by-sa/4.0/

</section>

<!-- /.links -->
