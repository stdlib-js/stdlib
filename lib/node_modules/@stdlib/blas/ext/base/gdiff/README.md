<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# gdiff

> Calculate the k-th discrete forward difference of a strided array.

<section class="usage">

## Usage

```javascript
var gdiff = require( '@stdlib/blas/ext/base/gdiff' );
```

<!-- lint disable maximum-heading-length -->

#### gdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW )

Calculates the k-th discrete forward difference of a strided array.

```javascript
var x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

console.log( out );
// => [ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: number of times to recursively compute differences.
-   **x**: input array.
-   **strideX**: stride length for `x`.
-   **N1**: number of indexed elements to `prepend`.
-   **prepend**: array containing values to prepend prior to computing differences.
-   **strideP**: stride length for `prepend`.
-   **N2**: number of indexed elements to `append`.
-   **append**: array containing values to append prior to computing differences.
-   **strideA**: stride length for `append`.
-   **out**: output array. Must have `N + N1 + N2 - k` elements.
-   **strideOut**: stride length for `out`.
-   **workspace**: workspace array. Must have `N + N1 + N2 - 1` elements.
-   **strideW**: stride length for `workspace`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute differences of every other element:

```javascript
var x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0 ];

gdiff( 3, 1, x, 2, 1, p, 1, 1, a, 1, out, 1, w, 1 );

console.log( out );
// => [ 1.0, 4.0, 4.0, 1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

gdiff( x1.length, 1, x1, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

console.log( out );
// => [ 3.0, 2.0, 2.0, 2.0, 1.0 ]
```

<!-- lint disable maximum-heading-length -->

#### gdiff.ndarray( N, k, x, strideX, offsetX, N1, prepend, strideP, offsetP, N2, append, strideA, offsetA, out, strideOut, offsetOut, workspace, strideW, offsetW )

Calculates the k-th discrete forward difference of a strided array using alternative indexing semantics.

```javascript
var x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

console.log( out );
// => [ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetP**: starting index for `prepend`.
-   **offsetA**: starting index for `append`.
-   **offsetOut**: starting index for `out`.
-   **offsetW**: starting index for `workspace`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to access only the last three elements:

```javascript
var x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0 ];

gdiff.ndarray( 3, 1, x, 1, x.length-3, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

console.log( out );
// => [ 5.0, 2.0, 2.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When `k <= 1`, the workspace array is unused and thus ignored.
-   If `N + N1 + N2 <= 1` or `k >= N + N1 + N2`, both functions return the output array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeros = require( '@stdlib/array/zeros' );
var gdiff = require( '@stdlib/blas/ext/base/gdiff' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
console.log( 'Input array: ', x );

var p = discreteUniform( 2, -100, 100, {
    'dtype': 'generic'
});
console.log( 'Prepend array: ', p );

var a = discreteUniform( 2, -100, 100, {
    'dtype': 'generic'
});
console.log( 'Append array: ', a );

var out = zeros( 10, 'generic' );
var w = zeros( 13, 'generic' );

gdiff( x.length, 4, x, 1, 2, p, 1, 2, a, 1, out, 1, w, 1 );
console.log( 'Output: ', out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
