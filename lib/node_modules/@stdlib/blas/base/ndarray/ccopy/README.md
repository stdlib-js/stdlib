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

# ccopy

> Copy values from a one-dimensional single-precision complex floating-point ndarray `x` into a one-dimensional single-precision complex floating-point ndarray `y`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ccopy = require( '@stdlib/blas/base/ndarray/ccopy' );
```

#### ccopy( arrays )

Copies values from a one-dimensional single-precision complex floating-point ndarray `x` into a one-dimensional single-precision complex floating-point ndarray `y`.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new ndarray( 'complex64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );

var ybuf = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var y = new ndarray( 'complex64', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );

var z = ccopy( [ x, y ] );
// returns <ndarray>[ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 3.0, 4.0 ], <Complex64>[ 5.0, 6.0 ] ]

var bool = ( y === z );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing an input ndarray and an output ndarray.

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
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ccopy = require( '@stdlib/blas/base/ndarray/ccopy' );

var opts = {
    'dtype': 'float32'
};

var xbuf = new Complex64Array( discreteUniform( 10, 0, 100, opts ) );
var x = new ndarray( 'complex64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var ybuf = new Complex64Array( discreteUniform( xbuf.length*2, 0, 10, opts ) );
var y = new ndarray( 'complex64', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( y ) );

var out = ccopy( [ x, y ] );
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
