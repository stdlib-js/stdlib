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

# Entropy

> [Weibull][weibull-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_entropy" align="center" raw="h\left( X \right) = \gamma(1-1/k)+\ln(\lambda/k)+1" alt="Differential entropy for a Weibull distribution."> -->

<div class="equation" align="center" data-raw-text="h\left( X \right) = \gamma(1-1/k)+\ln(\lambda/k)+1" data-equation="eq:weibull_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/entropy/docs/img/equation_weibull_entropy.svg" alt="Differential entropy for a Weibull distribution.">
    <br>
</div>

<!-- </equation> -->

where `λ > 0` is the [shape parameter][shape], `k > 0` is the [scale parameter][scale], and `Ɣ` denotes the [Euler–Mascheroni constant][euler-mascheroni].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/weibull/entropy' );
```

#### entropy( k, lambda )

Returns the [differential entropy][entropy] of a [Weibull][weibull-distribution] distribution with shape parameter `k` and scale parameter `lambda` (in [nats][nats]).

```javascript
var v = entropy( 1.0, 1.0 );
// returns 1.0

v = entropy( 4.0, 12.0 );
// returns ~2.532

v = entropy( 8.0, 2.0 );
// returns ~0.119
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 2.0 );
// returns NaN

v = entropy( 2.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 0.0, 1.0 );
// returns NaN

v = entropy( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 1.0, 0.0 );
// returns NaN

v = entropy( 1.0, -1.0 );
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
var entropy = require( '@stdlib/stats/base/dists/weibull/entropy' );

var lambda;
var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = ( randu()*10.0 ) + EPS;
    lambda = ( randu()*10.0 ) + EPS;
    v = entropy( k, lambda );
    console.log( 'k: %d, λ: %d, h(X;k,λ): %d', k.toFixed( 4 ), lambda.toFixed( 4 ), v.toFixed( 4 ) );
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

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[euler-mascheroni]: https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
