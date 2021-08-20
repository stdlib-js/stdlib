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

> [Weibull][weibull-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_cdf" align="center" raw="F(x;\lambda, k) =\begin{cases}1- e^{-(x/\lambda)^k} & x\geq0\\ 0 & x<0\end{cases}" alt="Cumulative distribution function for a Weibull distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\lambda, k) =\begin{cases}1- e^{-(x/\lambda)^k} &amp; x\geq0\\ 0 &amp; x&lt;0\end{cases}" data-equation="eq:weibull_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e2f64e6ec3d2c31743d067b73ccd26699c52be67/lib/node_modules/@stdlib/stats/base/dists/weibull/logcdf/docs/img/equation_weibull_cdf.svg" alt="Cumulative distribution function for a Weibull distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda > 0` is the [shape parameter][shape] and `k > 0` is the [scale parameter][scale].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/weibull/logcdf' );
```

#### logcdf( x, k, lambda )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var y = logcdf( 2.0, 1.0, 0.5 );
// returns ~-0.018

y = logcdf( 0.0, 0.5, 1.0 );
// returns -Infinity

y = logcdf( -Infinity, 4.0, 2.0 );
// returns -Infinity

y = logcdf( +Infinity, 4.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0, 0.5 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.5, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### logcdf.factory( k, lambda )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`. 

```javascript
var mylogcdf = logcdf.factory( 2.0, 10.0 );

var y = mylogcdf( 10.0 );
// returns ~-0.459

y = mylogcdf( 8.0 );
// returns ~-0.749
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
var logcdf = require( '@stdlib/stats/base/dists/weibull/logcdf' );

var lambda;
var k;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    k = randu() * 10.0;
    y = logcdf( x, lambda, k );
    console.log( 'x: %d, k: %d, λ: %d, ln(F(x;k,λ)): %d', x, k, lambda, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
