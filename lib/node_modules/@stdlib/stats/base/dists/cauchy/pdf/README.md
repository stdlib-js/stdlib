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

> [Cauchy][cauchy-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Cauchy][cauchy-distribution] random variable is

<!-- <equation class="equation" label="eq:cauchy_cauchy_pdf" align="center" raw="f(x;\gamma,x_0)=\frac{1}{\pi\gamma\,\left[1 + \left(\frac{x-x_0}{\gamma}\right)^2\right]}\!" alt="Probability density function (PDF) for a Cauchy distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\gamma,x_0)=\frac{1}{\pi\gamma\,\left[1 + \left(\frac{x-x_0}{\gamma}\right)^2\right]}\!" data-equation="eq:cauchy_cauchy_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/cauchy/pdf/docs/img/equation_cauchy_cauchy_pdf.svg" alt="Probability density function (PDF) for a Cauchy distribution.">
    <br>
</div>

<!-- </equation> -->

where `x0` is the location parameter and `gamma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/cauchy/pdf' );
```

#### pdf( x, x0, gamma )

Evaluates the [probability density function][pdf] (PDF) for a [Cauchy][cauchy-distribution] distribution with parameters `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var y = pdf( 2.0, 1.0, 1.0 );
// returns ~0.159

y = pdf( 4.0, 3.0, 0.1 );
// returns ~0.0315

y = pdf( 4.0, 3.0, 3.0 );
// returns ~0.095
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 2.0, NaN, 1.0 );
// returns NaN

y = pdf( 2.0, 1.0, NaN );
// returns NaN
```

If provided `gamma <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.0, -1.0 );
// returns NaN

y = pdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### pdf.factory( x0, gamma )

Returns a `function` for evaluating the [PDF][pdf] of a [Cauchy][cauchy-distribution] distribution with location parameter `x0` and scale parameter `gamma`.

```javascript
var mypdf = pdf.factory( 10.0, 2.0 );

var y = mypdf( 10.0 );
// returns ~0.159

y = mypdf( 5.0 );
// returns ~0.022
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pdf = require( '@stdlib/stats/base/dists/cauchy/pdf' );

var gamma;
var x0;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    x0 = ( randu()*10.0 ) - 5.0;
    gamma = ( randu()*20.0 ) + EPS;
    y = pdf( x, gamma, x0 );
    console.log( 'x: %d, x0: %d, γ: %d, f(x;x0,γ): %d', x.toFixed(4), x0.toFixed(4), gamma.toFixed(4), y.toFixed(4) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

</section>

<!-- /.links -->
