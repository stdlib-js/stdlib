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

# dapx

> Add a constant to each element in a double-precision floating-point strided array.

<section class="usage">

## Usage

```javascript
var dapx = require( '@stdlib/blas/ext/base/dapx' );
```

#### dapx( N, alpha, x, stride )

Adds a constant `alpha` to each element in a double-precision floating-point strided array `x`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dapx( x.length, 5.0, x, 1 );
// x => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to add a constant to every other element

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var N = floor( x.length / 2 );

dapx( N, 5.0, x, 2 );
// x => <Float64Array>[ 3.0, 1.0, 8.0, -5.0, 9.0, 0.0, 0.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Add a constant to every other element...
dapx( N, 5.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, 3.0, 3.0, 1.0, 5.0, -1.0 ]
```

#### dapx.ndarray( N, alpha, x, stride, offset )

Adds a constant `alpha` to each element in a double-precision floating-point strided array `x` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dapx.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

dapx.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float64Array>[ 1.0, -2.0, 3.0, 1.0, 10.0, -1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var dapx = require( '@stdlib/blas/ext/base/dapx' );

var rand;
var sign;
var x;
var i;

x = new Float64Array( 10 );
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

dapx( x.length, 5.0, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/stdlib

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
