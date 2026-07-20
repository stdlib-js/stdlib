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

# filled2dBy

> Create a filled two-dimensional symmetric banded nested array according to a provided callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var filled2dBy = require( '@stdlib/array/base/symmetric-banded/filled2d-by' );
```

#### filled2dBy( N, k, fill, clbk\[, thisArg] )

Returns a filled two-dimensional symmetric banded nested array according to a provided callback function.

```javascript
function clbk( idx ) {
    return idx[ 0 ] + idx[ 1 ];
}

var out = filled2dBy( 3, 1, 0, clbk );
// returns [ [ 0, 1, 0 ], [ 1, 2, 3 ], [ 0, 3, 4 ] ]
```

The function accepts the following arguments:

-   **N**: number of rows and columns.
-   **k**: number of super-/sub-diagonals.
-   **fill**: fill value for elements outside the band.
-   **clbk**: callback function.
-   **thisArg**: callback function execution context (_optional_).

When invoked, a callback function is provided a single argument:

-   **indices**: current array element indices.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function clbk() {
    this.count += 1;
    return 1;
}

var ctx = {
    'count': 0
};

var out = filled2dBy( 2, 1, 0, clbk, ctx );
// returns [ [ 1, 1 ], [ 1, 1 ] ];

var cnt = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   As the output array is symmetric and banded, the callback function is only invoked for the elements residing within the band in the upper triangle of the output array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var constantFunction = require( '@stdlib/utils/constant-function' );
var filled2dBy = require( '@stdlib/array/base/symmetric-banded/filled2d-by' );

function clbk( indices ) {
    return indices[ 0 ] + indices[ 1 ];
}

var out = filled2dBy( 3, 1, 0, clbk );
// returns [ [ 0, 1, 0 ], [ 1, 2, 3 ], [ 0, 3, 4 ] ]

out = filled2dBy( 3, 1, null, constantFunction( 'beep' ) );
// returns [ [ 'beep', 'beep', null ], [ 'beep', 'beep', 'beep' ], [ null, 'beep', 'beep' ] ]
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
