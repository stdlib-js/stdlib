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

# Binet's Formula

> Evaluate [Binet's formula][fibonacci-number] extended to real numbers.

<section class="intro">

[Binet's formula][fibonacci-number] refers to the closed-form solution for computing the nth [Fibonacci number][fibonacci-number] and may be expressed

<!-- <equation class="equation" label="eq:binets_formula" align="center" raw="F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}}" alt="Binet's formula"> -->

<div class="equation" align="center" data-raw-text="F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}}" data-equation="eq:binets_formula">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binet/docs/img/equation_binets_formula.svg" alt="Binet's formula">
    <br>
</div>

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio] and `ψ` is `1 - φ`. To extend [Fibonacci numbers][fibonacci-number] to real numbers, we may express [Binet's formula][fibonacci-number] as

<!-- <equation class="equation" label="eq:binets_formula_real_numbers" align="center" raw="F_x = \frac{\varphi^x - \varphi^{-x} \cdot \cos(\pi x)}{\sqrt{5}}" alt="Binet's formula extended to real numbers."> -->

<div class="equation" align="center" data-raw-text="F_x = \frac{\varphi^x - \varphi^{-x} \cdot \cos(\pi x)}{\sqrt{5}}" data-equation="eq:binets_formula_real_numbers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binet/docs/img/equation_binets_formula_real_numbers.svg" alt="Binet's formula extended to real numbers.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var binet = require( '@stdlib/math/base/special/binet' );
```

#### binet( x )

Evaluates [Binet's formula][fibonacci-number] extended to real numbers.

```javascript
var v = binet( 0.0 );
// returns 0.0

v = binet( 1.0 );
// returns 1.0

v = binet( 2.0 );
// returns 1.0

v = binet( 3.0 );
// returns 2.0

v = binet( -1.0 );
// returns 1.0

v = binet( 3.14 );
// returns ~2.12
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = binet( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns only **approximate** [Fibonacci numbers][fibonacci-number] for nonnegative integers.
-   The function does **not** return complex numbers, guaranteeing real-valued return values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var binet = require( '@stdlib/math/base/special/binet' );

var v;
var i;

for ( i = 0; i < 79; i++ ) {
    v = binet( i );
    console.log( v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

</section>

<!-- /.links -->
