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

# srev

> Reverse a single-precision floating-point strided array in-place.

<section class="usage">

## Usage

```javascript
var srev = require( '@stdlib/blas/ext/base/srev' );
```

#### srev( N, x, stride )

Reverses a single-precision floating-point strided array `x` in-place.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

srev( x.length, x, 1 );
// x => <Float32Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to reverse every other element

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var N = floor( x.length / 2 );

srev( N, x, 2 );
// x => <Float32Array>[ -1.0, 1.0, 4.0, -5.0, 3.0, 0.0, -2.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

// Initial array...
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Reverse every other element...
srev( N, x1, 2 );
// x0 => <Float32Array>[ 1.0, -6.0, 3.0, -4.0, 5.0, -2.0 ]
```

#### srev.ndarray( N, x, stride, offset )

Reverses a single-precision floating-point strided array `x` in-place using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

srev.ndarray( x.length, x, 1, 0 );
// x => <Float32Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

srev.ndarray( 3, x, 1, x.length-3 );
// x => <Float32Array>[ 1.0, -2.0, 3.0, -6.0, 5.0, -4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   Where possible, one should "reverse" a strided array by negating its stride, which is an `O(1)` operation, in contrast to performing an in-place reversal, which is `O(N)`. However, in certain circumstances, this is not tenable, particularly when interfacing with libraries which assume and/or expect a specific memory layout (e.g., strided array elements arranged in memory in ascending order). In general, when working with strided arrays, only perform an in-place reversal when strictly necessary.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var Float32Array = require( '@stdlib/array/float32' );
var srev = require( '@stdlib/blas/ext/base/srev' );

var rand;
var sign;
var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
}
console.log( x );

srev( x.length, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/stdlib

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
