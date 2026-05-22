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

# dznrm2

> Compute the L2-norm of a one-dimensional double-precision complex floating-point ndarray.

<section class="intro">

The [L2-norm][l2-norm] is defined as

<!-- <equation class="equation" label="eq:l2_norm" align="center" raw="\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}" alt="L2-norm definition."> -->

```math
\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}
```

<!-- <div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}" data-equation="eq:l2_norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@f766d7eeb56ff14cbceeeeef03d7f7b88c467515/lib/node_modules/@stdlib/blas/base/dznrm2/docs/img/equation_l2_norm.svg" alt="L2-norm definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dznrm2 = require( '@stdlib/blas/base/ndarray/dznrm2' );
```

#### dznrm2( arrays )

Computes the [L2-norm][l2-norm] of a one-dimensional double-precision complex floating-point ndarray.

```javascript
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );

var x = new Complex128Vector( [ 1.0, 2.0, 2.0, 4.0 ] );

var y = dznrm2( [ x ] );
// returns 5.0
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dznrm2 = require( '@stdlib/blas/base/ndarray/dznrm2' );

var opts = {
    'dtype': 'float64'
};

var x = new Complex128Vector( discreteUniform( 10, -500, 500, opts ) );
console.log( ndarray2array( x ) );

var out = dznrm2( [ x ] );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[l2-norm]: https://en.wikipedia.org/wiki/Euclidean_distance

</section>

<!-- /.links -->
