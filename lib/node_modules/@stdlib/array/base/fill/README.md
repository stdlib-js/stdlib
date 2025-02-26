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

# fill

> Fill all elements within a portion of an array with a specified value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var fill = require( '@stdlib/array/base/fill' );
```

#### fill( x, value, start, end )

Fills all elements within a portion of an array from an inclusive `start` index to an exclusive `end` index with a specified `value`.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = fill( x, 10, 1, 4 );
// returns [ 1, 10, 10, 10, 5, 6 ]

var bool = ( out === x );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `fill` method, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.fill( value, start, end )
    ```

-   If provided an array-like object without a `fill` method, the function manually sets input array elements to a provided fill value.

-   The function **mutates** the input array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var fill = require( '@stdlib/array/base/fill' );

var x = new Float64Array( zeroTo( 6 ) );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var y = fill( x, 10.0, 0, 6 );
// returns <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]

y = fill( x, 0.0, 0, 4 );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 10.0, 10.0 ]

y = fill( x, 20.0, 2, 6 );
// returns <Float64Array>[ 0.0, 0.0, 20.0, 20.0, 20.0, 20.0 ]

y = fill( x, 30.0, 2, 4 );
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
