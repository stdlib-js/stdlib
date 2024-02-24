<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# slice

> Return a shallow copy of a portion of an array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var slice = require( '@stdlib/array/slice' );
```

#### slice( x\[, start\[, end]] )

Returns a shallow copy of a portion of an array.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = slice( x );
// returns [ 1, 2, 3, 4, 5, 6 ]

var bool = ( out === x );
// returns false
```

The function accepts the following arguments:

-   **x**: input array.
-   **start**: starting index (inclusive). Default: `0`.
-   **end**: ending index (exclusive). Default: `x.length`.

By default, the function returns a shallow copy beginning from the first element of the provided input array. To begin copying from an alternative element, provide a starting index (inclusive).

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = slice( x, 2 );
// returns [ 3, 4, 5, 6 ]
```

By default, the function copies through the end of the provided input array. To copy up until a specific element, provide an ending index (exclusive).

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = slice( x, 1, 4 );
// returns [ 2, 3, 4 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `slice` method, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.slice( start, end )
    ```

-   If provided an array-like object without a `slice` method, the function copies input array elements to a new generic array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var zeroTo = require( '@stdlib/array/zero-to' );
var slice = require( '@stdlib/array/slice' );

var x = zeroTo( 6, 'float64' );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var s = slice( x );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

s = slice( x, 0, 4 );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0 ]

s = slice( x, 2 );
// returns <Float64Array>[ 2.0, 3.0, 4.0, 5.0 ]

s = slice( x, 2, 4 );
// returns <Float64Array>[ 2.0, 3.0 ]
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
