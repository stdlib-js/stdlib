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

# zwapx

> Add a scalar constant to each element in an input one-dimensional double-precision complex floating-point ndarray and assign the results to elements in a one-dimensional double-precision complex floating-point output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zwapx = require( '@stdlib/blas/ext/base/ndarray/zwapx' );
```

#### zwapx( arrays )

Adds a scalar constant to each element in an input one-dimensional double-precision complex floating-point ndarray and assigns the results to elements in a one-dimensional double-precision complex floating-point output ndarray.

```javascript
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Complex128Vector( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var w = new Complex128Vector( 4 );

var alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
    'dtype': 'complex128'
});

zwapx( [ x, w, alpha ] );
// w => <ndarray>[ <Complex128>[ 3.0, 1.0 ], <Complex128>[ 8.0, -5.0 ], <Complex128>[ 9.0, 0.0 ], <Complex128>[ 4.0, -3.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.
    -   a zero-dimensional ndarray containing the scalar constant to add.

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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zwapx = require( '@stdlib/blas/ext/base/ndarray/zwapx' );

var opts = {
    'dtype': 'float64'
};

var x = new Complex128Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var w = new Complex128Vector( 10 );
console.log( ndarray2array( w ) );

var alpha = scalar2ndarray( new Complex128( 5.0, -3.0 ), {
    'dtype': 'complex128'
});
console.log( 'Alpha:', ndarraylike2scalar( alpha ) );

zwapx( [ x, w, alpha ] );
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
