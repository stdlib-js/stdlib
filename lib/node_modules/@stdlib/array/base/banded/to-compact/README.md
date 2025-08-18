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

# toCompact

> Convert a two-dimensional banded nested array to compact banded storage.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toCompact = require( '@stdlib/array/base/banded/to-compact' );
```

#### toCompact( arr, ku, kl, colexicographic )

Converts a two-dimensional banded nested array to compact banded storage.

```javascript
var x = [ [ -1, 2, 0 ], [ 2, -2, 4 ], [ 0, 4, -3 ] ];

var out = toCompact( x, 1, 1, false );
// returns [ [ 0, 2, 4 ], [ -1, -2, -3 ], [ 2, 4, 0 ] ]
```

The function accepts the following arguments:

-   **arr**: input two-dimensional nested array.
-   **ku**: number of super-diagonals.
-   **kl**: number of sub-diagonals.
-   **colexicographic**: boolean specifying whether to store diagonals in colexicographic access order.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable no-multi-spaces -->

<!-- eslint no-undef: "error" -->

```javascript
var toCompact = require( '@stdlib/array/base/banded/to-compact' );

// Define a banded matrix:
var A = [
    [  1,  2,  3,   0,  0 ],
    [ -2,  4,  5,   6,  0 ],
    [ -3, -5,  7,   8,  9 ],
    [  0, -6, -8,  10, 11 ],
    [  0,  0, -9, -11, 12 ]
];

// Convert the matrix to lexicographic compact form:
var AC = toCompact( A, 2, 2, false );
/* e.g., returns =>
    [
        [  0,  0,  3,   6,  9 ],
        [  0,  2,  5,   8, 11 ],
        [  1,  4,  7,  10, 12 ],
        [ -2, -5, -8, -11,  0 ],
        [ -3, -6, -9,   0,  0 ]
    ]
*/

AC = toCompact( A, 2, 1, false );
/* e.g., returns =>
    [
        [  0,  0,  3,   6,  9 ],
        [  0,  2,  5,   8, 11 ],
        [  1,  4,  7,  10, 12 ],
        [ -2, -5, -8, -11,  0 ]
    ]
*/

AC = toCompact( A, 1, 2, false );
/* e.g., returns =>
    [
        [  0,  2,  5,   8, 11 ],
        [  1,  4,  7,  10, 12 ],
        [ -2, -5, -8, -11,  0 ],
        [ -3, -6, -9,   0,  0 ]
    ]
*/

// Convert the matrix to colexicographic compact form:
AC = toCompact( A, 2, 2, true );
/* e.g., returns =>
    [
        [ 0,  0,  1,  -2, -3 ],
        [ 0,  2,  4,  -5, -6 ],
        [ 3,  5,  7,  -8, -9 ],
        [ 6,  8, 10, -11,  0 ],
        [ 9, 11, 12,   0,  0 ]
    ]
*/
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
