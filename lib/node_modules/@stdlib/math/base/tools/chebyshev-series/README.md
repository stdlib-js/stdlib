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

# Chebyshev Series

> Evaluate a [Chebyshev series][chebyshev-series] using double-precision floating-point arithmetic.

<section class="intro">

A [Chebyshev series][chebyshev-series] in a variable `x` can be expressed as

<!-- <equation class="equation" label="eq:chebyshev_series" align="center" raw="\sum_{i=0}^{n} c_i T_i(x/2)" alt="Chebyshev series expression."> -->

```math
\sum_{i=0}^{n} c_i T_i(x/2)
```

<!-- <div class="equation" align="center" data-raw-text="\sum_{i=0}^{n}' c_i T_i(x/2)" data-equation="eq:chebyshev_series">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/chebyshev-series/docs/img/equation_chebyshev_series.svg" alt="Chebyshev series expression.">
    <br>
</div> -->

<!-- </equation> -->

where `c_n, c_{n-1}, ..., c_0` are constants and `T_i` are Chebyshev polynomials of the first kind.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var chebyshevSeries = require( '@stdlib/math/base/tools/chebyshev-series' );
```

#### chebyshevSeries( x, c )

Evaluates a [Chebyshev series][chebyshev-series] having coefficients `c` at a value `x`.

```javascript
var v = chebyshevSeries( 1.0, [ 1.0, 0.5 ] );
// returns 0.75
```

The function evaluates Chebyshev polynomials at `x/2`.

#### chebyshevSeries.factory( c )

Uses code generation to in-line coefficients and return a function for evaluating a [Chebyshev series][chebyshev-series] using double-precision floating-point arithmetic.

```javascript
var evaluate = chebyshevSeries.factory( [ 1.0, 0.5 ] );

// 0.5 * T_0(0.5) + 1.0 * T_1(0.5)
var v = evaluate( 1.0 );
// returns 0.75
```

The returned function evaluates Chebyshev polynomials at `x/2`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The value at which to evaluate a Chebyshev series is expected to reside on the interval `[-2, 2]`.
-   The coefficients `c` **must be** be ordered in **descending** degree.
-   For hot code paths in which coefficients are invariant, a compiled function will be more performant than `chebyshevSeries()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var chebyshevSeries = require( '@stdlib/math/base/tools/chebyshev-series' );

// Create an array of random coefficients:
var coef = discreteUniform( 10, -100, 100 );

// Evaluate the series at random values using the direct function:
var v = uniform( 100, -2.0, 2.0 );
var i;
for ( i = 0; i < v.length; i++ ) {
    console.log( 'f(%d) = %d', v[ i ], chebyshevSeries( v[ i ], coef ) );
}

// Generate a chebyshev series evaluation function:
var evaluate = chebyshevSeries.factory( coef );
var x = uniform( 100, -2.0, 2.0 );
logEachMap( 'f(%d) = %d', x, evaluate );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[chebyshev-series]: https://en.wikipedia.org/wiki/Chebyshev_polynomials#Chebyshev_series

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
