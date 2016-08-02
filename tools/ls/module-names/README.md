# Module Names

> Return a list of stdlib module names.


<!-- <usage> -->

## Usage

``` javascript
var ls = require( '/path/to/stdlib/tools/ls/module-names' );
```

#### ls( \[options,\] clbk )

Asynchronously returns a list of stdlib module names.

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

* __dir__: root directory from which to search for modules. Default: `/path/to/lib/node_modules/@stdlib`.

To search from a descendant directory, set the `dir` option.

``` javascript
var opts = {
    'dir': '/path/to/lib/node_modules/@stdlib/math/base'
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

Synchronously returns a list of stdlib module names.

``` javascript
var names = ls.sync();
// returns [...]
```

The function accepts the same `options` as `ls()` above.

<!-- </usage> -->


<!-- <examples> -->

## Examples

``` javascript
var ls = require( '/path/to/stdlib/tools/ls/module-names' );

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
Usage: stdlib-module-names [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir dirname         Root directory from which to search.
```

<!-- </usage> -->

<!-- <examples> -->

### Examples

``` bash
$ stdlib-module-names
# => <module_name>
# => <module_name>
# => ...
```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

<!-- </links> -->
