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

> [F][f-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [F][f-distribution] random variable is

<!-- <equation class="equation" label="eq:f_pdf" align="center" raw="f(x; d_1,d_2) = \frac{\sqrt{\frac{(d_1\,x)^{d_1}\,\,d_2^{d_2}} {(d_1\,x+d_2)^{d_1+d_2}}}} {x\,\mathrm{B}\!\left(\frac{d_1}{2},\frac{d_2}{2}\right)}" alt="Probability density function (PDF) for an F distribution."> -->

```math
f(x; d_1,d_2) = \frac{\sqrt{\frac{(d_1\,x)^{d_1}\,\,d_2^{d_2}} {(d_1\,x+d_2)^{d_1+d_2}}}} {x\,\mathrm{B}\!\left(\frac{d_1}{2},\frac{d_2}{2}\right)}
```

<!-- <div class="equation" align="center" data-raw-text="f(x; d_1,d_2) = \frac{\sqrt{\frac{(d_1\,x)^{d_1}\,\,d_2^{d_2}} {(d_1\,x+d_2)^{d_1+d_2}}}} {x\,\mathrm{B}\!\left(\frac{d_1}{2},\frac{d_2}{2}\right)}" data-equation="eq:f_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/f/pdf/docs/img/equation_f_pdf.svg" alt="Probability density function (PDF) for an F distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `d1` is the numerator degrees of freedom and `d2` is the denominator degrees of freedom and `B` is the `Beta` function.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/f/pdf' );
```

#### pdf( x, d1, d2 )

Evaluates the [probability density function][pdf] (PDF) for a [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var y = pdf( 2.0, 0.5, 1.0 );
// returns ~0.057

y = pdf( 0.1, 1.0, 1.0 );
// returns ~0.915

y = pdf( -1.0, 4.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.0, 1.0 );
// returns NaN

y = pdf( 2.0, -1.0, 1.0 );
// returns NaN
```

If provided `d2 <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 1.0, 0.0 );
// returns NaN

y = pdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### pdf.factory( d1, d2 )

Returns a `function` for evaluating the [PDF][pdf] of an [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var mypdf = pdf.factory( 6.0, 7.0 );
var y = mypdf( 7.0 );
// returns ~0.004

y = mypdf( 2.0 );
// returns ~0.166
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/f/pdf' );

var d1;
var d2;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 4.0;
    d1 = randu() * 10.0;
    d2 = randu() * 10.0;
    y = pdf( x, d1, d2 );
    console.log( 'x: %d, d1: %d, d2: %d, f(x;d1,d2): %d', x.toFixed( 4 ), d1.toFixed( 4 ), d2.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
