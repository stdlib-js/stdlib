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

> [Laplace][laplace-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Laplace][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_cdf" align="center" raw="F(x;\mu,b) =\tfrac{1}{2} + \tfrac{1}{2} \operatorname{sgn}(x-\mu) \left(1-\exp \left(-\frac{|x-\mu|}{b} \right ) \right )" alt="Cumulative distribution function for a Laplace distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\mu,b) =\tfrac{1}{2} + \tfrac{1}{2} \operatorname{sgn}(x-\mu) \left(1-\exp \left(-\frac{|x-\mu|}{b} \right ) \right )" data-equation="eq:laplace_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/laplace/logcdf/docs/img/equation_laplace_cdf.svg" alt="Cumulative distribution function for a Laplace distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/laplace/logcdf' );
```

#### logcdf( x, mu, b )

Evaluates the logarithm of the [cumulative distribution function][cdf] (CDF) for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var y = logcdf( 2.0, 0.0, 1.0 );
// returns ~-0.07

y = logcdf( 5.0, 10.0, 3.0 );
// returns ~-2.36
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### logcdf.factory( mu, b )

Returns a function for evaluating the logarithm of the [cumulative distribution function][cdf] of a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 3.0, 1.5 );

var y = mylogcdf( 1.0 );
// returns ~-2.026

y = mylogcdf( 4.0 );
// returns ~-0.297
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
var logcdf = require( '@stdlib/stats/base/dists/laplace/logcdf' );

var mu;
var b;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    b = randu() * 10.0;
    y = logcdf( x, mu, b );
    console.log( 'x: %d, µ: %d, b: %d, ln(F(x;µ,b)): %d', x.toFixed( 4 ), mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

</section>

<!-- /.links -->
