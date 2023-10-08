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

# slice

> Return a view of an input ndarray when sliced along a specified dimension.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sliceDimension = require( '@stdlib/ndarray/base/slice-dimension' );
```

#### sliceDimension( x, dim, slice, strict, writable )

Returns a view of an input ndarray when sliced along a specified dimension.

```javascript
var Slice = require( '@stdlib/slice/ctor' );
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

var s = new Slice( null, null, -1 );
// returns <Slice>

var y = sliceDimension( x, 0, s, false, false );
// returns <ndarray>

sh = y.shape;
// returns [ 3, 2 ]

arr = ndarray2array( y );
// returns [ [ 5.0, 6.0 ], [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dim**: index of dimension along which to slice. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.
-   **slice**: a [`Slice`][@stdlib/slice/ctor] instance or an integer. If provided an integer less than zero, the corresponding element along the specified dimension is resolved relative to the last element along that dimension. For negative integers, the last element corresponds to the value `-1`.
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

<!-- eslint-disable new-cap -->

```javascript
var S = require( '@stdlib/slice/ctor' );
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var sliceDimension = require( '@stdlib/ndarray/base/slice-dimension' );

// Alias `null` to allow for more compact indexing expressions:
var _ = null;

// Create a linear ndarray buffer:
var buf = zeroTo( 27 );

// Create an ndarray:
var x = array( buf, {
    'shape': [ 3, 3, 3 ]
});

// Get each matrix...
var y1 = sliceDimension( x, 0, 0, false, false );
// returns <ndarray>

var a1 = ndarray2array( y1 );
// returns [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]

var y2 = sliceDimension( x, 0, 1, false, false );
// returns <ndarray>

var a2 = ndarray2array( y2 );
// returns [ [ 9, 10, 11 ], [ 12, 13, 14 ], [ 15, 16, 17 ] ]

var y3 = sliceDimension( x, 0, 2, false, false );
// returns <ndarray>

var a3 = ndarray2array( y3 );
// returns [ [ 18, 19, 20 ], [ 21, 22, 23 ], [ 24, 25, 26 ] ]

// Reverse the matrix order:
var s = S( _, _, -1 );
var y4 = sliceDimension( x, 0, s, false, false );
// returns <ndarray>

var a4 = ndarray2array( y4 );
// returns [...]

// Get the second rows from each matrix:
var y5 = sliceDimension( x, 1, 1, false, false );
// returns <ndarray>

var a5 = ndarray2array( y5 );
// returns [ [ 3, 4, 5 ], [ 12, 13, 14 ], [ 21, 22, 23 ] ]

// Get the second columns from each matrix:
var y6 = sliceDimension( x, 2, 1, false, false );
// returns <ndarray>

var a6 = ndarray2array( y6 );
// returns [ [ 1, 4, 7 ], [ 10, 13, 16 ], [ 19, 22, 25 ] ]
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

[@stdlib/slice/ctor]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
