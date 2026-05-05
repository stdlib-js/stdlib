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

# sscal

> Multiply a one-dimensional single-precision floating-point ndarray by a scalar constant.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sscal = require( '@stdlib/blas/base/ndarray/sscal' );
```

#### sscal( arrays )

Multiplies a one-dimensional single-precision floating-point ndarray by a scalar constant.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

var alpha = scalar2ndarray( 5.0, {
    'dtype': 'float32'
});

var y = sscal( [ x, alpha ] );
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
var sscal = require( '@stdlib/blas/base/ndarray/sscal' );

var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ 10 ], 0, 100, opts );
console.log( ndarray2array( x ) );

var alpha = scalar2ndarray( 5.0, opts );

var out = sscal( [ x, alpha ] );
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
