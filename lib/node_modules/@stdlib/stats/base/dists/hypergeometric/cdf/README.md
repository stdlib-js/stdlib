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

# Cumulative Distribution Function

> [Hypergeometric][hypergeometric-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [cumulative distribution function][cdf] for a [hypergeometric][hypergeometric-distribution] random variable is

<!-- <equation class="equation" label="eq:hypergeometric_cdf" align="center" raw="F(x;N,K,n) =\sum_{i=0}^{\lfloor x \rfloor} \frac{{K \choose i}{N-K \choose n-i}}{{N \choose n}}" alt="Cumulative distribution function for a hypergeometric distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;N,K,n) =\sum_{i=0}^{\lfloor x \rfloor} \frac{{K \choose i}{N-K \choose n-i}}{{N \choose n}}" data-equation="eq:hypergeometric_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/cdf/docs/img/equation_hypergeometric_cdf.svg" alt="Cumulative distribution function for a hypergeometric distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/hypergeometric/cdf' );
```

#### cdf( x, N, K, n )

Evaluates the [cumulative distribution function][cdf] for a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var y = cdf( 1.0, 8, 4, 2 );
// returns ~0.786

y = cdf( 1.5, 8, 4, 2 );
// returns ~0.786

y = cdf( 2.0, 8, 4, 2 );
// returns 1.0

y = cdf( 0.0, 8, 4, 2);
// returns ~0.214
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 10, 5, 2 );
// returns NaN

y = cdf( 0.0, NaN, 5, 2 );
// returns NaN

y = cdf( 0.0, 10, NaN, 2 );
// returns NaN

y = cdf( 0.0, 10, 5, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K` or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 10.5, 5, 2 );
// returns NaN

y = cdf( 2.0, 10, 1.5, 2 );
// returns NaN

y = cdf( 2.0, 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or subpopulation size `K` exceed the population size `N`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 10, 5, 12 );
// returns NaN

y = cdf( 2.0, 8, 3, 9 );
// returns NaN
```

#### cdf.factory( N, K, n )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [hypergeometric ][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var mycdf = cdf.factory( 30, 20, 5 );
var y = mycdf( 4.0 );
// returns ~0.891

y = mycdf( 1.0 );
// returns ~0.031
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var cdf = require( '@stdlib/stats/base/dists/hypergeometric/cdf' );

var i;
var N;
var K;
var n;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    N = round( randu() * 20 );
    K = round( randu() * N );
    n = round( randu() * K );
    x = round( randu() * K );
    y = cdf( x, N, K, n );
    console.log( 'x: %d, N: %d, K: %d, n: %d, F(x;N,K,n): %d', x.toFixed( 4 ), N, K, n, y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/hypergeometric_distribution

</section>

<!-- /.links -->
