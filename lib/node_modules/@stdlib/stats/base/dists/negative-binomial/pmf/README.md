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

# Probability Mass Function

> [Negative binomial][negative-binomial-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [negative binomial][negative-binomial-distribution] random variable `X` is

<!-- <equation class="equation" label="eq:negative_binomial_pmf" align="center" raw="f(x; r, p) = P(X = x; r,p) = \binom{k+r-1}{x} p^r(1-p)^x \quad\text{for }x = 0, 1, 2, \dotsc" alt="Probability mass function (PMF) for a negative binomial distribution."> -->

<div class="equation" align="center" data-raw-text="f(x; r, p) = P(X = x; r,p) = \binom{k+r-1}{x} p^r(1-p)^x \quad\text{for }x = 0, 1, 2, \dotsc" data-equation="eq:negative_binomial_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/pmf/docs/img/equation_negative_binomial_pmf.svg" alt="Probability mass function (PMF) for a negative binomial distribution.">
    <br>
</div>

<!-- </equation> -->

where `r > 0` is the number of successes until experiment is stopped and `0 < p <= 1` is the success probability. The random variable `X` denotes the number of failures until the `r` success is reached. 

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/negative-binomial/pmf' );
```

#### pmf( x, r, p )

Evaluates the [probability mass function][pmf] for a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var y = pmf( 5.0, 20.0, 0.8 );
// returns ~0.157

y = pmf( 21.0, 20.0, 0.5 );
// returns ~0.06

y = pmf( 5.0, 10.0, 0.4 );
// returns ~0.016

y = pmf( 0.0, 10.0, 0.9 );
// returns ~0.349
```

While `r` can be interpreted as the number of successes until the experiment is stopped, the [negative binomial][negative-binomial-distribution] distribution is also defined for non-integers `r`. In this case, `r` denotes shape parameter of the [gamma mixing distribution][negative-binomial-mixture-representation].

```javascript
var y = pmf( 21.0, 15.5, 0.5 );
// returns ~0.037

y = pmf( 5.0, 7.4, 0.4 );
// returns ~0.051
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 0.0, 0.5 );
// returns NaN

y = pmf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 20.0, 0.5 );
// returns NaN

y = pmf( 0.0, NaN, 0.5 );
// returns NaN

y = pmf( 0.0, 20.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 20, -1.0 );
// returns NaN

y = pmf( 2.0, 20, 1.5 );
// returns NaN
```

#### pmf.factory( r, p )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var mypmf = pmf.factory( 10, 0.5 );
var y = mypmf( 3.0 );
// returns ~0.03

y = mypmf( 10.0 );
// returns ~0.088
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pmf = require( '@stdlib/stats/base/dists/negative-binomial/pmf' );

var i;
var r;
var p;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 30 );
    r = randu() * 50;
    p = randu();
    y = pmf( x, r, p );
    console.log( 'x: %d, r: %d, p: %d, P(X=x;r,p): %d', x, r, p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[negative-binomial-mixture-representation]: https://en.wikipedia.org/wiki/Negative_binomial_distribution#Gamma.E2.80.93Poisson_mixture

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
