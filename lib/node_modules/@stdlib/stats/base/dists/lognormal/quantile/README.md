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

> [Lognormal][lognormal-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [lognormal][lognormal-distribution] random variable is

<!-- <equation class="equation" label="eq:quantile_function" align="center" raw="Q(p;\mu,\sigma)=\exp\left( \mu + \sigma \Phi^{-1}(p) \right )" alt="Quantile function for a lognormal distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\mu,\sigma)=\exp\left( \mu + \sigma \Phi^{-1}(p) \right )" data-equation="eq:quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/lognormal/quantile/docs/img/equation_quantile_function.svg" alt="Quantile function for a lognormal distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `mu` is the location parameter and `sigma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/lognormal/quantile' );
```

#### quantile( p, mu, sigma )

Evaluates the [quantile function][quantile-function] for a [lognormal][lognormal-distribution] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var y = quantile( 0.5, 0.0, 1.0 );
// returns 1.0

y = quantile( 0.5, 4.0, 1.0 );
// returns ~54.598

y = quantile( 0.8, 4.0, 1.0 );
// returns ~126.675

y = quantile( 0.8, 4.0, 4.0 );
// returns ~1582.063
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 0.0 );
// returns NaN
```

#### quantile.factory( mu, sigma )

Returns a function for evaluating the [quantile function][quantile-function] of a [lognormal][lognormal-distribution] distribution with parameters `mu` and `sigma`.

```javascript
var myquantile = quantile.factory( 4.0, 2.0 );

var y = myquantile( 0.2 );
// returns ~10.143

y = myquantile( 0.8 );
// returns ~293.901
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/lognormal/quantile' );

var sigma;
var mu;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    mu = (randu() * 10.0) - 5.0;
    sigma = randu() * 20.0;
    y = quantile( p, mu, sigma );
    console.log( 'p: %d, µ: %d, σ: %d, Q(p;µ,σ): %d', p.toFixed( 4 ), mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[lognormal-distribution]: https://en.wikipedia.org/wiki/Lognormal_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
