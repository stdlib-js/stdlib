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

# cgemv

> Perform one of the matrix-vector operations `y = alpha*A*x + beta*y`, `y = alpha*A^T*x + beta*y`, or `y = alpha*A^H*x + beta*y`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cgemv = require( '@stdlib/blas/base/ndarray/cgemv' );
```

#### cgemv( arrays )

Performs one of the matrix-vector operations `y = alpha*A*x + beta*y`, `y = alpha*A^T*x + beta*y`, or `y = alpha*A^H*x + beta*y`, where `alpha` and `beta` are scalars, `x` and `y` are one-dimensional ndarrays, and `A` is an `M` by `N` matrix.

```javascript
/* eslint-disable max-len */
var Complex64Matrix = require( '@stdlib/ndarray/matrix/complex64' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var resolveEnum = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );

var A = new Complex64Matrix( [ [ 1.0, 2.0, 3.0, 4.0 ], [ 5.0, 6.0, 7.0, 8.0 ] ] );
var x = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );

var trans = scalar2ndarray( resolveEnum( 'no-transpose' ), {
    'dtype': 'int8'
});
var alpha = scalar2ndarray( new Complex64( 1.0, 0.0 ), {
    'dtype': 'complex64'
});
var beta = scalar2ndarray( new Complex64( 1.0, 0.0 ), {
    'dtype': 'complex64'
});

var out = cgemv( [ A, x, y, trans, alpha, beta ] );
// returns <ndarray>[ <Complex64>[ -9.0, 30.0 ], <Complex64>[ -15.0, 72.0 ] ]

var bool = ( out === y );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a two-dimensional input ndarray corresponding to `A`.
    -   a one-dimensional input ndarray corresponding to `x`.
    -   a one-dimensional input/output ndarray corresponding to `y`.
    -   a zero-dimensional ndarray specifying whether `A` should be transposed, conjugate-transposed, or not transposed.
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
/* eslint-disable max-len */
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Matrix = require( '@stdlib/ndarray/matrix/complex64' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var resolveEnum = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cgemv = require( '@stdlib/blas/base/ndarray/cgemv' );

var opts = {
    'dtype': 'float32'
};

var A = new Complex64Matrix( discreteUniform( 24, 0, 10, opts ).buffer, 0, [ 3, 4 ] );
var x = new Complex64Vector( discreteUniform( 8, 0, 10, opts ) );
var y = new Complex64Vector( discreteUniform( 6, 0, 10, opts ) );

var trans = scalar2ndarray( resolveEnum( 'no-transpose' ), {
    'dtype': 'int8'
});
var alpha = scalar2ndarray( new Complex64( 1.0, 0.0 ), {
    'dtype': 'complex64'
});
var beta = scalar2ndarray( new Complex64( 1.0, 0.0 ), {
    'dtype': 'complex64'
});

var out = cgemv( [ A, x, y, trans, alpha, beta ] );
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
