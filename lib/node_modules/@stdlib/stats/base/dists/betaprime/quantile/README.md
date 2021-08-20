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

> [Beta prime][betaprime-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [beta prime][betaprime-distribution] random variable with first shape parameter `α > 0` and second shape parameter `β > 0` is

<!-- <equation class="equation" label="eq:betaprime_quantile_function" align="center" raw="Q(p;\alpha,\beta)\,= \frac{G^{-1}(p)}{1-G^{-1}(p)}" alt="Quantile function for a beta prime distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\alpha,\beta)\,= \frac{G^{-1}(p)}{1-G^{-1}(p)}" data-equation="eq:betaprime_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/quantile/docs/img/equation_betaprime_quantile_function.svg" alt="Quantile function for a beta prime distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `G^-1` denotes the quantile function of a [beta][beta-distribution] random variable with parameters `α` and `β`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/betaprime/quantile' );
```

#### quantile( p, alpha, beta )

Evaluates the [quantile function][quantile-function] for a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = quantile( 0.8, 2.0, 1.0 );
// returns ~8.472

y = quantile( 0.5, 4.0, 2.0 );
// returns ~2.187
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

y = quantile( 0.5, NaN, 1.0 );
// returns NaN

y = quantile( 0.5, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0, 1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 1.0, -1.0 );
// returns NaN

y = quantile( 0.4, 1.0, 0.0 );
// returns NaN
```

#### quantile.factory( alpha, beta )

Returns a function for evaluating the [quantile function][quantile-function] of a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var myQuantile = quantile.factory( 2.0, 2.0 );

var y = myQuantile( 0.8 );
// returns ~2.483

y = myQuantile( 0.4 );
// returns ~0.763
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var quantile = require( '@stdlib/stats/base/dists/betaprime/quantile' );

var alpha;
var beta;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    alpha = ( randu()*5.0 ) + EPS;
    beta = ( randu()*5.0 ) + EPS;
    y = quantile( p, alpha, beta );
    console.log( 'p: %d, α: %d, β: %d, Q(p;α,β): %d', p.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
