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

> [Triangular][triangular-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_cdf" align="center" raw="F(x;a,b,c) = \begin{cases} 0 & \text{for } x \leq a \\ \frac{(x-a)^2}{(b-a)(c-a)} & \text{for } a < x \leq c \\ 1-\frac{(b-x)^2}{(b-a)(b-c)} & \text{for } c < x < b \\ 1 & \text{for } b \leq x \end{cases}" alt="Cumulative distribution function for a Triangular distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;a,b,c) = \begin{cases} 0 &amp; \text{for } x \leq a \\ \frac{(x-a)^2}{(b-a)(c-a)} &amp; \text{for } a &lt; x \leq c \\ 1-\frac{(b-x)^2}{(b-a)(b-c)} &amp; \text{for } c &lt; x &lt; b \\ 1 &amp; \text{for } b \leq x \end{cases}" data-equation="eq:triangular_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/logcdf/docs/img/equation_triangular_cdf.svg" alt="Cumulative distribution function for a Triangular distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the lower limit, `b` is the upper limit, and `c` is the mode.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/triangular/logcdf' );
```

#### logcdf( x, a, b, c )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var y = logcdf( 0.5, -1.0, 1.0, 0.0 );
// returns ~-0.134

y = logcdf( 0.5, -1.0, 1.0, 0.5 );
// returns ~-0.288

y = logcdf( -10.0, -20.0, 0.0, -2.0 );
// returns ~-1.281

y = logcdf( -2.0, -1.0, 1.0, 0.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0, 1.0, 0.5 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0, 0.5 );
// returns NaN

y = logcdf( 0.0, 0.0, NaN, 0.5 );
// returns NaN

y = logcdf( 2.0, 1.0, 0.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 1.0, 0.0, 1.5 );
// returns NaN

y = logcdf( 2.0, 1.0, 0.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, -1.0, 0.5 );
// returns NaN
```

#### logcdf.factory( a, b, c )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] of a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var mylogcdf = logcdf.factory( 0.0, 10.0, 2.0 );
var y = mylogcdf( 0.5 );
// returns ~-4.382

y = mylogcdf( 8.0 );
// returns ~-0.051
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
var logcdf = require( '@stdlib/stats/base/dists/triangular/logcdf' );

var a;
var b;
var c;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    x = randu() * 30.0;
    a = randu() * 10.0;
    b = a + (randu() * 40.0);
    c = a + ((b-a) * randu());
    y = logcdf( x, a, b, c );
    console.log( 'x: %d, a: %d, b: %d, c: %d, ln(F(x;a,b,c)): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

</section>

<!-- /.links -->
