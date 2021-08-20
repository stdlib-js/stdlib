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

> [Poisson][poisson-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \exp\{ \mu t + \frac{1}{2}\sigma^2t^2 \}" alt="Moment-generating function (MGF) for a Poisson distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \exp\{ \mu t + \frac{1}{2}\sigma^2t^2 \}" data-equation="eq:poisson_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/mgf/docs/img/equation_poisson_mgf_function.svg" alt="Moment-generating function (MGF) for a Poisson distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda > 0` is the mean parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/poisson/mgf' );
```

#### mgf( t, lambda )

Evaluates the moment-generating function ([MGF][mgf]) for a [Poisson][poisson-distribution] distribution with parameter `lambda` (mean).

```javascript
var y = mgf( 1.0, 1.5 );
// returns ~13.163

y = mgf( 0.5, 0.5 );
// returns ~1.383
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.5 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = mgf( -2.0, -1.0 );
// returns NaN

y = mgf( 0.1, 0.0 );
// returns NaN
```

#### mgf.factory( lambda )

Returns a function for evaluating the [moment-generating function][mgf] of a [Poisson][poisson-distribution] distribution with parameter `lambda` (mean).

```javascript
var mymgf = mgf.factory( 2.0 );
var y = mymgf( 0.1 );
// returns ~1.234
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
var mgf = require( '@stdlib/stats/base/dists/poisson/mgf' );

var lambda;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 5.0;
    lambda = randu() * 5.0;
    y = mgf( t, lambda );
    console.log( 'x: %d, λ: %d, M_X(t;λ): %d', t.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
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

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
