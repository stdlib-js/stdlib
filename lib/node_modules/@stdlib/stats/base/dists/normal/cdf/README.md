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

> [Normal][normal-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [normal][normal-distribution] random variable is

<!-- <equation class="equation" label="eq:normal_cdf" align="center" raw="center" data-raw-text="F(x;\mu,\sigma) = \frac{1}{2} \left[ 1 + \operatorname{erf}\left( \frac{x-\mu}{\sigma\sqrt{2}} \right) \right]" alt="Cumulative distribution function for a normal distribution."> -->

<div class="equation" align="center" data-raw-text="center" data-equation="eq:normal_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/normal/cdf/docs/img/equation_normal_cdf.svg" alt="Cumulative distribution function for a normal distribution.">
    <br>
</div>

<!-- </equation> -->

where `µ` is the mean and `σ` is the standard deviation.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/normal/cdf' );
```

#### cdf( x, mu, sigma )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [normal][normal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var y = cdf( 2.0, 0.0, 1.0 );
// returns ~0.977

y = cdf( 0.0, 0.0, 1.0 );
// returns 0.5

y = cdf( -1.0, 4.0, 2.0 );
// returns ~0.006
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

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `sigma = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = cdf( 2.0, 8.0, 0.0 );
// returns 0.0

y = cdf( 8.0, 8.0, 0.0 );
// returns 1.0

y = cdf( 10.0, 8.0, 0.0 );
// returns 1.0
```

#### cdf.factory( mu, sigma )

Returns a function for evaluating the [cumulative distribution function][cdf] of a normal distribution with parameters `mu` and `sigma`.

```javascript
var mycdf = cdf.factory( 10.0, 2.0 );

var y = mycdf( 10.0 );
// returns 0.5

y = mycdf( 8.0 );
// returns ~0.159
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/normal/cdf' );

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
    console.log( 'x: %d, µ: %d, σ: %d, F(x;µ,σ): %d', x, mu, sigma, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
