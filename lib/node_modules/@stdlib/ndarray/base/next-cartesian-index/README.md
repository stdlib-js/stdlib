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

# nextCartesianIndex

> Return the next Cartesian index (i.e., set of subscripts/dimension indices).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nextCartesianIndex = require( '@stdlib/ndarray/base/next-cartesian-index' );
```

#### nextCartesianIndex( shape, order, idx, dim )

Returns the next Cartesian index (i.e., set of subscripts/dimension indices).

```javascript
var idx = nextCartesianIndex( [ 2, 2, 2 ], 'row-major', [ 0, 0, 1 ], -1 );
// returns [ 0, 1, 0 ]
```

The function accepts the following arguments:

-   **shape**: array shape.
-   **order**: index iteration order. Must be either `row-major` (C-style) or `column-major` (Fortran-style).
-   **idx**: current dimension indices.
-   **dim**: index of the dimension from which to start incrementing (inclusive).

The `order` parameter specifies the index iteration order. When `order` is `row-major`, the last indices change fastest, and, when the `order` is `column-major`, the first indices change fastest.

```javascript
var idx = nextCartesianIndex( [ 2, 2, 2 ], 'column-major', [ 0, 1, 0 ], 0 );
// returns [ 1, 1, 0 ]
```

The `dim` parameter controls which dimensions are incremented. When `order` is `row-major`, if `dim` equals `shape.length-1` (or equivalently `-1`), the function increments over all dimensions from right-to-left (last-to-first). Similarly, when `order` is `column-major`, if `dim` equals `0`, the function increments over all dimensions from left-to-right (first-to-last). To restrict which dimensions can be incremented, set `dim` to a value other than the respective end. For example,

```javascript
// Increment starting from the second-to-last dimension:
var idx = nextCartesianIndex( [ 2, 2, 2 ], 'row-major', [ 0, 0, 0 ], -2 );
// returns [ 0, 1, 0 ]

idx = nextCartesianIndex( [ 2, 2, 2 ], 'row-major', idx, -2 );
// returns [ 1, 0, 0 ]

idx = nextCartesianIndex( [ 2, 2, 2 ], 'row-major', idx, -2 );
// returns [ 1, 1, 0 ]
```

#### nextCartesianIndex.assign( shape, order, idx, dim, out )

Returns the next Cartesian index (i.e., set of subscripts/dimension indices) and assigns results to a provided output array.

```javascript
var out = [ 0, 0, 0 ];
var idx = nextCartesianIndex.assign( [ 2, 2, 2 ], 'row-major', [ 0, 0, 1 ], -1, out );
// returns [ 0, 1, 0 ]

var bool = ( out === idx );
// returns true
```

The function accepts the following arguments:

-   **shape**: array shape.
-   **order**: index iteration order. Must be either `row-major` (C-style) or `column-major` (Fortran-style).
-   **idx**: current dimension indices.
-   **dim**: index of the dimension from which to start incrementing (inclusive).
-   **out**: output array.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does not check whether the current index is the "last" index. Instead, if the function is provided dimension indices corresponding to the last element, the function will cycle back to the "first" index.
-   If provided an empty shape (i.e., a shape corresponding to a zero-dimensional ndarray) or a dimension index `dim` which is out-of-bounds, the function returns `null`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var nextCartesianIndex = require( '@stdlib/ndarray/base/next-cartesian-index' );

// Create an ndarray:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});

// Initialize a set of indices:
var idx = [ 0, 0, 0 ];

// Iterate over each element in the array...
var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x[%s] = %d', idx.join( ',' ), x.get.apply( x, idx ) );
    idx = nextCartesianIndex.assign( x.shape, x.order, idx, -1, idx );
}
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
