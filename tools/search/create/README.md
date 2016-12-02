# Create

> Create a serialized lunr.js search index.


<section class="usage">

## Usage

``` javascript
var create = require( '/path/to/stdlib/tools/search/create' );
```

#### create( \[options,\] clbk )

Asynchronously creates a serialized lunr.js search index.

``` javascript
create( onCreate );

function onCreate( error, idx ) {
    if ( error ) {
        throw error;
    }
    console.log( idx );
}
```

The function accepts the following `options`:

* __dir__: root directory from which to search for packages. May be either an absolute file path or a path relative to the current working directory. Default: current working directory.

To search for packages from an alternative directory, set the `dir` option.

``` javascript
var opts = {
    'dir': '/foo/bar/baz'
};

create( opts, onCreate );

function onCreate( error, idx ) {
    if ( error ) {
        throw error;
    }
    console.log( idx );
}
```

</section>

<!-- /.usage -->


<section class="examples">

## Examples

``` javascript
var lunr = require( 'lunr' );
var path = require( 'path' );
var tokenizer = require( '/path/to/stdlib/tools/search/create/lib/tokenizer.js' );
var create = require( '/path/to/stdlib/tools/search/create' );

lunr.tokenizer.registerFunction( tokenizer, 'readme_tokenizer' );
lunr.tokenizer.load( 'readme_tokenizer' );

create({
    'dir': '/path/to/stdlib/lib/node_modules/@stdlib' )
}, onCreate );

function onCreate( error, idx ) {
    var store;
    if ( error ) {
        throw error;
    }
    idx = JSON.parse( idx );
    idx.tokenizer = 'readme_tokenizer';
    store = lunr.Index.load( idx );

    // Perform a search:
    console.log( store.search( 'encrypt' ) );
}
```

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: create-search [options] [dir]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->


<section class="examples">

### Examples

``` bash
$ create-search . > search_index.json
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->
