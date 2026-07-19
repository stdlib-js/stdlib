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

# ssyr2

> Perform the symmetric rank 2 operation `A = alpha*x*y^T + alpha*y*x^T + A`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ssyr2 = require( '@stdlib/blas/base/ndarray/ssyr2' );
```

#### ssyr2( arrays )

Performs the symmetric rank 2 operation `A = alpha*x*y^T + alpha*y*x^T + A`, where `alpha` is a scalar, `x` and `y` are one-dimensional ndarrays, and `A` is an `N` by `N` symmetric matrix.

<!-- eslint-disable max-len -->

```javascript
var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var A = new Float32Matrix( [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ] );
var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Vector( [ 2.0, 1.0, 3.0 ] );

var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 2.0, {
    'dtype': 'float32'
});

var z = ssyr2( [ x, y, A, uplo, alpha ] );
// returns <ndarray>[ [ 9.0, 12.0, 21.0 ], [ 2.0, 9.0, 20.0 ], [ 3.0, 2.0, 37.0 ] ]

var bool = ( z === A );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray corresponding to `x`.
    -   a one-dimensional input ndarray corresponding to `y`.
    -   a two-dimensional input/output ndarray corresponding to `A`.
    -   a zero-dimensional ndarray specifying whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
    -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.

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
var zeros = require( '@stdlib/ndarray/zeros' );
var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ssyr2 = require( '@stdlib/blas/base/ndarray/ssyr2' );

var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ 3 ], 0, 10, opts );
var y = discreteUniform( [ 3 ], 0, 10, opts );
var A = zeros( [ 3, 3 ], opts );

var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 1.0, opts );

var out = ssyr2( [ x, y, A, uplo, alpha ] );
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
