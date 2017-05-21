# makie

> Execute project Makefile commands from anywhere in the project.


<section class="intro">

Typically, to execute project `Makefile` commands, you must be in the root project directory. While `make` supports specifying a directory from which to run a `Makefile`, this can be cumbersome, especially if a command expects configuration via environment variables.

This utility provides support for executing a subset of `Makefile` commands from anywhere within the project. The list of supported targets includes:

* `repl`
* `notes`
* `examples`
* `test`
* `test-cov`
* `test-summary`
* `view-cov`
* `benchmark`
* `lint-javascript`
* `lint-markdown`
* `lint-python`
* `lint-r`
* `complexity`
* `list-pkgs`
* `list-pkgs-names`
* `stats-list-contributors`

When executing a command, the current working directory is used as a filter. Thus, when invoking the `test` command, __only__ those tests in the current working directory and below will be run.

</section>

<!-- /.intro -->


<section class="usage">

## Usage

``` javascript
var makie = require( '@stdlib/tools/makie/makie' );
```

#### makie( dirpath, options, target )

Executes a Makefile command where the command is identified by a `target` and the Makefile containing the `target` is located in directory `dirpath`.

``` javascript
var spawn = require( 'child_process' ).spawn;

function plugin( dirpath, cwd, subpath ) {
    var proc = spawn( 'make', [], 'test' );
}

var opts = {
    'plugins': {
        'test': plugin
    }
};

// Execute the `test` command:
makie( '/home/stdlib-js/stdlib', opts, 'test' );
```

The function accepts the following `options`:

* __plugins__: an `object` whose keys correspond to Makefile targets and whose values are `functions` implementing the plugin interface.


### Plugins

Plugins are `functions` which execute a Makefile command.

#### plugin( dir, cwd, subpath )

Executes a Makefile target.

* __dir__: the Makefile directory provided above.
* __cwd__: current working directory of the calling process.
* __subpath__: subdirectory path, if `makie` is called in a subdirectory; otherwise, an empty `string`.

``` javascript
var spawn = require( 'child_process' ).spawn;

function plugin( dir, cwd ) {
    var opts;
    var args;
    var proc;

    opts = {};
    opts.cwd = dir;
    opts.stdio = 'inherit';

    args = new Array( 2 );

    // Environment variables:
    args[ 0 ] = 'REPL_DIR='+cwd;

    // Target:
    args[ 1 ] = 'repl';

    proc = spawn( 'make', args, opts );
}
```

</section>

<!-- /.usage -->


---

<section class="cli">

## CLI

<!-- <installation> -->

## Installation

To install the command-line utility, add the following line to your `~/.bashrc` (Linux) or `~/.bash_profile` (Mac OS X), making sure to adjust the path based on your project setup.

``` text
alias makie=/path/to/stdlib/tools/bin/makie
```

and then

``` bash
$ chmod +x /path/to/stdlib/tools/bin/makie
```

<!-- </installation> -->

<section class="usage">

### Usage

``` bash
Usage: makie [options] target

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir dirpath         Makefile directory.
         --config path         Path to configuration file.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

``` bash
$ makie test-cov
<command_output>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->
