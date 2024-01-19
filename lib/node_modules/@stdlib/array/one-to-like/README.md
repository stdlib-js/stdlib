<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# oneToLike

> Generate a linearly spaced numeric array whose elements increment by `1` starting from one and having the same length and data type as a provided input array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var oneToLike = require( '@stdlib/array/one-to-like' );
```

#### oneToLike( x\[, dtype] )

Generates a linearly spaced numeric array whose elements increment by `1` starting from one and having the same length and data type as a provided input array `x`.

```javascript
var arr = oneToLike( [ 0, 0, 0, 0, 0 ] );
// returns [ 1, 2, 3, 4, 5 ]
```

The function recognizes the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `complex128`: double-precision complex floating-point numbers
-   `complex64`: single-precision complex floating-point numbers
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `generic`: generic JavaScript values

By default, the output array data type is inferred from the provided array `x`. To return an array having a different data type, provide a `dtype` argument.

```javascript
var arr = oneToLike( [ 0, 0, 0, 0, 0 ], 'int32' );
// returns <Int32Array>[ 1, 2, 3, 4, 5 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For complex number arrays, each element of the returned array has an imaginary component equal to `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sort2hp = require( '@stdlib/blas/ext/base/gsort2hp' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var oneToLike = require( '@stdlib/array/one-to-like' );

// Generate an array of random numbers:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 10, 100, 200, opts );

// Generate a linearly-spaced array:
var y = oneToLike( x );

// Create a temporary array to avoid mutation:
var tmp = x.slice();

// Sort `y` according to the sort order of `x`:
sort2hp( x.length, 1, tmp, 1, y, 1 );

console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
