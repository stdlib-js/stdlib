makie
===
> Run project Makefile targets from anywhere in the project.

<!-- <intro> -->
Typically, to execute project `Makefile` targets, you must be in the root project directory. While `make` supports specifying a directory from which to run a `Makefile`, this can be cumbersome, especially if a target expects configuration via environment variables.

This utility provides support for executing a subset of `Makefile` targets from anywhere within the project. The list of supported targets includes:

* `examples`
* `test`
* `test-cov`
* `test-summary`
* `view-cov`

When executing a target, the current working directory is used as a filter. Thus, when invoking the `test` target, __only__ those tests in the current working directory and below will be run.

<!-- </intro> -->

<!-- <installation> -->
## Installation

To install the command-line utility, add the following line to your `~/.bashrc` (Linux) or `~/.bash_profile` (Mac OS X), making sure to adjust the path based on your project setup.

```
alias makie=/path/to/stdlib/tools/misc/makie/bin/cli
```

and then

``` bash
$ chmod +x /path/to/stdlib/tools/misc/makie/bin/cli
```

<!-- </installation> -->

<!-- <cli> -->
---
## CLI

<!-- <usage> -->
### Usage

``` bash
Usage: makie [options] target

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```
<!-- </usage> -->

<!-- <examples> -->
### Examples

``` bash
$ makie test-cov
# => <target_output>
```
<!-- </examples> -->
<!-- </cli> -->

<!-- <links> -->
<!-- </links> -->
