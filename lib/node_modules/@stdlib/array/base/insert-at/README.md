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

# insertAt

> Insert an element into an array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var insertAt = require( '@stdlib/array/base/insert-at' );
```

#### insertAt( x, index, value )

Inserts an element into an array.

```javascript
var x = [ 1, 1, 2, 3, 3 ];

var y = insertAt( x, -3, 4 );
// returns [ 1, 1, 4, 2, 3, 3 ]

var bool = ( x === y );
// returns true
```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.
-   **value**: value to insert.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Negative indices are resolved relative to the last array element, with the last element corresponding to `-1`.
-   If provided an out-of-bounds index, the function clamps the index to the beginning or end of the array.
-   The function mutates the input array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var randi = require( '@stdlib/random/base/discrete-uniform' );
var insertAt = require( '@stdlib/array/base/insert-at' );

// Create an array of random numbers:
var x = discreteUniform( 10, 0, 5, {
    'dtype': 'generic'
});
// returns [...]

console.log( x );

// Insert a random element:
var y = insertAt( x, randi( 0, x.length ), randi( 100, 105 ) );
// returns [...]

console.log( y );
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
