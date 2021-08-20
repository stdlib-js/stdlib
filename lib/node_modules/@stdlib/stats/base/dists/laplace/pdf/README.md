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

> [Laplace][laplace-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Laplace][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_pdf" align="center" raw="f(x\mid\mu,b) = \frac{1}{2b} \exp \left( -\frac{|x-\mu|}{b} \right)" alt="Probability density function (PDF) for a Laplace distribution."> -->

<div class="equation" align="center" data-raw-text="f(x\mid\mu,b) = \frac{1}{2b} \exp \left( -\frac{|x-\mu|}{b} \right)" data-equation="eq:laplace_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/laplace/pdf/docs/img/equation_laplace_pdf.svg" alt="Probability density function (PDF) for a Laplace distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter (also called diversity).

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/laplace/pdf' );
```

#### pdf( x, mu, b )

Evaluates the [probability density function][pdf] (PDF) for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var y = pdf( 2.0, 0.0, 1.0 );
// returns ~0.068

y = pdf( -1.0, 2.0, 3.0 );
// returns ~0.061

y = pdf( 2.5, 2.0, 3.0 );
// returns ~0.141
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.0, -1.0 );
// returns NaN

y = pdf( 2.0, 8.0, 0.0 );
// returns NaN
```

#### pdf.factory( mu, b )

Returns a `function` for evaluating the [PDF][pdf] of a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var mypdf = pdf.factory( 10.0, 2.0 );

var y = mypdf( 10.0 );
// returns 0.25

y = mypdf( 5.0 );
// returns ~0.021

y = mypdf( 12.0 );
// returns ~0.092
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/laplace/pdf' );

var mu;
var b;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    b = randu() * 10.0;
    y = pdf( x, mu, b );
    console.log( 'x: %d, µ: %d, b: %d, f(x;µ,b): %d', x.toFixed( 4 ), mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
