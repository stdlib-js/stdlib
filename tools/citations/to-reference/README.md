# Citation Reference

> Return a reference corresponding to a citation identifier.


<!-- <intro> -->

<!-- </intro> -->


<!-- <usage> -->

## Usage

``` javascript
var toReference = require( '/path/to/stdlib/tools/citations/to-reference' );
```

<a name="to-reference"></a>

#### toReference( id, \[options,\] clbk )

Returns a reference corresponding to a citation identifier.

``` javascript
toReference( '@press1992', clbk );

function clbk( error, reference ) {
    if ( error ) {
        throw error;
    }
    console.log( reference );
}
```

The function accepts the following `options`:

* __database__: path to a bibliographic database.
* __csl__: path to a [Citation Style Language][csl] (CSL) file.

To use a specific bibliographic database, set the `database` option.

``` javascript
var opts = {
    'database': '/foo/bar/baz/bib.bib'
};

toReference( '@press1992', opts, clbk );

function clbk( error, reference ) {
    if ( error ) {
        throw error;
    }
    console.log( reference );
}
```

To use a particular [Citation Style Language][csl] (CSL), set the `csl` option.

``` javascript
var opts = {
    'csl': '/foo/bar/baz/style.csl'
};

toReference( '@press1992', opts, clbk );

function clbk( error, reference ) {
    if ( error ) {
        throw error;
    }
    console.log( reference );
}
```

#### toReference.sync( id\[, options\] )

Synchronously return a reference corresponding to a citation identifier.

``` javascript
var ref = toReference.sync( '@press:1992' );
// returns '...'
```

The method accepts the same `options` as [`toReference()`](#to-reference) above.

<!-- </usage> -->


<!-- <notes> -->

## Notes

* System dependencies:
  - [pandoc][pandoc]
  - [pandoc-citeproc][pandoc-citeproc]

<!-- </notes> -->


<!-- <examples> -->

## Examples

``` javascript
var toReference = require( '/path/to/stdlib/tools/citations/to-reference' );

toReference( '@press1992', clbk );

function clbk( error, reference ) {
    if ( error ) {
        throw error;
    }
    console.log( reference );
}
```

<!-- </examples> -->


<!-- <cli> -->

---

## CLI

<!-- <usage> -->

### Usage

``` bash
Usage: citation-to-reference [options] <citation_identifier>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --database filepath   Database filepath.
         --csl filepath        Citation Style Language filepath.
```

<!-- </usage> -->

<!-- <examples> -->

### Examples

``` bash
$ citation-to-reference '@press:1992'
# => '...'
```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

[csl]: http://citationstyles.org/

[pandoc]: http://pandoc.org/
[pandoc-citeproc]: https://github.com/jgm/pandoc-citeproc

<!-- </links> -->
