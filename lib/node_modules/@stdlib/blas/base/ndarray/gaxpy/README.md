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

# gaxpy

> Multiply a one-dimensional ndarray `x` by a constant `alpha` and add the result to a one-dimensional ndarray `y`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gaxpy = require( '@stdlib/blas/base/ndarray/gaxpy' );
```

#### gaxpy( arrays )

Multiplies a one-dimensional ndarray `x` by a constant `alpha` and adds the result to a one-dimensional ndarray `y`.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );

var ybuf = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
var y = new ndarray( 'generic', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );

var alpha = scalar2ndarray( 5.0, 'generic', 'row-major' );
var z = gaxpy( [ x, y, alpha ] );
// returns <ndarray>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]

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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gaxpy = require( '@stdlib/blas/base/ndarray/gaxpy' );

var opts = {
    'dtype': 'generic'
};

var xbuf = discreteUniform( 10, 0, 100, opts );
var x = new ndarray( opts.dtype, xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var ybuf = discreteUniform( xbuf.length, 0, 10, opts );
var y = new ndarray( opts.dtype, ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( y ) );

var alpha = scalar2ndarray( 5.0, opts );
var out = gaxpy( [ x, y, alpha ] );
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
