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

# gsyr

> Perform the symmetric rank 1 operation `A = alpha*x*x^T + A`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gsyr = require( '@stdlib/blas/base/ndarray/gsyr' );
```

#### gsyr( arrays )

Performs the symmetric rank 1 operation `A = alpha*x*x^T + A`, where `alpha` is a scalar, `x` is a one-dimensional ndarray, and `A` is an `N` by `N` symmetric matrix.

```javascript
var matrix = require( '@stdlib/ndarray/matrix/ctor' );
var vector = require( '@stdlib/ndarray/vector/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );

var x = vector( [ 1.0, 2.0, 3.0 ], 'generic' );
var A = matrix( [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ], 'generic' );

var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 2.0, {
    'dtype': 'generic'
});

var y = gsyr( [ x, A, uplo, alpha ] );
// returns <ndarray>[ [ 3.0, 6.0, 9.0 ], [ 2.0, 9.0, 14.0 ], [ 3.0, 2.0, 19.0 ] ]

var bool = ( y === A );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray corresponding to `x`.
    -   a two-dimensional input ndarray corresponding to `A`.
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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gsyr = require( '@stdlib/blas/base/ndarray/gsyr' );

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 3 ], 0, 10, opts );
var A = zeros( [ 3, 3 ], opts );

var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 1.0, opts );

var out = gsyr( [ x, A, uplo, alpha ] );
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
