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

> [Inverse Gamma][inverse-gamma] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for an [inverse gamma][inverse-gamma] random variable is

<!-- <equation class="equation" label="eq:invgamma_cdf" align="center" raw="F(x; \alpha, \beta) = \frac{\Gamma\left(\alpha,\frac{\beta}{x}\right)}{\Gamma(\alpha)} = Q\left(\frac{\beta}{x},\alpha\right)" alt="Cumulative distribution function for a Inverse Gamma distribution."> -->

<div class="equation" align="center" data-raw-text="F(x; \alpha, \beta) = \frac{\Gamma\left(\alpha,\frac{\beta}{x}\right)}{\Gamma(\alpha)} = Q\left(\frac{\beta}{x},\alpha\right)" data-equation="eq:invgamma_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/invgamma/cdf/docs/img/equation_invgamma_cdf.svg" alt="Cumulative distribution function for a Inverse Gamma distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the shape parameter and `beta > 0` is the scale parameter. `Q` is the upper regularized incomplete gamma function.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/invgamma/cdf' );
```

#### cdf( x, alpha, beta )

Evaluates the [cumulative distribution function][cdf] (CDF) for an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = cdf( 2.0, 1.0, 1.0 );
// returns ~0.607

y = cdf( 2.0, 3.0, 1.0 );
// returns ~0.986

y = cdf( -1.0, 2.0, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = cdf( +Infinity, 4.0, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.5, -1.0 );
// returns NaN
```

#### cdf.factory( alpha, beta )

Returns a function for evaluating the [cumulative distribution function][cdf] for an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mycdf = cdf.factory( 0.5, 0.1 );

var y = mycdf( 12.0 );
// returns ~0.897

y = mycdf( 8.0 );
// returns ~0.874
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/invgamma/cdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 2.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = cdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, F(x;α,β): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[inverse-gamma]: https://en.wikipedia.org/wiki/Inverse-gamma_distribution

</section>

<!-- /.links -->
