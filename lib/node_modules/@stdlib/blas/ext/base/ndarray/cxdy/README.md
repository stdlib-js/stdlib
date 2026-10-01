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

# cxdy

> Divide elements of a one-dimensional single-precision complex floating-point ndarray by the corresponding elements of a second one-dimensional single-precision complex floating-point ndarray and assign the results to the second ndarray.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:xdy" align="center" raw="\mathbf{y} = \mathbf{x} \oslash \mathbf{y}" alt="Equation for xdy operation."> -->

```math
\mathbf{y} = \mathbf{x} \oslash \mathbf{y}
```

<!-- </equation> -->

where `⊘` denotes the [Hadamard division][hadamard-division].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cxdy = require( '@stdlib/blas/ext/base/ndarray/cxdy' );
```

#### cxdy( arrays )

Divides elements of a one-dimensional single-precision complex floating-point ndarray by the corresponding elements of a second one-dimensional single-precision complex floating-point ndarray and assigns the results to the second ndarray.

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );

var x = new Complex64Vector( [ -1.0, 3.0, -2.0, 14.0, -4.0, 44.0 ] );
var y = new Complex64Vector( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );

cxdy( [ x, y ] );
// y => <ndarray>[ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 3.0, 4.0 ], <Complex64>[ 5.0, 6.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output ndarray is modified **in-place** (i.e., the output ndarray is **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cxdy = require( '@stdlib/blas/ext/base/ndarray/cxdy' );

var opts = {
    'dtype': 'float32'
};

var x = new Complex64Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var y = new Complex64Vector( discreteUniform( 20, 1, 100, opts ) );
console.log( ndarray2array( y ) );

cxdy( [ x, y ] );
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hadamard-division]: https://en.wikipedia.org/wiki/Hadamard_product_(matrices)#Analogous_operations

</section>

<!-- /.links -->
