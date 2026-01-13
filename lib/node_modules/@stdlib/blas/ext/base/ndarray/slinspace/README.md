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

# slinspace

> Fill a one-dimensional single-precision floating-point ndarray with linearly spaced values over a specified interval.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var slinspace = require( '@stdlib/blas/ext/base/ndarray/slinspace' );
```

#### slinspace( arrays )

Fills a one-dimensional single-precision floating-point ndarray with linearly spaced values over a specified interval.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var start = scalar2ndarray( 0.0, {
    'dtype': 'float32'
});

var end = scalar2ndarray( 3.0, {
    'dtype': 'float32'
});

var endpoint = scalar2ndarray( true, {
    'dtype': 'bool'
});

var out = slinspace( [ x, start, end, endpoint ] );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ 0.0, 1.0, 2.0, 3.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays in order:

    1.  a one-dimensional input ndarray.
    2.  a zero-dimensional ndarray specifying the start of the interval.
    3.  a zero-dimensional ndarray specifying the end of the interval.
    4.  a zero-dimensional ndarray specifying whether to include the end of the interval when writing values to the input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Let `M` be the number of generated values. The spacing between values is thus given by

    ```text
    Δ = (end-start)/(M-1)
    ```

-   If an input ndarray has a single element and the function is supposed to include the end of the interval, the set of values written to an input ndarray only includes the end of the interval, but not the start of the interval.

-   Otherwise, when an input ndarray has a single element and the function is not supposed to include the end of the interval, the set of values written to an input ndarray only includes the start of the interval, but not the end of the interval.

-   If the start of the interval is less than end of the interval, the set of values written to an input ndarray will be written in ascending order, and, if the start of the interval is greater than the end of the interval, the set of written values will be in descending order.

-   When an input ndarray contains at least two values and the function is supposed to include the end of the interval, the set of values written to an input ndarray is guaranteed to include the start and end interval values. Beware, however, that values between the interval bounds are subject to floating-point rounding errors.

-   The input ndarray is **mutated**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
var slinspace = require( '@stdlib/blas/ext/base/ndarray/slinspace' );

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
var x = new ndarray( 'float32', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var start = scalar2ndarray( 0.0, {
    'dtype': 'float32'
});
console.log( 'Start: %d', ndarraylike2scalar( start ) );

var end = scalar2ndarray( 100.0, {
    'dtype': 'float32'
});
console.log( 'Stop: %d', ndarraylike2scalar( end ) );

var endpoint = scalar2ndarray( true, {
    'dtype': 'bool'
});
console.log( 'Endpoint: %s', ndarraylike2scalar( endpoint ) );

slinspace( [ x, start, end, endpoint ] );
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
