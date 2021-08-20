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

# Logarithm of Probability Density Function

> [Beta prime][betaprime-distribution] distribution logarithm of probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [beta prime][betaprime-distribution] random variable is

<!-- <equation class="equation" label="eq:betaprime_pdf" align="center" raw="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1+x)^{-\alpha-\beta}} & \text{ for } x > 0 \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a beta prime distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1+x)^{-\alpha-\beta}} &amp; \text{ for } x &gt; 0 \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:betaprime_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/logpdf/docs/img/equation_betaprime_pdf.svg" alt="Probability density function (PDF) for a beta prime distribution.">
    <br>
</div>

<!-- </equation> -->

where `α > 0` is the first shape parameter and `β > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/betaprime/logpdf' );
```

#### logpdf( x, alpha, beta )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [beta prime][betaprime-distribution]  distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = logpdf( 0.5, 0.5, 1.0 );
// returns ~-0.955

y = logpdf( 0.1, 1.0, 1.0 );
// returns ~-0.191

y = logpdf( 0.8, 4.0, 2.0 );
// returns ~-1.2
```

If provided an input value `x` outside smaller or equal to zero, the function returns `-Infinity`.

```javascript
var y = logpdf( -0.1, 1.0, 1.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 0.5, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.5, -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 0.5, 1.0, 0.0 );
// returns NaN

y = logpdf( 0.5, 1.0, -1.0 );
// returns NaN
```

#### logpdf.factory( alpha, beta )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] for a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mylogPDF = logpdf.factory( 0.5, 0.5 );

var y = mylogPDF( 0.8 );
// returns ~-1.62

y = mylogPDF( 0.3 );
// returns ~-0.805
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
var logpdf = require( '@stdlib/stats/base/dists/betaprime/logpdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    alpha = ( randu()*5.0 ) + EPS;
    beta = ( randu()*5.0 ) + EPS;
    y = logpdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, ln(f(x;α,β)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
