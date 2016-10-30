# Package Dependencies

> List package dependencies.


<!-- <usage> -->

## Usage

``` javascript
var pkgDeps = require( '/path/to/stdlib/tools/pkg-deps' );
```

<a name="pkg-deps"></a>

#### pkgDeps( file, \[options,\] clbk )

Asynchronously lists package dependencies.

``` javascript
pkgDeps( __filename, clbk );

function clbk( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

The first argument may be either an absolute file path string or an `array` of file paths.

``` javascript
pkgDeps( [ __filename, __filename ], clbk );

function clbk( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

Each file is represented by an `object` having the following fields:

* __file__: file name.
* __deps__: an `array` of package dependencies.

The function accepts the following `options`:

* __builtins__: `boolean` indicating whether to include built-in package dependencies. Default: `true`.
* __walk__: `boolean` indicating whether to walk relative module dependencies. Default: `true`.

By default, the function walks relative module dependencies to resolve both primary and secondary package dependencies. To only resolve a file's direct package dependencies, set the `walk` option to `false`.

``` javascript
var opts = {
    'walk': false
};

pkgDeps( __filename, opts, clbk );

function clbk( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```


#### pkgDeps.sync( file\[, options\] )

Synchronously lists package dependencies.

``` javascript
var results = pkgDeps.sync( __filename );
// returns [...]
```

The function accepts the same `options` as [`pkgDeps()`](#pkg-deps) above.

<!-- </usage> -->


<!-- <examples> -->

## Examples

``` javascript
var join = require( 'path' ).join;
var pkgDeps = require( '/path/to/stdlib/tools/pkg-deps' );

var file = join( __dirname, 'lib', 'index.js' );

pkgDeps( file, clbk );

function clbk( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

<!-- </examples> -->


<!-- <cli> -->

---

## CLI

<!-- <usage> -->

### Usage

``` bash
Usage: module-pkg-deps [options] [<file> <file> <file> ...]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --no-builtins         Do not include built-ins.
         --no-walk             Do not walk relative module dependencies.
         --split sep           Separator for standard input data. Default: '/\r?\n/'.
```

<!-- </usage> -->


<!-- <notes> -->

### Notes

* If the split separator is a [regular expression][regexp], ensure that the `split` option is properly __escaped__.

  ``` bash
  # Not escaped...
  $ echo -n $'file1\nfile2\n' | module-pkg-deps --split /\r?\n/

  # Escaped...
  $ echo -n $'file1\nfile2\n' | module-pkg-deps --split /\\r?\\n/
  ```

* Results are printed to `stdout` as newline-delimited JSON ([NDJSON][ndjson]).

<!-- </notes> -->


<!-- <examples> -->

### Examples

``` bash
$ module-pkg-deps /foo/bar/baz
{...}
```

``` bash
$ echo -n $'/foo/bar/baz\n/beep/boop/bop\n' | module-pkg-deps --split /\\r?\\n/
{...}
{...}
```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[ndjson]: http://ndjson.org/

<!-- </links> -->
