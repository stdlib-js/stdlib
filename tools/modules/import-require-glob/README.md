# Import and Require Paths

> List import and require paths.


<!-- <intro> -->

<!-- </intro> -->


<!-- <usage> -->

## Usage

``` javascript
var ls = require( '/path/to/stdlib/tools/import-require-glob' );
```

<a name="ls"></a>

#### ls( \[options\], clbk )

Reads files and lists import and require paths.

``` javascript
ls( onList );

function onList( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
    // => [{...},{...},...]
}
```

Each file is represented by an `object` with the following fields:

* __file__: file name.
* __literals__: an `array` of literal `string` import and require paths.
* __expressions__: an `array` of import and require path expressions.

The function accepts the following `options`:

* __dir__: root directory from which to search for files. May be either an absolute or relative directory path. Default: current working directory.
* __pattern__: file glob pattern. Default: `**/*.js`.

By default, the function will search for files in the current working directory. To specify an alternative directory, set the `dir` option.

``` javascript
var join = require( 'path' ).join;

var opts = {
    'dir': join( __dirname, 'tests', 'fixtures' )
};

ls( opts, onList );

function onList( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
    // => [{"file":"...","literals":[...],"expressions":[...]}]
}
```

To specify a file glob pattern, set the `pattern` option.

``` javascript
var opts = {
    'pattern': '**/*.txt'
};

ls( opts, onList );

function onList( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

#### ls.sync( \[options\] )

Synchronously reads files and lists import and require paths.

``` javascript
var results = ls.sync();
// returns [{...},{...},...]
```

The function accepts the same `options` as [`ls()`](#ls) above.


<!-- </usage> -->


<!-- <examples> -->

## Examples

``` javascript
var ls = require( '/path/to/stdlib/tools/import-require-glob' );

ls( onList );

function onList( error, results ) {
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
Usage: import-require-glob [options] [dirname]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
         --pattern pattern           File glob pattern.
```

<!-- </usage> -->


<!-- <notes> -->

### Notes

* Results are printed to `stdout` as newline-delimited JSON ([NDJSON][ndjson]).

<!-- </notes> -->


<!-- <examples> -->

### Examples

``` bash
$ DEBUG=* import-require-glob
# => {"file":"...","literals":[...],"expressions":[...]}
# => {"file":"...","literals":[...],"expressions":[...]}
# => ...
```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

[ndjson]: http://ndjson.org/

<!-- </links> -->
