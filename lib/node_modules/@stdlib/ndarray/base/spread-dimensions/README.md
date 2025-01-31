<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# spreadDimensions

> Expand the shape of an array to a specified dimensionality by spreading its dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var spreadDimensions = require( '@stdlib/ndarray/base/spread-dimensions' );
```

#### spreadDimensions( ndims, x, dims )

Expands the shape of an array to a specified dimensionality by spreading its dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Prepend a singleton dimension:
var y = spreadDimensions( 3, x, [ 1, 2 ] );
// returns <ndarray>

var sh = y.shape;
// returns [ 1, 2, 2 ]

var a = ndarray2array( y );
// returns [ [ [ 1, 2 ], [ 3, 4 ] ] ]

// Append a singleton dimension:
y = spreadDimensions( 3, x, [ 0, 1 ] );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2, 1 ]

a = ndarray2array( y );
// returns [ [ [ 1 ], [ 2 ] ], [ [ 3 ], [ 4 ] ] ]

// Insert a singleton dimension:
y = spreadDimensions( 3, x, [ 0, 2 ] );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 1, 2 ]

a = ndarray2array( y );
// returns [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`. If provided a negative dimension index, the position at which to place a respective dimension is computed as `ndims + index`.
-   Provided dimension indices must resolve to normalized dimension indices arranged in ascending order.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var numel = require( '@stdlib/ndarray/base/numel' );
var ind2sub = require( '@stdlib/ndarray/ind2sub' );
var spreadDimensions = require( '@stdlib/ndarray/base/spread-dimensions' );

// Create a 2-dimensional array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
    'order': 'column-major'
});
// returns <ndarray>

// Spread dimensions:
var y = spreadDimensions( 5, x, [ 1, 3 ] );
// returns <ndarray>

// Retrieve the shape:
var sh = y.shape;
// returns [ 1, 2, 1, 2, 1 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var i;
for ( i = 0; i < N; i++ ) {
    console.log( 'Y[%s] = %d', ind2sub( sh, i ).join( ', ' ), y.iget( i ) );
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
