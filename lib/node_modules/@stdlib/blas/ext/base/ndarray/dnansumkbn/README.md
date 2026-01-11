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

# dnansumkbn

> Compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dnansumkbn = require( '@stdlib/blas/ext/base/ndarray/dnansumkbn' );
```

#### dnansumkbn( arrays )

Computes the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = dnansumkbn( [ x ] );
// returns 1.0
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dnansumkbn = require( '@stdlib/blas/ext/base/ndarray/dnansumkbn' );

function clbk() {
    if ( bernoulli( 0.7 ) > 0 ) {
        return discreteUniform( 0, 100 );
    }
    return NaN;
}

var xbuf = filledarrayBy( 10, 'float64', clbk );
var x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = dnansumkbn( [ x ] );
console.log( v );
```

</section>

<!-- /.examples -->

<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

</section>

<!-- /.links -->
