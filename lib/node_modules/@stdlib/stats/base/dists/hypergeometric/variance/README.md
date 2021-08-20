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

# Variance

> [Hypergeometric][hypergeometric-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [variance][variance] for a [hypergeometric][hypergeometric-distribution] random variable is

<!-- <equation class="equation" label="eq:hypergeometric_variance" align="center" raw="\operatorname{Var}\left( X \right) = n{K \over N}{(N-K) \over N}{N-n \over N-1}" alt="Variance for a hypergeometric distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = n{K \over N}{(N-K) \over N}{N-n \over N-1}" data-equation="eq:hypergeometric_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/variance/docs/img/equation_hypergeometric_variance.svg" alt="Variance for a hypergeometric distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/hypergeometric/variance' );
```

#### variance( N, K, n )

Returns the [variance][variance] of a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var v = variance( 16, 11, 4 );
// returns ~0.688

v = variance( 2, 1, 1 );
// returns 0.25
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = variance( NaN, 10, 4 );
// returns NaN

v = variance( 20, NaN, 4 );
// returns NaN

v = variance( 20, 10, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K`, or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = variance( 10.5, 5, 2 );
// returns NaN

v = variance( 10, 1.5, 2 );
// returns NaN

v = variance( 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.

```javascript
var v = variance( 10, 5, 12 );
// returns NaN

v = variance( 10, 12, 5 );
// returns NaN
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
var variance = require( '@stdlib/stats/base/dists/hypergeometric/variance' );

var v;
var i;
var N;
var K;
var n;

for ( i = 0; i < 10; i++ ) {
    N = round( randu() * 20 );
    K = round( randu() * N );
    n = round( randu() * K );
    v = variance( N, K, n );
    console.log( 'N: %d, K: %d, n: %d, Var(X;N,K,n): %d', N, K, n, v.toFixed( 4 ) );
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

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
