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

# Logarithm of Cumulative Distribution Function

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] for a [Pareto (Type I)][pareto-distribution] distribution.

<section class="intro">

The [cumulative distribution function][cdf] for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_cdf" align="center" raw="F(x)= 1 - \left( \frac{\beta}{x} \right)^\alpha \text{for }x \ge \beta" alt="Cumulative distribution function for a Pareto (Type I) distribution."> -->

<div class="equation" align="center" data-raw-text="F(x)= 1 - \left( \frac{\beta}{x} \right)^\alpha \text{for }x \ge \beta" data-equation="eq:pareto_type1_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/logcdf/docs/img/equation_pareto_type1_cdf.svg" alt="Cumulative distribution function for a Pareto (Type I) distribution.">
    <br>
</div>

<!-- </equation> -->

and zero otherwise. In the equation, `alpha > 0` is the shape parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/pareto-type1/logcdf' );
```

#### logcdf( x, alpha, beta )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var y = logcdf( 2.0, 1.0, 1.0 );
// returns ~-0.693

y = logcdf( 5.0, 2.0, 4.0 );
// returns ~-1.022

y = logcdf( 4.0, 2.0, 2.0 );
// returns ~-0.288

y = logcdf( 1.9, 2.0, 2.0 );
// returns -Infinity

y = logcdf( +Infinity, 4.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0, 0.5 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.5, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### logcdf.factory( alpha, beta )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] (CDF) of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 10.0, 2.0 );
var y = mylogcdf( 3.0 );
// returns ~-0.017

y = mylogcdf( 2.5 );
// returns ~-0.114
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var logcdf = require( '@stdlib/stats/base/dists/pareto-type1/logcdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 8.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = logcdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, ln(F(x;α,β)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

</section>

<!-- /.links -->
