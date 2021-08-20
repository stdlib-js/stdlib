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

> [Uniform][uniform-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [continuous uniform][uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:uniform_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right]= \begin{cases} \frac{\mathrm{e}^{tb}-\mathrm{e}^{ta}}{t(b-a)} & \text{for } t \neq 0 \\ 1 & \text{for } t = 0 \end{cases}" alt="Moment-generating function (MGF) for a uniform distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right]= \begin{cases} \frac{\mathrm{e}^{tb}-\mathrm{e}^{ta}}{t(b-a)} &amp; \text{for } t \neq 0 \\ 1 &amp; \text{for } t = 0 \end{cases}" data-equation="eq:uniform_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/uniform/mgf/docs/img/equation_uniform_mgf_function.svg" alt="Moment-generating function (MGF) for a uniform distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/uniform/mgf' );
```

#### mgf( t, a, b )

Evaluates the [moment-generating function][mgf] (MGF) for a [continuous uniform][uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = mgf( 2.0, 0.0, 4.0 );
// returns ~372.495

y = mgf( -0.2, 0.0, 4.0 );
// returns ~0.688

y = mgf( 2.0, 0.0, 1.0 );
// returns ~3.195
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

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 3.0, 2.0 );
// returns NaN

y = mgf( 0.5, 3.0, 3.0 );
// returns NaN
```

#### mgf.factory( a, b )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [continuous uniform][uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var mymgf = mgf.factory( 6.0, 7.0 );
var y = mymgf( 0.1 );
// returns ~1.916

y = mymgf( 1.1 );
// returns ~1339.321
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
var mgf = require( '@stdlib/stats/base/dists/uniform/mgf' );

var a;
var b;
var t;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    a = randu() * 5.0;
    b = a + (randu() * 5.0);
    v = mgf( t, a, b );
    console.log( 't: %d, a: %d, b: %d, M_X(t;a,b): %d', t.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
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

[uniform-distribution]: https://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
