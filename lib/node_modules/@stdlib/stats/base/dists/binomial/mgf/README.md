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

> [Binomial][binomial-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = (1-p + pe^t)^n" alt="Moment-generating function (MGF) for a binomial distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = (1-p + pe^t)^n" data-equation="eq:binomial_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/mgf/docs/img/equation_binomial_mgf.svg" alt="Moment-generating function (MGF) for a binomial distribution.">
    <br>
</div>

<!-- </equation> -->

where the nonnegative integer `n` is the number of trials and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/binomial/mgf' );
```

#### mgf( t, n, p )

Evaluates the [moment-generating function][mgf] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = mgf( 0.5, 20, 0.2 );
// returns ~11.471

y = mgf( 5.0, 20, 0.2 );
// returns ~4.798e29

y = mgf( 0.9, 10, 0.4 );
// returns ~99.338

y = mgf( 0.0, 10, 0.4 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 20, 0.5 );
// returns NaN

y = mgf( 0.0, NaN, 0.5 );
// returns NaN

y = mgf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 1.5, 0.5 );
// returns NaN

y = mgf( 0.2, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 20, -1.0 );
// returns NaN

y = mgf( 0.2, 20, 1.5 );
// returns NaN
```

#### mgf.factory( n, p )

Returns a function for evaluating the [moment-generating function][mgf] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var myMGF = mgf.factory( 10, 0.5 );

var y = myMGF( 0.3 );
// returns ~5.013
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
var round = require( '@stdlib/math/base/special/round' );
var mgf = require( '@stdlib/stats/base/dists/binomial/mgf' );

var n;
var p;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = round( randu() * 5.0 );
    n = round( randu() * 10.0 );
    p = randu();
    y = mgf( t, n, p );
    console.log( 't: %d, n: %d, p: %d, M_X(t;n,p): %d', t, n, p.toFixed( 4 ), y.toFixed( 4 ) );
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

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
