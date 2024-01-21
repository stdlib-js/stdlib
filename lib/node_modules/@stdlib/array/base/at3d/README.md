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

# at3d

> Return an element from a three-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var at3d = require( '@stdlib/array/base/at3d' );
```

#### at3d( x, i0, i1, i2 )

Return an element from a three-dimensional nested array.

```javascript
var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];

var out = at3d( x, 0, 0, 1 );
// returns 2

out = at3d( x, 0, 1, 0 );
// returns 3
```

The function accepts the following arguments:

-   **x**: three-dimensional nested input array.
-   **i0**: first dimension index.
-   **i1**: second dimension index.
-   **i2**: third dimension index.

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
var filled3dBy = require( '@stdlib/array/base/filled3d-by' );
var ternary3d = require( '@stdlib/array/base/ternary3d' );
var zeros3d = require( '@stdlib/array/base/zeros3d' );
var at3d = require( '@stdlib/array/base/at3d' );

var shape = [ 3, 3, 3 ];

// Define a nested input array:
var x = filled3dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

// Define arrays containing random index values:
var i0 = filled3dBy( shape, discreteUniform( -shape[0], shape[0]-1 ) );
console.log( i0 );

var i1 = filled3dBy( shape, discreteUniform( -shape[1], shape[1]-1 ) );
console.log( i1 );

var i2 = filled3dBy( shape, discreteUniform( -shape[2], shape[2]-1 ) );
console.log( i2 );

// Define an output array:
var out = zeros3d( shape );
console.log( out );

// Fill the output array with randomly selected values from the input array:
ternary3d( [ i0, i1, i2, out ], shape, papply( at3d, x ) );
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
