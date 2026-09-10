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

# ctriu2tril

> Reflect the upper triangular part of a single-precision complex floating-point matrix `A` into the lower triangular part of another matrix `B`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ctriu2tril = require( '@stdlib/blas/ext/base/ndarray/ctriu2tril' );
```

#### ctriu2tril( arrays )

Reflects the upper triangular part of a single-precision complex floating-point matrix `A` into the lower triangular part of another matrix `B`.

<!-- eslint-disable max-len -->

```javascript
var Complex64Matrix = require( '@stdlib/ndarray/matrix/complex64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var A = new Complex64Matrix( [ [ 1.0, 2.0, 3.0, 4.0 ], [ 5.0, 6.0, 7.0, 8.0 ] ] );
var B = new Complex64Matrix( [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0, 0.0 ] ] );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var out = ctriu2tril( [ A, B, k ] );
// returns <ndarray>[ [ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 0.0, 0.0 ] ], [ <Complex64>[ 3.0, 4.0 ], <Complex64>[ 7.0, 8.0 ] ] ]

var bool = ( out === B );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a two-dimensional input ndarray corresponding to `A`.
    -   a two-dimensional output ndarray corresponding to `B`.
    -   a zero-dimensional ndarray specifying the diagonal below which to ignore. A value equal to zero refers to the main diagonal, greater than zero refers to a diagonal above the main diagonal, and less than zero refers to a diagonal below the main diagonal.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Elements outside of the reflected region are left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable max-len -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Matrix = require( '@stdlib/ndarray/matrix/complex64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ctriu2tril = require( '@stdlib/blas/ext/base/ndarray/ctriu2tril' );

var opts = {
    'dtype': 'float32'
};

var shape = [ 5, 8 ];
var abuf = discreteUniform( shape[ 0 ]*shape[ 1 ]*2, -50, 50, opts );
var A = new Complex64Matrix( abuf.buffer, 0, shape[ 0 ], shape[ 1 ] );
console.log( ndarray2array( A ) );

var shapeB = [ shape[ 1 ], shape[ 0 ] ];
var bbuf = discreteUniform( shapeB[ 0 ]*shapeB[ 1 ]*2, -50, 50, opts );
var B = new Complex64Matrix( bbuf.buffer, 0, shapeB[ 0 ], shapeB[ 1 ] );
console.log( ndarray2array( B ) );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var out = ctriu2tril( [ A, B, k ] );
console.log( ndarray2array( out ) );
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
