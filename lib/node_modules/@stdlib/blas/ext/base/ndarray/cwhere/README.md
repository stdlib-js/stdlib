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

# cwhere

> Take elements from one of two one-dimensional single-precision complex floating-point ndarrays depending on a condition.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cwhere = require( '@stdlib/blas/ext/base/ndarray/cwhere' );
```

#### cwhere( arrays )

Takes elements from one of two one-dimensional single-precision complex floating-point ndarrays depending on a condition.

<!-- eslint-disable max-len -->

```javascript
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );

var condition = new BooleanVector( [ true, false, true ] );
var x = new Complex64Vector( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
var y = new Complex64Vector( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
var out = new Complex64Vector( 3 );

cwhere( [ condition, x, y, out ] );
// out => <ndarray>[ <Complex64>[ 1.0, -1.0 ], <Complex64>[ 5.0, -5.0 ], <Complex64>[ 3.0, -3.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional condition ndarray.
    -   first one-dimensional input ndarray.
    -   second one-dimensional input ndarray.
    -   a one-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cwhere = require( '@stdlib/blas/ext/base/ndarray/cwhere' );

var opts = {
    'dtype': 'float32'
};

var cbuf = bernoulli( 10, 0.5, {
    'dtype': 'uint8'
});
var condition = new BooleanVector( cbuf.buffer );
console.log( ndarray2array( condition ) );

var x = new Complex64Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var y = new Complex64Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( y ) );

var out = zeros( [ 10 ], {
    'dtype': 'complex64'
});

cwhere( [ condition, x, y, out ] );
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
