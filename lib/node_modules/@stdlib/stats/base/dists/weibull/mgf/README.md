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

> [Weibull][weibull-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \sum_{n=0}^\infty \frac{t^n\lambda^n}{n!}\Gamma\left(1+\frac{n}{k}\right)" alt="Moment-generating function (MGF) for a Weibull distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \sum_{n=0}^\infty \frac{t^n\lambda^n}{n!}\Gamma\left(1+\frac{n}{k}\right)" data-equation="eq:weibull_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/weibull/mgf/docs/img/equation_weibull_mgf.svg" alt="Moment-generating function (MGF) for a Weibull distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda > 0` is the scale paramater and `k > 0` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/weibull/mgf' );
```

#### mgf( t, k, lambda )

Evaluates the [moment-generating function][mgf] (MGF) for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var y = mgf( 1.0, 1.0, 0.5);
// returns ~2.0

y = mgf( -1.0, 4.0, 4.0 );
// returns ~0.019
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, -1.0, 0.5 );
// returns NaN

y = mgf( 0.2, 0.0, 0.5 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 0.5, -1.0 );
// returns NaN

y = mgf( 0.2, 0.5, 0.0 );
// returns NaN
```

#### mgf.factory( k, lambda )

Returns a function for evaluating the [moment-generating function][mgf] of a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var myMGF = mgf.factory( 8.0, 10.0 );

var y = myMGF( 0.8 );
// returns ~3150.149

y = myMGF( 0.08 );
// returns ~2.137
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
var mgf = require( '@stdlib/stats/base/dists/weibull/mgf' );

var lambda;
var k;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 5.0;
    lambda = ( randu() * 10.0 ) + EPS;
    k = ( randu() * 10.0 ) + EPS;
    y = mgf( t, lambda, k );
    console.log( 'x: %d, k: %d, λ: %d, M_X(t;k,λ): %d', t.toFixed( 4 ), k.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
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

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
