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

# Logarithm of Probability Mass Function

> Evaluate the natural logarithm of the [probability mass function][pmf] (PMF) for a [hypergeometric][hypergeometric-distribution] distribution.

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [probability mass function][pmf] (PMF) for a [hypergeometric][hypergeometric-distribution] random variable is given by

<!-- <equation class="equation" label="eq:hypergeometric_pmf" align="center" raw="f(x;N,K,n)=P(X=x;N,K,n)=\begin{cases} {{{K \choose x} {N-K \choose {n-x}}}\over {{N} \choose n}} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a hypergeometric distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;N,K,n)=P(X=x;N,K,n)=\begin{cases} {{{K \choose x} {N-K \choose {n-x}}}\over {{N} \choose n}} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:hypergeometric_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/logpmf/docs/img/equation_hypergeometric_pmf.svg" alt="Probability mass function (PMF) for a hypergeometric distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats/base/dists/hypergeometric/logpmf' );
```

#### logpmf( x, N, K, n )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF) for a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var y = logpmf( 1.0, 8, 4, 2 );
// returns ~-0.56

y = logpmf( 2.0, 8, 4, 2 );
// returns ~-1.54

y = logpmf( 0.0, 8, 4, 2 );
// returns ~-1.54

y = logpmf( 1.5, 8, 4, 2 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 10, 5, 2 );
// returns NaN

y = logpmf( 0.0, NaN, 5, 2 );
// returns NaN

y = logpmf( 0.0, 10, NaN, 2 );
// returns NaN

y = logpmf( 0.0, 10, 5, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K`, or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 10.5, 5, 2 );
// returns NaN

y = logpmf( 2.0, 10, 1.5, 2 );
// returns NaN

y = logpmf( 2.0, 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 10, 5, 12 );
// returns NaN

y = logpmf( 2.0, 8, 3, 9 );
// returns NaN
```

#### logpmf.factory( N, K, n )

Returns a function for evaluating the natural logarithm of the [probability mass function][pmf] (PMF) of a [hypergeometric ][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var mylogpmf = logpmf.factory( 30, 20, 5 );
var y = mylogpmf( 4.0 );
// returns ~-1.079

y = mylogpmf( 1.0 );
// returns ~-3.524
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var logpmf = require( '@stdlib/stats/base/dists/hypergeometric/logpmf' );

var i;
var N;
var K;
var n;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 5.0 );
    N = round( randu() * 20.0 );
    K = round( randu() * N );
    n = round( randu() * N );
    y = logpmf( x, N, K, n );
    console.log( 'x: %d, N: %d, K: %d, n: %d, ln(P(X=x;N,K,n)): %d', x, N, K, n, y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
