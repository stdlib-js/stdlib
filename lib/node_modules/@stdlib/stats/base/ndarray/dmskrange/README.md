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

# dmskrange

> Calculate the [range][range] of a one-dimensional double-precision floating-point ndarray according to a mask.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmskrange = require( '@stdlib/stats/base/ndarray/dmskrange' );
```

#### dmskrange( arrays )

Computes the [range][range] of a one-dimensional double-precision floating-point ndarray according to a mask.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var maskbuf = new Uint8Array( [ 0, 0, 1, 0 ] );
var mask = new ndarray( 'uint8', maskbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = dmskrange( [ x, mask ] );
// returns 4.0
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray and a one-dimensional mask ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a mask array element is `0`, the corresponding element in the input ndarray is considered valid and **included** in computation. If a mask array element is `1`, the corresponding element in the input ndarray is considered invalid/missing and **excluded** from computation.
-   If provided an empty ndarray or a mask with all elements set to `1`, the function returns `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dmskrange = require( '@stdlib/stats/base/ndarray/dmskrange' );

var xbuf = uniform( 10, -50.0, 50.0, {
    'dtype': 'float64'
});
var x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var maskbuf = bernoulli( xbuf.length, 0.2, {
    'dtype': 'uint8'
});
var mask = new ndarray( 'uint8', maskbuf, [ maskbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( mask ) );

var v = dmskrange( [ x, mask ] );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

</section>

<!-- /.links -->
