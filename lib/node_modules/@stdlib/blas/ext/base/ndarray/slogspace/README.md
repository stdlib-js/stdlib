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

# slogspace

> Fill a one-dimensional single-precision floating-point ndarray with logarithmically spaced values over a specified interval.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var slogspace = require( '@stdlib/blas/ext/base/ndarray/slogspace' );
```

#### slogspace( arrays )

Fills a one-dimensional single-precision floating-point ndarray with logarithmically spaced values over a specified interval.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float32Vector( [ 0.0, 0.0, 0.0, 0.0 ] );

var base = scalar2ndarray( 10.0, {
    'dtype': 'float32'
});

var strt = scalar2ndarray( 0.0, {
    'dtype': 'float32'
});

var stp = scalar2ndarray( 3.0, {
    'dtype': 'float32'
});

var endpoint = scalar2ndarray( true, {
    'dtype': 'bool'
});

var out = slogspace( [ x, base, strt, stp, endpoint ] );
// returns <ndarray>[ 1.0, 10.0, 100.0, 1000.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray specifying the base of the logarithmic scale.
    -   a zero-dimensional ndarray specifying the exponent of the starting value, where the starting value is given by `base^start`.
    -   a zero-dimensional ndarray specifying the exponent of the final value, where the final value is given by `base^stop`.
    -   a zero-dimensional ndarray specifying whether to include the `base^stop` value when writing values to the input ndarray. If `true`, the input ndarray is filled with logarithmically spaced values over the closed interval `[base^start, base^stop]`. If `false`, the input ndarray is filled with logarithmically spaced values over the half-open interval `[base^start, base^stop)`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Let `M` be the number of generated values (which is either `N` or `N+1` depending on whether `endpoint` is `true` or `false`, respectively). The spacing between the exponents is thus given by

    ```text
    Δ = (stop-start)/(M-1)
    ```

    and the generated values are equal to `base^(start+Δ*i)` for `i = 0, 1, ..., M-1`.

-   When the number of generated values is greater than `1` and `endpoint` is `true`, the set of values written to a provided input ndarray is guaranteed to include the `base^start` and `base^stop` values. Beware, however, that values between `base^start` and `base^stop` are subject to floating-point rounding errors. Hence,

    <!-- eslint-disable max-len -->

    ```javascript
    var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
    var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
    var ndarray2array = require( '@stdlib/ndarray/to-array' );

    var x = new Float32Vector( [ 0.0, 0.0, 0.0 ] );

    var base = scalar2ndarray( 10.0, {
        'dtype': 'float32'
    });

    var strt = scalar2ndarray( 0.0, {
        'dtype': 'float32'
    });

    var stp = scalar2ndarray( 1.0, {
        'dtype': 'float32'
    });

    var endpoint = scalar2ndarray( true, {
        'dtype': 'bool'
    });

    slogspace( [ x, base, strt, stp, endpoint ] );

    var arr = ndarray2array( x );
    // returns [ 1.0, ~3.16, 10.0 ]
    ```

    where `arr[1]` is only guaranteed to be approximately equal to the square root of `10`.

-   When `N = 1` and `endpoint` is `false`, only the `base^start` value is written to a provided input ndarray. When `N = 1` and `endpoint` is `true`, only the `base^stop` value is written to a provided input ndarray.

-   If `start < stop`, the exponents are written to a provided input ndarray in ascending order; otherwise, they are written in descending order.

-   The input ndarray is **mutated**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var slogspace = require( '@stdlib/blas/ext/base/ndarray/slogspace' );

var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var base = scalar2ndarray( 10.0, opts );
console.log( 'Base: %d', ndarraylike2scalar( base ) );

var strt = scalar2ndarray( 0.0, opts );
console.log( 'Start: %d', ndarraylike2scalar( strt ) );

var stp = scalar2ndarray( 9.0, opts );
console.log( 'Stop: %d', ndarraylike2scalar( stp ) );

var endpoint = scalar2ndarray( true, {
    'dtype': 'bool'
});
console.log( 'Endpoint: %s', ndarraylike2scalar( endpoint ) );

slogspace( [ x, base, strt, stp, endpoint ] );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
