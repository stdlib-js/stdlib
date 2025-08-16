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

# at5d

> Return an element from a five-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var at5d = require( '@stdlib/array/base/at5d' );
```

#### at5d( x, i0, i1, i2, i3, i4 )

Returns an element from a five-dimensional nested array.

```javascript
var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];

var out = at5d( x, 0, 0, 0, 0, 1 );
// returns 2

out = at5d( x, 0, 0, 0, 1, 0 );
// returns 3
```

The function accepts the following arguments:

-   **x**: five-dimensional nested input array.
-   **i0**: first dimension index.
-   **i1**: second dimension index.
-   **i2**: third dimension index.
-   **i3**: fourth dimension index.
-   **i4**: fifth dimension index.

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
var filled5dBy = require( '@stdlib/array/base/filled5d-by' );
var quinary5d = require( '@stdlib/array/base/quinary5d' );
var zeros5d = require( '@stdlib/array/base/zeros5d' );
var at5d = require( '@stdlib/array/base/at5d' );

var shape = [ 2, 2, 2, 2, 2 ];

// Define a nested input array:
var x = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

// Define arrays containing random index values:
var i0 = filled5dBy( shape, discreteUniform( -shape[0], shape[0]-1 ) );
console.log( i0 );

var i1 = filled5dBy( shape, discreteUniform( -shape[1], shape[1]-1 ) );
console.log( i1 );

var i2 = filled5dBy( shape, discreteUniform( -shape[2], shape[2]-1 ) );
console.log( i2 );

var i3 = filled5dBy( shape, discreteUniform( -shape[3], shape[3]-1 ) );
console.log( i3 );

var i4 = filled5dBy( shape, discreteUniform( -shape[4], shape[4]-1 ) );
console.log( i4 );

// Define an output array:
var out = zeros5d( shape );
console.log( out );

// Fill the output array with randomly selected values from the input array:
quinary5d( [ i0, i1, i2, i3, i4, out ], shape, papply( at5d, x ) );
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
