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

# Moment-generating function

> [Raised cosine][cosine-distribution] distribution [moment-generating function][mgf].

<section class="intro">

The [moment-generating function][mgf] for a [raised cosine][cosine-distribution] random variable is

<!-- <equation class="equation" label="eq:cosine_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{ \pi^{2} \sinh(st) }{ st(\pi^{2}+s^{2}t^{2}) } \,e^{\mu t}" alt="Moment-generating function for a raised cosine distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{ \pi^{2} \sinh(st) }{ st(\pi^{2}+s^{2}t^{2}) } \,e^{\mu t}" data-equation="eq:cosine_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cosine/mgf/docs/img/equation_cosine_mgf.svg" alt="Moment-generating function for a raised cosine distribution.">
    <br>
</div>

<!-- </equation> -->

where `μ` is the location parameter and `s > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/cosine/mgf' );
```

#### mgf( t, mu, s )

Evaluates the [moment-generating function][mgf] (MGF) for a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = mgf( 2.0, 0.0, 3.0 );
// returns ~7.234

y = mgf( 0.5, 0.0, 1.0 );
// returns ~1.016

y = mgf( -1.0, 4.0, 2.0 );
// returns ~0.024
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

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 0.0, -1.0 );
// returns NaN

y = mgf( 0.5, 0.0, 0.0 );
// returns NaN
```

#### mgf.factory( mu, s )

Returns a function for evaluating the [moment-generating function][mgf] of a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mymgf = mgf.factory( 10.0, 2.0 );

var y = mymgf( 0.1 );
// returns ~2.725
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var mgf = require( '@stdlib/stats/base/dists/cosine/mgf' );

var mu;
var s;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 10.0;
    mu = randu() * 10.0;
    s = randu() * 10.0;
    y = mgf( t, mu, s );
    console.log( 't: %d, µ: %d, s: %d, M_X(t;µ,s): %d', t.toFixed( 4 ), mu.toFixed( 4 ), s.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
