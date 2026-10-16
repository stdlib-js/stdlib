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

# dcopy

> Copy values from a one-dimensional double-precision floating-point ndarray `x` into a one-dimensional double-precision floating-point ndarray `y`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcopy = require( '@stdlib/blas/base/ndarray/dcopy' );
```

#### dcopy( arrays )

Copies values from a one-dimensional double-precision floating-point ndarray `x` into a one-dimensional double-precision floating-point ndarray `y`.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );

var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var z = dcopy( [ x, y ] );
// returns <ndarray>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]

var bool = ( z === y );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
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
var dcopy = require( '@stdlib/blas/base/ndarray/dcopy' );

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 10 ], 0, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], 0, 10, opts );
console.log( ndarray2array( y ) );

var out = dcopy( [ x, y ] );
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
