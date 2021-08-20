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

# Moment-Generating Function

> [Rayleigh][rayleigh-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1+\sigma t\,e^{\sigma^2t^2/2}\sqrt{\frac{\pi}{2}} \left(\textrm{erf}\left(\frac{\sigma t}{\sqrt{2}}\right)\!+\!1\right)" alt="Moment-generating function (MGF) for a Rayleigh distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1+\sigma t\,e^{\sigma^2t^2/2}\sqrt{\frac{\pi}{2}} \left(\textrm{erf}\left(\frac{\sigma t}{\sqrt{2}}\right)\!+\!1\right)" data-equation="eq:rayleigh_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/rayleigh/mgf/docs/img/equation_rayleigh_mgf.svg" alt="Moment-generating function (MGF) for a Rayleigh distribution.">
    <br>
</div>

<!-- </equation> -->

where `sigma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/rayleigh/mgf' );
```

#### mgf( t, sigma )

Evaluates the [moment-generating function][mgf] for a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var y = mgf( 1.0, 3.0 );
// returns ~678.508

y = mgf( 1.0, 2.0 );
// returns ~38.65

y = mgf( -1.0, 4.0 );
// returns ~-0.947
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, -1.0 );
// returns NaN
```

#### mgf.factory( sigma )

Returns a function for evaluating the [moment-generating function][mgf] of a [Rayleigh][rayleigh-distribution] distribution with parameter `sigma` (scale parameter).

```javascript
var myMGF = mgf.factory( 0.5 );
var y = myMGF( 1.0 );
// returns ~2.715

y = myMGF( 0.5 );
// returns ~1.888
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var mgf = require( '@stdlib/stats/base/dists/rayleigh/mgf' );

var sigma;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    sigma = randu() * 5.0;
    y = mgf( t, sigma );
    console.log( 't: %d, σ: %d, M_X(t;σ): %d', t.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
