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

# minsorted

> Calculate the minimum value of a sorted strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var minsorted = require( '@stdlib/stats/base/minsorted' );
```

#### minsorted( N, x, stride )

Computes the minimum value of a sorted strided array `x`.

```javascript
var x = [ 1.0, 2.0, 3.0 ];
var N = x.length;

var v = minsorted( N, x, 1 );
// returns 1.0

x = [ 3.0, 2.0, 1.0 ];
N = x.length;

v = minsorted( N, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: sorted input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the minimum value of every other element in `x`,

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 1.0, 2.0, 2.0, -7.0, 3.0, 3.0, 4.0, 2.0 ];
var N = floor( x.length / 2 );

var v = minsorted( N, x, 2 );
// returns 1.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = minsorted( N, x1, 2 );
// returns 1.0
```

#### minsorted.ndarray( N, x, stride, offset )

Computes the minimum value of a sorted strided array using alternative indexing semantics.

```javascript
var x = [ 1.0, 2.0, 3.0 ];
var N = x.length;

var v = minsorted.ndarray( N, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the minimum value for every other value in `x` starting from the second value

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ];
var N = floor( x.length / 2 );

var v = minsorted.ndarray( N, x, 2, 1 );
// returns 1.0
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
var Float64Array = require( '@stdlib/array/float64' );
var minsorted = require( '@stdlib/stats/base/minsorted' );

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = i - 5.0;
}
console.log( x );

var v = minsorted( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
