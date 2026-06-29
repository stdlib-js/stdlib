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

# zswap

> Interchange two one-dimensional complex double-precision floating-point ndarrays.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zswap = require( '@stdlib/blas/base/ndarray/zswap' );
```

#### zswap( arrays )

Interchanges two one-dimensional complex double-precision floating-point ndarrays.

```javascript
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );

var x = new Complex128Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Vector( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var z = zswap( [ x, y ] );
// x => <ndarray>[ <Complex128>[ 7.0, 8.0 ], <Complex128>[ 9.0, 10.0 ], <Complex128>[ 11.0, 12.0 ] ]
// y => <ndarray>[ <Complex128>[ 1.0, 2.0 ], <Complex128>[ 3.0, 4.0 ], <Complex128>[ 5.0, 6.0 ] ]

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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zswap = require( '@stdlib/blas/base/ndarray/zswap' );

var opts = {
    'dtype': 'float64'
};

var x = new Complex128Vector( discreteUniform( 10, 0, 100, opts ) );
console.log( ndarray2array( x ) );

var y = new Complex128Vector( discreteUniform( 10, 0, 100, opts ) );
console.log( ndarray2array( y ) );

var out = zswap( [ x, y ] );
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
