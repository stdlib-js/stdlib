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

> [Lognormal][lognormal-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [lognormal][lognormal-distribution] random variable is

<!-- <equation class="equation" label="eq:lognormal_variance" align="center" raw="\operatorname{Var}\left( X \right) = [\exp({\sigma^{2}})-1] \cdot \exp({2\mu +\sigma^{2}})" alt="Variance for a lognormal distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = [\exp({\sigma^{2}})-1] \cdot \exp({2\mu +\sigma^{2}})" data-equation="eq:lognormal_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/lognormal/variance/docs/img/equation_lognormal_variance.svg" alt="Variance for a lognormal distribution.">
    <br>
</div>

<!-- </equation> -->

where `μ` is the location parameter and `σ > 0` is the scale parameter. According to the definition, the _natural logarithm_ of a random variable from a
[lognormal distribution][lognormal-distribution] follows a [normal distribution][normal-distribution].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/lognormal/variance' );
```

#### variance( mu, sigma )

Returns the [variance][variance] for a [lognormal][lognormal-distribution] distribution with location `mu` and scale `sigma`.

```javascript
var y = variance( 2.0, 1.0 );
// returns ~255.016

y = variance( 0.0, 1.0 );
// returns ~4.671

y = variance( -1.0, 2.0 );
// returns ~396.04
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = variance( NaN, 1.0 );
// returns NaN

y = variance( 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = variance( 0.0, 0.0 );
// returns NaN

y = variance( 0.0, -1.0 );
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
var variance = require( '@stdlib/stats/base/dists/lognormal/variance' );

var sigma;
var mu;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    sigma = randu() * 20.0;
    y = variance( mu, sigma );
    console.log( 'µ: %d, σ: %d, Var(X;µ,σ): %d', mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
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

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
