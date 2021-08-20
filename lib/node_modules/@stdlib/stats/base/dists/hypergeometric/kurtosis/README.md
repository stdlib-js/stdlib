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

# Kurtosis

> [Hypergeometric][hypergeometric-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [excess kurtosis][kurtosis] for a [hypergeometric][hypergeometric-distribution] random variable is

<!-- <equation class="equation" label="eq:hypergeometric_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{(N-1) N^{2} \left[ N(N+1)-6K(N-K)-6n(N-n) \right]+6nK(N-K)(N-n)(5N-6)}{nK(N-K)(N-n)(N-2)(N-3)}" alt="Excess kurtosis for a hypergeometric distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{(N-1) N^{2} \left[ N(N+1)-6K(N-K)-6n(N-n) \right]+6nK(N-K)(N-n)(5N-6)}{nK(N-K)(N-n)(N-2)(N-3)}" data-equation="eq:hypergeometric_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/kurtosis/docs/img/equation_hypergeometric_kurtosis.svg" alt="Excess kurtosis for a hypergeometric distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/hypergeometric/kurtosis' );
```

#### kurtosis( N, K, n )

Returns the [excess kurtosis][kurtosis] of a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var v = kurtosis( 16, 11, 4 );
// returns ~-0.326

v = kurtosis( 4, 2, 2 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 10, 4 );
// returns NaN

v = kurtosis( 20, NaN, 4 );
// returns NaN

v = kurtosis( 20, 10, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K`, or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = kurtosis( 10.5, 5, 2 );
// returns NaN

v = kurtosis( 10, 1.5, 2 );
// returns NaN

v = kurtosis( 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.

```javascript
var v = kurtosis( 10, 5, 12 );
// returns NaN

v = kurtosis( 10, 12, 5 );
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
var kurtosis = require( '@stdlib/stats/base/dists/hypergeometric/kurtosis' );

var v;
var i;
var N;
var K;
var n;

for ( i = 0; i < 10; i++ ) {
    N = round( randu() * 20 );
    K = round( randu() * N );
    n = round( randu() * K );
    v = kurtosis( N, K, n );
    console.log( 'N: %d, K: %d, n: %d, Kurt(X;N,K,n): %d', N, K, n, v.toFixed( 4 ) );
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

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
