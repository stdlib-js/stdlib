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

# Bash Aliases

> Convenient bash aliases for stdlib development.

stdlib relies heavily on [GNU make][make] for performing development tasks. For example, to run unit tests, a developer uses a command similar to the following:

```bash
$ make test TESTS_FILTER=".*/package/path/.*"
```

While powerful, commands can be verbose, and remembering commands and associated environment variables can be onerous. Fortunately, we can create aliases which simplify command syntax and improve developer ergonomics.

## Setup

To use the aliases listed below, you'll need to consult the documentation for your shell application, as each shell application has its own configuration file conventions and extension mechanisms. For example, for [GNU bash][bash], an sh-compatible shell, you can define aliases in a `.bashrc` or `.bash_profile` file in your home directory (note: typically, a `.bash_profile` file loads a `.bashrc` file, with the latter being the preferred location for defining aliases and other shell configuration). Similarly, for [Zsh][zsh], you can define aliases in a `.zshrc` or `.zprofile` file.

Most shells follow similar conventions, and as long as the shell is sh-compatible, then using the aliases below should be as straightforward as adding them to your shell configuration file and then reloading that file from the current terminal window. All subsequent future terminal sessions should automatically load the aliases.

* * *

## Exports

### System path to a local stdlib development repository

```bash
export STDLIB_DIR="$HOME/path/to/stdlib/stdlib"
```

where `path/to` should be replaced according to your local setup.

* * *

## Aliases

### Pulling the latest changes from the upstream repository

Assuming `upstream` points to the `stdlib-js/stdlib` GitHub repository,

```bash
alias sglo="git pull upstream develop"
```

Example usage:

```bash
$ sglo
```

* * *

## Functions

### Working with Git

#### Stage changed files

```bash
# Stages changed files according to a provided path.
#
# $1: package path (e.g., 'array/base/zeros')
function sga() {
   git add "$STDLIB_DIR/lib/node_modules/@stdlib/$1"
}
```

Example usage:

```bash
$ sga array/base/zeros
```

#### Stage and commit changed files

```bash
# Stages and commits changed files according to a provided path.
#
# $1: package path (e.g., 'array/base/zeros')
function sgac() {
   git add "$STDLIB_DIR/lib/node_modules/@stdlib/$1" && git commit
}
```

Example usage:

```bash
$ sgac array/base/zeros
```

#### Generate a diff for changed files

```bash
# Generates a diff for changed files according to a provided path.
#
# $1: package path (e.g., 'array/base/zeros')
function sgd() {
   git diff "$STDLIB_DIR/lib/node_modules/@stdlib/$1"
}
```

Example usage:

```bash
$ sgd array/base/zeros
```

#### Unstage changes

```bash
# Unstages changes according to a provided path.
#
# $1: package path (e.g., 'array/base/zeros')
function sgr() {
   git reset "$STDLIB_DIR/lib/node_modules/@stdlib/$1"
}
```

Example usage:

```bash
$ sgr array/base/zeros
```

### Working with remote repositories

The following functions are useful when reviewing and working with `stdlib` forks on your local system.

#### Track a forked repository

```bash
# Adds a remote to track a forked repository.
#
# $1: username (e.g., kgryte)
function sfar() {
   git remote add "$1" "https://github.com/$1/stdlib.git"
}
```

Example usage:

```bash
$ sfar planeshifter
```

#### Fetch branches for a forked repository

```bash
# Fetches branches for a specified forked remote repository.
#
# $1: username (e.g., kgryte)
function sffr() {
   git fetch "$1"
}
```

Example usage:

```bash
$ sffr planeshifter
```

#### Checkout a remote branch from a forked repository

```bash
# Checks out a remote branch from a forked repository locally.
#
# $1: username (e.g., kgryte)
# $2: branch name (e.g., repl)
function sfcb() {
   git checkout -b "$1-$2" "$1/$2"
}
```

Example usage:

```bash
$ sfcb planeshifter feat/foo
```

#### Push changes to a remote branch on a forked repository

```bash
# Pushes changes to a remote branch on a forked repository.
#
# $1: username (e.g., kgryte)
# $2: branch name on fork (e.g., repl)
function sfp() {
   git push "$1" "HEAD:$2"
}
```

Example usage:

```bash
$ sfp planeshifter feat/foo
```

#### Pull changes from a remote branch on a forked repository

```bash
# Pulls changes from a remote branch on a forked repository.
#
# $1: username (e.g., kgryte)
# $2: branch name on fork (e.g., repl)
function sfl() {
   git pull "$1" "$2"
}
```

Example usage:

```bash
$ sfl planeshifter feat/foo
```

### Simplified development tasks

#### Run unit tests

```bash
# Runs tests according to a provided filter.
#
# $1: filter (e.g., 'array/base/zeros')
function utest() {
   make test TESTS_FILTER=".*/$1/.*"
}
```

Example usage:

```bash
$ utest array/base/zeros
```

#### Generate test coverage report

```bash
# Generates a test coverage report according to a provided filter.
#
# $1: filter (e.g., 'array/base/zeros')
function cov() {
   make test-cov TESTS_FILTER=".*/$1/.*"
}
```

Example usage:

```bash
$ cov array/base/zeros
```

To view a coverage report,

```bash
$ make view-cov
```

#### Run JavaScript examples

```bash
# Runs JavaScript examples according to a provided filter.
#
# $1: filter (e.g., 'array/base/zeros')
function eg() {
   make examples EXAMPLES_FILTER=".*/$1/.*"
}
```

Example usage:

```bash
$ eg array/base/zeros
```

#### Run C examples

```bash
# Runs C examples according to a provided filter.
#
# $1: filter (e.g., 'array/base/zeros')
function egc() {
   make examples-c EXAMPLES_FILTER=".*/$1/.*"
}
```

Example usage:

```bash
$ egc array/base/zeros
```

#### Run JavaScript benchmarks

```bash
# Runs JavaScript benchmarks according to a provided filter.
#
# $1: filter (e.g., 'array/base/zeros')
function bench() {
   make benchmark BENCHMARKS_FILTER=".*/$1/.*"
}
```

Example usage:

```bash
$ bench array/base/zeros
```

#### Run C benchmarks

```bash
# Runs C benchmarks according to a provided filter.
#
# $1: filter (e.g., 'array/base/zeros')
function benchc() {
   make benchmark-c BENCHMARKS_FILTER=".*/$1/.*"
}
```

Example usage:

```bash
$ benchc array/base/zeros
```

#### Compile Node.js native add-ons

```bash
# Installs Node.js native add-ons according to a provided pattern.
#
# $1: pattern (e.g., 'math/base/special/abs')
function addons() {
   make install-node-addons NODE_ADDONS_PATTERN="$1"
}
```

Example usage:

```bash
$ addons math/base/special/abs
```

### Sublime Text

The following functions assume that Sublime Text is present. For other editors and IDEs, you'll need to modify the functions accordingly.

#### Open a package in a new editor window

```bash
# Opens a project folder in Sublime Text.
#
# $1: package name
function opkg() {
   subl -n "$STDLIB_DIR/lib/node_modules/@stdlib/$1"
}
```

Example usage:

```bash
$ opkg array/base/zeros
```

#### Open a package workspace

```bash
# Opens a project workspace in Sublime Text.
#
# $1: package name
function owpkg() {
   local base

   base=$(basename "$1")
   if [ ! -f "$STDLIB_DIR/lib/node_modules/@stdlib/$1/${base}.sublime-workspace" ]; then
      subl -n "$STDLIB_DIR/lib/node_modules/@stdlib/$1"
   else
      subl "$STDLIB_DIR/lib/node_modules/@stdlib/$1" --project "$STDLIB_DIR/lib/node_modules/@stdlib/$1/${base}.sublime-workspace"
   fi
}
```

**Note**: the function assumes that a project workspace file is named such that the basename of the `*.sublime-workspace` file matches the basename of the package. E.g., if `math/base/special/abs`, then workspace file should be named `abs.sublime-workspace`.

### Miscellaneous

#### Open a project folder in finder

```bash
# Opens a project folder in finder.
#
# $1: package name
function fpkg() {
   open "$STDLIB_DIR/lib/node_modules/@stdlib/$1"
}
```

Example usage:

```bash
$ fpkg array/base/zeros
```

**Note**: this function is MacOS-specific.

* * *

## Other

### Display help

To help remember commands, adding a function for displaying help text can be convenient. For example, given the following `usage.txt` file

```text

General commands:

  sgh                       Display this help text.
  utest <filter>            Run unit tests.
  cov <filter>              Generate a test coverage report.
  eg <filter>               Run JavaScript examples.
  egc <filter>              Run C examples.
  bench <filter>            Run JavaScript benchmarks.
  benchc <filter>           Run C benchmarks.
  addons <filter>           Install Node.js native add-ons.


stdlib commands:

  opkg <pkg>                Open a package in Sublime Text.
  owpkg <pkg>               Open a package workspace in Sublime Text.
  fpkg <pkg>                Open a package in Finder.
  sga <pkg>                 Stage changed files.
  sgr <pkg>                 Unstage changed files.
  sgac <pkg>                Stage and commit changed files.
  sgd <pkg>                 Generate a diff.


stdlib fork commands:

  sfar <user>               Add a remote to track a forked repository.
  sffr <user>               Fetch branches for a forked repository.
  sfcb <user> <branch>      Check out a remote branch from a forked repository.
  sfp <user> <branch>       Push changes to a forked repository.
  sfl <user> <branch>       Pull changes from a forked repository.

```

one can define the following function for displaying that help text

```bash
# Prints help information.
function sgh() {
   cat "$HOME/path/to/usage.txt"
}
```

where `path/to` should be updated based on where the help text is stored on your local system.

Example usage:

```bash
$ sgh
```

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

[bash]: https://www.gnu.org/software/bash/

[zsh]: https://en.wikipedia.org/wiki/Z_shell

</section>

<!-- /.links -->
