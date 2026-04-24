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

# saxpy

> Multiply a one-dimensional single-precision floating-point ndarray `x` by a constant `alpha` and add the result to a one-dimensional single-precision floating-point ndarray `y`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var saxpy = require( '@stdlib/blas/base/ndarray/saxpy' );
```

#### saxpy( arrays )

Multiplies a one-dimensional single-precision floating-point ndarray `x` by a constant `alpha` and adds the result to a one-dimensional single-precision floating-point ndarray `y`.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Vector( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var alpha = scalar2ndarray( 5.0, {
    'dtype': 'float32'
});

var z = saxpy( [ x, y, alpha ] );
// returns <ndarray>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]

var bool = ( z === y );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays in order:

    -   input ndarray
    -   output ndarray
    -   zero-dimensional ndarray containing a scalar constant

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
var saxpy = require( '@stdlib/blas/base/ndarray/saxpy' );

var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ 10 ], 0, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], 0, 10, opts );
console.log( ndarray2array( y ) );

var alpha = scalar2ndarray( 5.0, opts );

var out = saxpy( [ x, y, alpha ] );
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
