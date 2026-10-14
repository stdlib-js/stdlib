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

# dcartesianProduct

> Compute the Cartesian product for two double-precision floating-point ndarrays.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcartesianProduct = require( '@stdlib/blas/ext/base/ndarray/dcartesian-product' );
```

#### dcartesianProduct( arrays )

Computes the Cartesian product for two double-precision floating-point ndarrays.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var zeros = require( '@stdlib/ndarray/zeros' );

var x = new Float64Vector( [ 1.0, 2.0 ] );
var y = new Float64Vector( [ 3.0, 4.0 ] );
var out = zeros( [ 4, 2 ], {
    'dtype': 'float64'
});

var v = dcartesianProduct( [ x, y, out ] );
// returns <ndarray>[ [ 1.0, 3.0 ], [ 1.0, 4.0 ], [ 2.0, 3.0 ], [ 2.0, 4.0 ] ]

var bool = ( v === out );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional input ndarray.
    -   a two-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
-   For input arrays `x` of length `M` and `y` of length `N`, the output array should have shape `[M*N, 2]`, where `M*N` is the number of rows and `2` is the number of columns.
-   If `M <= 0` or `N <= 0`, the function returns the output ndarray unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dcartesianProduct = require( '@stdlib/blas/ext/base/ndarray/dcartesian-product' );

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 3 ], -50, 50, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 2 ], -50, 50, opts );
console.log( ndarray2array( y ) );

var out = zeros( [ 6, 2 ], opts );

var v = dcartesianProduct( [ x, y, out ] );
console.log( ndarray2array( v ) );
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
