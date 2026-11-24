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

# glinspace

> Fill a strided array with linearly spaced values over a specified interval.

<section class="usage">

## Usage

```javascript
var glinspace = require( '@stdlib/blas/ext/base/glinspace' );
```

#### glinspace( N, start, stop, endpoint, x, strideX )

Fills a strided array with linearly spaced values over a specified interval.

```javascript
var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

glinspace( x.length, 0.0, 7.0, true, x, 1 );
// x => [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **start**: start of interval.
-   **stop**: end of interval.
-   **endpoint**: boolean indicating whether to include the `stop` value when writing values to the input array. If `true`, the input array is filled with evenly spaced values over the closed interval `[start, stop]`. If `false`, the input array is filled with evenly spaced values over the half-open interval `[start, stop)`.
-   **x**: input array.
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

```javascript
var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

glinspace( 4, 1.0, 5.0, false, x, 2 );
// x => [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
glinspace( 3, 1.0, 3.0, true, x1, 2 );
// x0 => <Float64Array>[ 0.0, 1.0, 0.0, 2.0, 0.0, 3.0 ]
```

#### glinspace.ndarray( N, start, stop, endpoint, x, strideX, offsetX )

Fills a strided array with linearly spaced values over a specified interval using alternative indexing semantics.

```javascript
var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

glinspace.ndarray( x.length, 0.0, 7.0, true, x, 1, 0 );
// x => [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

glinspace.ndarray( 3, 1.0, 3.0, true, x, 1, x.length-3 );
// x => [ 0.0, 0.0, 0.0, 1.0, 2.0, 3.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Let `M` be the number of generated values (which is either `N` or `N+1` depending on whether `endpoint` is `true` or `false`, respectively). The spacing between values is thus given by

    ```text
    Δ = (stop-start)/(M-1)
    ```

-   When the number of generated values is greater than `1` and `endpoint` is `true`, the set of values written to a provided input array is guaranteed to include the `start` and `stop` values. Beware, however, that values between `start` and `stop` are subject to floating-point rounding errors. Hence,

    ```javascript
    var x = [ 0.0, 0.0, 0.0 ];

    glinspace( 3, 0.0, 1.0, true, x, 1 );
    // x => [ 0.0, ~0.5, 1.0 ]
    ```

    where `x[1]` is only guaranteed to be approximately equal to `0.5`.

-   When `N = 1` and `endpoint` is `false`, only the `start` value is written to a provided input array. When `N = 1` and `endpoint` is `true`, only the `stop` value is written to a provided input array.

-   If `start < stop`, values are written to a provided input array in ascending order; otherwise, values are written in descending order.

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var glinspace = require( '@stdlib/blas/ext/base/glinspace' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
console.log( x );

glinspace( x.length, 0.0, 10.0, true, x, 1 );
console.log( x );
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

</section>

<!-- /.links -->
