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

# dscal

> Multiply a one-dimensional double-precision floating-point ndarray by a scalar constant.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dscal = require( '@stdlib/blas/base/ndarray/dscal' );
```

#### dscal( arrays )

Multiplies a one-dimensional double-precision floating-point ndarray by a scalar constant.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

var alpha = scalar2ndarray( 5.0, {
    'dtype': 'float64'
});

var y = dscal( [ x, alpha ] );
// returns <ndarray>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]

var bool = ( y === x );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing a scalar constant.

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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dscal = require( '@stdlib/blas/base/ndarray/dscal' );

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 10 ], 0, 100, opts );
console.log( ndarray2array( x ) );

var alpha = scalar2ndarray( 5.0, opts );

var out = dscal( [ x, alpha ] );
console.log( ndarray2array( out ) );
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
