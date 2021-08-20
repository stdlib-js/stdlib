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

> Evaluate the natural logarithm of the probability density function (PDF) for an [inverse gamma][inverse-gamma] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for an [inverse gamma][inverse-gamma] random variable is

<!-- <equation class="equation" label="eq:invgamma_pdf" align="center" raw="{\displaystyle f(x;\alpha ,\beta )={\frac {\beta ^{\alpha }}{\Gamma (\alpha )}}x^{-\alpha -1}\exp \left(-{\frac {\beta }{x}}\right)}" alt="Probability density function (PDF) for an inverse gamma distribution."> -->

<div class="equation" align="center" data-raw-text="{\displaystyle f(x;\alpha ,\beta )={\frac {\beta ^{\alpha }}{\Gamma (\alpha )}}x^{-\alpha -1}\exp \left(-{\frac {\beta }{x}}\right)}" data-equation="eq:invgamma_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/invgamma/logpdf/docs/img/equation_invgamma_pdf.svg" alt="Probability density function (PDF) for an inverse gamma distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the shape parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/invgamma/logpdf' );
```

#### logpdf( x, alpha, beta )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = logpdf( 2.0, 0.5, 1.0 );
// returns ~-2.112

y = logpdf( 0.2, 1.0, 1.0 );
// returns ~-1.781

y = logpdf( -1.0, 4.0, 2.0 );
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
var y = logpdf( 2.0, 0.0, 1.0 );
// returns NaN

y = logpdf( 2.0, -0.5, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 1.0, 0.0 );
// returns NaN

y = logpdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### logpdf.factory( alpha, beta )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] for an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mylogPDF = logpdf.factory( 6.0, 7.0 );

var y = mylogPDF( 2.0 );
// returns ~-1.464
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var logpdf = require( '@stdlib/stats/base/dists/invgamma/logpdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 2.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = logpdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, ln(f(x;α,β)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[inverse-gamma]: https://en.wikipedia.org/wiki/Inverse-gamma_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
