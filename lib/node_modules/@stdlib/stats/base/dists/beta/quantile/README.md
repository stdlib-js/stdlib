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

> [Beta][beta-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [beta][beta-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_quantile_function" align="center" raw="Q(p;\alpha,\beta)\,=\,\inf\left\{ x\in [0,1] : p \le F(x;\alpha,\beta) \right\}" alt="Quantile function for a beta distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\alpha,\beta)\,=\,\inf\left\{ x\in [0,1] : p \le F(x;\alpha,\beta) \right\}" data-equation="eq:beta_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/beta/quantile/docs/img/equation_beta_quantile_function.svg" alt="Quantile function for a beta distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `alpha > 0` is the first shape parameter and `beta > 0` is the second shape parameter and `F(x;alpha,beta)` denotes the cumulative distribution function of a [beta][beta-distribution] random variable with parameters `alpha` and `beta`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/beta/quantile' );
```

#### quantile( p, alpha, beta )

Evaluates the [quantile function][quantile-function] for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = quantile( 0.8, 2.0, 1.0 );
// returns ~0.894

y = quantile( 0.5, 4.0, 2.0 );
// returns ~0.686
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

Returns a function for evaluating the [quantile function][quantile-function] of a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var myquantile = quantile.factory( 2.0, 2.0 );

var y = myquantile( 0.8 );
// returns ~0.713

y = myquantile( 0.4 );
// returns ~0.433
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var quantile = require( '@stdlib/stats/base/dists/beta/quantile' );

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

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
