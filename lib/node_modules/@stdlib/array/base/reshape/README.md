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

# reshape

> Reshape a nested array into another nested array having a desired shape.

<section class="usage">

## Usage

```javascript
var reshape = require( '@stdlib/array/base/reshape' );
```

#### reshape( x, fromShape, toShape, colexicographic )

Reshapes a nested array into another nested array having a desired shape.

```javascript
var x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];

var out = reshape( x, [ 2, 3 ], [ 3, 2 ], false );
// returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
```

-   **x**: input array.
-   **fromShape**: input array shape.
-   **toShape**: output array shape.
-   **colexicographic**: boolean indicating whether to reshape the array in colexicographic order.

To reshape in colexicographic order, set the `colexicographic` argument to `true`.

```javascript
var x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];

var out = reshape( x, [ 2, 3 ], [ 3, 2 ], true );
// [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that `fromShape` and `toShape` describe arrays having the same number of elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reshape = require( '@stdlib/array/base/reshape' );

var x = [
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ]
];

var out = reshape( x, [ 3, 4 ], [ 4, 3 ], false );
// returns [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ]

out = reshape( x, [ 3, 4 ], [ 6, 2 ], false );
// returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]

out = reshape( x, [ 3, 4 ], [ 1, 12 ], false );
// returns [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] ]

out = reshape( x, [ 3, 4 ], [ 12, 1 ], false );
// returns [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ], [ 11 ], [ 12 ] ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
