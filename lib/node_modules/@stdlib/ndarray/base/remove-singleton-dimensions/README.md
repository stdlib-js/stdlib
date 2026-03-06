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

# removeSingletonDimensions

> Remove singleton dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var removeSingletonDimensions = require( '@stdlib/ndarray/base/remove-singleton-dimensions' );
```

#### removeSingletonDimensions( x )

Returns an ndarray without singleton dimensions (i.e., dimensions whose size is equal to `1`).

```javascript
var array = require( '@stdlib/ndarray/array' );

// Create a 1x2x2 ndarray:
var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ] ] );
// returns <ndarray>

// Remove singleton dimensions:
var y = removeSingletonDimensions( x );
// returns <ndarray>

var sh = y.shape;
// returns [ 2, 2 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a provided ndarray does not have any singleton dimensions, the function returns the provided ndarray unchanged.
-   If a provided ndarray does have singleton dimensions, the function returns a new ndarray view.

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
var removeSingletonDimensions = require( '@stdlib/ndarray/base/remove-singleton-dimensions' );

// Create a 5-dimensional array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
    'ndmin': 5
});
// returns <ndarray>

// Remove singleton dimensions:
var y = removeSingletonDimensions( x );
// returns <ndarray>

// Retrieve the shape:
var sh = y.shape;
// returns [ 2, 2 ]

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
