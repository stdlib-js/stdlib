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

# sediff

> Calculate the differences between consecutive elements of a one-dimensional single-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sediff = require( '@stdlib/blas/ext/base/ndarray/sediff' );
```

#### sediff( arrays )

Calculates the differences between consecutive elements of a one-dimensional single-precision floating-point ndarray.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );

var x = new Float32Vector( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
var prepend = new Float32Vector( [ 1.0 ] );
var append = new Float32Vector( [ 11.0 ] );
var out = new Float32Vector( 6 );

var y = sediff( [ x, prepend, append, out ] );
// returns <ndarray>[ 1.0, 2.0, 2.0, 2.0, 2.0, 11.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional ndarray containing values to prepend prior to computing differences.
    -   a one-dimensional ndarray containing values to append prior to computing differences.
    -   a one-dimensional output ndarray. Must have `N + N1 + N2 - 1` elements, where `N` is the number of elements in the input ndarray, `N1` is the number of elements to prepend, and `N2` is the number of elements to append.

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
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var sediff = require( '@stdlib/blas/ext/base/ndarray/sediff' );

var N = 10;
var N1 = 2;
var N2 = 2;
var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ N ], -100, 100, opts );
var p = discreteUniform( [ N1 ], -100, 100, opts );
var a = discreteUniform( [ N2 ], -100, 100, opts );
var out = zeros( [ N + N1 + N2 - 1 ], opts );

console.log( 'x: ', ndarray2array( x ) );
console.log( 'prepend: ', ndarray2array( p ) );
console.log( 'append: ', ndarray2array( a ) );

sediff( [ x, p, a, out ] );
console.log( 'out: ', ndarray2array( out ) );
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
