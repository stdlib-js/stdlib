<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# toReversed

> Return a new ndarray where the order of elements of an input ndarray is reversed along each dimension.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toReversed = require( '@stdlib/ndarray/base/to-reversed' );
```

#### toReversed( x )

Returns a new ndarray where the order of elements of an input ndarray is reversed along each dimension.

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

var y = toReversed( x );
// returns <ndarray>

sh = y.shape;
// returns [ 3, 2 ]

arr = ndarray2array( y );
// returns [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.

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
var zeroTo = require( '@stdlib/array/base/zero-to' );
var toReversed = require( '@stdlib/ndarray/base/to-reversed' );

// Create a linear ndarray buffer:
var buf = zeroTo( 16 );

// Create a one-dimensional ndarray:
var x1 = array( buf, {
    'shape': [ 16 ]
});

// Reverse element order:
var y1 = toReversed( x1, false );
// returns <ndarray>

var a1 = ndarray2array( y1 );
// returns [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

// Create a two-dimensional ndarray:
var x2 = array( buf, {
    'shape': [ 4, 4 ]
});

// Reverse element order:
var y2 = toReversed( x2, false );
// returns <ndarray>

var a2 = ndarray2array( y2 );
// returns [ [ 15, 14, 13, 12 ], [ 11, 10, 9, 8 ], [ 7, 6, 5, 4 ], [ 3, 2, 1, 0 ] ]

// Create a three-dimensional ndarray:
var x3 = array( buf, {
    'shape': [ 2, 4, 2 ]
});

// Reverse element order:
var y3 = toReversed( x3, false );
// returns <ndarray>

var a3 = ndarray2array( y3 );
// returns [ [ [ 15, 14 ], [ 13, 12 ], [ 11, 10 ], [ 9, 8 ] ], [ [ 7, 6 ], [ 5, 4 ], [ 3, 2 ], [ 1, 0 ] ] ]
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
