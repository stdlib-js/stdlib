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

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] for a [beta prime][betaprime-distribution] distribution .

<section class="intro">

The [cumulative distribution function][cdf] for a [beta prime][betaprime-distribution] random variable is

<!-- <equation class="equation" label="eq:betaprime_cdf" align="center" raw="F(x;\alpha,\beta) = \begin{cases} I_{\frac{x}{1+x}}(\alpha, \beta) & \text{ for } x > 0 \\ 0 & \text{ otherwise } \end{cases}" alt="Cumulative distribution function for a beta prime distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\alpha,\beta) = \begin{cases} I_{\frac{x}{1+x}}(\alpha, \beta) &amp; \text{ for } x &gt; 0 \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:betaprime_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/logcdf/docs/img/equation_betaprime_cdf.svg" alt="Cumulative distribution function for a beta prime distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the first shape parameter, `beta > 0` is the second shape parameter and `I` is the [incomplete beta function][incomplete-beta].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/betaprime/logcdf' );
```

#### logcdf( x, alpha, beta )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = logcdf( 0.5, 1.0, 1.0 );
// returns ~-1.099

y = logcdf( 0.5, 2.0, 4.0 );
// returns ~-0.618

y = logcdf( 0.2, 2.0, 2.0 );
// returns ~-2.603

y = logcdf( 0.8, 4.0, 4.0 );
// returns ~-0.968

y = logcdf( -0.5, 4.0, 2.0 );
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

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] for a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mylogcdf = logcdf.factory( 0.5, 0.5 );

var y = mylogcdf( 0.8 );
// returns ~-0.767

y = mylogcdf( 0.3 );
// returns ~-1.143
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
var EPS = require( '@stdlib/constants/float64/eps' );
var logcdf = require( '@stdlib/stats/base/dists/betaprime/logcdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    alpha = ( randu()*5.0 ) + EPS;
    beta = ( randu()*5.0 ) + EPS;
    y = logcdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, ln(F(x;α,β)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[incomplete-beta]: https://en.wikipedia.org/wiki/Beta_function#Incomplete_beta_function

</section>

<!-- /.links -->
