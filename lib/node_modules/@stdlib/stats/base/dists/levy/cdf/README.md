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

# Cumulative Distribution Function

> [Lévy][levy-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Lévy][levy-distribution] random variable is

<!-- <equation class="equation" label="eq:levy_cdf" align="center" raw="F(x;\mu,b) = \begin{cases} \operatorname{erfc}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) & \text{ for } x > \mu \\ 0 & \text{ otherwise } \end{cases}" alt="Cumulative distribution function for a Lévy distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\mu,b) = \begin{cases} \operatorname{erfc}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) &amp; \text{ for } x &gt; \mu \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:levy_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/levy/cdf/docs/img/equation_levy_cdf.svg" alt="Cumulative distribution function for a Lévy distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/levy/cdf' );
```

#### cdf( x, mu, c )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c > 0` (scale parameter).

```javascript
var y = cdf( 2.0, 0.0, 1.0 );
// returns ~0.48

y = cdf( 12.0, 10.0, 3.0 );
// returns ~0.221

y = cdf( 9.0, 10.0, 3.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `c <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### cdf.factory( mu, c )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c > 0` (scale parameter).

```javascript
var mycdf = cdf.factory( 3.0, 1.5 );

var y = mycdf( 4.0 );
// returns ~0.22

y = mycdf( 2.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var cdf = require( '@stdlib/stats/base/dists/levy/cdf' );

var mu;
var c;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    mu = randu() * 10.0;
    x = ( randu()*10.0 ) + mu;
    c = ( randu()*10.0 ) + EPS;
    y = cdf( x, mu, c );
    console.log( 'x: %d, µ: %d, c: %d, F(x;µ,c): %d', x.toFixed( 4 ), mu.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

</section>

<!-- /.links -->
