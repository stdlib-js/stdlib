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

# without

> Return a new array containing every element from an input array, except for the element at a specified index.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var without = require( '@stdlib/array/base/without' );
```

#### without( x, index )

Returns a new array containing every element from an input array, except for the element at a specified index.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = without( x, 0 );
// returns [ 2, 3, 4 ]

out = without( x, -1 );
// returns [ 1, 2, 3 ]
```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.

### without.assign( x, index, out, stride, offset )

Copies every element from one array to another array, except for the element at a specified index.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = [ 0, 0, 0 ];
var arr = without.assign( x, 0, out, 1, 0 );
// returns [ 2, 3, 4 ]

var bool = ( arr === out );
// returns true
```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Negative indices are resolved relative to the last array element, with the last element corresponding to `-1`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var without = require( '@stdlib/array/base/without' );

// Define an array:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 5, -100, 100, opts );

// Define an array containing random index values:
var indices = discreteUniform( 100, -x.length, x.length-1, opts );

// Randomly omit elements from the input array:
var i;
for ( i = 0; i < indices.length; i++ ) {
    console.log( 'x = [%s]', without( x, indices[ i ] ).join( ',' ) );
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
