<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# gdot

> Calculate the dot product of two one-dimensional ndarrays.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

```math
\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6cf4829ce9c06ba9fa207a2ea3b395266f86a259/lib/node_modules/@stdlib/blas/base/ndarray/gdot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
```

#### gdot( arrays )

Computes the dot product of two one-dimensional ndarrays.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
var x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );

var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
var y = new ndarray( 'generic', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );

var z = gdot( [ x, y ] );
// returns -5.0
```

The function has the following parameters:

-   **arrays**: array-like object containing two one-dimensional input ndarrays.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gdot = require( '@stdlib/blas/base/ndarray/gdot' );

var opts = {
    'dtype': 'generic'
};

var xbuf = discreteUniform( 10, 0, 500, opts );
var x = new ndarray( opts.dtype, xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var ybuf = discreteUniform( 10, 0, 255, opts );
var y = new ndarray( opts.dtype, ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( y ) );

var out = gdot( [ x, y ] );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

</section>

<!-- /.links -->
