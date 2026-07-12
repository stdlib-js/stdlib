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

# toFilled

> Return a new array with all elements within a specified range replaced with a provided value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toFilled = require( '@stdlib/array/base/to-filled' );
```

#### toFilled( x, value, start, end )

Returns a new array with all elements within a specified range replaced with a provided value.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = toFilled( x, 5, 1, 3 );
// returns [ 1, 5, 5, 4 ]

out = toFilled( x, 6, -3, -1 );
// returns [ 1, 6, 6, 4 ]
```

The function accepts the following arguments:

-   **x**: an input array.
-   **value**: fill value.
-   **start**: starting index (inclusive).
-   **end**: ending index (exclusive).

#### toFilled.assign( x, value, start, end, out, stride, offset )

Copies elements from one array to another array and replaces all elements within a specified range with a provided value.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = [ 0, 0, 0, 0 ];
var arr = toFilled.assign( x, 5, 1, 3, out, 1, 0 );
// returns [ 1, 5, 5, 4 ]

var bool = ( arr === out );
// returns true
```

The function accepts the following arguments:

-   **x**: an input array.
-   **value**: fill value.
-   **start**: starting index (inclusive).
-   **end**: ending index (exclusive).
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
var logEachMap = require( '@stdlib/console/log-each-map' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var papply = require( '@stdlib/utils/papply' );
var toFilled = require( '@stdlib/array/base/to-filled' );

// Define an array:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 10, -100, 100, opts );

// Define an array containing random fill values:
var values = discreteUniform( 100, -10000, 10000, opts );

// Define arrays containing random fill ranges:
var starts = discreteUniform( values.length, 0, x.length-1, opts );
var ends = discreteUniform( values.length, 1, x.length, opts );

// Randomly fill ranges of the input array:
logEachMap( 'fill with %d in [%d, %d) => x = [%s]', values, starts, ends, naryFunction( papply( toFilled, x ), 3 ) );
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
