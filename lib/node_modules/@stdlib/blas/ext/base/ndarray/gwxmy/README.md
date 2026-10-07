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

# gwxmy

> Multiply elements of a one-dimensional ndarray by the corresponding elements of a second one-dimensional ndarray and assign the results to elements in a third one-dimensional ndarray.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:wxmy" align="center" raw="\mathbf{w} = \mathbf{x} \odot \mathbf{y}" alt="Equation for wxmy operation."> -->

```math
\mathbf{w} = \mathbf{x} \odot \mathbf{y}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{w} = \mathbf{x} \odot \mathbf{y}" data-equation="eq:wxmy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@084e7f73049a6b09aa32af5a4f2abc6615e909de/lib/node_modules/@stdlib/blas/ext/base/ndarray/gwxmy/docs/img/equation_wxmy.svg" alt="Equation for wxmy operation.">
    <br>
</div> -->

<!-- </equation> -->

where `⊙` denotes the [Hadamard product][hadamard-product].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gwxmy = require( '@stdlib/blas/ext/base/ndarray/gwxmy' );
```

#### gwxmy( arrays )

Multiplies elements of a one-dimensional ndarray by the corresponding elements of a second one-dimensional ndarray and assigns the results to elements in a third one-dimensional ndarray.

```javascript
var vector = require( '@stdlib/ndarray/vector/ctor' );

var x = vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'generic' );
var y = vector( [ 2.0, 3.0, 4.0, 5.0, 6.0 ], 'generic' );
var w = vector( [ 0.0, 0.0, 0.0, 0.0, 0.0 ], 'generic' );

gwxmy( [ x, y, w ] );
// w => <ndarray>[ 2.0, 6.0, 12.0, 20.0, 30.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   first one-dimensional input ndarray.
    -   second one-dimensional input ndarray.
    -   a one-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gwxmy = require( '@stdlib/blas/ext/base/ndarray/gwxmy' );

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( y ) );

var w = discreteUniform( [ 10 ], -100, 100, opts );

gwxmy( [ x, y, w ] );
console.log( ndarray2array( w ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hadamard-product]: https://en.wikipedia.org/wiki/Hadamard_product_(matrices)

</section>

<!-- /.links -->
