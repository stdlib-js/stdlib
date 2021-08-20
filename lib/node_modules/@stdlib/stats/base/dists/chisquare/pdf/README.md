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

# Probability Density Function

> [Chi-squared][chisquare-distribution] distribution [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_pdf" align="center" raw="{\frac{1}{2^{\frac {k}{2}}\Gamma\left({\frac{k}{2}}\right)}}\;x^{{\frac {k}{2}}-1}e^{-{\frac {x}{2}}}" alt="Probability density function (PDF) for a chi-squared distribution."> -->

<div class="equation" align="center" data-raw-text="{\frac{1}{2^{\frac {k}{2}}\Gamma\left({\frac{k}{2}}\right)}}\;x^{{\frac {k}{2}}-1}e^{-{\frac {x}{2}}}" data-equation="eq:chisquare_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chisquare/pdf/docs/img/equation_chisquare_pdf.svg" alt="Probability density function (PDF) for a chi-squared distribution.">
    <br>
</div>

<!-- </equation> -->

where `k` is the degrees of freedom and `Γ` denotes the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/chisquare/pdf' );
```

#### pdf( x, k )

Evaluates the [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var y = pdf( 0.1, 1.0 );
// returns ~1.2

y = pdf( 0.5, 2.0 );
// returns ~0.389

y = pdf( -1.0, 4.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0 );
// returns NaN

y = pdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = pdf( 2.0, 0.0 );
// returns 0.0

y = pdf( 0.0, 0.0 );
// returns Infinity
```

#### pdf.factory( k )

Returns a `function` for evaluating the [PDF][pdf] for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var myPDF = pdf.factory( 6.0 );

var y = myPDF( 3.0 );
// returns ~0.126

y = myPDF( 1.0 );
// returns ~0.038
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/chisquare/pdf' );

var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = randu() * 10.0;
    y = pdf( x, k );
    console.log( 'x: %d, k: %d, f(x;k): %d', x.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
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
