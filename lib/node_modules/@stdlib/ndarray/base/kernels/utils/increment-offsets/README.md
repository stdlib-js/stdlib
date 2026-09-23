<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# incrementOffsets

> Increment index offsets according to a list of increments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var incrementOffsets = require( '@stdlib/ndarray/base/kernels/utils/increment-offsets' );
```

#### incrementOffsets( offsets, inc )

Increments index offsets according to a list of increments.

```javascript
var offsets = [ 0, 1 ];
var out = incrementOffsets( offsets, [ 1, 2 ] );
// returns [ 1, 3 ]

var bool = ( out === offsets );
// returns true
```

The function supports the following parameters:

-   **offsets**: list of index offsets.
-   **inc**: list of increments.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function mutates the input array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var slice = require( '@stdlib/ndarray/slice' );
var E = require( '@stdlib/slice/multi' );
var ndarraylike2descriptor = require( '@stdlib/ndarray/base/ndarraylike2descriptor' );
var getOffsets = require( '@stdlib/ndarray/base/offsets' );
var incrementOffsets = require( '@stdlib/ndarray/base/kernels/utils/increment-offsets' );

// Create an array:
var x = zeros( [ 3, 3, 3 ] );
// returns <ndarray>

// Define a slice:
var s = E( 0, null, null ); // 0,:,:

// Create an ndarray view of the first subarray in the stack:
var view = slice( x, s );

// Create a list of ndarray descriptors:
var desc = [
    ndarraylike2descriptor( view ),
    ndarraylike2descriptor( view ),
    ndarraylike2descriptor( view )
];

// Resolve the offsets from the descriptors:
var offsets = getOffsets( desc );
console.log( offsets );

// Adjust the offsets:
var out = incrementOffsets( offsets, [ 0, 9, 18 ] );
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
