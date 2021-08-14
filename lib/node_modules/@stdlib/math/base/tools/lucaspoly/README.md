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

# Lucas Polynomial

> Evaluate a [Lucas polynomial][fibonacci-polynomials].

<section class="intro">

A [Lucas polynomial][fibonacci-polynomials] is expressed according to the following recurrence relation

<!-- <equation class="equation" label="eq:lucas_polynomial" align="center" raw="L_n(x) = \begin{cases}2 & \textrm{if}\ n = 0\\x & \textrm{if}\ n = 1\\x \cdot L_{n-1}(x) + L_{n-2}(x) & \textrm{if}\ n \geq 2\end{cases}" alt="Lucas polynomial."> -->

<div class="equation" align="center" data-raw-text="L_n(x) = \begin{cases}2 &amp; \textrm{if}\ n = 0\\x &amp; \textrm{if}\ n = 1\\x \cdot L_{n-1}(x) + L_{n-2}(x) &amp; \textrm{if}\ n \geq 2\end{cases}" data-equation="eq:lucas_polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/lucaspoly/docs/img/equation_lucas_polynomial.svg" alt="Lucas polynomial.">
    <br>
</div>

<!-- </equation> -->

Alternatively, if `L(n,k)` is the coefficient of `x^k` in `L_n(x)`, then

<!-- <equation class="equation" label="eq:lucas_polynomial_sum" align="center" raw="L_n(x) = \sum_{k = 0}^n L(n,k) x^k" alt="Lucas polynomial expressed as a sum."> -->

<div class="equation" align="center" data-raw-text="L_n(x) = \sum_{k = 0}^n L(n,k) x^k" data-equation="eq:lucas_polynomial_sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/lucaspoly/docs/img/equation_lucas_polynomial_sum.svg" alt="Lucas polynomial expressed as a sum.">
    <br>
</div>

<!-- </equation> -->

We can extend [Lucas polynomials][fibonacci-polynomials] to negative `n` using the identity

<!-- <equation class="equation" label="eq:negalucas_polynomial" align="center" raw="L_{-n}(x) = (-1)^{n} L_n(x)" alt="NegaLucas polynomial."> -->

<div class="equation" align="center" data-raw-text="L_{-n}(x) = (-1)^{n} L_n(x)" data-equation="eq:negalucas_polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/lucaspoly/docs/img/equation_negalucas_polynomial.svg" alt="NegaLucas polynomial.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var lucaspoly = require( '@stdlib/math/base/tools/lucaspoly' );
```

#### lucaspoly( n, x )

Evaluates a [Lucas polynomial][fibonacci-polynomials] at a value `x`.

```javascript
var v = lucaspoly( 5, 2.0 ); // => 2^5 + 5*2^3 + 5*2
// returns 82.0
```

#### lucaspoly.factory( n )

Uses code generation to generate a `function` for evaluating a [Lucas polynomial][fibonacci-polynomials].

```javascript
var polyval = lucaspoly.factory( 5 );

var v = polyval( 1.0 ); // => 1^5 + 5*1^3 + 5
// returns 11.0

v = polyval( 2.0 ); // => 2^5 + 5*2^3 + 5*2
// returns 82.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For hot code paths, a compiled function will be more performant than `lucaspoly()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lucaspoly = require( '@stdlib/math/base/tools/lucaspoly' );

var i;

// Compute the negaLucas and Lucas numbers...
for ( i = -76; i < 77; i++ ) {
    console.log( 'L_%d = %d', i, lucaspoly( i, 1.0 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[fibonacci-polynomials]: https://en.wikipedia.org/wiki/Fibonacci_polynomials

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
