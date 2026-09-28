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

# swxsa

> Subtract a scalar constant from each element in an input one-dimensional single-precision floating-point ndarray and assign the results to elements in a one-dimensional single-precision floating-point output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var swxsa = require( '@stdlib/blas/ext/base/ndarray/swxsa' );
```

#### swxsa( arrays )

Subtracts a scalar constant from each element in an input one-dimensional single-precision floating-point ndarray and assigns the results to elements in a one-dimensional single-precision floating-point output ndarray.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float32Vector( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var w = new Float32Vector( 8 );

var alpha = scalar2ndarray( 5.0, {
    'dtype': 'float32'
});

swxsa( [ x, w, alpha ] );
// w => <ndarray>[ -7.0, -4.0, -2.0, -10.0, -1.0, -5.0, -6.0, -8.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.
    -   a zero-dimensional ndarray containing the scalar constant to subtract.

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
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var swxsa = require( '@stdlib/blas/ext/base/ndarray/swxsa' );

var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var w = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( w ) );

var alpha = scalar2ndarray( 5.0, opts );
console.log( 'Alpha: %d', ndarraylike2scalar( alpha ) );

swxsa( [ x, w, alpha ] );
console.log( ndarray2array( w ) );
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
