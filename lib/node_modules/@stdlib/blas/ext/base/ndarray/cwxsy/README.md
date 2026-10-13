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

# cwxsy

> Subtract elements of a second one-dimensional single-precision complex floating-point ndarray from the corresponding elements of a first one-dimensional single-precision complex floating-point ndarray and assign the results to elements in a third one-dimensional single-precision complex floating-point ndarray.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:wxsy" align="center" raw="\mathbf{w} = \mathbf{x} - \mathbf{y}" alt="Equation for wxsy operation."> -->

```math
\mathbf{w} = \mathbf{x} - \mathbf{y}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cwxsy = require( '@stdlib/blas/ext/base/ndarray/cwxsy' );
```

#### cwxsy( arrays )

Subtracts elements of a second one-dimensional single-precision complex floating-point ndarray from the corresponding elements of a first one-dimensional single-precision complex floating-point ndarray and assigns the results to elements in a third one-dimensional single-precision complex floating-point ndarray.

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );

var x = new Complex64Vector( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
var y = new Complex64Vector( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
var w = new Complex64Vector( 3 );

cwxsy( [ x, y, w ] );
// w => <ndarray>[ <Complex64>[ -1.0, 1.0 ], <Complex64>[ 4.0, -4.0 ], <Complex64>[ -4.0, 1.0 ] ]
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cwxsy = require( '@stdlib/blas/ext/base/ndarray/cwxsy' );

var opts = {
    'dtype': 'float32'
};

var x = new Complex64Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var y = new Complex64Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( y ) );

var w = new Complex64Vector( 10 );

cwxsy( [ x, y, w ] );
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

</section>

<!-- /.links -->
