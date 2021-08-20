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

> [Discrete uniform][discrete-uniform-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right]= \begin{cases} \frac{\mathrm{e}^{at}-\mathrm{e}^{t(b+1)}}{(b-a+1)(1-e^t)} & \text{for } t \neq 0 \\ 1 & \text{for } t = 0 \end{cases}" alt="Moment-generating function (MGF) for a discrete uniform distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right]= \begin{cases} \frac{\mathrm{e}^{at}-\mathrm{e}^{t(b+1)}}{(b-a+1)(1-e^t)} &amp; \text{for } t \neq 0 \\ 1 &amp; \text{for } t = 0 \end{cases}" data-equation="eq:discrete_uniform_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/mgf/docs/img/equation_discrete_uniform_mgf.svg" alt="Moment-generating function (MGF) for a discrete uniform distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/discrete-uniform/mgf' );
```

#### mgf( t, a, b )

Evaluates the [moment-generating function][mgf] (MGF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = mgf( 2.0, 0, 4 );
// returns ~689.475

y = mgf( -0.2, 0, 4 );
// returns ~0.697

y = mgf( 2.0, 0, 1 );
// returns ~4.195
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 3, 2);
// returns NaN
```

If provided `NaN` for any parameter, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0, 1 );
// returns NaN

y = mgf( 0.0, NaN, 1 );
// returns NaN

y = mgf( 0.0, 0, NaN );
// returns NaN
```

#### mgf.factory( a, b )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var mymgf = mgf.factory( 6, 7 );
var y = mymgf( 0.1 );
// returns ~1.918

y = mymgf( 1.1 );
// returns ~1471.722
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
var randint = require( '@stdlib/random/base/discrete-uniform' );
var randu = require( '@stdlib/random/base/randu' );
var mgf = require( '@stdlib/stats/base/dists/discrete-uniform/mgf' );

var randa = randint.factory( 0, 5 );
var randb = randint.factory();
var a;
var b;
var t;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    a = randa();
    b = randb( a, a+randa() );
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

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
