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

> [Normal][normal-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [normal][normal-distribution] random variable is

<!-- <equation class="equation" label="eq:normal_quantile_function" align="center" raw="Q(p;\mu,\sigma) = \mu+\sigma\sqrt{2}\,\operatorname{erf}^{-1}(2p-1)" alt="Quantile function for a Normal distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\mu,\sigma) = \mu+\sigma\sqrt{2}\,\operatorname{erf}^{-1}(2p-1)" data-equation="eq:normal_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/normal/quantile/docs/img/equation_normal_quantile_function.svg" alt="Quantile function for a Normal distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `µ` is the mean and `σ` is the standard deviation.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/normal/quantile' );
```

#### quantile( p, mu, sigma )

Evaluates the [quantile function][quantile-function] for a [normal][normal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var y = quantile( 0.5, 0.0, 1.0 );
// returns 0.0

y = quantile( 0.2, 4.0, 2.0 );
// returns ~2.317
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

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN
```

If provided `sigma = 0`, the function evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = quantile( 0.3, 8.0, 0.0 );
// returns 8.0

y = quantile( 0.9, 8.0, 0.0 );
// returns 8.0
```

#### quantile.factory( mu, sigma )

Returns a function for evaluating the [quantile function][quantile-function] of a [normal][normal-distribution] distribution with parameters `mu` and `sigma`.

```javascript
var myquantile = quantile.factory( 10.0, 2.0 );

var y = myquantile( 0.2 );
// returns ~8.317

y = myquantile( 0.8 );
// returns ~11.683
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/normal/quantile' );

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
    console.log( 'p: %d, µ: %d, σ: %d, Q(p;µ,σ): %d', p, mu, sigma, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
