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

# factorialln

> Natural logarithm of the [factorial function][factorial-function].

<section class="intro">

The natural logarithm of the factorial function may be expressed

<!-- <equation class="equation" label="eq:factorialln_function" align="center" raw="f(n)=\ln (n!)" alt="Equation of the natural logarithm of the factorial."> -->

<div class="equation" align="center" data-raw-text="f(n)=\ln (n!)" data-equation="eq:factorialln_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_factorialln_function.svg" alt="Equation of the natural logarithm of the factorial.">
    <br>
</div>

<!-- </equation> -->

The [factorial function][factorial-function] may be defined as the product

<!-- <equation class="equation" label="eq:factorial_function" align="center" raw="n! = \prod_{k=1}^n k" alt="Factorial function definition"> -->

<div class="equation" align="center" data-raw-text="n! = \prod_{k=1}^n k" data-equation="eq:factorial_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_factorial_function.svg" alt="Factorial function definition">
    <br>
</div>

<!-- </equation> -->

or according to the recurrence relation

<!-- <equation class="equation" label="eq:factorial_recurrence_relation" align="center" raw="n! = \begin{cases}1 & \textrm{if } n = 0,\\(n-1)! \times n & \textrm{if } n > 1\end{cases}" alt="Factorial function recurrence relation"> -->

<div class="equation" align="center" data-raw-text="n! = \begin{cases}1 &amp; \textrm{if } n = 0,\\(n-1)! \times n &amp; \textrm{if } n &gt; 1\end{cases}" data-equation="eq:factorial_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_factorial_recurrence_relation.svg" alt="Factorial function recurrence relation">
    <br>
</div>

<!-- </equation> -->

Following the convention for an [empty product][empty-product], in all definitions,

<!-- <equation class="equation" label="eq:zero_factorial" align="center" raw="0! = 1" alt="Zero factorial"> -->

<div class="equation" align="center" data-raw-text="0! = 1" data-equation="eq:zero_factorial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_zero_factorial.svg" alt="Zero factorial">
    <br>
</div>

<!-- </equation> -->

The [Gamma][gamma-function] function extends the [factorial function][factorial-function] for non-integer values.

<!-- <equation class="equation" label="eq:factorial_function_and_gamma" align="center" raw="n! = \Gamma(n+1)" alt="Factorial function extension via the Gamma function"> -->

<div class="equation" align="center" data-raw-text="n! = \Gamma(n+1)" data-equation="eq:factorial_function_and_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorialln/docs/img/equation_factorial_function_and_gamma.svg" alt="Factorial function extension via the Gamma function">
    <br>
</div>

<!-- </equation> -->

The [factorial][factorial-function] of a **negative** integer is not defined.

Evaluating the natural logarithm of [factorial function][factorial-function] is useful as the [factorial function][factorial-function] can overflow for large `n`. Thus, `factorialln( n )` is generally preferred to `ln( n! )`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var factorialln = require( '@stdlib/math/base/special/factorialln' );
```

#### factorialln( x )

Evaluates the natural logarithm of the [factorial function][factorial-function]. For input values other than negative integers, the function returns `ln( x! ) = ln( Γ(x+1) )`, where `Γ` is the [Gamma][gamma-function] function. For negative integers, the function returns `NaN`.

```javascript
var v = factorialln( 3.0 );
// returns ~1.792

v = factorialln( 2.4 );
// returns ~1.092

v = factorialln( -1.0 );
// returns NaN

v = factorialln( -1.5 );
// returns ~1.266
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = factorialln( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/incrspace' );
var factorialln = require( '@stdlib/math/base/special/factorialln' );

var x;
var v;
var i;

x = incrspace( -10.0, 50.0, 0.5 );
for ( i = 0; i < x.length; i++ ) {
    v = factorialln( x[ i ] );
    console.log( 'x: %d, f(x): %d', x[ i ], v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_Function

[factorial-function]: https://en.wikipedia.org/wiki/Factorial

[empty-product]: https://en.wikipedia.org/wiki/Empty_product

</section>

<!-- /.links -->
