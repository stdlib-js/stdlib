# Package Dependencies

> Resolve package dependencies.


<section class="usage">

## Usage

``` javascript
var pkgDeps = require( '/path/to/stdlib/tools/pkgs/deps' );
```

<a name="pkg-deps"></a>

#### pkgDeps( pkgs, \[options,\] clbk )

Asynchronously resolves package dependencies.

``` javascript
var pkgs = [ 'tape', 'browserify' ];

pkgDeps( pkgs, clbk );

function clbk( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

Each package is represented by an `object` having the following fields:

* __pkg__: package name, as specified in `pkgs`.
* __files__: an `array` of module dependencies.
* __deps__: an `array` of package dependencies.
* __devDeps__: an `array` of package dev dependencies. Note that this field is __only__ present if `options.dev` is `true`.

The function accepts the following `options`:

* __dir__: root directory from which to resolve packages. May be either an absolute file path or a path relative to the current working directory.
* __builtins__: `boolean` indicating whether to include built-in package dependencies. Default: `false`.
* __dev__: `boolean` indicating whether to resolve dev dependencies. Default: `false`.

By default, the function resolves packages relative to the current working directory. To resolve relative to an alternative directory, set the `dir` option.

``` javascript
var opts = {
    'dir': '/foo/bar/baz'
};

var pkgs = [ 'tape', 'browserify' ];

pkgDeps( pkgs, opts, clbk );

function clbk( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```


#### pkgDeps.sync( pkgs\[, options\] )

Synchronously resolves package dependencies.

``` javascript
var pkgs = [ 'tape', 'browserify' ];

var results = pkgDeps.sync( pkgs );
// returns [...]
```

The function accepts the same `options` as [`pkgDeps()`](#pkg-deps) above.

<!-- </usage> -->


<section class="examples">

## Examples

``` javascript
var resolve = require( 'path' ).resolve;
var pkgDeps = require( '/path/to/stdlib/tools/pkgs/deps' );

var pkg = resolve( __dirname, '../' );
var pkgs = [ pkg, 'tape' ];

var opts = {
    'dev': true
};

pkgDeps( pkgs, opts, clbk );

function clbk( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

<!-- </examples> -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: pkg-deps [options] [<pkg> <pkg> <pkg> ...]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir dir             Base directory.
         --builtins            Include built-in package dependencies.
         --dev                 Resolve dev dependencies.
         --split sep           Separator for standard input data. Default: '/\r?\n/'.
```

<!-- </usage> -->


<section class="notes">

### Notes

* If the split separator is a [regular expression][regexp], ensure that the `split` option is properly __escaped__.

  ``` bash
  # Not escaped...
  $ echo -n $'tape\nbrowsery\n' | pkg-deps --split /\r?\n/

  # Escaped...
  $ echo -n $'tape\nbrowserify\n' | pkg-deps --split /\\r?\\n/
  ```

* Results are printed to `stdout` as newline-delimited JSON ([NDJSON][ndjson]).

<!-- </notes> -->


<section class="examples">

### Examples

``` bash
$ pkg-deps tape browserify
{...}
{...}
```

``` bash
$ echo -n $'tape\nbrowserify\n' | pkg-deps --split /\\r?\\n/
{...}
{...}
```

<!-- </examples> -->

<!-- </cli> -->


<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[ndjson]: http://ndjson.org/

<!-- </links> -->
