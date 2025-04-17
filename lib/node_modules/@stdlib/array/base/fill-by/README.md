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

# fillBy

> Fill all elements within a portion of an array according to a callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var fillBy = require( '@stdlib/array/base/fill-by' );
```

#### fillBy( x, start, end, fcn\[, thisArg] )

Fills all elements within a portion of an array from an inclusive `start` index to an exclusive `end` index according to a provided callback function.

```javascript
function fcn() {
    return 10;
}

var x = [ 1, 2, 3, 4, 5, 6 ];

var out = fillBy( x, 1, 4, fcn );
// returns [ 1, 10, 10, 10, 5, 6 ]

var bool = ( out === x );
// returns true
```

The callback function is provided the following arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function fcn() {
    this.count += 1;
    return 10;
}

var x = [ 1, 2, 3, 4, 5, 6 ];

var ctx = {
    'count': 0
};
var out = fillBy( x, 1, 4, fcn, ctx );
// returns [ 1, 10, 10, 10, 5, 6 ]

var bool = ( out === x );
// returns true

var cnt = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Negative `start` and `end` indices are resolved to positive indices by counting from the end of the array with `-1` corresponding to the last indexed element.
-   The function **mutates** the input array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var constantFunction = require( '@stdlib/utils/constant-function' );
var Float64Array = require( '@stdlib/array/float64' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var fillBy = require( '@stdlib/array/base/fill-by' );

var x = new Float64Array( zeroTo( 6 ) );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var y = fillBy( x, 0, 6, constantFunction( 10.0 ) );
// returns <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]

y = fillBy( x, 0, 4, constantFunction( 0.0 ) );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 10.0, 10.0 ]

y = fillBy( x, 2, 6, constantFunction( 20.0 ) );
// returns <Float64Array>[ 0.0, 0.0, 20.0, 20.0, 20.0, 20.0 ]

y = fillBy( x, 2, 4, constantFunction( 30.0 ) );
// returns <Float64Array>[ 0.0, 0.0, 30.0, 30.0, 20.0, 20.0 ]
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
