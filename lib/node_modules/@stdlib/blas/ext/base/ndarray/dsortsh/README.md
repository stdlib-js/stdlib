<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# dsortsh

> Sort a one-dimensional double-precision floating-point ndarray using Shellsort.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dsortsh = require( '@stdlib/blas/ext/base/ndarray/dsortsh' );
```

#### dsortsh( arrays )

Sorts a one-dimensional double-precision floating-point ndarray using Shellsort.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

var out = dsortsh( [ x, order ] );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray and a zero-dimensional ndarray specifying the sort order.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is sorted **in-place** (i.e., the input ndarray is **mutated**).
-   When the sort order is less than zero, the input ndarray is sorted in **decreasing** order. When the sort order is greater than zero, the input ndarray is sorted in **increasing** order. When the sort order is equal to zero, the input ndarray is left unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^(4/3))`.
-   The algorithm is efficient for **shorter** ndarrays (typically `N <= 50`).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
var dsortsh = require( '@stdlib/blas/ext/base/ndarray/dsortsh' );

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
var x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});
console.log( 'Order:', ndarraylike2scalar( order ) );

dsortsh( [ x, order ] );
console.log( ndarray2array( x ) );
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
