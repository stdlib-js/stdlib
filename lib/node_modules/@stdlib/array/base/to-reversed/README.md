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

# toReversed

> Return a new array with elements in reverse order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toReversed = require( '@stdlib/array/base/to-reversed' );
```

#### toReversed( x )

Returns a new array with elements in reverse order.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = toReversed( x );
// returns [ 6, 5, 4, 3, 2, 1 ]

var bool = ( out === x );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `toReversed` method, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.toReversed()
    ```

-   If provided an array-like object without a `toReversed` method, the function manually reverses elements and copies to a new generic array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array/base/zero-to' );
var toReversed = require( '@stdlib/array/base/to-reversed' );

var x = zeroTo( 6 );
// returns [ 0, 1, 2, 3, 4, 5 ]

var y = toReversed( x );
// returns [ 5, 4, 3, 2, 1, 0 ]

var z = toReversed( y );
// returns [ 0, 1, 2, 3, 4, 5 ]
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
