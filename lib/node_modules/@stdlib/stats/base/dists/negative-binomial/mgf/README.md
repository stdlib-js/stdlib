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

> [Negative binomial][negative-binomial-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [negative binomial][negative-binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:negative_binomial_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \biggl(\frac{\left( 1- p \right) e^t }{1 - p e^t}\biggr)^{\!r} \text{ for }t<-\log p" alt="Moment-generating function (MGF) for a negative binomial distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \biggl(\frac{\left( 1- p \right) e^t }{1 - p e^t}\biggr)^{\!r} \text{ for }t&lt;-\log p" data-equation="eq:negative_binomial_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/mgf/docs/img/equation_negative_binomial_mgf_function.svg" alt="Moment-generating function (MGF) for a negative binomial distribution.">
    <br>
</div>

<!-- </equation> -->

where `r > 0` is the number of failures until the experiment is stopped and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/negative-binomial/mgf' );
```

#### mgf( t, r, p )

Evaluates the [moment-generating function][mgf] for a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var y = mgf( 0.05, 20.0, 0.8 );
// returns ~267.839

y = mgf( 0.1, 20.0, 0.1 );
// returns ~9.347
```

While `r` can be interpreted as the number of successes until the experiment is stopped, the [negative binomial][negative-binomial-distribution] distribution is also defined for non-integers `r`. In this case, `r` denotes shape parameter of the [gamma mixing distribution][negative-binomial-mixture-representation].

```javascript
var y = mgf( 0.1, 15.5, 0.5 );
// returns ~26.375

y = mgf( 0.5, 7.4, 0.4 );
// returns ~2675.677
```

If `t >= -ln( p )`, the function returns `NaN`.

```javascript
var y = mgf( 0.7, 15.5, 0.5 ); // -ln( p ) = ~0.693
// returns NaN
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 0.0, 0.5 );
// returns NaN

y = mgf( 0.2, -2.0, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 20.0, 0.5 );
// returns NaN

y = mgf( 0.0, NaN, 0.5 );
// returns NaN

y = mgf( 0.0, 20.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 20, -1.0 );
// returns NaN

y = mgf( 0.2, 20, 1.5 );
// returns NaN
```

#### mgf.factory( r, p )

Returns a function for evaluating the [moment-generating function][mgf] of  a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var myMGF = mgf.factory( 4.3, 0.4 );
var y = myMGF( 0.2 );
// returns ~4.696

y = myMGF( 0.4 );
// returns ~30.83
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
var mgf = require( '@stdlib/stats/base/dists/negative-binomial/mgf' );

var p;
var r;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = (randu() * 1.0) - 0.5;
    r = randu() * 50;
    p = randu();
    y = mgf( t, r, p );
    console.log( 't: %d, r: %d, p: %d, M_X(t;r,p): %d', t, r.toFixed( 4 ), p.toFixed( 4 ), y.toFixed( 4 ) );
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

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[negative-binomial-mixture-representation]: https://en.wikipedia.org/wiki/Negative_binomial_distribution#Gamma.E2.80.93Poisson_mixture

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

</section>

<!-- /.links -->
