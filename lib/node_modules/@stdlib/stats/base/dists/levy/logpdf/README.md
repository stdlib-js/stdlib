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

> [Lévy][levy-distribution] distribution logarithm of [probability density function (PDF)][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [Lévy][levy-distribution] random variable is

<!-- <equation class="equation" label="eq:levy_pdf" align="center" raw="f(x;\mu,c)=\begin{cases} \sqrt{\frac{c}{2\pi}}~~\frac{e^{ -\frac{c}{2(x-\mu)}}} {(x-\mu)^{3/2}} & \text{ for } x > \mu \\ 0 & \text{ otherwise} \end{cases}" alt="Probability density function (PDF) for a Lévy distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\mu,c)=\begin{cases} \sqrt{\frac{c}{2\pi}}~~\frac{e^{ -\frac{c}{2(x-\mu)}}} {(x-\mu)^{3/2}} &amp; \text{ for } x &gt; \mu \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:levy_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/levy/logpdf/docs/img/equation_levy_pdf.svg" alt="Probability density function (PDF) for a Lévy distribution.">
    <br>
</div>

<!-- </equation> -->

where `μ` is the location parameter and `c > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/levy/logpdf' );
```

#### logpdf( x, mu, c )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c` (scale parameter).

```javascript
var y = logpdf( 2.0, 0.0, 1.0 );
// returns ~-2.209

y = logpdf( -1.0, 4.0, 4.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `c <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### logpdf.factory( mu, c )

Returns a function for evaluating the logarithm of the [probability density function][pdf] (PDF) of a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 10.0, 2.0 );

var y = mylogpdf( 11.0 );
// returns ~-1.572

y = mylogpdf( 20.0 );
// returns ~-4.126
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
var EPS = require( '@stdlib/constants/float64/eps' );
var logpdf = require( '@stdlib/stats/base/dists/levy/logpdf' );

var mu;
var c;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = randu() * 10.0;
    x = ( randu()*10.0 ) + mu;
    c = ( randu()*10.0 ) + EPS;
    y = logpdf( x, mu, c );
    console.log( 'x: %d, µ: %d, c: %d, ln(f(x;µ,c)): %d', x, mu, c, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
