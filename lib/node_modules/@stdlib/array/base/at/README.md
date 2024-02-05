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

# at

> Return an element from an array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var at = require( '@stdlib/array/base/at' );
```

#### at( x, index )

Return an element from an array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = at( x, 0 );
// returns 1

out = at( x, 1 );
// returns 2

out = at( x, -2 );
// returns 3
```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having an `at` method , the function defers execution to that method and assumes that the method has the following signature:

    ```text
    x.at( index )
    ```

    If provided an array-like object without an `at` method, the function normalizes a provided index and returns a specified element.

-   Negative indices are resolved relative to the last array element, with the last element corresponding to `-1`.

-   If provided out-of-bounds indices, the function always returns `undefined`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var at = require( '@stdlib/array/base/at' );

// Define an array:
var x = discreteUniform( 10, -100, 100 );

// Define an array containing random index values:
var indices = discreteUniform( 100, -x.length, x.length-1 );

// Randomly selected values from the input array:
var i;
for ( i = 0; i < indices.length; i++ ) {
    console.log( 'x[%d] = %d', indices[ i ], at( x, indices[ i ] ) );
}
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
