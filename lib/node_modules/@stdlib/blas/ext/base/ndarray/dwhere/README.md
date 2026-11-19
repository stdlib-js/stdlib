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

# dwhere

> Take elements from one of two one-dimensional double-precision floating-point ndarrays depending on a condition.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dwhere = require( '@stdlib/blas/ext/base/ndarray/dwhere' );
```

#### dwhere( arrays )

Takes elements from one of two one-dimensional double-precision floating-point ndarrays depending on a condition.

```javascript
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );

var condition = new BooleanVector( [ true, false, true, false, true ] );
var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Vector( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var out = new Float64Vector( 5 );

dwhere( [ condition, x, y, out ] );
// out => <ndarray>[ 1.0, 7.0, 3.0, 9.0, 5.0 ]
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
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dwhere = require( '@stdlib/blas/ext/base/ndarray/dwhere' );

var opts = {
    'dtype': 'float64'
};

var cbuf = bernoulli( 10, 0.5, {
    'dtype': 'uint8'
});
var condition = new BooleanVector( cbuf.buffer );
console.log( ndarray2array( condition ) );

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( y ) );

var out = discreteUniform( [ 10 ], -100, 100, opts );

dwhere( [ condition, x, y, out ] );
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
