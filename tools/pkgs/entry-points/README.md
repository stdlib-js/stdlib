# Entry Points

> Resolve package entry points.


<!-- <usage> -->

## Usage

``` javascript
var entryPoints = require( '/path/to/stdlib/tools/pkgs/entry-points' );
```

<a name="entry-points"></a>

#### entryPoints( pkgs, \[options,\] clbk )

Asynchronously resolves package entry points.

``` javascript
var pkgs = [ 'tape', 'browserify' ];

entryPoints( pkgs, onEntries );

function onEntries( error, entries ) {
    if ( error ) {
        throw error;
    }
    console.dir( entries );
}
```

Each package is represented by an `object` having the following fields:

* __id__: package identifier.
* __pkg__: package name, as specified in `pkgs`.
* __dir__: package directory.
* __entries__: an `array` of package entry points.

The function accepts the following `options`:

* __dir__: root directory from which to resolve packages. May be either an absolute file path or a path relative to the current working directory.

By default, the function resolves packages relative to the current working directory. To resolve relative to an alternative directory, set the `dir` option.

``` javascript
var opts = {
    'dir': '/foo/bar/baz'
};

var pkgs = [ 'tape', 'browserify' ];

entryPoints( pkgs, opts, onEntries );

function onEntries( error, entries ) {
    if ( error ) {
        throw error;
    }
    console.dir( entries );
}
```


#### entryPoints.sync( pkgs\[, options\] )

Synchronously resolves package entry points.

``` javascript
var pkgs = [ 'tape', 'browserify' ];

var entries = entryPoints.sync( pkgs );
// returns [...]
```

The function accepts the same `options` as [`entryPoints()`](#entry-points) above.

<!-- </usage> -->


<!-- <examples> -->

## Examples

``` javascript
var resolve = require( 'path' ).resolve;
var entryPoints = require( '/path/to/stdlib/tools/pkgs/entry-points' );

var pkg = resolve( __dirname, '../' );
var pkgs = [ pkg, 'tape' ];

entryPoints( pkgs, onEntries );

function onEntries( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

<!-- </examples> -->


---

<!-- <cli> -->

## CLI

<!-- <usage> -->

### Usage

``` bash
Usage: pkg-entry-points [options] [<pkg> <pkg> <pkg> ...]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir dir             Base directory.
         --split sep           Separator for standard input data. Default: '/\r?\n/'.
```

<!-- </usage> -->


<!-- <notes> -->

### Notes

* If the split separator is a [regular expression][regexp], ensure that the `split` option is properly __escaped__.

  ``` bash
  # Not escaped...
  $ echo -n $'tape\nbrowsery\n' | pkg-entry-points --split /\r?\n/

  # Escaped...
  $ echo -n $'tape\nbrowserify\n' | pkg-entry-points --split /\\r?\\n/
  ```

* Results are printed to `stdout` as newline-delimited JSON ([NDJSON][ndjson]).

<!-- </notes> -->


<!-- <examples> -->

### Examples

``` bash
$ pkg-entry-points tape browserify
{...}
{...}
```

``` bash
$ echo -n $'tape\nbrowserify\n' | pkg-entry-points --split /\\r?\\n/
{...}
{...}
```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[ndjson]: http://ndjson.org/

<!-- </links> -->
