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

# zaxpy

> Multiply a one-dimensional double-precision complex floating-point ndarray `x` by a constant `alpha` and add the result to a one-dimensional double-precision complex floating-point ndarray `y`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zaxpy = require( '@stdlib/blas/base/ndarray/zaxpy' );
```

#### zaxpy( arrays )

Multiplies a one-dimensional double-precision complex floating-point ndarray `x` by a constant `alpha` and adds the result to a one-dimensional double-precision complex floating-point ndarray `y`.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new ndarray( 'complex128', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );

var ybuf = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var y = new ndarray( 'complex128', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );

var alpha = scalar2ndarray( new Complex128( 1.0, 2.0 ), 'complex128', 'row-major' );
var z = zaxpy( [ x, y, alpha ] );
// returns <ndarray>[ <Complex128>[ -2.0, 5.0 ], <Complex128>[ -4.0, 11.0 ], <Complex128>[ -6.0, 17.0 ] ]

var bool = ( y === z );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing an input ndarray, an output ndarray, and a zero-dimensional ndarray containing a scalar constant.

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
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zaxpy = require( '@stdlib/blas/base/ndarray/zaxpy' );

var opts = {
    'dtype': 'float64'
};

var xbuf = new Complex128Array( discreteUniform( 10, 0, 100, opts ) );
var x = new ndarray( 'complex128', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var ybuf = new Complex128Array( discreteUniform( xbuf.length*2, 0, 10, opts ) );
var y = new ndarray( 'complex128', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( y ) );

var alpha = scalar2ndarray( new Complex128( 1.0, 2.0 ), {
    'dtype': 'complex128'
});
var out = zaxpy( [ x, y, alpha ] );
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
