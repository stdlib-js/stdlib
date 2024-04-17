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

# arrayWith

> Return a new array with the element at the specified index replaced with a provided value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var arrayWith = require( '@stdlib/array/base/with' );
```

#### arrayWith( x, index, value )

Returns a new array with the element at the specified index replaced with a provided value.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = arrayWith( x, 0, 5 );
// returns [ 5, 2, 3, 4 ]

out = arrayWith( x, -1, 6 );
// returns [ 1, 2, 3, 6 ]

```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.
-   **value**: replacement value.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `with` method, the function defers execution to that method and assumes that the method has the following signature:

    ```text
    x.with( index, value )
    ```

    If provided an array-like object without a `with` method, the function shallow copies input array data to a new generic array, normalizes a provided index, and sets a specified element.

-   Negative indices are resolved relative to the last array element, with the last element corresponding to `-1`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var arrayWith = require( '@stdlib/array/base/with' );

// Define an array:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 5, -100, 100, opts );

// Define an array containing random index values:
var indices = discreteUniform( 100, -x.length, x.length-1, opts );

// Define an array with random values to set:
var values = discreteUniform( indices.length, -10000, 10000, opts );

// Randomly set elements in the input array:
var i;
for ( i = 0; i < indices.length; i++ ) {
    console.log( 'x = [%s]', arrayWith( x, indices[ i ], values[ i ] ).join( ',' ) );
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
