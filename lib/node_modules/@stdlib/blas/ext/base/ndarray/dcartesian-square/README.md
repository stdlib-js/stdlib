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

# dcartesianSquare

> Compute the Cartesian square for a double-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcartesianSquare = require( '@stdlib/blas/ext/base/ndarray/dcartesian-square' );
```

#### dcartesianSquare( arrays )

Computes the Cartesian square for a double-precision floating-point ndarray.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var zeros = require( '@stdlib/ndarray/zeros' );

var x = new Float64Vector( [ 1.0, 2.0 ] );
var out = zeros( [ 4, 2 ], {
    'dtype': 'float64'
});

var v = dcartesianSquare( [ x, out ] );
// returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 2.0 ], [ 2.0, 1.0 ], [ 2.0, 2.0 ] ]

var bool = ( v === out );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a two-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
-   For an input array of length `N`, the output array should have shape `[N*N, 2]`, where `N*N` is the number of rows and `2` is the number of columns.
-   If `N <= 0`, the function returns the output ndarray unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dcartesianSquare = require( '@stdlib/blas/ext/base/ndarray/dcartesian-square' );

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 3 ], -50, 50, opts );
console.log( ndarray2array( x ) );

var out = zeros( [ 9, 2 ], opts );

var v = dcartesianSquare( [ x, out ] );
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
