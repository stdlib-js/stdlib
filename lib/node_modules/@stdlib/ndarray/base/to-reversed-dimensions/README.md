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

# toReversedDimensions

> Return a new ndarray where the order of elements of an input ndarray along specified dimensions is reversed.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toReversedDimensions = require( '@stdlib/ndarray/base/to-reversed-dimensions' );
```

#### toReversedDimensions( x, dims )

Returns a new ndarray where the order of elements of an input ndarray along specified dimensions is reversed.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ] );
// returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = toReversedDimensions( x, [ 0, 1 ] );
// returns <ndarray>[ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dims**: dimension indices along which to reverse elements. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var toReversedDimensions = require( '@stdlib/ndarray/base/to-reversed-dimensions' );

// Create a 3x2 matrix:
var x = array( [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] );

// Reverse the order of the first dimension:
var y = toReversedDimensions( x, [ 0 ] );
var arr = ndarray2array( y );
// returns [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]

// Reverse the order of the second dimension:
y = toReversedDimensions( x, [ 1 ] );
arr = ndarray2array( y );
// returns [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ]

// Reverse the order of all dimensions:
y = toReversedDimensions( x, [ 0, 1 ] );
arr = ndarray2array( y );
// returns [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ]

// Supports negative dimension indices:
y = toReversedDimensions( x, [ -2, -1 ] );
arr = ndarray2array( y );
// returns [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ]
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
