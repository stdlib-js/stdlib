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

# dcircshift

> Circularly shift the elements of a one-dimensional double-precision floating-point ndarray by a specified number of positions.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcircshift = require( '@stdlib/blas/ext/base/ndarray/dcircshift' );
```

#### dcircshift( arrays )

Circularly shifts the elements of a one-dimensional double-precision floating-point ndarray by a specified number of positions.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

var k = scalar2ndarray( 2, {
    'dtype': 'generic'
});

var out = dcircshift( [ x, k ] );
// returns <ndarray>[ 4.0, 5.0, 1.0, 2.0, 3.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray specifying the number of positions to shift.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is shifted **in-place** (i.e., the input ndarray is **mutated**).

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
var dcircshift = require( '@stdlib/blas/ext/base/ndarray/dcircshift' );

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var k = scalar2ndarray( 3, {
    'dtype': 'generic'
});
console.log( 'Shift:', ndarraylike2scalar( k ) );

dcircshift( [ x, k ] );
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
