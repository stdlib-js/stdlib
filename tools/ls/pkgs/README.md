# Installed Packages

> List installed package dependencies.


<!-- <intro> -->

<!-- </intro> -->


<!-- <usage> -->

## Usage

``` javascript
var pkgs = require( '/path/to/stdlib/tools/ls/pkgs' );
```

#### pkgs( \[options\], clbk )

Generates a list of installed package dependencies. 

``` javascript
pkgs( onPkgs );

function onPkgs( error, list ) {
    if ( error ) {
        throw error;
    }
    console.dir( list );
}
```

The function accepts the following `options`:

* __dir__: root directory from which to search for packages. Default: current working directory.
* __depth__: search depth. Default: `+infinity` (the entire dependency tree).
* __dev__: `boolean` indicating whether to include dev dependencies. Default: `true`.

By default, the function searches the entire package dependency tree. To limit the search depth, set the `depth` option.

``` javascript
var opts = {
    'depth': 0 // search only top-level installed packages
};

pkgs( opts, onPkgs );

function onPkgs( error, list ) {
    if ( error ) {
        throw error;
    }
    console.dir( list );
}
```

To exclude development package dependencies, set the `dev` option to `false`.

``` javascript
var opts = {
    'dev': false
};

pkgs( opts, onPkgs );

function onPkgs( error, list ) {
    if ( error ) {
        throw error;
    }
    console.dir( list );
}
```

<!-- </usage> -->


<!-- <examples> -->

<!-- ## Examples

``` javascript

``` -->

<!-- </examples> -->


<!-- <cli> -->

---

## CLI

<!-- <usage> -->

### Usage

``` bash
Usage: pkgs [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
         --dir dirname               Root directory from which to search.
         --depth level               Search depth.
         --no-dev                    Exclude dev dependencies.
```

<!-- </usage> -->


<!-- <examples> -->

### Examples

``` bash
$ DEBUG=* pkgs
# => '...'
# => '...'
# => '...'
```


<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

<!-- </links> -->
