# Documentation

> Build API documentation.


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

``` javascript
var build = require( 'path/to/tools/build-docs' );
```

#### build( done )

Builds documentation.

``` javascript
function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}

build( done );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

``` javascript
var build = require( 'path/to/tools/build-docs' );

build( clbk );

function clbk( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
}
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
Usage: build-docs [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

``` bash
$ DEBUG=* build-docs
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

</section>

<!-- /.links -->
