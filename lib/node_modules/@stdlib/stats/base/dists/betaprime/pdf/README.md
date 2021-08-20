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

# Probability Density Function

> [Beta prime][betaprime-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [beta prime][betaprime-distribution] random variable is

<!-- <equation class="equation" label="eq:betaprime_pdf" align="center" raw="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1+x)^{-\alpha-\beta}} & \text{ for } x > 0 \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a beta prime distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1+x)^{-\alpha-\beta}} &amp; \text{ for } x &gt; 0 \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:betaprime_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/pdf/docs/img/equation_betaprime_pdf.svg" alt="Probability density function (PDF) for a beta prime distribution.">
    <br>
</div>

<!-- </equation> -->

where `α > 0` is the first shape parameter and `β > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/betaprime/pdf' );
```

#### pdf( x, alpha, beta )

Evaluates the [probability density function][pdf] (PDF) for a [beta prime][betaprime-distribution]  distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = pdf( 0.5, 0.5, 1.0 );
// returns ~0.385

y = pdf( 0.1, 1.0, 1.0 );
// returns ~0.826

y = pdf( 0.8, 4.0, 2.0 );
// returns ~0.301
```

If provided a `x <= 0`, the function returns `0`.

```javascript
var y = pdf( -0.1, 1.0, 1.0 );
// returns 0.0

y = pdf( 0.0, 1.0, 1.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 0.5, 0.0, 1.0 );
// returns NaN

y = pdf( 0.5, -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 0.5, 1.0, 0.0 );
// returns NaN

y = pdf( 0.5, 1.0, -1.0 );
// returns NaN
```

#### pdf.factory( alpha, beta )

Returns a `function` for evaluating the [PDF][pdf] for a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mypdf = pdf.factory( 0.5, 0.5 );

var y = mypdf( 0.8 );
// returns ~0.198

y = mypdf( 0.3 );
// returns ~0.447
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pdf = require( '@stdlib/stats/base/dists/betaprime/pdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    alpha = ( randu()*5.0 ) + EPS;
    beta = ( randu()*5.0 ) + EPS;
    y = pdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, f(x;α,β): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
