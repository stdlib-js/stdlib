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

> Create a filled two-dimensional symmetric nested array according to a provided callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var filled2dBy = require( '@stdlib/array/base/symmetric/filled2d-by' );
```

#### filled2dBy( N, clbk\[, thisArg] )

Returns a filled two-dimensional symmetric nested array according to a provided callback function.

```javascript
function clbk( idx ) {
    return idx[ 0 ] + idx[ 1 ];
}

var out = filled2dBy( 2, clbk );
// returns [ [ 0, 1 ], [ 1, 2 ] ]
```

The function accepts the following arguments:

-   **N**: number of rows and columns.
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

var out = filled2dBy( 2, clbk, ctx );
// returns [ [ 1, 1 ], [ 1, 1 ] ];

var cnt = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   As the output array is symmetric, the callback function is only invoked for the elements residing in the upper triangle of the output array (i.e., `indices[1] >= indices[0]`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var constantFunction = require( '@stdlib/utils/constant-function' );
var filled2dBy = require( '@stdlib/array/base/symmetric/filled2d-by' );

var out = filled2dBy( 2, constantFunction( 0.0 ) );
// returns [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]

out = filled2dBy( 2, constantFunction( 'beep' ) );
// returns [ [ 'beep', 'beep' ], [ 'beep', 'beep' ] ]

out = filled2dBy( 2, constantFunction( null ) );
// returns [ [ null, null ], [ null, null ] ]

out = filled2dBy( 2, constantFunction( true ) );
// returns [ [ true, true ], [ true, true ] ]

function clbk( indices ) {
    return indices[ 0 ] + indices[ 1 ];
}
out = filled2dBy( 3, clbk );
// returns [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ]
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
