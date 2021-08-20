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

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] for a [discrete uniform][discrete-uniform-distribution] distribution.

<section class="intro">

The [cumulative distribution function][cdf] for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_cdf" align="center" raw="F(x)= \begin{cases} 0 & \text{for }x < a \\ \frac{\lfloor x \rfloor - a + 1}{b-a+1} & \text{for }a \le x < b \\ 1 & \text{for }x \ge b \end{cases}" alt="Cumulative distribution function for a discrete uniform distribution."> -->

<div class="equation" align="center" data-raw-text="F(x)= \begin{cases} 0 &amp; \text{for }x &lt; a \\ \frac{\lfloor x \rfloor - a + 1}{b-a+1} &amp; \text{for }a \le x &lt; b \\ 1 &amp; \text{for }x \ge b \end{cases}" data-equation="eq:discrete_uniform_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/logcdf/docs/img/equation_discrete_uniform_cdf.svg" alt="Cumulative distribution function for a discrete uniform distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/discrete-uniform/logcdf' );
```

#### logcdf( x, a, b )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = logcdf( 9.0, 0, 10 );
// returns ~-0.095

y = logcdf( 0.5, -2, 2 );
// returns ~-0.511

y = logcdf( -Infinity, 2, 4 );
// returns -Infinity

y = logcdf( Infinity, 2, 4 );
// returns 0.0
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = logcdf( 0.5, 3, 2);
// returns NaN
```

If provided `NaN` for any parameter, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0, 1 );
// returns NaN

y = logcdf( 0.0, NaN, 1 );
// returns NaN

y = logcdf( 0.0, 0, NaN );
// returns NaN
```

#### logcdf.factory( a, b )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] of a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myLogCDF = logcdf.factory( 0, 10 );
var y = myLogCDF( 0.5 );
// returns ~-2.398

y = myLogCDF( 8.0 );
// returns ~-0.201
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random/base/discrete-uniform' );
var randu = require( '@stdlib/random/base/randu' );
var logcdf = require( '@stdlib/stats/base/dists/discrete-uniform/logcdf' );

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 15.0;
    a = randa();
    b = randb( a, a+randa() );
    v = logcdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, ln(F(x;a,b)): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

</section>

<!-- /.links -->
