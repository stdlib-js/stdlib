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

# toInsertedAt

> Return a new array containing every element from an input array and with a provided value inserted at a specified index.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toInsertedAt = require( '@stdlib/array/base/to-inserted-at' );
```

#### toInsertedAt( x, index, value )

Returns a new array containing every element from an input array and with a provided value inserted at a specified index.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = toInsertedAt( x, 0, 5 );
// returns [ 5, 1, 2, 3, 4 ]

out = toInsertedAt( x, -1, 6 );
// returns [ 1, 2, 3, 4, 6 ]
```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.
-   **value**: value to insert.

### toInsertedAt.assign( x, index, value, out, stride, offset )

Copies elements from one array to another array and inserts a provided value at a specified index.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = [ 0, 0, 0, 0, 0 ];
var arr = toInsertedAt.assign( x, 0, 5, out, 1, 0 );
// returns [ 5, 1, 2, 3, 4 ]

var bool = ( arr === out );
// returns true
```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.
-   **value**: value to insert.
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Negative indices are resolved relative to the last array element, with the last element corresponding to `-1`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var toInsertedAt = require( '@stdlib/array/base/to-inserted-at' );

// Define an array:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 5, -100, 100, opts );

// Define an array containing random index values:
var indices = discreteUniform( 100, -x.length, x.length, opts );

// Define an array with random values to insert:
var values = discreteUniform( indices.length, -10000, 10000, opts );

// Randomly insert elements in the input array:
var i;
for ( i = 0; i < indices.length; i++ ) {
    console.log( 'x = [%s]', toInsertedAt( x, indices[ i ], values[ i ] ).join( ',' ) );
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
