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

# Gamma Function

> [Gamma][gamma-function] function.

<section class="intro">

The [gamma function][gamma-function] extends the [factorial function][@stdlib/math/base/special/factorial] to [real][real] and [complex][complex] numbers. If `n` is a positive `integer`,

<!-- <equation class="equation" label="eq:gamma_function_positive_integers" align="center" raw="\Gamma ( n ) = (n-1)!" alt="Gamma function for positive integers."> -->

<div class="equation" align="center" data-raw-text="\Gamma ( n ) = (n-1)!" data-equation="eq:gamma_function_positive_integers">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/gamma/docs/img/equation_gamma_function_positive_integers.svg" alt="Gamma function for positive integers.">
    <br>
</div>

<!-- </equation> -->

Generalized to all complex numbers `z`, except for nonpositive integers, the [gamma function][gamma-function] can be expressed as an infinite product

<!-- <equation class="equation" label="eq:gamma_function_infinite_product" align="center" raw="\Gamma ( z ) = \frac{e^{-\gamma z}}{z} \prod^{\infty}_{n=1} \left ( 1+\frac{z}{n}\right )^{-1} e^{z/n}" alt="Gamma function for all complex numbers."> -->

<div class="equation" align="center" data-raw-text="\Gamma ( z ) = \frac{e^{-\gamma z}}{z} \prod^{\infty}_{n=1} \left ( 1+\frac{z}{n}\right )^{-1} e^{z/n}" data-equation="eq:gamma_function_infinite_product">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/gamma/docs/img/equation_gamma_function_infinite_product.svg" alt="Gamma function for all complex numbers.">
    <br>
</div>

<!-- </equation> -->

where `γ ≈ 0.577216` is the  [Euler–Mascheroni constant][@stdlib/constants/math/float64-eulergamma].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gamma = require( '@stdlib/math/base/special/gamma' );
```

#### gamma( x )

Evaluates the [gamma function][gamma-function].

```javascript
var v = gamma( 4.0 );
// returns 6.0

v = gamma( -1.5 );
// returns ~2.363

v = gamma( -0.5 );
// returns ~-3.545

v = gamma( 0.5 );
// returns ~1.772

v = gamma( 0.0 );
// returns Infinity

v = gamma( -0.0 );
// returns -Infinity

v = gamma( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/math/utils/linspace' );
var gamma = require( '@stdlib/math/base/special/gamma' );

var x = linspace( -10.0, 10.0, 100 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
    v = gamma( x[ i ] );
    console.log( 'x: %d, f(x): %d', x[ i ], v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[@stdlib/math/base/special/factorial]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/factorial

[real]: https://en.wikipedia.org/wiki/Real_number

[complex]: https://en.wikipedia.org/wiki/Complex_number

[@stdlib/constants/math/float64-eulergamma]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/constants/math/float64-eulergamma

</section>

<!-- /.links -->
