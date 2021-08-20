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

> [Normal][normal-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [normal][normal-distribution] random variable is

<!-- <equation class="equation" label="eq:normal_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \exp\{ \mu t + \frac{1}{2}\sigma^2t^2 \}" alt="Moment-generating function (MGF) for a normal distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \exp\{ \mu t + \frac{1}{2}\sigma^2t^2 \}" data-equation="eq:normal_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/normal/mgf/docs/img/equation_normal_mgf_function.svg" alt="Moment-generating function (MGF) for a normal distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the mean and `sigma > 0` is the standard deviation.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/normal/mgf' );
```

#### mgf( t, mu, sigma )

Evaluates the [moment-generating function][mgf] (MGF) for a [normal][normal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var y = mgf( 2.0, 0.0, 1.0 );
// returns ~7.389

y = mgf( 0.0, 0.0, 1.0 );
// returns 1.0

y = mgf( -1.0, 4.0, 2.0 );
// returns ~0.1353
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 0.0, 0.0 );
// returns NaN

y = mgf( 2.0, 0.0, -1.0 );
// returns NaN
```

#### mgf.factory( mu, sigma )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [normal][normal-distribution] distribution with parameters `mu` and `sigma`.

```javascript
var mymgf = mgf.factory( 4.0, 2.0 );

var y = mymgf( 1.0 );
// returns ~403.429

y = mymgf( 0.5 );
// returns ~12.182
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
var mgf = require( '@stdlib/stats/base/dists/normal/mgf' );

var sigma;
var mu;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    mu = (randu() * 10.0) - 5.0;
    sigma = randu() * 20.0;
    y = mgf( t, mu, sigma );
    console.log( 't: %d, µ: %d, σ: %d, M_X(t;µ,σ): %d', t.toFixed( 4 ), mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
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

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
