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

# reverseDimensions

> Return a view of an input ndarray in which the order of elements along specified dimensions is reversed.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reverseDimensions = require( '@stdlib/ndarray/base/reverse-dimensions' );
```

#### reverseDimensions( x, dims, writable )

Returns a view of an input ndarray in which the order of elements along specified dimensions is reversed.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ] );
// returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = reverseDimensions( x, [ 0, 1 ], false );
// returns <ndarray>[ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dims**: dimension indices along which to reverse elements. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.
-   **writable**: boolean indicating whether a returned ndarray should be writable.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The `writable` parameter **only** applies to ndarray constructors supporting **read-only** instances.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var reverseDimensions = require( '@stdlib/ndarray/base/reverse-dimensions' );

// Create a 3x2 matrix:
var x = array( [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] );

// Reverse the order of the first axis:
var y = reverseDimensions( x, [ 0 ], false );
var arr = ndarray2array( y );
// returns [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]

// Reverse the order of the second axis:
y = reverseDimensions( x, [ 1 ], false );
arr = ndarray2array( y );
// returns [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ]

// Reverse the order of all axes:
y = reverseDimensions( x, [ 0, 1 ], false );
arr = ndarray2array( y );
// returns [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ]

// Supports negative dimension indices:
y = reverseDimensions( x, [ -2, -1 ], false );
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

</section>

<!-- /.links -->
