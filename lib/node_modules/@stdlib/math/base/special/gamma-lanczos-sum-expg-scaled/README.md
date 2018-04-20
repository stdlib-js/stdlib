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

# Gamma Scaled Lanczos Sum

> Calculate a scaled Lanczos sum for the approximation of the [gamma function][gamma-function].

<section class="intro">

The [Lanczos approximation][lanczos-approximation] for the [gamma function][gamma-function] can be written in partial fraction form as follows:

<!-- <equation class="equation" label="eq:lanczos_approximation" align="center" raw="\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)" alt="Lanczos approximation for gamma function."> -->

<div class="equation" align="center" data-raw-text="\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)" data-equation="eq:lanczos_approximation">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled/docs/img/equation_lanczos_approximation.svg" alt="Lanczos approximation for gamma function.">
    <br>
</div>

<!-- </equation> -->

where `g` is an [arbitrary constant][@stdlib/constants/math/float64-gamma-lanczos-g] and `L_g(n)` is the Lanczos sum. The scaled Lanczos sum is given by 

<!-- <equation class="equation" label="eq:scaled_lanczos_sum" align="center" raw="L_g(n) \cdot \exp(-g)" alt="Scaled Lanczos sum."> -->

<div class="equation" align="center" data-raw-text="L_g(n) \cdot \exp(-g)" data-equation="eq:scaled_lanczos_sum">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled/docs/img/equation_scaled_lanczos_sum.svg" alt="Scaled Lanczos sum.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gammaLanczosSumExpGScaled = require( '@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled' );
```

#### gammaLanczosSumExpGScaled( x )

Calculates the Lanczos sum for the approximation of the [gamma function][gamma-function] (scaled by `exp(-g)`, where `g = 10.900511`).

```javascript
var v = gammaLanczosSumExpGScaled( 4.0 );
// returns ~0.018

v = gammaLanczosSumExpGScaled( -1.5 );
// returns ~25.337

v = gammaLanczosSumExpGScaled( -0.5 );
// returns ~-12.911

v = gammaLanczosSumExpGScaled( 0.5 );
// returns ~1.772

v = gammaLanczosSumExpGScaled( 0.0 );
// returns Infinity

v = gammaLanczosSumExpGScaled( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/math/utils/linspace' );
var gammaLanczosSumExpGScaled = require( '@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled' );

var x = linspace( -10.0, 10.0, 100 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
    v = gammaLanczosSumExpGScaled( x[ i ] );
    console.log( 'x: %d, f(x): %d', x[ i ], v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/constants/math/float64-gamma-lanczos-g]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/constants/math/float64-gamma-lanczos-g

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[lanczos-approximation]: https://en.wikipedia.org/wiki/Lanczos_approximation

</section>

<!-- /.links -->
