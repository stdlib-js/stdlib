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

# at4d

> Return an element from a four-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var at4d = require( '@stdlib/array/base/at4d' );
```

#### at4d( x, i0, i1, i2, i3 )

Returns an element from a four-dimensional nested array.

```javascript
var x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];

var out = at4d( x, 0, 0, 0, 1 );
// returns 2

out = at4d( x, 0, 0, 1, 0 );
// returns 3
```

The function accepts the following arguments:

-   **x**: four-dimensional nested input array.
-   **i0**: first dimension index.
-   **i1**: second dimension index.
-   **i2**: third dimension index.
-   **i3**: fourth dimension index.

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
var filled4dBy = require( '@stdlib/array/base/filled4d-by' );
var quaternary4d = require( '@stdlib/array/base/quaternary4d' );
var zeros4d = require( '@stdlib/array/base/zeros4d' );
var at4d = require( '@stdlib/array/base/at4d' );

var shape = [ 2, 2, 4, 4 ];

// Define a nested input array:
var x = filled4dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

// Define arrays containing random index values:
var i0 = filled4dBy( shape, discreteUniform( -shape[0], shape[0]-1 ) );
console.log( i0 );

var i1 = filled4dBy( shape, discreteUniform( -shape[1], shape[1]-1 ) );
console.log( i1 );

var i2 = filled4dBy( shape, discreteUniform( -shape[2], shape[2]-1 ) );
console.log( i2 );

var i3 = filled4dBy( shape, discreteUniform( -shape[3], shape[3]-1 ) );
console.log( i3 );

// Define an output array:
var out = zeros4d( shape );
console.log( out );

// Fill the output array with randomly selected values from the input array:
quaternary4d( [ i0, i1, i2, i3, out ], shape, papply( at4d, x ) );
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
