<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# ellipj

> Compute the [Jacobi elliptic functions][jacobi-elliptic] sn, cn, and dn.

<section class="intro">

The [Jacobi elliptic functions][jacobi-elliptic] may be defined as the inverse of the [incomplete elliptic integral of the first kind][incomplete-elliptic]. Accordingly, they compute the value `φ` which satisfies the equation 

<!-- <equation class="equation" label="eq:incomplete_elliptic_integral_first_kind" align="center" raw="u=\int_{0}^{\varphi}{\frac {\mathrm{d} \theta }{\sqrt {1-m\sin^{2}\theta }}}" alt="Incomplete elliptic integral of the first kind"> -->

<!-- </equation> -->

where the parameter `m` is related to the modulus `k` by `m = k^2`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ellipj = require( '@stdlib/math/base/special/ellipj' );
```

#### ellipj( u, m )

Computes the [Jacobi elliptic functions][jacobi-elliptic] functions `sn`, `cn`, and `dn`, and the Jacobi amplitude `am`.

```javascript
var v = ellipj( 0.3, 0.5 );
// returns [ ~0.293, ~0.956, ~0.978, ~0.298 ]

v = ellipj( 0.0, 0.0 );
// returns [ ~0.0, ~1.0, ~1.0, ~0.0 ]

v = ellipj( Infinity, 1.0 );
// returns [ ~1.0, ~0.0, ~0.0, ~1.571 ]

v = ellipj( 0.0, -2.0 );
// returns [ ~0.0, ~1.0, ~1.0, NaN ]

v = ellipj( NaN, NaN );
// returns [ NaN, NaN, NaN, NaN ]
```

#### ellipj.assign( u, m, out, stride, offset )

Computes the Jacobi elliptic functions `sn`, `cn`, `dn`, and Jacobi amplitude `am` and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 4 );

var v = ellipj.assign( 0.0, 0.0, out, 1, 0 );
// returns <Float64Array>[ ~0.0, ~1.0, ~1.0, ~0.0 ]

var bool = ( v === out );
// returns true
```

#### ellipj.sn( u, m )

Computes the Jacobi elliptic function `sn` of value `u` with modulus `m`.

```javascript
var v = ellipj.sn( 0.3, 0.5 );
// returns ~0.293
```

#### ellipj.cn( u, m )

Computes the Jacobi elliptic function `cn` of value `u` with modulus `m`.

```javascript
var v = ellipj.cn( 0.3, 0.5 );
// returns ~0.956
```

#### ellipj.dn( u, m )

Computes the Jacobi elliptic function `dn` of value `u` with modulus `m`.

```javascript
var v = ellipj.dn( 0.3, 0.5 );
// returns ~0.978
```

#### ellipj.am( u, m )

Computes the Jacobi amplitude `am` of value `u` with modulus `m`.

```javascript
var v = ellipj.am( 0.3, 0.5 );
// returns ~0.298

v = ellipj.am( 0.3, 2.0 );
// returns NaN
```

Although `sn`, `cn`, and `dn` may be computed for `-∞ < m < ∞`, the domain of `am` is `0 ≤ m ≤ 1`. For `m < 0` or `m > 1`, the function returns `NaN`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Functions `sn`, `cn`, and `dn` are valid for `-∞ < m < ∞`. Values for `m < 0` or `m > 1` are computed in terms of Jacobi elliptic functions with `0 < m < 1` via the transformations outlined in Equations 16.13 and 16.15 from _The Handbook of Mathematical Functions_ (Abramowitz and Stegun).
-   If more than one of `sn`, `cn`, `dn`, or `am` is to be computed, preferring using `ellipj` to compute all four values simultaneously.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var ellipk = require( '@stdlib/math/base/special/ellipk' );
var ellipj = require( '@stdlib/math/base/special/ellipj' );

var m = 0.7;
var u = linspace( 0.0, ellipk( m ), 100 );

var out;
var i;
for ( i = 0; i < 100; i++ ) {
    out = ellipj( u[ i ], m );
    console.log( 'sn(%d, %d) = %d', u[ i ], m, out[ 0 ] );
    console.log( 'cn(%d, %d) = %d', u[ i ], m, out[ 1 ] );
    console.log( 'dn(%d, %d) = %d', u[ i ], m, out[ 2 ] );
    console.log( 'am(%d, %d) = %d', u[ i ], m, out[ 3 ] );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z][@fukushima:2009a].
-   Fukushima, Toshio. 2015. "Precise and fast computation of complete elliptic integrals by piecewise minimax rational function approximation." _Journal of Computational and Applied Mathematics_ 282 (July): 71–76. doi:[10.1016/j.cam.2014.12.038][@fukushima:2015a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[jacobi-elliptic]: https://en.wikipedia.org/wiki/Jacobi_elliptic_functions

[incomplete-elliptic]: https://en.wikipedia.org/wiki/Elliptic_integral

[@fukushima:2009a]: https://doi.org/10.1007/s10569-009-9228-z

[@fukushima:2015a]: https://doi.org/10.1016/j.cam.2014.12.038

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
