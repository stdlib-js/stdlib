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

# sgemv

> Perform one of the matrix-vector operations `y = alpha*A*x + beta*y` or `y = alpha*A^T*x + beta*y`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sgemv = require( '@stdlib/blas/base/ndarray/sgemv' );
```

#### sgemv( arrays )

Performs one of the matrix-vector operations `y = alpha*A*x + beta*y` or `y = alpha*A^T*x + beta*y`, where `alpha` and `beta` are scalars, `x` and `y` are one-dimensional ndarrays, and `A` is an `M` by `N` matrix.

<!-- eslint-disable max-len -->

```javascript
var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var resolveEnum = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );

var A = new Float32Matrix( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ] );
var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Vector( [ 4.0, 5.0 ] );

var trans = scalar2ndarray( resolveEnum( 'no-transpose' ), {
    'dtype': 'int8'
});
var alpha = scalar2ndarray( 1.0, {
    'dtype': 'float32'
});
var beta = scalar2ndarray( 1.0, {
    'dtype': 'float32'
});

var out = sgemv( [ A, x, y, trans, alpha, beta ] );
// returns <ndarray>[ 18.0, 37.0 ]

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

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var resolveEnum = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var sgemv = require( '@stdlib/blas/base/ndarray/sgemv' );

var opts = {
    'dtype': 'float32'
};

var A = discreteUniform( [ 3, 4 ], 0, 10, opts );
var x = discreteUniform( [ 4 ], 0, 10, opts );
var y = discreteUniform( [ 3 ], 0, 10, opts );

var trans = scalar2ndarray( resolveEnum( 'no-transpose' ), {
    'dtype': 'int8'
});
var alpha = scalar2ndarray( 1.0, opts );
var beta = scalar2ndarray( 1.0, opts );

var out = sgemv( [ A, x, y, trans, alpha, beta ] );
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
