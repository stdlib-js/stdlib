<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# smaxabssorted

> Calculate the maximum absolute value of a sorted single-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var smaxabssorted = require( '@stdlib/stats/base/smaxabssorted' );
```

#### smaxabssorted( N, x, stride )

Computes the maximum absolute value of a sorted single-precision floating-point strided array `x`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -1.0, -2.0, -3.0 ] );
var v = smaxabssorted( x.length, x, 1 );
// returns 3.0

x = new Float32Array( [ -3.0, -2.0, -1.0 ] );
v = smaxabssorted( x.length, x, 1 );
// returns 3.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: sorted input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the maximum absolute value of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, 3.0, 3.0, 4.0, 2.0 ] );
var N = floor( x.length / 2 );

var v = smaxabssorted( N, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = smaxabssorted( N, x1, 2 );
// returns 4.0
```

#### smaxabssorted.ndarray( N, x, stride, offset )

Computes the maximum absolute value of a sorted single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -1.0, -2.0, -3.0 ] );
var v = smaxabssorted.ndarray( x.length, x, 1, 0 );
// returns 3.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the maximum absolute value for every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var N = floor( x.length / 2 );

var v = smaxabssorted.ndarray( N, x, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   The input strided array must be sorted in either **strictly** ascending or descending order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var smaxabssorted = require( '@stdlib/stats/base/smaxabssorted' );

var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = i - 5.0;
}
console.log( x );

var v = smaxabssorted( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/stdlib

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
