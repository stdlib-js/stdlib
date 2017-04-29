# Contribution Guidelines

> Project contribution guidelines.


## Introduction

Woot woot! If you are new to stdlib, welcome! And thanks for your interest! While this guide focuses on technical development, if you are looking to contribute to the project but are non-technical, you can still contribute! For example, you can contribute by filing issues, writing RFCs (feature requests), updating documentation, providing build and infrastructure support, offering [funding][patreon], and helping market and promote the project, among other things. Every bit helps, and we are grateful for your time and effort!


## Contributing

Before contributing, be sure to

* read and understand the [Code of Conduct][stdlib-code-of-conduct].
* read and understand the [licensing terms][stdlib-license].
* read and understand the [style guides][stdlib-style-guides].

For instructions on how to setup and configure your environment, be sure to

* read the [development guide][stdlib-development].

If you want to contribute a new package to stdlib, be sure to

* read the [package development guide][stdlib-docs].

Next, take a look around the project, noting the style and organization of documentation, tests, examples, benchmarks, and source implementations. Consistency is highly __prioritized__ within stdlib. Thus, the more you are able to match and adhere to project conventions and style, the more likely your contribution will be accepted. While we have done our best to automate linting and style guidelines, such automation is not perfect and cannot adequately capture the inevitable exceptions and nuance to many rules. In short, the more you study existing practice, the better prepared you will be to contribute to stdlib.

For modifications intended to be included in stdlib, create a new local branch.

``` bash
$ git checkout -b <branch>
```

where `<branch>` is the branch name. Both the `master` and `develop` branches for the main stdlib project are protected, and direct modifications to these branches will __not__ be accepted. Instead, all contributions should be made on non-master and non-develop local branches, including documentation changes and other non-code modifications.

During development, to incorporate recent changes from the upstream repository, you should [rebase][git-rebase] your local branch, reapplying your local commits on top of the current upstream `HEAD`. This procedure is in contrast to performing a standard [merge][git-merge], which may interleave development histories. The rationale is twofold:

1. interleaved histories make [squashing][git-rewriting-history] commits more difficult
2. a standard merge increases the risk of incomplete/broken commits appearing in the git history.

An ideal commit history is one in which, at no point in time, is the project in a broken state. While not always possible (mistakes happen), striving for this ideal facilitates time travel and software archeology.

Before opening a [pull request][github-pull-request] on the upstream repository, run project tests to ensure that the changes introduced have not left the repository in a broken state.

``` bash
$ make test
$ make examples
$ make benchmark
```

Note that each of the above tasks can take considerable time (>30 minutes per task).

Once your contribution is ready to be incorporated in the upstream repository, open a [pull request][github-pull-request] against the `develop` branch. A project contributor will review the contribution, provide feedback, and potentially request changes. After any changes have been resolved and continuous integration tests have passed, a contributor will approve a [pull request][github-pull-request] for inclusion in the project.

Note that, once a [pull request][github-pull-request] has been made (i.e., your local repository commits have been pushed to a remote server), you should __not__ perform any further [rewriting][git-rewriting-history] of git history. If the history needs modification, a contributor will modify the history during the merge process. The rationale for __not__ rewriting public history is that doing so invalidates the commit history for anyone else who has pulled your changes, thus imposing additional burdens on collaborators to ensure that their local versions match the modified history.

Once merged, __congratulations__! You are an official contributor to stdlib!

Phew. While the above may be a lot to remember, even for what seem like minor changes, eventually it becomes routine and part of the normal development flow. Part of the motivation for enforcing process is to ensure that all code contributions meet a certain quality threshold, thus helping reviewers focus less on non-substantive issues like style and failing tests and more on substantive issues such as contribution content and merit. Know that your patience, hard work, time, and effort are greatly appreciated!


<section class="links">

[stdlib-code-of-conduct]: https://github.com/stdlib-js/stdlib/blob/develop/CODE_OF_CONDUCT.md
[stdlib-license]: https://github.com/stdlib-js/stdlib/blob/develop/LICENSE
[stdlib-style-guides]: https://github.com/stdlib-js/stdlib/blob/develop/docs/style-guides
[stdlib-development]: https://github.com/stdlib-js/stdlib/blob/develop/docs/development.md
[stdlib-docs]: https://github.com/stdlib-js/stdlib/blob/develop/docs

[patreon]: https://www.patreon.com/athan

[github-pull-request]: https://help.github.com/articles/creating-a-pull-request/

[git-rebase]: https://git-scm.com/docs/git-rebase
[git-merge]: https://git-scm.com/docs/git-merge
[git-rewriting-history]: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History

</section>

<!-- /.links -->
