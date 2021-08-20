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

> [Gumbel][gumbel-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Gumbel][gumbel-distribution] random variable is

<!-- <equation class="equation" label="eq:gumbel_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \Gamma(1+\beta\,t)\, e^{\mu\,t}" alt="Moment-generating function (MGF) for a Gumbel distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \Gamma(1+\beta\,t)\, e^{\mu\,t}" data-equation="eq:gumbel_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gumbel/mgf/docs/img/equation_gumbel_mgf.svg" alt="Moment-generating function (MGF) for a Gumbel distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/gumbel/mgf' );
```

#### mgf( t, mu, beta )

Evaluates the [moment-generating function][mgf] (MGF) for a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta > 0` (scale parameter).

```javascript
var y = mgf( -1.0, 0.0, 3.0 );
// returns 6.0

y = mgf( 0.1, 0.0, 3.0 );
// returns ~1.298

y = mgf( 0.0, 0.0, 1.0 );
// returns 1.0
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

If provided `t >= 1/beta`, the function returns `NaN`.

```javascript
var y = mgf( 0.8, 0.0, 2.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 0.0, -1.0 );
// returns NaN

y = mgf( 0.5, 0.0, 0.0 );
// returns NaN
```

#### mgf.factory( mu, beta )

Returns a function for evaluating the [moment-generating function][mgf] of a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta > 0` (scale parameter).

```javascript
var myMGF = mgf.factory( 0.0, 2.0 );
var y = myMGF( 0.2 );
// returns ~1.489

y = myMGF( -1.0 );
// returns 2.0
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
var mgf = require( '@stdlib/stats/base/dists/gumbel/mgf' );

var beta;
var mu;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    mu = (randu() * 10.0) - 5.0;
    beta = randu() * 20.0;
    y = mgf( t, mu, beta );
    console.log( 't: %d, µ: %d, β: %d, M_X(t;µ,β): %d', t.toFixed( 4 ), mu.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
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

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
