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

# rot180

> Rotate an ndarray 180 degrees in a specified plane.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var rot180 = require( '@stdlib/ndarray/base/rot180' );
```

#### rot180( x, dims, writable )

Rotates an ndarray 180 degrees in a specified plane.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]

var y = rot180( x, [ 0, 1 ], false );
// returns <ndarray>[ [ 4, 3 ], [ 2, 1 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dims**: dimension indices defining the plane of rotation. Must contain exactly two unique dimension indices. If a dimension index is provided as an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.
-   **writable**: boolean indicating whether a returned ndarray should be writable.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
-   The `writable` parameter **only** applies to ndarray constructors supporting **read-only** instances.
-   The returned ndarray is a **view** of the input ndarray. Accordingly, writing to the original ndarray will **mutate** the returned ndarray and vice versa.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var rot180 = require( '@stdlib/ndarray/base/rot180' );

// Create a 2x3 matrix:
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );

// Rotate 180 degrees in the (0,1) plane:
var y = rot180( x, [ 0, 1 ], false );
var arr = ndarray2array( y );
// returns [ [ 6, 5, 4 ], [ 3, 2, 1 ] ]

// Supports negative dimension indices:
y = rot180( x, [ -2, -1 ], false );
arr = ndarray2array( y );
// returns [ [ 6, 5, 4 ], [ 3, 2, 1 ] ]

// Rotating twice returns the original arrangement:
y = rot180( rot180( x, [ 0, 1 ], false ), [ 0, 1 ], false );
arr = ndarray2array( y );
// returns [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
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
