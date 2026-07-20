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

# gxdy

> Divide elements of a one-dimensional ndarray by the corresponding elements of a second one-dimensional ndarray and assign the results to the second ndarray.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:xdy" align="center" raw="\mathbf{y} = \mathbf{x} \oslash \mathbf{y}" alt="Equation for xdy operation."> -->

```math
\mathbf{y} = \mathbf{x} \oslash \mathbf{y}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{y} = \mathbf{x} \oslash \mathbf{y}" data-equation="eq:xdy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@36161d55e65be0928435fab8edb222944f083cbd/lib/node_modules/@stdlib/blas/ext/base/ndarray/gxdy/docs/img/equation_xdy.svg" alt="Equation for xdy operation.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gxdy = require( '@stdlib/blas/ext/base/ndarray/gxdy' );
```

#### gxdy( arrays )

Divides elements of a one-dimensional ndarray by the corresponding elements of a second one-dimensional ndarray and assigns the results to the second ndarray.

```javascript
var vector = require( '@stdlib/ndarray/vector/ctor' );

var x = vector( [ 4.0, 6.0, 12.0, 20.0, 30.0 ], 'generic' );
var y = vector( [ 2.0, 3.0, 4.0, 5.0, 6.0 ], 'generic' );

gxdy( [ x, y ] );
// y => <ndarray>[ 2.0, 2.0, 3.0, 4.0, 5.0 ]
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
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gxdy = require( '@stdlib/blas/ext/base/ndarray/gxdy' );

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], 1, 100, opts );
console.log( ndarray2array( y ) );

gxdy( [ x, y ] );
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
