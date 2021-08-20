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

> [Fréchet][frechet-distribution] distribution logarithm of [probability density function][pdf].

<section class="intro">

The [probability density function][pdf] for a [Fréchet][frechet-distribution] random variable is

<!-- <equation class="equation" label="eq:frechet_pdf" align="center" raw="f\left( x; \mu, \beta \right ) = {\frac{\alpha }{s}}\;\left({\frac{x-m}{s}}\right)^{{-1-\alpha }}\;e^{{-({\frac{x-m}{s}})^{-\alpha}}}" alt="Probability density function for a Fréchet distribution."> -->

<div class="equation" align="center" data-raw-text="f\left( x; \mu, \beta \right ) = {\frac{\alpha }{s}}\;\left({\frac{x-m}{s}}\right)^{{-1-\alpha }}\;e^{{-({\frac{x-m}{s}})^{-\alpha}}}" data-equation="eq:frechet_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/logpdf/docs/img/equation_frechet_pdf.svg" alt="Probability density function for a Fréchet distribution.">
    <br>
</div>

<!-- </equation> -->

where `α > 0` is the shape, `s > 0` the scale and `m` the location parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/frechet/logpdf' );
```

#### logpdf( x, alpha, s, m )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.

```javascript
var y = logpdf( 10.0, 2.0, 3.0, 5.0 );
// returns ~-2.298

y = logpdf( -3.0, 1.0, 2.0, -4.0 );
// returns ~-1.307

y = logpdf( 0.0, 2.0, 1.0, -1.0 );
// returns ~-0.307
```

If provided `x <= m`, the function returns `-Infinity`.

```javascript
y = logpdf( -2.0, 2.0, 1.0, -1.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0, 1.0, 0.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0, 0.0 );
// returns NaN

y = logpdf( 0.0, 1.0, NaN, 0.0);
// returns NaN

y = logpdf( 0.0, 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -0.1, 1.0, 1.0 );
// returns NaN

y = logpdf( 2.0, 0.0, 1.0, 1.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 1.0, -1.0, 1.0 );
// returns NaN

y = logpdf( 2.0, 1.0, 0.0, 1.0 );
// returns NaN
```

#### logpdf.factory( alpha, s, m )

Returns a function for evaluating the logarithm of the [probability density function][pdf] of a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m`.

```javascript
var mylogpdf = logpdf.factory( 3.0, 3.0, 5.0 );

var y = mylogpdf( 10.0 );
// returns ~-2.259

y = mylogpdf( 7.0 );
// returns ~-1.753
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
var logpdf = require( '@stdlib/stats/base/dists/frechet/logpdf' );

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
    y = logpdf( x, alpha, s, m );
    console.log( 'x: %d, α: %d, s: %d, m: %d, ln(f(x;α,s,m)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
