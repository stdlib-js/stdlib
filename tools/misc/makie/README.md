makie
===

> Execute project Makefile commands from anywhere in the project.


<!-- <intro> -->

Typically, to execute project `Makefile` commands, you must be in the root project directory. While `make` supports specifying a directory from which to run a `Makefile`, this can be cumbersome, especially if a command expects configuration via environment variables.

This utility provides support for executing a subset of `Makefile` commands from anywhere within the project. The list of supported targets includes:

* `repl`
* `examples`
* `test`
* `test-cov`
* `test-summary`
* `view-cov`
* `lint-markdown`
* `list-modules`

When executing a command, the current working directory is used as a filter. Thus, when invoking the `test` command, __only__ those tests in the current working directory and below will be run.

<!-- </intro> -->


<!-- <usage> -->

## Usage

``` javascript
var makie = require( '/path/to/stdlib/tools/misc/makie' );
```

#### makie( dirpath, target )

Executes a Makefile command where the command is identified by a `target` and the Makefile containing the `target` is located in directory `dirpath`.

``` javascript
// Execute the `test` command:
makie( '/home/stdlib-js/stdlib', 'test' );
```

<!-- </usage> -->


<!-- <cli> -->

---

## CLI

<!-- <installation> -->

## Installation

To install the command-line utility, add the following line to your `~/.bashrc` (Linux) or `~/.bash_profile` (Mac OS X), making sure to adjust the path based on your project setup.

``` text
alias makie=/path/to/stdlib/tools/misc/makie/bin/cli
```

and then

``` bash
$ chmod +x /path/to/stdlib/tools/misc/makie/bin/cli
```

<!-- </installation> -->

<!-- <usage> -->

### Usage

``` bash
Usage: makie [options] target

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  --ls,  --list                List the available targets.
```

<!-- </usage> -->

<!-- <examples> -->

### Examples

``` bash
$ makie test-cov
# => <command_output>
```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

<!-- </links> -->
