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

# dspmv

> Perform the matrix-vector operation `y = alpha*A*x + beta*y` for a symmetric matrix `A` supplied in packed form.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dspmv = require( '@stdlib/blas/base/ndarray/dspmv' );
```

#### dspmv( arrays )

Performs the matrix-vector operation `y = alpha*A*x + beta*y`, where `alpha` and `beta` are scalars, `x` and `y` are one-dimensional ndarrays, and `A` is an `N` by `N` symmetric matrix supplied in packed form.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );

var AP = new Float64Vector( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float64Vector( [ 1.0, 2.0, 3.0 ] );
var y = new Float64Vector( [ 4.0, 5.0, 6.0 ] );

var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 3.0, {
    'dtype': 'float64'
});
var beta = scalar2ndarray( 2.0, {
    'dtype': 'float64'
});

var out = dspmv( [ AP, x, y, uplo, alpha, beta ] );
// returns <ndarray>[ 50.0, 40.0, 42.0 ]

var bool = ( out === y );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray corresponding to the packed form of `A`.
    -   a one-dimensional input ndarray corresponding to `x`.
    -   a one-dimensional input/output ndarray corresponding to `y`.
    -   a zero-dimensional ndarray specifying whether the upper or lower triangular part of `A` is supplied.
    -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.
    -   a zero-dimensional ndarray containing a scalar constant corresponding to `beta`.

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
var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dspmv = require( '@stdlib/blas/base/ndarray/dspmv' );

var opts = {
    'dtype': 'float64'
};

var AP = discreteUniform( [ 10 ], 0, 10, opts );
var x = discreteUniform( [ 4 ], 0, 10, opts );
var y = discreteUniform( [ 4 ], 0, 10, opts );

var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 3.0, opts );
var beta = scalar2ndarray( 2.0, opts );

var out = dspmv( [ AP, x, y, uplo, alpha, beta ] );
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
