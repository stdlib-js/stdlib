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

> [Gumbel][gumbel-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Gumbel][gumbel-distribution] random variable is

<!-- <equation class="equation" label="eq:gumbel_cdf" align="center" raw="F\left( x; \mu, \beta \right ) = e^{{-e^{{-(x-\mu )/\beta }}}}" alt="Cumulative distribution function for a Gumbel distribution."> -->

<div class="equation" align="center" data-raw-text="F\left( x; \mu, \beta \right ) = e^{{-e^{{-(x-\mu )/\beta }}}}" data-equation="eq:gumbel_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/gumbel/logcdf/docs/img/equation_gumbel_cdf.svg" alt="Cumulative distribution function for a Gumbel distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/gumbel/logcdf' );
```

#### logcdf( x, mu, beta )

Evaluates the logarithm of the [cumulative distribution function][cdf] (CDF) for a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta` (scale parameter).

```javascript
var y = logcdf( 10.0, 0.0, 3.0 );
// returns ~-0.036

y = logcdf( -2.0, 0.0, 3.0 );
// returns ~-1.948

y = logcdf( 0.0, 0.0, 1.0 );
// returns ~-1
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

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### logcdf.factory( mu, beta )

Returns a function for evaluating the logarithm of the [cumulative distribution function][cdf] of a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 0.0, 3.0 );

var y = mylogcdf( 10.0 );
// returns ~-0.036

y = mylogcdf( -2.0 );
// returns ~-1.948
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
var logcdf = require( '@stdlib/stats/base/dists/gumbel/logcdf' );

var beta;
var mu;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    beta = randu() * 10.0;
    y = logcdf( x, mu, beta );
    console.log( 'x: %d, µ: %d, β: %d, ln(F(x;µ,β)): %d', x.toFixed( 4 ), mu.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
