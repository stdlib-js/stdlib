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

# dlastIndexOfFalsy

> Return the index of the last falsy element in a one-dimensional double-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dlastIndexOfFalsy = require( '@stdlib/blas/ext/base/ndarray/dlast-index-of-falsy' );
```

#### dlastIndexOfFalsy( arrays )

Returns the index of the last falsy element in a one-dimensional double-precision floating-point ndarray.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 1.0, 0.0, 3.0, 0.0 ] );

var fromIndex = scalar2ndarray( 3, {
    'dtype': 'generic'
});

var idx = dlastIndexOfFalsy( [ x, fromIndex ] );
// returns 3
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the index from which to begin searching.

If the function is unable to find a falsy element, the function returns `-1`.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );

var fromIndex = scalar2ndarray( 3, {
    'dtype': 'generic'
});

var idx = dlastIndexOfFalsy( [ x, fromIndex ] );
// returns -1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function treats `NaN` values as falsy.
-   If a specified starting search index is negative, the function resolves the starting search index by counting backward from the last element (where `-1` refers to the last element).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random/bernoulli' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dlastIndexOfFalsy = require( '@stdlib/blas/ext/base/ndarray/dlast-index-of-falsy' );

var opts = {
    'dtype': 'float64'
};

var x = bernoulli( [ 10 ], 0.7, opts );
console.log( ndarray2array( x ) );

var fromIndex = scalar2ndarray( 9, {
    'dtype': 'generic'
});

var idx = dlastIndexOfFalsy( [ x, fromIndex ] );
console.log( idx );
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
