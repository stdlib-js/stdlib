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

# dcusumpw

> Compute the cumulative sum of a one-dimensional double-precision floating-point ndarray using pairwise summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcusumpw = require( '@stdlib/blas/ext/base/ndarray/dcusumpw' );
```

#### dcusumpw( arrays )

Computes the cumulative sum of a one-dimensional double-precision floating-point ndarray using pairwise summation.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
var y = new ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

var initial = scalar2ndarray( 0.0, 'float64', 'row-major' );

var v = dcusumpw( [ x, y, initial ] );
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
-   In general, pairwise summation is more numerically stable than ordinary recursive summation (i.e., "simple" summation), with slightly worse performance. While not the most numerically stable summation technique (e.g., compensated summation techniques such as the Kahan–Babuška-Neumaier algorithm are generally more numerically stable), pairwise summation strikes a reasonable balance between numerical stability and performance. If either numerical stability or performance is more desirable for your use case, consider alternative summation techniques.

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
var dcusumpw = require( '@stdlib/blas/ext/base/ndarray/dcusumpw' );

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
var x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var y = zerosLike( x );
console.log( ndarray2array( y ) );

var initial = scalar2ndarray( 100.0, {
    'dtype': 'float64'
});

var v = dcusumpw( [ x, y, initial ] );
console.log( ndarray2array( v ) );
```

</section>

<!-- /.examples -->

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@higham:1993a]: https://doi.org/10.1137/0914050

</section>

<!-- /.links -->
