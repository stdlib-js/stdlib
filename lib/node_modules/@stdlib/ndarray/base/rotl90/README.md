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

# rotl90

> Rotate a matrix (or a stack of matrices) 90 degrees counterclockwise.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var rotl90 = require( '@stdlib/ndarray/base/rotl90' );
```

#### rotl90( x, k, writable )

Rotates a matrix (or a stack of matrices) 90 degrees counterclockwise.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]

var y = rotl90( x, 1, false );
// returns <ndarray>[ [ 2, 4 ], [ 1, 3 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **k**: number of times to rotate by 90 degrees. Positive values rotate counterclockwise. Negative values rotate clockwise.
-   **writable**: boolean indicating whether a returned ndarray should be writable.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The `writable` parameter **only** applies to ndarray constructors supporting **read-only** instances.
-   If `k > 0`, the function rotates the matrix counterclockwise.
-   If `k < 0`, the function rotates the matrix clockwise.
-   The returned ndarray is a **view** of the input ndarray. Accordingly, writing to the original ndarray will **mutate** the returned ndarray and vice versa.
-   If provided an ndarray with fewer than two dimensions, the function does not perform a rotation and simply returns a new view of the input ndarray.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var rotl90 = require( '@stdlib/ndarray/base/rotl90' );

// Create a 2x3 matrix:
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );

// Rotate 90 degrees counterclockwise:
var y = rotl90( x, 1, false );
var arr = ndarray2array( y );
// returns [ [ 3, 6 ], [ 2, 5 ], [ 1, 4 ] ]

// Rotate 180 degrees:
y = rotl90( x, 2, false );
arr = ndarray2array( y );
// returns [ [ 6, 5, 4 ], [ 3, 2, 1 ] ]

// Rotate 270 degrees counterclockwise (equivalent to 90 degrees clockwise):
y = rotl90( x, 3, false );
arr = ndarray2array( y );
// returns [ [ 4, 1 ], [ 5, 2 ], [ 6, 3 ] ]

// Rotate 360 degrees (equivalent to no rotation):
y = rotl90( x, 4, false );
arr = ndarray2array( y );
// returns [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// Rotate 90 degrees clockwise (equivalent to k=3):
y = rotl90( x, -1, false );
arr = ndarray2array( y );
// returns [ [ 4, 1 ], [ 5, 2 ], [ 6, 3 ] ]
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
