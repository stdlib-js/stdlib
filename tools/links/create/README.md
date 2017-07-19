# Insert Link

> Create a link entry in a link database.


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

``` javascript
var create = require( '@stdlib/tools/links/create' );
```

<a name="create-async"></a>

#### create( opts, clbk )

Creates a link entry in a link database.

``` javascript
var opts = {
    'uri': 'http://stdlib.io',
    'id': 'stdlib',
    'description': 'A standard library for JavaScript and Node.js.'
};

create( opts, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
```

The function accepts the following `options`:

* __uri__: link URI.
* __id__: unique identifier.
* __description__: link description.
* __keywords__: array of keywords.
* __database__: path to a link database.

To specify keywords which pertain to the link, set the `keywords` option.

``` javascript
var opts = {
    'uri': 'http://stdlib.io',
    'id': 'stdlib',
    'description': 'A standard library for JavaScript and Node.js.',
    'keywords': [
        'standard',
        'library',
        'stdlib',
        'javascript',
        'node.js',
        'nodejs'
    ]
};

create( opts, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
```

To insert the link into a particular link database, set the `database` option.

``` javascript
var opts = {
    'uri': 'http://stdlib.io',
    'id': 'stdlib',
    'description': 'A standard library for JavaScript and Node.js.',
    'database': './beep/boop/links.json'
};

create( opts, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
```


#### create.sync( opts )

Synchronously inserts a link into a link database.

``` javascript
var opts = {
    'uri': 'http://stdlib.io',
    'id': 'stdlib',
    'description': 'A standard library for JavaScript and Node.js.'
};

var err = create.sync( opts );
if ( err ) {
    throw err;
}
console.log( 'Success!' );
```

The method accepts the same `options` as [`create()`](#create-async) above.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

* A link database should be a [JSON][json] file.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

``` javascript
var create = require( '@stdlib/tools/links/create' );

var opts = {
    'uri': 'http://stdlib.io',
    'id': 'stdlib',
    'description': 'A standard library for JavaScript and Node.js.',
    'keywords': [
        'standard',
        'library',
        'lib',
        'stdlib',
        'javascript',
        'js',
        'node.js',
        'nodejs',
        'node-js',
        'node'
    ]
};

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}

create( opts, done );
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

---

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

``` bash
Usage: insert-link [options] [<uri> --id <id> --desc <description>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --id id               Unique identifier.
         --desc description    Link description.
         --keywords w1,w2,...  Comma-separated list of keywords.
         --database filepath   Database filepath.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

* If invoked without a URI, the CLI will interactively prompt for argument input.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

``` bash
$ insert-link http://stdlib.io/ --id stdlib --description 'A standard library for JavaScript and Node.js'
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

</section>

<!-- /.links -->
