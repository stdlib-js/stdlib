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

> [Geometric][geometric-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [geometric][geometric-distribution] random variable is

<!-- <equation class="equation" label="eq:geometric_cdf" align="center" raw="F(x;p)= \begin{cases} 0 & \text{ for } x < 0 \\ 1-(1 - p)^{\left\lfloor x \right\rfloor+1} & \text{ otherwise} \end{cases}" alt="Cumulative distribution function for a geometric distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;p)= \begin{cases} 0 &amp; \text{ for } x &lt; 0 \\ 1-(1 - p)^{\left\lfloor x \right\rfloor+1} &amp; \text{ otherwise} \end{cases}" data-equation="eq:geometric_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/logcdf/docs/img/equation_geometric_cdf.svg" alt="Cumulative distribution function for a geometric distribution.">
    <br>
</div>

<!-- </equation> -->

where `0 <= p <= 1` is the success probability. `x` denotes the number of _failures_ before the first success.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/geometric/logcdf' );
```

#### logcdf( x, p )

Evaluates the logarithm of the [cumulative distribution function][cdf] for a [geometric][geometric-distribution] distribution with success probability `p`.

```javascript
var y = logcdf( 2.0, 0.5 );
// returns ~-0.134

y = logcdf( 2.0, 0.1 );
// returns ~-1.306
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.5 );
// returns NaN

y = logcdf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 1.5 );
// returns NaN
```

#### logcdf.factory( p )

Returns a function for evaluating the logarithm of the [cumulative distribution function][cdf] of a [geometric][geometric-distribution] distribution with success probability `p`

```javascript
var mylogcdf = logcdf.factory( 0.5 );
var y = mylogcdf( 3.0 );
// returns ~-0.065

y = mylogcdf( 1.0 );
// returns ~-0.288
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpmf` or `logcdf` functions is preferable to manually computing the logarithm of the `pmf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var logcdf = require( '@stdlib/stats/base/dists/geometric/logcdf' );

var p;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 5.0;
    p = randu();
    y = logcdf( x, p );
    console.log( 'x: %d, p: %d, ln(F(x;p)): %d', x.toFixed( 4 ), p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

</section>

<!-- /.links -->
