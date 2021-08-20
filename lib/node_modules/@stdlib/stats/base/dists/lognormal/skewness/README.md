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

# Skewness

> [Lognormal][lognormal-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [lognormal][lognormal-distribution] random variable with location parameter `μ` and scale parameter `σ > 0` is

<!-- <equation class="equation" label="eq:lognormal_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \left(\exp(\sigma^{2}\right)\!\!+2){\sqrt{\exp(\sigma ^{2})\!\!-1}}" alt="Skewness for a lognormal distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \left(\exp(\sigma^{2}\right)\!\!+2){\sqrt{\exp(\sigma ^{2})\!\!-1}}" data-equation="eq:lognormal_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/lognormal/skewness/docs/img/equation_lognormal_skewness.svg" alt="Skewness for a lognormal distribution.">
    <br>
</div>

<!-- </equation> -->

According to the definition, the _natural logarithm_ of a random variable from a
[lognormal distribution][lognormal-distribution] follows a [normal distribution][normal-distribution].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/lognormal/skewness' );
```

#### skewness( mu, sigma )

Returns the [skewness][skewness] for a [lognormal][lognormal-distribution] distribution with location `mu` and scale `sigma`.

```javascript
var y = skewness( 2.0, 1.0 );
// returns ~6.185

y = skewness( 0.0, 1.0 );
// returns ~6.185

y = skewness( -1.0, 2.0 );
// returns ~414.359
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = skewness( NaN, 1.0 );
// returns NaN

y = skewness( 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 0.0, 0.0 );
// returns NaN

y = skewness( 0.0, -1.0 );
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
var skewness = require( '@stdlib/stats/base/dists/lognormal/skewness' );

var sigma;
var mu;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    sigma = randu() * 20.0;
    y = skewness( mu, sigma );
    console.log( 'µ: %d, σ: %d, skew(X;µ,σ): %d', mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
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

[lognormal-distribution]: https://en.wikipedia.org/wiki/Log-normal_distribution

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
