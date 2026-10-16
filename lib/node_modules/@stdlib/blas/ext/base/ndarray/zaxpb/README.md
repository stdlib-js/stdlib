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

# zaxpb

> Multiply each element in a one-dimensional double-precision complex floating-point ndarray by a scalar constant and add a scalar constant to each result.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zaxpb = require( '@stdlib/blas/ext/base/ndarray/zaxpb' );
```

#### zaxpb( arrays )

Multiplies each element in a one-dimensional double-precision complex floating-point ndarray by a scalar constant and adds a scalar constant to each result.

```javascript
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Complex128Vector( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
    'dtype': 'complex128'
});

var beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
    'dtype': 'complex128'
});

zaxpb( [ x, alpha, beta ] );
// x => <ndarray>[ <Complex128>[ -3.0, 2.0 ], <Complex128>[ 7.0, -10.0 ], <Complex128>[ 9.0, 0.0 ], <Complex128>[ -1.0, -6.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the scalar constant to multiply.
    -   a zero-dimensional ndarray containing the scalar constant to add.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is modified **in-place** (i.e., the input ndarray is **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zaxpb = require( '@stdlib/blas/ext/base/ndarray/zaxpb' );

var opts = {
    'dtype': 'float64'
};

var x = new Complex128Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var alpha = scalar2ndarray( new Complex128( 2.0, 1.0 ), {
    'dtype': 'complex128'
});
console.log( 'Alpha:', ndarraylike2scalar( alpha ) );

var beta = scalar2ndarray( new Complex128( 5.0, -3.0 ), {
    'dtype': 'complex128'
});
console.log( 'Beta:', ndarraylike2scalar( beta ) );

zaxpb( [ x, alpha, beta ] );
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
