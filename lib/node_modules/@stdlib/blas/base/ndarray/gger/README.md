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

# gger

> Perform the rank 1 operation `A = alpha*x*y^T + A`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gger = require( '@stdlib/blas/base/ndarray/gger' );
```

#### gger( arrays )

Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` and `y` are one-dimensional ndarrays, and `A` is an `M` by `N` matrix.

<!-- eslint-disable max-len -->

```javascript
var matrix = require( '@stdlib/ndarray/matrix/ctor' );
var vector = require( '@stdlib/ndarray/vector/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = vector( [ 1.0, 2.0 ], 'generic' );
var y = vector( [ 3.0, 4.0, 5.0 ], 'generic' );
var A = matrix( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ], 'generic' );

var alpha = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

var z = gger( [ x, y, A, alpha ] );
// returns <ndarray>[ [ 4.0, 6.0, 8.0 ], [ 10.0, 13.0, 16.0 ] ]

var bool = ( z === A );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray corresponding to `x`.
    -   a one-dimensional input ndarray corresponding to `y`.
    -   a two-dimensional input/output ndarray corresponding to `A`.
    -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.

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
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gger = require( '@stdlib/blas/base/ndarray/gger' );

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 3 ], 0, 10, opts );
var y = discreteUniform( [ 4 ], 0, 10, opts );
var A = discreteUniform( [ 3, 4 ], 0, 10, opts );

var alpha = scalar2ndarray( 1.0, opts );

var out = gger( [ x, y, A, alpha ] );
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
