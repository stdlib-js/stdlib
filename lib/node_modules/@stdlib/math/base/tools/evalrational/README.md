<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# evalrational

> Evaluate a [rational function][rational-function].

<section class="intro">

A [rational function][rational-function] `f(x)` is defined as

<!-- <equation class="equation" label="eq:rational_function" align="center" raw="f(x) = \frac{P(x)}{Q(x)}" alt="Rational function definition."> -->

<div class="equation" align="center" data-raw-text="f(x) = \frac{P(x)}{Q(x)}" data-equation="eq:rational_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/evalrational/docs/img/equation_rational_function.svg" alt="Rational function definition.">
    <br>
</div>

<!-- </equation> -->

where both `P(x)` and `Q(x)` are polynomials in `x`. A [polynomial][polynomial] in `x` can be expressed

<!-- <equation class="equation" label="eq:polynomial" align="center" raw="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" alt="Polynomial expression."> -->

<div class="equation" align="center" data-raw-text="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" data-equation="eq:polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/evalrational/docs/img/equation_polynomial.svg" alt="Polynomial expression.">
    <br>
</div>

<!-- </equation> -->

where `c_n, c_{n-1}, ..., c_0` are constants.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var evalrational = require( '@stdlib/math/base/tools/evalrational' );
```

#### evalrational( P, Q, x )

Evaluates a [rational function][rational-function] at a value `x`. The coefficients `P` and `Q` are expected to be arrays of the **same** length.

```javascript
var P = [ -6.0, -5.0 ];
var Q = [ 3.0, 0.5 ];

var v = evalrational( P, Q, 6.0 ); //  => ( -6*6^0 - 5*6^1 ) / ( 3*6^0 + 0.5*6^1 ) = (-6-30)/(3+3)
// returns -6.0
```

For polynomials of different degree, the coefficient array for the lower degree [polynomial][polynomial] should be padded with zeros.

```javascript
// 2x^3 + 4x^2 - 5x^1 - 6x^0 => degree 4
var P = [ -6.0, -5.0, 4.0, 2.0 ];

// 0.5x^1 + 3x^0 => degree 2
var Q = [ 3.0, 0.5, 0.0, 0.0 ]; // zero-padded

var v = evalrational( P, Q, 6.0 ); // => ( -6*6^0 - 5*6^1 + 4*6^2 + 2*6^3 ) / ( 3*6^0 + 0.5*6^1 + 0*6^2 + 0*6^3 ) = (-6-30+144+432)/(3+3)
// returns 90.0
```

Coefficients should be ordered in **ascending** degree, thus matching summation notation.

#### evalrational.factory( P, Q )

Uses code generation to in-line coefficients and return a `function` for evaluating a [rational function][rational-function].

```javascript
var P = [ 20.0, 8.0, 3.0 ];
var Q = [ 10.0, 9.0, 1.0 ];

var rational = evalrational.factory( P, Q );

var v = rational( 10.0 ); // => (20*10^0 + 8*10^1 + 3*10^2) / (10*10^0 + 9*10^1 + 1*10^2) = (20+80+300)/(10+90+100)
// returns 2.0

v = rational( 2.0 ); // => (20*2^0 + 8*2^1 + 3*2^2) / (10*2^0 + 9*2^1 + 1*2^2) = (20+16+12)/(10+18+4)
// returns 1.5
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For hot code paths in which coefficients are invariant, a compiled function will be more performant than `evalrational()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">
## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var evalrational = require( '@stdlib/math/base/tools/evalrational' );

var rational;
var sign;
var len;
var P;
var Q;
var v;
var i;

// Create two arrays of random coefficients...
len = 10;
P = new Float64Array( len );
Q = new Float64Array( len );
for ( i = 0; i < len; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    P[ i ] = sign * round( randu()*100 );
    Q[ i ] = sign * round( randu()*100 );
}

// Evaluate the rational function at random values...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    console.log( 'f(%d) = %d', v, evalrational( P, Q, v ) );
}

// Generate an `evalrational` function...
rational = evalrational.factory( P, Q );
for ( i = 0; i < 100; i++ ) {
    v = (randu()*100.0) - 50.0;
    console.log( 'f(%d) = %d', v, rational( v ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[polynomial]: https://en.wikipedia.org/wiki/Polynomial

[rational-function]: https://en.wikipedia.org/wiki/Rational_function

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
