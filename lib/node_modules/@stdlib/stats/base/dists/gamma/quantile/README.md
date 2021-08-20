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

# Quantile Function

> [Gamma][gamma-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [gamma][gamma-distribution] random variable is

<!-- <equation class="equation" label="eq:gamma_quantile_function" align="center" raw="Q(p;\alpha,\beta) = \frac{1}{\beta} P^{-1}\left( p, \alpha \right )" data-equation="eq:quantile_function" alt="Quantile function for a Gamma distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\alpha,\beta) = \frac{1}{\beta} P^{-1}\left( p, \alpha \right )" data-equation="eq:gamma_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/gamma/quantile/docs/img/equation_gamma_quantile_function.svg" alt="Quantile function for a Gamma distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `alpha` is the shape parameter and `beta` is the rate parameter of the distribution. `P^{-1}` is the inverse of the lower regularized incomplete gamma function.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/gamma/quantile' );
```

#### quantile( p, alpha, beta )

Evaluates the [quantile function][quantile-function] for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = quantile( 0.8, 2.0, 1.0 );
// returns ~2.994

y = quantile( 0.5, 4.0, 2.0 );
// returns ~1.836
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 1.0, 1.0 );
// returns NaN

y = quantile( -0.1, 1.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0, 1.0 );
// returns NaN
```

If provided `alpha = 0`, the function evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = quantile( 0.3, 0.0, 2.0 );
// returns 0.0

y = quantile( 0.9, 0.0, 2.0 );
// returns 0.0
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 1.0, -1.0 );
// returns NaN
```

#### quantile.factory( alpha, beta )

Returns a function for evaluating the [quantile function][quantile-function] of a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var myquantile = quantile.factory( 2.0, 2.0 );
var y = myquantile( 0.8 );
// returns ~1.497

y = myquantile( 0.4 );
// returns ~0.688
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/gamma/quantile' );

var alpha;
var beta;
var p;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    p = randu();
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = quantile( p, alpha, beta );
    console.log( 'p: %d, α: %d, β: %d, Q(p;α,β): %d', p.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
