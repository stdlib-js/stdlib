<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Development

> Development guide for stdlib.

## Introduction

We are super excited that you have decided to develop stdlib, and we welcome you to the stdlib developer community. We have done our best to provide a complete environment for testing, benchmarking, documenting, and developing project code. And if you have any ideas as to how we can make it better, let us know!

Before we begin, developing stdlib requires some setup and configuration. What follows is an overview of environment requirements and a sequence of steps for getting up and running with stdlib. We use [Git][git] for version control, and for most tasks, we use [GNU make][make] (the original task runner) to help us get things done quickly and effectively. For the most part, the project is able to internally manage dependencies for testing, benchmarking, and linting, so, once you follow the steps below, you should be ready to start developing!

So, without further ado, let's get you started!

## Prerequisites

Developing and running stdlib **requires** the following prerequisites:

-   [Git][git]: version control
-   [GNU make][make]: development utility and task runner
-   [GNU bash][bash]: an sh-compatible shell
-   [curl][curl], [wget][wget], or [fetch][fetch] (FreeBSD): utilities for downloading remote resources
-   [Node.js][node-js]: JavaScript runtime (version `>= 0.10`; although the latest stable version is **strongly** recommended)
-   [npm][npm]: package manager (version `> 2.7.0`; if Node `< 1.0.0`, version `> 2.7.0` and `< 4.0.0`; if Node `< 6.0.0`, version `> 2.7.0` and `< 6.0.0`)

While not required to run stdlib, the following dependencies **may** be required for testing, benchmarking, and general development:

-   [Julia][julia]: language for technical computing (version `>= 0.5` and `<= 0.7`)
-   [R][r]: language for statistical computing (version `>= 3.4.0`)
-   [Python][python]: general purpose language (version `>=2.7.x`)
-   [pip][pip]: Python package manager (version `>= 9.0.0`; **required** for automatically installing Python packages, such as lint tools)
-   [gcc & g++][gcc] or [Clang][clang]: C/C++ compilation and linking (g++ version `>= 4.8`; clang version `>= 3.5`, Xcode version `>=8.3.1` on OS X)
-   [gfortran][gfortran]: Fortran compilation and linking (version `>= 4.8`)
-   [CMake][cmake]: cross-platform build environment (version `>= 3.4.3`)
-   [pandoc][pandoc]: universal document converter (version `>= 1.18`)
-   [Homebrew][homebrew]: macOS package manager (only **required** on OS X in order to install [shellcheck][shellcheck])

Assuming the requisite language is present on the host machine, the following language libraries can be automatically downloaded and installed using `make` (see [installation](#installation)):

-   [NumPy][numpy]: general purpose array-processing library for Python (version `>= 1.8.2`)
-   [SciPy][scipy]: Python library containing numerical routines (version `>= 0.17.0`)
-   [Pylint][pylint]: Python source code analyzer (version `>= 1.7.1`)
-   [pycodestyle][pycodestyle]: Python style guide checker against PEP 8 (version `>= 2.3.1`)
-   [pydocstyle][pydocstyle]: Python docstring checker against PEP 257 (version `>= 2.0.0`)
-   [lintr][lintr]: static code analysis for R (version `>= 1.0.0`)
-   [shellcheck][shellcheck]: static code analysis for shell scripts (version `>= 0.5.0`; to install on OS X, either install [Homebrew][homebrew] as a prerequisite or install [shellcheck][shellcheck] manually)

The following external libraries can be automatically downloaded and compiled from source using `make` (see [installation](#installation)):

-   [Boost][boost]: portable C++ libraries
-   [Cephes][cephes]: C/C++ special functions math library
-   [OpenBLAS][openblas]: optimized BLAS library
-   [Electron][electron]: framework for cross-platform desktop applications
-   [Emscripten][emscripten]: LLVM to JavaScript compiler
-   [WebAssembly Binary Toolkit][wabt]: suite of tools for WebAssembly

## Download

To acquire the source code, first navigate to the parent directory into which you want to place the project [Git][git] repository. Because of this project's heavy reliance on [GNU make][make], the directory path should **not** include spaces or any other shell meta characters such as `$` or `:`, as these characters will cause [GNU make][make] and the installation process to fail.

<!-- run-disable -->

```bash
$ cd /path/to/parent/destination/directory
```

Next, clone the repository.

<!-- run-disable -->

```bash
$ git clone https://github.com/stdlib-js/stdlib.git
```

If you are wanting to contribute to stdlib, first [fork][github-fork] the repository and amend the previous command.

<!-- run-disable -->

```bash
$ git clone https://github.com/<username>/stdlib.git
```

where `<username>` is your GitHub username (assuming you are using GitHub to manage public repositories). The repository has a large commit history, leading to slow download times. If you are not interested in code archeology, you can reduce the download time by limiting the clone [depth][git-clone-depth].

<!-- run-disable -->

```bash
$ git clone --depth=<depth> https://github.com/<username>/stdlib.git
```

where `<depth>` refers to the number of commits you want to download (as few as `1` and as many as the entire project history).

If you are behind a firewall, you may need to use the `https` protocol, rather than the `git` protocol.

<!-- run-disable -->

```bash
$ git config --global url."https://".insteadOf git://
```

Once you have finished cloning the repository into the destination directory, you should see the folder `stdlib`. To proceed with configuring your environment, navigate to the project folder.

<!-- run-disable -->

```bash
$ cd stdlib
```

## Installation

To install external libraries (**optional**),

<!-- run-disable -->

```bash
$ make install-deps
```

While external library dependencies are not always required, installing these dependencies may aid development and unlock performance benefits, especially when developing numeric computation facilities. Note, however, that installing external library dependencies may take considerable time (>30 minutes).

To install language dependencies (**optional**),

<!-- run-disable -->

```bash
$ make install-lang-deps
```

To install development dependencies (e.g., [Node.js][node-js] module dependencies),

<!-- run-disable -->

```bash
$ make install
```

To run dependency diagnostics,

<!-- run-disable -->

```bash
$ make deps-info
```

To initialize the development environment,

<!-- run-disable -->

```bash
$ make init
```

Initializing the development environment configures [Git][git] hooks and other bells and whistles to aid in development. Git hooks are especially important as they enable automatic linting and testing to ensure that code meets style specifications and does not break.

## Verification

To verify your environment, run project tests.

<!-- run-disable -->

```bash
$ make test
$ make examples
$ make benchmark
```

Note that each of the previous commands may take considerable time (>30 minutes). If your environment is properly configured, each command should exit without errors.

## Update

If you have previously downloaded stdlib using `git clone`, you can update an existing source tree from the base project directory using `git pull`.

<!-- run-disable -->

```bash
$ git pull
```

If you are working with a [forked][github-fork] repository and wish to [sync][github-fork-sync] your local repository with the [upstream][git-remotes] project (i.e., incorporate changes from the main project repository into your local repository), assuming you have [configured a remote][github-remote] which points to the upstream repository,

<!-- run-disable -->

```bash
$ git fetch upstream
$ git merge upstream/<branch>
```

where `upstream` is the remote name and `<branch>` refers to the branch you want to merge into your local copy.

If you have initialized the development environment using `make init`, updating the source tree will trigger hooks to ensure all development dependencies are up-to-date.

## Organization

The stdlib source code is organized as follows:

```text
bin        executable binaries
deps       external library dependencies
dist       distributable files
docs       top-level documentation
etc        configuration files
examples   top-level library examples
lib        library source code
test       top-level tests
tools      development utilities
workshops  workshops
```

## Troubleshooting

-   Occasionally, new versions of external dependencies may cause conflicts with existing builds. Most of the time, running

    <!-- run-disable -->

    ```bash
    $ make clean
    $ make install
    ```

    will be enough to resolve these conflicts. Otherwise, remove the [Git][git] repository, clone, and reinstall.

## Editors

-   This repository uses [EditorConfig][editorconfig] to maintain consistent coding styles between different editors and IDEs, including [browsers][editorconfig-chrome].

## Testing

To run all project tests,

<!-- run-disable -->

```bash
$ make test
```

To run select tests,

<!-- run-disable -->

```bash
$ make TESTS_FILTER=.*/<pattern>/.* test
```

where `<pattern>` is a pattern matching a particular path. For example, to test only base special math functions

<!-- run-disable -->

```bash
$ make TESTS_FILTER=.*/math/base/special/.* test
```

where the pattern `.*/math/base/special/.*` matches any test file whose absolute path contains `math/base/special`.

To generate a test coverage report,

<!-- run-disable -->

```bash
$ make TESTS_FILTER=.*/<pattern>/.* test-cov
$ make view-cov
```

If you are developing a tool (i.e., code located in the `tools` directory), to run tools tests

<!-- run-disable -->

```bash
$ make TESTS_FILTER=.*/<pattern>/.* tools-test
$ make TESTS_FILTER=.*/<pattern>/.* tools-test-cov
$ make view-cov
```

Similarly, to run benchmarks

<!-- run-disable -->

```bash
$ make BENCHMARKS_FILTER=.*/<pattern>/.* benchmark
```

and examples

<!-- run-disable -->

```bash
$ make EXAMPLES_FILTER=.*/<pattern>/.* examples
```

## Contributing

For contribution guidelines, see the [contributing guide][stdlib-contributing].

<section class="links">

[stdlib-contributing]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[github-fork]: https://help.github.com/articles/fork-a-repo/

[github-fork-sync]: https://help.github.com/articles/syncing-a-fork/

[github-remote]: https://help.github.com/articles/configuring-a-remote-for-a-fork/

[git-clone-depth]: https://git-scm.com/docs/git-clone#git-clone---depthltdepthgt

[git-remotes]: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes

[git]: http://git-scm.com/

[make]: https://www.gnu.org/software/make

[bash]: https://www.gnu.org/software/bash/

[curl]: http://curl.haxx.se/

[wget]: http://www.gnu.org/software/wget

[fetch]: http://www.freebsd.org/cgi/man.cgi?fetch%281%29

[node-js]: https://nodejs.org/en/

[npm]: https://www.npmjs.com/

[julia]: http://julialang.org/

[r]: https://www.r-project.org/

[python]: https://www.python.org/

[pip]: https://github.com/pypa/pip

[scipy]: https://www.scipy.org/index.html

[numpy]: http://www.numpy.org/

[pylint]: https://github.com/PyCQA/pylint

[pycodestyle]: https://github.com/PyCQA/pycodestyle

[pydocstyle]: https://github.com/PyCQA/pydocstyle

[lintr]: https://github.com/jimhester/lintr

[shellcheck]: https://github.com/koalaman/shellcheck

[gcc]: http://gcc.gnu.org/

[clang]: http://clang.llvm.org/

[gfortran]: https://gcc.gnu.org/fortran/

[cmake]: https://cmake.org/

[pandoc]: http://pandoc.org/

[homebrew]: https://brew.sh/

[boost]: http://www.boost.org/

[cephes]: http://www.moshier.net/#Cephes

[openblas]: https://github.com/xianyi/OpenBLAS

[electron]: https://electron.atom.io/

[emscripten]: http://kripken.github.io/emscripten-site/index.html

[wabt]: https://github.com/WebAssembly/wabt

[editorconfig]: http://editorconfig.org/

[editorconfig-chrome]: https://chrome.google.com/webstore/detail/github-editorconfig/bppnolhdpdfmmpeefopdbpmabdpoefjh?hl=en-US

</section>

<!-- /.links -->
