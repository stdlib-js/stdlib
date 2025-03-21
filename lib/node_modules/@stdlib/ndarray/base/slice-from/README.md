<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# sliceFrom

> Return a shifted view of an input ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sliceFrom = require( '@stdlib/ndarray/base/slice-from' );
```

#### sliceFrom( x, start, strict, writable )

Returns a shifted view of an input ndarray.

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var s = [ 1, null ];
var y = sliceFrom( x, s, false, false );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **start**: an array of starting indices (inclusive). Each element must be either `null`, `undefined`, or an integer. A value of `null` or `undefined` indicates to include all elements along a corresponding dimension. A negative integer indicates to resolve a starting index relative to the last element along a corresponding dimension, with the last element having index `-1`.
-   **strict**: boolean indicating whether to enforce strict bounds checking.
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
var zeroTo = require( '@stdlib/array/base/zero-to' );
var sliceFrom = require( '@stdlib/ndarray/base/slice-from' );

// Create a linear ndarray buffer:
var buf = zeroTo( 27 );

// Create an ndarray:
var x = array( buf, {
    'shape': [ 3, 3, 3 ]
});

// Get the last two rows of each matrix:
var y1 = sliceFrom( x, [ null, 1, null ], false, false );
// returns <ndarray>

var a1 = ndarray2array( y1 );
// returns [ [ [ 3, 4, 5 ], [ 6, 7, 8 ] ], [ [ 12, 13, 14 ], [ 15, 16, 17 ] ], [ [ 21, 22, 23 ], [ 24, 25, 26 ] ] ]

// Get the last two rows and columns of each matrix:
var y2 = sliceFrom( x, [ null, 1, 1 ], false, false );
// returns <ndarray>

var a2 = ndarray2array( y2 );
// returns [ [ [ 4, 5 ], [ 7, 8 ] ], [ [ 13, 14 ], [ 16, 17 ] ], [ [ 22, 23 ], [ 25, 26 ] ] ]

// Get the last two 2x2 matrices:
var y3 = sliceFrom( x, [ 1, 1, 1 ], false, false );
// returns <ndarray>

var a3 = ndarray2array( y3 );
// returns [ [ [ 13, 14 ], [ 16, 17 ] ], [ [ 22, 23 ], [ 25, 26 ] ] ]
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
