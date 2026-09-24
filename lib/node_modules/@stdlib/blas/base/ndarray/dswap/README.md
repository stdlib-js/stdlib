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

# dswap

> Interchange two one-dimensional double-precision floating-point ndarrays.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dswap = require( '@stdlib/blas/base/ndarray/dswap' );
```

#### dswap( arrays )

Interchanges two one-dimensional double-precision floating-point ndarrays.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );

var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Vector( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

var z = dswap( [ x, y ] );
// x => <ndarray>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => <ndarray>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]

var bool = ( z === y );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   first one-dimensional input ndarray.
    -   second one-dimensional input ndarray.

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
var dswap = require( '@stdlib/blas/base/ndarray/dswap' );

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 10 ], 0, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], 0, 100, opts );
console.log( ndarray2array( y ) );

var out = dswap( [ x, y ] );
console.log( ndarray2array( x ) );
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
