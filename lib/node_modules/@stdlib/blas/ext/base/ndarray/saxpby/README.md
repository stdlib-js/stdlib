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

# saxpby

> Multiply a one-dimensional single-precision floating-point ndarray by a scalar constant and add the result to a second one-dimensional single-precision floating-point ndarray multiplied by a scalar constant.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:axpby" align="center" raw="\mathbf{y} = \alpha \mathbf{x} + \beta \mathbf{y}" alt="Equation for axpby operation."> -->

```math
\mathbf{y} = \alpha \mathbf{x} + \beta \mathbf{y}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{y} = \alpha \mathbf{x} + \beta \mathbf{y}" data-equation="eq:axpby">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5a84d0c231e0712a8b057e6735d4d51798c7bb9f/lib/node_modules/@stdlib/blas/ext/base/ndarray/saxpby/docs/img/equation_axpby.svg" alt="Equation for axpby operation.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var saxpby = require( '@stdlib/blas/ext/base/ndarray/saxpby' );
```

#### saxpby( arrays )

Multiplies a one-dimensional single-precision floating-point ndarray by a scalar constant and adds the result to a second one-dimensional single-precision floating-point ndarray multiplied by a scalar constant.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var Float32Tensor0D = require( '@stdlib/ndarray/tensor0d/float32' );

var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Vector( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );

var alpha = new Float32Tensor0D( 5.0 );
var beta = new Float32Tensor0D( 2.0 );

saxpby( [ x, y, alpha, beta ] );
// y => <ndarray>[ 9.0, 16.0, 23.0, 30.0, 37.0 ]
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
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var Float32Tensor0D = require( '@stdlib/ndarray/tensor0d/float32' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var saxpby = require( '@stdlib/blas/ext/base/ndarray/saxpby' );

var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( y ) );

var alpha = new Float32Tensor0D( 5.0 );
console.log( 'Alpha: %d', ndarraylike2scalar( alpha ) );

var beta = new Float32Tensor0D( 2.0 );
console.log( 'Beta: %d', ndarraylike2scalar( beta ) );

saxpby( [ x, y, alpha, beta ] );
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
