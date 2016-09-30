# Package Names

> Return a list of Stdlib package names.


<!-- <usage> -->

## Usage

``` javascript
var ls = require( '/path/to/stdlib/tools/ls/pkg-names' );
```

#### ls( \[options,\] clbk )

Asynchronously returns a list of Stdlib package names.

``` javascript
ls( onList );

function onList( error, names ) {
    if ( error ) {
        throw error;
    }
    console.log( names.join( '\n' ) );
}
```

The function accepts the following `options`:

* __dir__: root directory from which to search for packages. May be either an absolute file path or a path relative to the `stdlib/lib/node_modules/` directory. Default: `/path/to/stdlib/lib/node_modules/`.

To search from a descendant directory, set the `dir` option.

``` javascript
var opts = {
    'dir': './@stdlib/math/base'
};

ls( opts, onList );

function onList( error, names ) {
    if ( error ) {
        throw error;
    }
    console.log( names.join( '\n' ) );
}
```


#### ls.sync( \[options\] )

Synchronously returns a list of stdlib package names.

``` javascript
var names = ls.sync();
// returns [...]
```

The function accepts the same `options` as `ls()` above.

<!-- </usage> -->


<!-- <notes> -->

## Notes

* The function only returns packages under the `@stdlib` scope.

<!-- </notes> -->


<!-- <examples> -->

## Examples

``` javascript
var ls = require( '/path/to/stdlib/tools/ls/pkg-names' );

ls( onList );

function onList( error, names ) {
    if ( error ) {
        throw error;
    }
    console.log( names.join( '\n' ) );
}
```

<!-- </examples> -->


<!-- <cli> -->

---

## CLI

<!-- <usage> -->

### Usage

``` bash
Usage: stdlib-pkg-names [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir dirname         Root directory from which to search.
```

<!-- </usage> -->

<!-- <examples> -->

### Examples

``` bash
$ stdlib-pkg-names
# => <module_name>
# => <module_name>
# => ...
```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

<!-- </links> -->
