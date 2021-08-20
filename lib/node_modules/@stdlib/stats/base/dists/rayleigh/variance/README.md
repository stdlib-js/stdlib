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

# Variance

> [Rayleigh][rayleigh-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_variance" align="center" raw="\operatorname{Var}\left( X \right) = \frac{4-\pi }{2}\sigma^{2}" alt="Variance for a Rayleigh distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = \frac{4-\pi }{2}\sigma^{2}" data-equation="eq:rayleigh_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/variance/docs/img/equation_rayleigh_variance.svg" alt="Variance for a Rayleigh distribution.">
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
var variance = require( '@stdlib/stats/base/dists/rayleigh/variance' );
```

#### variance( sigma )

Returns the [variance][variance] of a [Rayleigh][rayleigh-distribution] distribution with scale `sigma`.

```javascript
var y = variance( 9.0 );
// returns ~34.765

y = variance( 3.5 );
// returns ~5.258
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = variance( -1.0 );
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
var variance = require( '@stdlib/stats/base/dists/rayleigh/variance' );

var sigma;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    sigma = randu() * 20.0;
    y = variance( sigma );
    console.log( 'σ: %d, Var(X,σ): %d', sigma.toFixed( 4 ), y.toFixed( 4 ) );
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

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
