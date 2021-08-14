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

# Fibonacci Polynomial

> Evaluate a [Fibonacci polynomial][fibonacci-polynomials].

<section class="intro">

A [Fibonacci polynomial][fibonacci-polynomials] is expressed according to the following recurrence relation

<!-- <equation class="equation" label="eq:fibonacci_polynomial" align="center" raw="F_n(x) = \begin{cases}0 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\x \cdot F_{n-1}(x) + F_{n-2}(x) & \textrm{if}\ n \geq 2\end{cases}" alt="Fibonacci polynomial."> -->

<div class="equation" align="center" data-raw-text="F_n(x) = \begin{cases}0 &amp; \textrm{if}\ n = 0\\1 &amp; \textrm{if}\ n = 1\\x \cdot F_{n-1}(x) + F_{n-2}(x) &amp; \textrm{if}\ n \geq 2\end{cases}" data-equation="eq:fibonacci_polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/fibpoly/docs/img/equation_fibonacci_polynomial.svg" alt="Fibonacci polynomial.">
    <br>
</div>

<!-- </equation> -->

Alternatively, if `F(n,k)` is the coefficient of `x^k` in `F_n(x)`, then

<!-- <equation class="equation" label="eq:fibonacci_polynomial_combinatoric" align="center" raw="F_n(x) = \sum_{k = 0}^n F(n,k) x^k" alt="Combinatoric interpretation of a Fibonacci polynomial."> -->

<div class="equation" align="center" data-raw-text="F_n(x) = \sum_{k = 0}^n F(n,k) x^k" data-equation="eq:fibonacci_polynomial_combinatoric">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/fibpoly/docs/img/equation_fibonacci_polynomial_combinatoric.svg" alt="Combinatoric interpretation of a Fibonacci polynomial.">
    <br>
</div>

<!-- </equation> -->

where

<!-- <equation class="equation" label="eq:fibonacci_polynomial_coefficients" align="center" raw="F(n,k) = {{\frac{n+k-1}{2}} \choose {k}}" alt="Fibonacci polynomial coefficients."> -->

<div class="equation" align="center" data-raw-text="F(n,k) = {{\frac{n+k-1}{2}} \choose {k}}" data-equation="eq:fibonacci_polynomial_coefficients">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/fibpoly/docs/img/equation_fibonacci_polynomial_coefficients.svg" alt="Fibonacci polynomial coefficients.">
    <br>
</div>

<!-- </equation> -->

We can extend [Fibonacci polynomials][fibonacci-polynomials] to negative `n` using the identity

<!-- <equation class="equation" label="eq:negafibonacci_polynomial" align="center" raw="F_{-n}(x) = (-1)^{n-1} F_n(x)" alt="NegaFibonacci polynomial."> -->

<div class="equation" align="center" data-raw-text="F_{-n}(x) = (-1)^{n-1} F_n(x)" data-equation="eq:negafibonacci_polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/fibpoly/docs/img/equation_negafibonacci_polynomial.svg" alt="NegaFibonacci polynomial.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fibpoly = require( '@stdlib/math/base/tools/fibpoly' );
```

#### fibpoly( n, x )

Evaluates a [Fibonacci polynomial][fibonacci-polynomials] at a value `x`.

```javascript
var v = fibpoly( 5, 2.0 ); // => 2^4 + 3*2^2 + 1
// returns 29.0
```

#### fibpoly.factory( n )

Uses code generation to generate a `function` for evaluating a [Fibonacci polynomial][fibonacci-polynomials].

```javascript
var polyval = fibpoly.factory( 5 );

var v = polyval( 1.0 ); // => 1^4 + 3*1^2 + 1
// returns 5.0

v = polyval( 2.0 ); // => 2^4 + 3*2^2 + 1
// returns 29.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For hot code paths, a compiled function will be more performant than `fibpoly()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fibpoly = require( '@stdlib/math/base/tools/fibpoly' );

var i;

// Compute the negaFibonacci and Fibonacci numbers...
for ( i = -77; i < 78; i++ ) {
    console.log( 'F_%d = %d', i, fibpoly( i, 1.0 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[fibonacci-polynomials]: https://en.wikipedia.org/wiki/Fibonacci_polynomials

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
