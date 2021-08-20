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

# Kurtosis

> [Rayleigh][rayleigh-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \sigma \sqrt{2 \ln(2)}" alt="Excess kurtosis for a Rayleigh distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \sigma \sqrt{2 \ln(2)}" data-equation="eq:rayleigh_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/kurtosis/docs/img/equation_rayleigh_kurtosis.svg" alt="Excess kurtosis for a Rayleigh distribution.">
    <br>
</div>

<!-- </equation> -->

where `σ > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/rayleigh/kurtosis' );
```

#### kurtosis( sigma )

Returns the [excess kurtosis][kurtosis] of a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var y = kurtosis( 9.0 );
// returns ~0.245

y = kurtosis( 4.5 );
// returns ~0.245
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = kurtosis( -1.0 );
// returns NaN
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
var round = require( '@stdlib/math/base/special/round' );
var kurtosis = require( '@stdlib/stats/base/dists/rayleigh/kurtosis' );

var sigma;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    sigma = randu() * 20.0;
    y = kurtosis( sigma );
    console.log( 'σ: %d, Kurt(X,σ): %d', sigma.toFixed( 4 ), y.toFixed( 4 ) );
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

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
