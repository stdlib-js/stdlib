<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# scuminabs

> Compute the cumulative minimum absolute value of a one-dimensional single-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var scuminabs = require( '@stdlib/stats/base/ndarray/scuminabs' );
```

#### scuminabs( arrays )

Computes the cumulative minimum absolute value of a one-dimensional single-precision floating-point ndarray.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var ybuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
var y = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = scuminabs( [ x, y ] );
// returns <ndarray>

var bool = ( v === y );
// returns true

var arr = ndarray2array( v );
// returns [ 1.0, 1.0, 1.0, 1.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray and a one-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional input ndarray, the function returns the output ndarray unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var zerosLike = require( '@stdlib/ndarray/zeros-like' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scuminabs = require( '@stdlib/stats/base/ndarray/scuminabs' );

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'float32'
});
var x = new ndarray( 'float32', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var y = zerosLike( x );
console.log( ndarray2array( y ) );

var v = scuminabs( [ x, y ] );
console.log( ndarray2array( v ) );
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
