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

# gcusum

> Compute the cumulative sum of a one-dimensional ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gcusum = require( '@stdlib/blas/ext/base/ndarray/gcusum' );
```

#### gcusum( arrays )

Computes the cumulative sum of a one-dimensional ndarray.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var ybuf = [ 0.0, 0.0, 0.0, 0.0 ];
var y = new ndarray( 'generic', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

var initial = scalar2ndarray( 0.0, 'generic', 'row-major' );

var v = gcusum( [ x, y, initial ] );
// returns <ndarray>

var bool = ( v === y );
// returns true

var arr = ndarray2array( v );
// returns [ 1.0, 4.0, 8.0, 10.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray, a one-dimensional output ndarray, and a zero-dimensional ndarray containing the initial sum.

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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gcusum = require( '@stdlib/blas/ext/base/ndarray/gcusum' );

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var y = zerosLike( x );
console.log( ndarray2array( y ) );

var initial = scalar2ndarray( 100.0, {
    'dtype': 'generic'
});

var v = gcusum( [ x, y, initial ] );
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
