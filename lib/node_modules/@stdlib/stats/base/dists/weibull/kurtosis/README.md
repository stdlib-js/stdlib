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

> [Weibull][weibull-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Weibull][weibull-distribution] random variable with [shape parameter][shape] `λ > 0` and [scale parameter][scale] `k > 0` is

<!-- <equation class="equation" label="eq:weibull_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{-6\Gamma_1^4+12\Gamma_1^2\Gamma_2-3\Gamma_2^2 -4\Gamma_1\Gamma_3+\Gamma_4}{[\Gamma_2-\Gamma_1^2]^2}" alt="Excess kurtosis for a Weibull distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{-6\Gamma_1^4+12\Gamma_1^2\Gamma_2-3\Gamma_2^2 -4\Gamma_1\Gamma_3+\Gamma_4}{[\Gamma_2-\Gamma_1^2]^2}" data-equation="eq:weibull_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/kurtosis/docs/img/equation_weibull_kurtosis.svg" alt="Excess kurtosis for a Weibull distribution.">
    <br>
</div>

<!-- </equation> -->

where `Γ_i = Γ( 1 + i / k )`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/weibull/kurtosis' );
```

#### kurtosis( k, lambda )

Returns the [excess kurtosis][kurtosis] of a [Weibull][weibull-distribution] distribution with shape parameter `k` and scale parameter `lambda`.

```javascript
var v = kurtosis( 1.0, 1.0 );
// returns 6.0

v = kurtosis( 4.0, 12.0 );
// returns ~-0.252

v = kurtosis( 8.0, 2.0 );
// returns ~0.328
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 2.0 );
// returns NaN

v = kurtosis( 2.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = kurtosis( 0.0, 1.0 );
// returns NaN

v = kurtosis( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = kurtosis( 1.0, 0.0 );
// returns NaN

v = kurtosis( 1.0, -1.0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var kurtosis = require( '@stdlib/stats/base/dists/weibull/kurtosis' );

var lambda;
var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = ( randu()*10.0 ) + EPS;
    lambda = ( randu()*10.0 ) + EPS;
    v = kurtosis( k, lambda );
    console.log( 'k: %d, λ: %d, Kurt(X;k,λ): %d', k.toFixed( 4 ), lambda.toFixed( 4 ), v.toFixed( 4 ) );
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

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
