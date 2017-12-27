# Build

> Build assets for running tests in a web browser.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var build = require( '@stdlib/tools/test/browser-build' );
```

#### build( root, output, \[options,] clbk )

Given a `root` directory from which to search for tests and an output directory, build assets for running tests in a web browser.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var cwd = require( '@stdlib/utils/cwd' );

var root = cwd();
var out = root;

build( root, out, clbk );

function clbk( error, bool ) {
    if ( error ) {
        throw error;
    }
    if ( bool ) {
        console.log( 'Success!' );
    } else {
        console.log( 'No generated assets.' );
    }
}
```

The function accepts the following `options`:

-   **pattern**: glob pattern. Default: `'**/test*.js'`.
-   **bundle**: output bundle filename. Default: `'test_bundle.js'`.
-   **html**: output HTML filename. Default: `'tests.html'`.
-   **mount**: URL path on which to a mount a bundle. Default: `'/'`.
-   **title**: HTML title. Default: `'Tests'`.

To provide an alternative glob pattern, set the `pattern` option.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var cwd = require( '@stdlib/utils/cwd' );

var root = cwd();
var out = root;

var opts = {
    'pattern': '**/test.js'
};

build( root, out, opts, clbk );

function clbk( error, bool ) {
    if ( error ) {
        throw error;
    }
    if ( bool ) {
        console.log( 'Success!' );
    } else {
        console.log( 'No generated assets.' );
    }
}
```

To mount a bundle on a URL path, set the `mount`option.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var cwd = require( '@stdlib/utils/cwd' );

var root = cwd();
var out = root;

var opts = {
    'mount': '/www/public/'
};

build( root, out, opts, clbk );

function clbk( error, bool ) {
    if ( error ) {
        throw error;
    }
    if ( bool ) {
        console.log( 'Success!' );
    } else {
        console.log( 'No generated assets.' );
    }
}
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

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var mkdirp = require( 'mkdirp' ).sync;
var build = require( '@stdlib/tools/test/browser-build' );

var root = join( __dirname, 'fixtures' );
var out = resolve( __dirname, '../build' );

mkdirp( out );

var opts = {
    'pattern': 'index.js',
    'bundle': 'test_bundle.js',
    'html': 'tests.html'
};

build( root, out, opts, clbk );

function clbk( error, bool ) {
    if ( error ) {
        throw error;
    }
    if ( bool ) {
        console.log( 'Success!' );
    } else {
        console.log( 'No generated assets.' );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```bash
Usage: tests-browser-build [options] [dir]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -o,    --out dir             Output directory.
         --pattern glob        Glob pattern.
         --bundle filename     Output bundle filename.
         --html filename       Output HTML filename.
         --mount path          URL path on which to mount a bundle.
         --title title         HTML title.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If not provided a root directory, the root directory is the current working directory. 

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ mkdir ./build && tests-browser-build --pattern 'index.js' --out=./build ./examples/fixtures
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
