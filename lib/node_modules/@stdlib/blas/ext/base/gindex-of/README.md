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

# gindexOf

> Return the first index of a specified search element in a strided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var gindexOf = require( '@stdlib/blas/ext/base/gindex-of' );
```

#### gindexOf( N, searchElement, x, strideX )

Returns the first index of a specified search element in a strided array.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ];

var idx = gindexOf( x.length, 3.0, x, 1 );
// returns 2
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **searchElement**: search element.
-   **x**: input array.
-   **strideX**: stride length.

If the function is unable to find a search element, the function returns `-1`.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ];

var idx = gindexOf( x.length, 8.0, x, 1 );
// returns -1
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to search every other element:

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ];

var idx = gindexOf( 4, -1.0, x, 2 );
// returns 3
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Find index...
var idx = gindexOf( 3, -6.0, x1, 2 );
// returns 2
```

#### gindexOf.ndarray( N, searchElement, x, strideX, offsetX )

Returns the first index of a specified search element in a strided array using alternative indexing semantics.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ];

var idx = gindexOf.ndarray( x.length, 3.0, x, 1, 0 );
// returns 2
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array:

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ];

var idx = gindexOf.ndarray( 3, 3.0, x, 1, x.length-3 );
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When searching for a search element, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gindexOf = require( '@stdlib/blas/ext/base/gindex-of' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
console.log( x );

var idx = gindexOf( x.length, 80.0, x, 1 );
console.log( idx );
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

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
