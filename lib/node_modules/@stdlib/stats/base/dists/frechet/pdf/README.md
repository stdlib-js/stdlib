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

> [Fréchet][frechet-distribution] distribution [probability density function][pdf].

<section class="intro">

The [probability density function][pdf] for a [Fréchet][frechet-distribution] random variable is

<!-- <equation class="equation" label="eq:frechet_pdf" align="center" raw="f\left( x; \mu, \beta \right ) = {\frac{\alpha }{s}}\;\left({\frac{x-m}{s}}\right)^{{-1-\alpha }}\;e^{{-({\frac{x-m}{s}})^{-\alpha}}}" alt="Probability density function for a Fréchet distribution."> -->

<div class="equation" align="center" data-raw-text="f\left( x; \mu, \beta \right ) = {\frac{\alpha }{s}}\;\left({\frac{x-m}{s}}\right)^{{-1-\alpha }}\;e^{{-({\frac{x-m}{s}})^{-\alpha}}}" data-equation="eq:frechet_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/pdf/docs/img/equation_frechet_pdf.svg" alt="Probability density function for a Fréchet distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the shape, `s > 0` the scale and `m` the location parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/frechet/pdf' );
```

#### pdf( x, alpha, s, m )

Evaluates the [probability density function][pdf] (PDF) for a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.

```javascript
var y = pdf( 10.0, 2.0, 3.0, 5.0 );
// returns ~0.1

y = pdf( -3.0, 1.0, 2.0, -4.0 );
// returns ~0.271

y = pdf( 0.0, 2.0, 1.0, -1.0 );
// returns ~0.736
```

If provided `x <= m`, the function returns `0`.

```javascript
y = pdf( -2.0, 2.0, 1.0, -1.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0, 0.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0, 0.0 );
// returns NaN

y = pdf( 0.0, 1.0, NaN, 0.0);
// returns NaN

y = pdf( 0.0, 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -0.1, 1.0, 1.0 );
// returns NaN

y = pdf( 2.0, 0.0, 1.0, 1.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 1.0, -1.0, 1.0 );
// returns NaN

y = pdf( 2.0, 1.0, 0.0, 1.0 );
// returns NaN
```

#### pdf.factory( alpha, s, m )

Returns a function for evaluating the [probability density function][pdf] of a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m`.

```javascript
var mypdf = pdf.factory( 3.0, 3.0, 5.0 );

var y = mypdf( 10.0 );
// returns ~0.104

y = mypdf( 7.0 );
// returns ~0.173
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/frechet/pdf' );

var alpha;
var m;
var s;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    alpha = randu() * 10.0;
    x = randu() * 10.0;
    s = randu() * 10.0;
    m = randu() * 10.0;
    y = pdf( x, alpha, s, m );
    console.log( 'x: %d, α: %d, s: %d, m: %d, f(x;α,s,m): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
