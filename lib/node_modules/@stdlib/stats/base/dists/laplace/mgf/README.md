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

> [Laplace][laplace-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Laplace (double exponential)][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{\exp(\mu\,t)}{1-b^2\,t^2}\,\!\text{ for }|t|<1/b" alt="Moment-generating function (MGF) for a Laplace (double exponential) distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{\exp(\mu\,t)}{1-b^2\,t^2}\,\!\text{ for }|t|&lt;1/b" data-equation="eq:laplace_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/laplace/mgf/docs/img/equation_laplace_mgf_function.svg" alt="Moment-generating function (MGF) for a Laplace (double exponential) distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `b` is the scale parameter. For `|t| >= 1/b`, the [MGF][mgf] is undefined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/laplace/mgf' );
```

#### mgf( t, mu, b )

Evaluates the [moment-generating function][mgf] (MGF) for a [Laplace][laplace-distribution] (double exponential) distribution with parameters `mu` (location) and `b` (scale).

```javascript
var y = mgf( 0.5, 0.0, 1.0 );
// returns ~1.333

y = mgf( 0.0, 0.0, 1.0 );
// returns 1.0

y = mgf( -1.0, 4.0, 0.2 );
// returns ~0.019
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

If `t` is not inside the interval `(-1/b, 1/b)`, the function returns `NaN`.

```javascript
var y = mgf( 1.0, 0.0, 2.0 );
// returns NaN

y = mgf( -0.5, 0.0, 4.0 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 0.0, 0.0 );
// returns NaN

y = mgf( 2.0, 0.0, -1.0 );
// returns NaN
```

#### mgf.factory( mu, b )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [Laplace][laplace-distribution] (double exponential) distribution with parameters `mu` and `b`.

```javascript
var mymgf = mgf.factory( 4.0, 2.0 );

var y = mymgf( 0.2 );
// returns ~2.649

y = mymgf( 0.4 );
// returns ~13.758
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
var mgf = require( '@stdlib/stats/base/dists/laplace/mgf' );

var mu;
var b;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    mu = (randu() * 10.0) - 5.0;
    b = randu() * 20.0;
    y = mgf( t, mu, b );
    console.log( 't: %d, µ: %d, b: %d, M_X(t;µ,b): %d', t.toFixed( 4 ), mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
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

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
