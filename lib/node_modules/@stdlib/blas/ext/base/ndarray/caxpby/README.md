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

# caxpby

> Multiply a one-dimensional single-precision complex floating-point ndarray by a scalar constant and add the result to a second one-dimensional single-precision complex floating-point ndarray multiplied by a scalar constant.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:axpby" align="center" raw="\mathbf{y} = \alpha \mathbf{x} + \beta \mathbf{y}" alt="Equation for axpby operation."> -->

```math
\mathbf{y} = \alpha \mathbf{x} + \beta \mathbf{y}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var caxpby = require( '@stdlib/blas/ext/base/ndarray/caxpby' );
```

#### caxpby( arrays )

Multiplies a one-dimensional single-precision complex floating-point ndarray by a scalar constant and adds the result to a second one-dimensional single-precision complex floating-point ndarray multiplied by a scalar constant.

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Complex64Vector( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
var y = new Complex64Vector( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );

var alpha = scalar2ndarray( new Complex64( 2.0, 1.0 ), {
    'dtype': 'complex64'
});

var beta = scalar2ndarray( new Complex64( 1.0, -1.0 ), {
    'dtype': 'complex64'
});

var out = caxpby( [ x, y, alpha, beta ] );
// returns <ndarray>[ <Complex64>[ 3.0, 4.0 ], <Complex64>[ 9.0, 5.0 ], <Complex64>[ 3.0, -2.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.
    -   a zero-dimensional ndarray containing the constant by which to multiply the input ndarray.
    -   a zero-dimensional ndarray containing the constant by which to multiply the output ndarray.

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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var caxpby = require( '@stdlib/blas/ext/base/ndarray/caxpby' );

var opts = {
    'dtype': 'float32'
};

var x = new Complex64Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var y = new Complex64Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( y ) );

var alpha = scalar2ndarray( new Complex64( 2.0, 1.0 ), {
    'dtype': 'complex64'
});
console.log( 'Alpha:', ndarraylike2scalar( alpha ) );

var beta = scalar2ndarray( new Complex64( 1.0, -1.0 ), {
    'dtype': 'complex64'
});
console.log( 'Beta:', ndarraylike2scalar( beta ) );

caxpby( [ x, y, alpha, beta ] );
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

</section>

<!-- /.links -->
