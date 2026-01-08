<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# expandDimensions

> Expand the shape of an array by inserting a new dimension of size one at a specified axis.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var expandDimensions = require( '@stdlib/ndarray/base/expand-dimensions' );
```

#### expandDimensions( x, axis, writable )

Expands the shape of an array `x` by inserting a new dimension of size one at a specified `axis`.

```javascript
var getShape = require( '@stdlib/ndarray/shape' );
var array = require( '@stdlib/ndarray/array' );

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]

// Prepend a singleton dimension:
var y = expandDimensions( x, 0, false );
// returns <ndarray>[ [ [ 1, 2 ], [ 3, 4 ] ] ]

var sh = getShape( y );
// returns [ 1, 2, 2 ]

// Append a singleton dimension:
y = expandDimensions( x, 2, false );
// returns <ndarray>[ [ [ 1 ], [ 2 ] ], [ [ 3 ], [ 4 ] ] ]

sh = getShape( y );
// returns [ 2, 2, 1 ]

// Insert a singleton dimension:
y = expandDimensions( x, 1, false );
// returns <ndarray>[ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ]

sh = getShape( y );
// returns [ 2, 1, 2 ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **axis**: axis at which to insert a singleton dimension
-   **writable**: boolean indicating whether a returned ndarray should be writable.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A provided axis must reside on the interval `[-N-1, N]`, where `N` is the rank (i.e., number of dimensions) of the provided input array. If provided a negative `axis`, the axis position at which to insert a singleton dimension is computed as `N + axis + 1`. Hence, if provided `-1`, the resolved axis position is `N` (i.e., a singleton dimension is appended to the input array).
-   The `writable` parameter **only** applies to ndarray constructors supporting **read-only** instances.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var expandDimensions = require( '@stdlib/ndarray/base/expand-dimensions' );

var x = uniform( [ 3, 3, 3 ], -10.0, 10.0 );
console.log( ndarray2array( x ) );

var y = expandDimensions( x, 1, false );
console.log( ndarray2array( y ) );
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
