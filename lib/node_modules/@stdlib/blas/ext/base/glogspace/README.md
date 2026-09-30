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

# glogspace

> Fill a strided array with logarithmically spaced values over a specified interval.

<section class="usage">

## Usage

```javascript
var glogspace = require( '@stdlib/blas/ext/base/glogspace' );
```

#### glogspace( N, base, start, stop, endpoint, x, strideX )

Fills a strided array with logarithmically spaced values over a specified interval.

```javascript
var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

glogspace( x.length, 10.0, 0.0, 5.0, true, x, 1 );
// x => [ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **base**: base of the logarithmic scale.
-   **start**: exponent of the starting value, where the starting value is given by `base^start`.
-   **stop**: exponent of the final value, where the final value is given by `base^stop`.
-   **endpoint**: boolean indicating whether to include the `base^stop` value when writing values to the input array. If `true`, the input array is filled with logarithmically spaced values over the closed interval `[base^start, base^stop]`. If `false`, the input array is filled with logarithmically spaced values over the half-open interval `[base^start, base^stop)`.
-   **x**: input array.
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

```javascript
var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

glogspace( 4, 10.0, 0.0, 3.0, true, x, 2 );
// x => [ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0, 1000.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
glogspace( 3, 10.0, 0.0, 2.0, true, x1, 2 );
// x0 => <Float64Array>[ 0.0, 1.0, 0.0, 10.0, 0.0, 100.0 ]
```

#### glogspace.ndarray( N, base, start, stop, endpoint, x, strideX, offsetX )

Fills a strided array with logarithmically spaced values over a specified interval using alternative indexing semantics.

```javascript
var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

glogspace.ndarray( x.length, 10.0, 0.0, 5.0, true, x, 1, 0 );
// x => [ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

glogspace.ndarray( 3, 10.0, 0.0, 2.0, true, x, 1, x.length-3 );
// x => [ 0.0, 0.0, 0.0, 1.0, 10.0, 100.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Let `M` be the number of generated values (which is either `N` or `N+1` depending on whether `endpoint` is `true` or `false`, respectively). The spacing between the exponents is thus given by

    ```text
    Δ = (stop-start)/(M-1)
    ```

    and the generated values are equal to `base^(start+Δ*i)` for `i = 0, 1, ..., M-1`.

-   When the number of generated values is greater than `1` and `endpoint` is `true`, the set of values written to a provided input array is guaranteed to include the `base^start` and `base^stop` values. Beware, however, that values between `base^start` and `base^stop` are subject to floating-point rounding errors. Hence,

    ```javascript
    var x = [ 0.0, 0.0, 0.0 ];

    glogspace( 3, 10.0, 0.0, 1.0, true, x, 1 );
    // x => [ 1.0, ~3.16, 10.0 ]
    ```

    where `x[1]` is only guaranteed to be approximately equal to the square root of `10`.

-   When `N = 1` and `endpoint` is `false`, only the `base^start` value is written to a provided input array. When `N = 1` and `endpoint` is `true`, only the `base^stop` value is written to a provided input array.

-   If `start < stop`, the exponents are written to a provided input array in ascending order; otherwise, they are written in descending order.

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var glogspace = require( '@stdlib/blas/ext/base/glogspace' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
console.log( x );

glogspace( x.length, 10.0, 0.0, 9.0, true, x, 1 );
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
