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

# atnd

> Return an element from an n-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var atnd = require( '@stdlib/array/base/atnd' );
```

#### atnd( x, i0\[, ...indices] )

Returns an element from an n-dimensional nested array.

```javascript
var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = atnd( x, 0, 1 );
// returns 2

out = atnd( x, 1, 0 );
// returns 3
```

The function accepts the following arguments:

-   **x**: n-dimensional nested input array.
-   **i0**: first dimension index.
-   **indices**: dimension indices.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Negative indices are resolved relative to the last element along the respective dimension, with the last element corresponding to `-1`.
-   If provided out-of-bounds indices, the function always returns `undefined`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var papply = require( '@stdlib/utils/papply' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
var binary2d = require( '@stdlib/array/base/binary2d' );
var zeros2d = require( '@stdlib/array/base/zeros2d' );
var atnd = require( '@stdlib/array/base/atnd' );

var shape = [ 5, 5 ];

// Define a nested input array:
var x = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

// Define arrays containing random index values:
var i0 = filled2dBy( shape, discreteUniform( -shape[0], shape[0]-1 ) );
console.log( i0 );

var i1 = filled2dBy( shape, discreteUniform( -shape[1], shape[1]-1 ) );
console.log( i1 );

// Define an output array:
var out = zeros2d( shape );
console.log( out );

// Fill the output array with randomly selected values from the input array:
binary2d( [ i0, i1, out ], shape, papply( atnd, x ) );
console.log( out );
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
