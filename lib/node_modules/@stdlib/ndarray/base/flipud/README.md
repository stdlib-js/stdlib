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

# flipud

> Return a view of an input ndarray in which the order of elements along the second-to-last dimension is reversed.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var flipud = require( '@stdlib/ndarray/base/flipud' );
```

#### flipud( x, writable )

Returns a view of an input ndarray in which the order of elements along the second-to-last dimension is reversed.

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

var y = flipud( x, false );
// returns <ndarray>

sh = y.shape;
// returns [ 3, 2 ]

arr = ndarray2array( y );
// returns [ [ 5.0, 6.0 ], [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **writable**: boolean indicating whether a returned ndarray should be writable.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided a zero-dimensional ndarray, as the ndarray has no dimensions to reverse, the function simply returns a new view of the input ndarray. Similarly, if provided a one-dimensional ndarray, as the ndarray has only one dimension, the function simply returns a new view of the input ndarray.
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
var flipud = require( '@stdlib/ndarray/base/flipud' );

// Create a linear ndarray buffer:
var buf = zeroTo( 16 );

// Create a three-dimensional ndarray:
var x = array( buf, {
    'shape': [ 2, 4, 2 ]
});

// Reverse the order of second-to-last dimension:
var y = flipud( x, false );
// returns <ndarray>

var a = ndarray2array( y );
// returns [ [ [ 6, 7 ], [ 4, 5 ], [ 2, 3 ], [ 0, 1 ] ], [ [ 14, 15 ], [ 12, 13 ], [ 10, 11 ], [ 8, 9 ] ] ]
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
