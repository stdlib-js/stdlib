<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Plot

> Two-dimensionality plotting.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var plot = require( '@stdlib/dist-plot-flat' ).plot;
```

#### plot( \[x, y,] \[options] )

Returns a [`plot`][@stdlib/plot/ctor] instance for creating 2-dimensional plots.

```javascript
var plot = new Plot();
// returns <Plot>
```

To provide plot data at instantiation, provide `x` **and** `y` data as arguments.

```javascript
var x = [[0.10, 0.20, 0.30]];
var y = [[0.52, 0.79, 0.64]];

var plot = new Plot( x, y );
// returns <Plot>
```

For supported `options`, consult the [documentation][@stdlib/plot/ctor].

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   This package contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable file is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-plot-flat"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package expose the following [stdlib][stdlib] packages:

    -   [@stdlib/plot/*][@stdlib/plot]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randn = require( '@stdlib/random/base/randn' );
var Float64Array = require( '@stdlib/array/float64' );
var plot = require( '@stdlib/dist-plot-flat' ).plot;

var now;
var x;
var y;
var i;

// Create some data...
now = ( new Date() ).getTime();
x = new Float64Array( 100 );
y = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = now + (i*360000);
    y[ i ] = 50.0 + (10.0*randn());
}

// Create a new plot:
var h = plot( [x], [y], {
    'width': 600,
    'height': 480,
    'xScale': 'time',
    'xTickFormat': '%H:%M'
});

// Render as HTML:
var html = h.render( 'html' );
console.log( html );
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-plot-flat/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var plot = stdlib_plot_flat.plot;
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/plot]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/plot

[@stdlib/plot/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/plot/ctor

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
