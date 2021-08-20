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

> [Fréchet][frechet-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Fréchet][frechet-distribution] random variable is

<!-- <equation class="equation" label="eq:frechet_cdf" align="center" raw="F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}" alt="Cumulative distribution function for a Fréchet distribution."> -->

<div class="equation" align="center" data-raw-text="F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}" data-equation="eq:frechet_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/logcdf/docs/img/equation_frechet_cdf.svg" alt="Cumulative distribution function for a Fréchet distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the shape, `s > 0` the scale, and `m` the location parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/frechet/logcdf' );
```

#### logcdf( x, alpha, s, m )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.

```javascript
var y = logcdf( 10.0, 2.0, 3.0, 5.0 );
// returns ~-0.36

y = logcdf( -3.4, 1.0, 2.0, -4.0 );
// returns ~-3.333

y = logcdf( 0.0, 2.0, 1.0, -1.0 );
// returns -1.0
```

If provided `x <= m`, the function returns `-Infinity`.

```javascript
y = logcdf( -2.0, 2.0, 1.0, -1.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0, 1.0, 0.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0, 0.0 );
// returns NaN

y = logcdf( 0.0, 1.0, NaN, 0.0);
// returns NaN

y = logcdf( 0.0, 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -0.1, 1.0, 1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, 1.0, 1.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 1.0, -1.0, 1.0 );
// returns NaN

y = logcdf( 2.0, 1.0, 0.0, 1.0 );
// returns NaN
```

#### logcdf.factory( alpha, s, m )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] of a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m`.

```javascript
var mylogcdf = logcdf.factory( 3.0, 3.0, 5.0 );

var y = mylogcdf( 10.0 );
// returns ~-0.216

y = mylogcdf( 7.0 );
// returns ~-3.375
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
var logcdf = require( '@stdlib/stats/base/dists/frechet/logcdf' );

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
    y = logcdf( x, alpha, s, m );
    console.log( 'x: %d, α: %d, s: %d, m: %d, ln(F(x;α,s,m)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
