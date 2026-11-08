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

# cdiff

> Calculate the k-th discrete forward difference of a one-dimensional single-precision complex floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdiff = require( '@stdlib/blas/ext/base/ndarray/cdiff' );
```

#### cdiff( arrays )

Calculates the k-th discrete forward difference of a one-dimensional single-precision complex floating-point ndarray.

<!-- eslint-disable max-len -->

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Complex64Vector( [ 2.0, -2.0, 4.0, -4.0 ] );
var prepend = new Complex64Vector( [ 1.0, -1.0 ] );
var append = new Complex64Vector( [ 7.0, -7.0 ] );
var out = new Complex64Vector( 3 );
var workspace = new Complex64Vector( 3 );
var k = scalar2ndarray( 1, {
    'dtype': 'generic'
});

var y = cdiff( [ x, prepend, append, out, workspace, k ] );
// returns <ndarray>[ <Complex64>[ 1.0, -1.0 ], <Complex64>[ 2.0, -2.0 ], <Complex64>[ 3.0, -3.0 ] ]
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var zeros = require( '@stdlib/ndarray/zeros' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cdiff = require( '@stdlib/blas/ext/base/ndarray/cdiff' );

var N = 10;
var N1 = 2;
var N2 = 2;
var k = 4;
var opts = {
    'dtype': 'float32'
};

var x = new Complex64Vector( discreteUniform( N*2, -100, 100, opts ) );
var p = new Complex64Vector( discreteUniform( N1*2, -100, 100, opts ) );
var a = new Complex64Vector( discreteUniform( N2*2, -100, 100, opts ) );

opts = {
    'dtype': 'complex64'
};
var out = zeros( [ N + N1 + N2 - k ], opts );
var w = zeros( [ N + N1 + N2 - 1 ], opts );
var knd = scalar2ndarray( k, {
    'dtype': 'generic'
});

console.log( 'x: ', ndarray2array( x ) );
console.log( 'prepend: ', ndarray2array( p ) );
console.log( 'append: ', ndarray2array( a ) );

cdiff( [ x, p, a, out, w, knd ] );
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
