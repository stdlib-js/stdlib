<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# flatten3d

> Flatten a three-dimensional nested array.

<section class="usage">

## Usage

```javascript
var flatten3d = require( '@stdlib/array/base/flatten3d' );
```

#### flatten3d( x, shape, colexicographic )

Flattens a three-dimensional nested array.

```javascript
var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];

var out = flatten3d( x, [ 2, 1, 2 ], false );
// returns [ 1, 2, 3, 4 ]
```

To flatten in colexicographic order, provide a third argument equal to `true`.

```javascript
var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];

var out = flatten3d( x, [ 2, 1, 2 ], true );
// returns [ 1, 3, 2, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var flatten3d = require( '@stdlib/array/base/flatten3d' );

var x = [
    [ [ 1, 2 ], [ 3, 4 ] ],
    [ [ 5, 6 ], [ 7, 8 ] ],
    [ [ 9, 10 ], [ 11, 12 ] ],
    [ [ 13, 14 ], [ 15, 16 ] ]
];

var out = flatten3d( x, [ 0, 0, 0 ], false );
// returns []

out = flatten3d( x, [ 0, 0, 0 ], true );
// returns []

out = flatten3d( x, [ 1, 1, 1 ], false );
// returns [ 1 ]

out = flatten3d( x, [ 1, 1, 1 ], true );
// returns [ 1 ]

out = flatten3d( x, [ 2, 2, 2 ], false );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8 ]

out = flatten3d( x, [ 2, 2, 2 ], true );
// returns [ 1, 5, 3, 7, 2, 6, 4, 8 ]

out = flatten3d( x, [ 3, 2, 2 ], false );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

out = flatten3d( x, [ 3, 2, 2 ], true );
// returns [ 1, 5, 9, 3, 7, 11, 2, 6, 10, 4, 8, 12 ]

out = flatten3d( x, [ 4, 2, 2 ], false );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

out = flatten3d( x, [ 4, 2, 2 ], true );
// returns [ 1, 5, 9, 13, 3, 7, 11, 15, 2, 6, 10, 14, 4, 8, 12, 16 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
