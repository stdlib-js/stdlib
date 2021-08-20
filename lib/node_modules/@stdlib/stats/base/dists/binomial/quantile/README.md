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

# Quantile Function

> [Binomial][binomial-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [binomial][binomial-distribution] random variable returns, for any `r` satisfying `0 <= r <= 1`, the value `x` for which the relation

<!-- <equation class="equation" label="eq:binomial_quantile_function" align="center" raw="F(x-1;n,p) < r \le F(x;n,p)" alt="Quantile value for a binomial distribution."> -->

<div class="equation" align="center" data-raw-text="F(x-1;n,p) &lt; r \le F(x;n,p)" data-equation="eq:binomial_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/quantile/docs/img/equation_binomial_quantile_function.svg" alt="Quantile value for a binomial distribution.">
    <br>
</div>

<!-- </equation> -->

holds, where `F` is the cumulative distribution function (CDF) of a binomial random variable, `n` is the number of trials, and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/binomial/quantile' );
```

#### quantile( r, n, p )

Evaluates the [quantile function][quantile-function] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p` at value `r`.

```javascript
var y = quantile( 0.4, 20, 0.2 );
// returns 3

y = quantile( 0.8, 20, 0.2 );
// returns 5

y = quantile( 0.5, 10, 0.4 );
// returns 4

y = quantile( 0.0, 10, 0.4 );
// returns 0

y = quantile( 1.0, 10, 0.4 );
// returns 10
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 20, 0.5 );
// returns NaN

y = quantile( 0.2, NaN, 0.5 );
// returns NaN

y = quantile( 0.2, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = quantile( 0.5, 1.5, 0.5 );
// returns NaN

y = quantile( 0.5, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 0.5, 20, -1.0 );
// returns NaN

y = quantile( 0.5, 20, 1.5 );
// returns NaN
```

#### quantile.factory( n, p )

Returns a function for evaluating the [quantile function][quantile-function] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var myquantile = quantile.factory( 10, 0.5 );

var y = myquantile( 0.1 );
// returns 3

y = myquantile( 0.9 );
// returns 7
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var quantile = require( '@stdlib/stats/base/dists/binomial/quantile' );

var r;
var i;
var n;
var p;
var y;

for ( i = 0; i < 10; i++ ) {
    r = randu();
    n = round( randu() * 100.0 );
    p = randu();
    y = quantile( r, n, p );
    console.log( 'r: %d, n: %d, p: %d, Q(r;n,p): %d', r.toFixed( 4 ), n, p.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
