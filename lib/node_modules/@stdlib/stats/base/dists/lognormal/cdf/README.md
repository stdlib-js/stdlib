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

# Cumulative Distribution Function

> [Lognormal][lognormal-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [lognormal][lognormal-distribution] random variable is

<!-- <equation class="equation" label="eq:cdf" align="center" raw="F(x;\mu,\sigma)=\frac12 + \frac12\,\operatorname{erf}\left[\frac{\ln x-\mu}{\sqrt{2}\sigma}\right]" alt="Cumulative distribution function for a lognormal distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\mu,\sigma)=\frac12 + \frac12\,\operatorname{erf}\left[\frac{\ln x-\mu}{\sqrt{2}\sigma}\right]" data-equation="eq:cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/lognormal/cdf/docs/img/equation_cdf.svg" alt="Cumulative distribution function for a lognormal distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `sigma > 0` is the scale parameter. According to the definition, the _natural logarithm_ of a random variable from a
[lognormal distribution][lognormal-distribution] follows a [normal distribution][normal-distribution].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/lognormal/cdf' );
```

#### cdf( x, mu, sigma )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [lognormal][lognormal-distribution] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var y = cdf( 2.0, 0.0, 1.0 );
// returns ~0.756

y = cdf( 5.0, 10.0, 3.0 );
// returns ~0.003
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### cdf.factory( mu, sigma )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [lognormal][lognormal-distribution] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var mycdf = cdf.factory( 3.0, 1.5 );

var y = mycdf( 1.0 );
// returns ~0.023

y = mycdf( 4.0 );
// returns ~0.141
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/lognormal/cdf' );

var sigma;
var mu;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    mu = (randu() * 10.0) - 5.0;
    sigma = randu() * 20.0;
    y = cdf( x, mu, sigma );
    console.log( 'x: %d, µ: %d, σ: %d, F(x;µ,σ): %d', x.toFixed( 4 ), mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[lognormal-distribution]: https://en.wikipedia.org/wiki/Lognormal_distribution

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

</section>

<!-- /.links -->
