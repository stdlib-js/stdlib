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

> Evaluate the natural logarithm of the [probability density function][pdf] (PDF) for a [Pareto (Type I)][pareto-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_pdf" align="center" raw="f(x;\alpha,\beta) = \begin{cases} \frac{\alpha\,\beta^\alpha}{x^{\alpha+1}} & \text{ for }x\ge \beta \\ 0 & \text{otherwise} \end{cases}" alt="Probability density function (PDF) for a Pareto (Type I) distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\alpha,\beta) = \begin{cases} \frac{\alpha\,\beta^\alpha}{x^{\alpha+1}} &amp; \text{ for }x\ge \beta \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:pareto_type1_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/logpdf/docs/img/equation_pareto_type1_pdf.svg" alt="Probability density function (PDF) for a Pareto (Type I) distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the shape parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/pareto-type1/logpdf' );
```

#### logpdf( x, alpha, beta )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var y = logpdf( 4.0, 1.0, 1.0 );
// returns ~-2.773

y = logpdf( 20.0, 1.0, 10.0 );
// returns ~-3.689

y = logpdf( 7.0, 2.0, 6.0 );
// returns ~-1.561

y = logpdf( 7.0, 6.0, 3.0 );
// returns ~-5.238

y = logpdf( 1.0, 4.0, 2.0 );
// returns -Infinity

y = logpdf( 1.5, 4.0, 2.0 );
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
var y = logpdf( 2.0, -1.0, 0.5 );
// returns NaN

y = logpdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.5, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### logpdf.factory( alpha, beta )

Returns a function for evaluating the natural logarithm of the [probability density function][pdf] (PDF) (CDF) of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 0.5, 0.5 );
var y = mylogpdf( 0.8 );
// returns ~-0.705

y = mylogpdf( 2.0 );
// returns ~-2.079
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
var logpdf = require( '@stdlib/stats/base/dists/pareto-type1/logpdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 8.0;
    alpha = randu() * 4.0;
    beta = randu() * 4.0;
    y = logpdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, ln(f(x;α,β)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
