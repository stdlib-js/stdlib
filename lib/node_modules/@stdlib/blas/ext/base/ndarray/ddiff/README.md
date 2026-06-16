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

# ddiff

> Calculate the k-th discrete forward difference of a one-dimensional double-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ddiff = require( '@stdlib/blas/ext/base/ndarray/ddiff' );
```

#### ddiff( arrays )

Calculates the k-th discrete forward difference of a one-dimensional double-precision floating-point ndarray.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
var prepend = new Float64Vector( [ 1.0 ] );
var append = new Float64Vector( [ 11.0 ] );
var out = new Float64Vector( 6 );
var workspace = new Float64Vector( 6 );
var k = scalar2ndarray( 1, {
    'dtype': 'generic'
});

var y = ddiff( [ x, prepend, append, out, workspace, k ] );
// returns <ndarray>[ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional ndarray containing values to prepend prior to computing differences.
    -   a one-dimensional ndarray containing values to append prior to computing differences.
    -   a one-dimensional output ndarray. Must have `N + N1 + N2 - k` elements, where `N` is the number of elements in the input ndarray, `N1` is the number of elements to prepend, `N2` is the number of elements to append, and `k` is the number of times to recursively compute differences.
    -   a one-dimensional workspace ndarray. Must have `N + N1 + N2 - 1` elements.
    -   a zero-dimensional ndarray specifying the number of times to recursively compute differences.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When `k <= 1`, the workspace ndarray is unused.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var zeros = require( '@stdlib/ndarray/zeros' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ddiff = require( '@stdlib/blas/ext/base/ndarray/ddiff' );

var N = 10;
var N1 = 2;
var N2 = 2;
var k = 4;
var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ N ], -100, 100, opts );
var p = discreteUniform( [ N1 ], -100, 100, opts );
var a = discreteUniform( [ N2 ], -100, 100, opts );
var out = zeros( [ N + N1 + N2 - k ], opts );
var w = zeros( [ N + N1 + N2 - 1 ], opts );
var knd = scalar2ndarray( k, {
    'dtype': 'generic'
});

console.log( 'x: ', ndarray2array( x ) );
console.log( 'prepend: ', ndarray2array( p ) );
console.log( 'append: ', ndarray2array( a ) );

ddiff( [ x, p, a, out, w, knd ] );
console.log( 'out: ', ndarray2array( out ) );
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
