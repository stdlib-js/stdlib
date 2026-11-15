<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# gwaxpb

> Multiply each element in an input one-dimensional ndarray by a scalar constant and add a scalar constant before assigning the results to elements in a one-dimensional output ndarray.

<section class="intro">

This BLAS extension implements the linear transformation

<!-- <equation class="equation" label="eq:waxpb" align="center" raw="\mathbf{w} = \alpha \mathbf{x} + \beta" alt="Equation for waxpb operation."> -->

```math
\mathbf{w} = \alpha \mathbf{x} + \beta
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{w} = \alpha \mathbf{x} + \beta" data-equation="eq:waxpb">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@084e7f73049a6b09aa32af5a4f2abc6615e909de/lib/node_modules/@stdlib/blas/ext/base/ndarray/gwaxpb/docs/img/equation_waxpb.svg" alt="Equation for waxpb operation.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gwaxpb = require( '@stdlib/blas/ext/base/ndarray/gwaxpb' );
```

#### gwaxpb( arrays )

Multiplies each element in an input one-dimensional ndarray by a scalar constant and adds a scalar constant before assigning the results to elements in a one-dimensional output ndarray.

```javascript
var vector = require( '@stdlib/ndarray/vector/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = vector( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ], 'generic' );
var w = vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 'generic' );

var alpha = scalar2ndarray( 5.0, {
    'dtype': 'generic'
});

var beta = scalar2ndarray( 3.0, {
    'dtype': 'generic'
});

gwaxpb( [ x, w, alpha, beta ] );
// w => <ndarray>[ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.
    -   a zero-dimensional ndarray containing the scalar constant to multiply.
    -   a zero-dimensional ndarray containing the scalar constant to add.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var gwaxpb = require( '@stdlib/blas/ext/base/ndarray/gwaxpb' );

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var w = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( w ) );

var alpha = scalar2ndarray( 5.0, opts );
console.log( 'Alpha: %d', ndarraylike2scalar( alpha ) );

var beta = scalar2ndarray( 3.0, opts );
console.log( 'Beta: %d', ndarraylike2scalar( beta ) );

gwaxpb( [ x, w, alpha, beta ] );
console.log( ndarray2array( w ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
