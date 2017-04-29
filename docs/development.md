# Development

> Development guide for stdlib.


## Introduction

Amazing! We are super excited that you have decided to develop stdlib, and we welcome you to the stdlib developer community. We have done our best to provide a complete environment for testing, benchmarking, documenting, and developing project code. And if you have any ideas as to how we can make it better, let us know!

Before we begin, developing stdlib requires some setup and configuration. What follows is an overview of environment requirements and a sequence of steps for getting up and running with stdlib. We use [Git][git] for version control, and for most tasks, we use [GNU make][gnu-make] (the original task runner) to help us get things done quickly and effectively. For the most part, the project is able to internally manage dependencies for testing, benchmarking, and linting, so, once you follow the steps below, you should be ready to start developing!

So, without further ado, let's get you started!


## Prerequisites

Developing and running stdlib __requires__ the following prerequisites:

* [Git][git]: version control
* [GNU make][gnu-make]: development utility and task runner
* [curl][curl], [wget][wget], or [fetch][fetch] (FreeBSD): utilities for downloading remote resources
* [Node.js][node-js]: JavaScript runtime (version `>= 0.10`)
* [npm][npm]: package manager (version `> 2.7.0`; if Node `< 1.0.0`, version `> 2.7.0` and `< 4.0.0`)

While not required to run stdlib, the following dependencies __may__ be required for testing, benchmarking, and general development:

* [Julia][julia]: language for technical computing (version `>= 0.4`)
* [R][r]: language for statistical computing (version `>= 3.0.0`)
* [Python][python]: general purpose language (version `>= 2.7`)
* [gcc &amp; g++][gcc] or [Clang][clang]: C/C++ compilation and linking (g++ version `>= 4.8`; clang version `>= 3.5`, Xcode version `>=4.4` on OS X)
* [gfortran][gfortran]: Fortran compilation and linking (version `>= 4.8`)
* [CMake][cmake]: cross-platform build environment (version `>= 3.4.3`)
* [pandoc][pandoc]: universal document converter (version `>= 1.18`)

The following vendor libraries can be automatically downloaded and compiled from source using `make` (see [installation](#installation)):

* [Boost][boost]: portable C++ libraries
* [OpenBLAS][openblas]: optimized BLAS library
* [Emscripten][emscripten]: LLVM to JavaScript compiler


## Download

To acquire the source code, first navigate to the parent directory into which you want to place the project git repository.

``` bash
$ cd /path/to/parent/destination/directory
```

Next, clone the repository.

``` bash
$ git clone https://github.com/stdlib-js/stdlib.git
```

If you are wanting to contribute to stdlib, first [fork][github-fork] the repository and amend the previous command.

``` bash
$ git clone https://github.com/<username>/stdlib.git
```

where `<username>` is your GitHub username (assuming you are using GitHub to manage public repositories). The repository has a large commit history, leading to slow download times. If you are not interested in code archeology, you can reduce the download time by limiting the clone [depth][git-clone-depth].

``` bash
$ git clone --depth=<depth> https://github.com/<username>/stdlib.git
```

where `<depth>` refers to the number of commits you want to download (as few as `1` and as many as the entire project history).

If you are behind a firewall, you may need to use the `https` protocol, rather than the `git` protocol.

``` bash
$ git config --global url."https://".insteadOf git://
```

Once you have finished cloning the repository into the destination directory, you should see the folder `stdlib`. To proceed with configuring your environment, navigate to the project folder.

``` bash
$ cd stdlib
```


## Configuration

Determine the absolute path of the `lib/node_modules` directory within the repository. For example, from the repository directory

``` bash
$ echo $(pwd)/lib/node_modules
/path/to/stdlib-js/stdlib/lib/node_modules
```

To allow development tools to resolve library packages, set the [`NODE_PATH`][node-path] environment variable by adding the following line to the platform-specific configuration file for configuring user environments (e.g., [`.bash_profile`][bash-profile], [`.profile`][bash-profile], [`.bashrc`][bash-profile], or some other variant).

``` text
export NODE_PATH=/path/to/stdlib-js/stdlib/lib/node_modules
```

Once finished, you may need to reload the configuration file in existing shells. For example, in a bash shell,

``` bash
$ source ~/.bash_profile
```


## Installation

To install development dependencies,

``` bash
$ make install
```

To install vendor dependencies,

``` bash
$ make install-deps
```

While vendor dependencies are not always required, installing these dependencies may aid development and unlock performance benefits, especially when developing numeric computation facilities. Note, however, that installing vendor dependencies may take considerable time (>30 minutes).

To initialize the development environment,

``` bash
$ make init
```

Initializing the development environment configures git hooks and other bells and whistles to aid in development. Git hooks are especially important as they enable automatic linting and testing to ensure that code meets style specifications and does not break.


## Verification

To verify your environment, run project tests.

``` bash
$ make test
$ make examples
$ make benchmark
```

Note that each of the previous commands may take considerable time (>30 minutes). If your environment is properly configured, each command should exit without errors.


## Update

If you have previously downloaded stdlib using `git clone`, you can update an existing source tree from the base project directory using `git pull`.

``` bash
$ git pull
```

If you are working with a [forked][github-fork] repository and wish to [sync][github-fork-sync] your local repository with the [upstream][git-remotes] project (i.e., incorporate changes from the main project repository into your local repository), assuming you have [configured a remote][github-remote] which points to the upstream repository,

``` bash
$ git fetch upstream
$ git merge upstream/<branch>
```

where `upstream` is the remote name and `<branch>` refers to the branch you want to merge into your local copy.

If you have initialized the development environment using `make init`, updating the source tree will trigger hooks to ensure all development dependencies are up-to-date.


## Organization

The stdlib source code is organized as follows:

``` text
bin        executable binaries
deps       vendor dependencies
docs       top-level documentation
etc        configuration files
examples   top-level library examples
lib        library source code
test       top-level tests
tools      development utilities
workshops  workshops
```


## Troubleshooting

* Occasionally, new versions of external dependencies may cause conflicts with existing builds. Most of the time, running

  ``` bash
  $ make clean
  $ make install
  ```

  will be enough to resolve these conflicts. Otherwise, remove the git repository, clone, and reinstall.


## Editors

* This repository uses [EditorConfig][editorconfig] to maintain consistent coding styles between different editors and IDEs, including [browsers][editorconfig-chrome].


## Testing

To run all project tests,

``` bash
$ make test
```

To run select tests,

``` bash
$ make TESTS_FILTER=.*/<pattern>/.* test
```

where `<pattern>` is a pattern matching a particular path. For example, to test only base special math functions

``` bash
$ make TESTS_FILTER=.*/math/base/special/.*
```

where the pattern `.*/math/base/special/.*` matches any test file whose absolute path contains `math/base/special`.

To generate a test coverage report,

``` bash
$ make TESTS_FILTER=.*/<pattern>/.* test-cov
$ make view-cov
```

If you are developing a tool (i.e., code located in the `tools` directory), to run tools tests

``` bash
$ make TESTS_FILTER=.*/<pattern>/.* tools-test
$ make TESTS_FILTER=.*/<pattern>/.* tools-test-cov
$ make view-cov
```

Similarly, to run benchmarks

``` bash
$ make BENCHMARKS_FILTER=.*/<pattern>/.* benchmark
```

and examples

``` bash
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
[gnu-make]: https://www.gnu.org/software/make
[curl]: http://curl.haxx.se/
[wget]: http://www.gnu.org/software/wget
[fetch]: http://www.freebsd.org/cgi/man.cgi?fetch%281%29
[node-js]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/

[julia]: http://julialang.org/
[r]: https://www.r-project.org/
[python]: https://www.python.org/
[gcc]: http://gcc.gnu.org/
[clang]: http://clang.llvm.org/
[gfortran]: https://gcc.gnu.org/fortran/
[cmake]: https://cmake.org/
[pandoc]: http://pandoc.org/

[boost]: http://www.boost.org/
[openblas]: https://github.com/xianyi/OpenBLAS
[emscripten]: http://kripken.github.io/emscripten-site/index.html

[node-path]: https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
[bash-profile]: http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_01.html

[editorconfig]: http://editorconfig.org/
[editorconfig-chrome]: https://chrome.google.com/webstore/detail/github-editorconfig/bppnolhdpdfmmpeefopdbpmabdpoefjh?hl=en-US

</section>

<!-- /.links -->
