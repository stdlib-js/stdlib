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

# dcopyWithin

> Perform an in-place copy of elements within a one-dimensional double-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcopyWithin = require( '@stdlib/blas/ext/base/ndarray/dcopy-within' );
```

#### dcopyWithin( arrays )

Performs an in-place copy of elements within a one-dimensional double-precision floating-point ndarray.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var zeros = require( '@stdlib/ndarray/zeros' );

var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var target = scalar2ndarray( 3, {
    'dtype': 'generic'
});
var start = scalar2ndarray( 1, {
    'dtype': 'generic'
});
var end = scalar2ndarray( 4, {
    'dtype': 'generic'
});

var w = zeros( [ 6 ], {
    'dtype': 'float64'
});

var out = dcopyWithin( [ x, target, start, end, w ] );
// returns <ndarray>[ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray specifying a target index.
    -   a zero-dimensional ndarray specifying a source start index (inclusive).
    -   a zero-dimensional ndarray specifying a source end index (exclusive).
    -   a one-dimensional workspace ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is copied **in-place** (i.e., the input ndarray is **mutated**).
-   If the `start` and `target` index ranges do not overlap, the `workspace` ndarray is unused and thus ignored.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var dcopyWithin = require( '@stdlib/blas/ext/base/ndarray/dcopy-within' );

var x = discreteUniform( [ 10 ], -100, 100, {
    'dtype': 'float64'
});
console.log( ndarray2array( x ) );

var target = scalar2ndarray( 5, {
    'dtype': 'generic'
});
var start = scalar2ndarray( 0, {
    'dtype': 'generic'
});
var end = scalar2ndarray( 3, {
    'dtype': 'generic'
});

var w = zeros( [ 10 ], {
    'dtype': 'float64'
});

dcopyWithin( [ x, target, start, end, w ] );
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
