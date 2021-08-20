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

> Evaluate the natural logarithm of the [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_pdf" align="center" raw="{\frac{1}{2^{\frac {k}{2}}\Gamma\left({\frac{k}{2}}\right)}}\;x^{{\frac {k}{2}}-1}e^{-{\frac {x}{2}}}" alt="Probability density function (PDF) for a chi-squared distribution."> -->

<div class="equation" align="center" data-raw-text="{\frac{1}{2^{\frac {k}{2}}\Gamma\left({\frac{k}{2}}\right)}}\;x^{{\frac {k}{2}}-1}e^{-{\frac {x}{2}}}" data-equation="eq:chisquare_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chisquare/logpdf/docs/img/equation_chisquare_pdf.svg" alt="Probability density function (PDF) for a chi-squared distribution.">
    <br>
</div>

<!-- </equation> -->

where `k` is the degrees of freedom and `Γ` denotes the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/chisquare/logpdf' );
```

#### logpdf( x, k )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var y = logpdf( 0.1, 1.0 );
// returns ~0.182

y = logpdf( 0.5, 2.0 );
// returns ~-0.943

y = logpdf( -1.0, 4.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logpdf( 2.0, 0.0 );
// returns -Infinity

y = logpdf( 0.0, 0.0 );
// returns Infinity
```

#### logpdf.factory( k )

Returns a `function` for evaluating the [PDF][pdf] for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var myLogPDF = logpdf.factory( 6.0 );

var y = myLogPDF( 3.0 );
// returns ~-2.075

y = myLogPDF( 1.0 );
// returns ~-3.273
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var logpdf = require( '@stdlib/stats/base/dists/chisquare/logpdf' );

var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = randu() * 10.0;
    y = logpdf( x, k );
    console.log( 'x: %d, k: %d, ln(f(x;k)): %d', x.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
