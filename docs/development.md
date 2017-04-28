# Development

> Development guide for contributing to stdlib.


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

The following vendor libraries can be automatically downloaded and compiled from source using `make`:

* [Boost][boost]: portable C++ libraries
* [OpenBLAS][openblas]: optimized BLAS library
* [Emscripten][emscripten]: LLVM to JavaScript compiler


## Download

To acquire the source code, clone the git repository.

``` bash
$ git clone https://github.com/stdlib-js/stdlib
```

If you are behind a firewall, you may need to use the `https` protocol, rather than the `git` protocol.

``` bash
$ git config --global url."https://".insteadOf git://
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

To initialize the development environment,

``` bash
$ make init
```

## Update

If you have previously downloaded stdlib using `git clone`, you can update an existing source tree using `git pull`.

``` bash
$ cd ./path/to/stdlib
$ git pull
```

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


<section class="links">

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
