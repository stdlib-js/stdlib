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

> [Erlang][erlang-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_cdf" align="center" raw="F(x; k,\lambda) = 1 - \sum_{n=0}^{k-1}\frac{1}{n!}e^{-\lambda x}(\lambda x)^n" alt="Cumulative distribution function for a Erlang distribution."> -->

<div class="equation" align="center" data-raw-text="F(x; k,\lambda) = 1 - \sum_{n=0}^{k-1}\frac{1}{n!}e^{-\lambda x}(\lambda x)^n" data-equation="eq:erlang_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/erlang/cdf/docs/img/equation_erlang_cdf.svg" alt="Cumulative distribution function for a Erlang distribution.">
    <br>
</div>

<!-- </equation> -->

where `k` is the shape parameter and `lambda` is the rate parameter. The [Erlang][erlang-distribution] distribution is a special case of the gamma distribution, as `k` is constrained to the natural numbers.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/erlang/cdf' );
```

#### cdf( x, k, lambda )

Evaluates the [cumulative distribution function][cdf] (CDF) for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var y = cdf( 2.0, 1, 1.0 );
// returns ~0.865

y = cdf( 2.0, 3, 1.0 );
// returns ~0.323

y = cdf( -1.0, 2, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4, 2.0 );
// returns 0.0

y = cdf( +Infinity, 4, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1, NaN );
// returns NaN
```

If not provided a nonnegative integer for `k`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -2, 0.5 );
// returns NaN

y = cdf( 2.0, 0.5, 0.5 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( 2.0, 0.0, 2.0 );
// returns 1.0

y = cdf( -2.0, 0.0, 2.0 );
// returns 0.0

y = cdf( 0.0, 0.0, 2.0 );
// returns 1.0
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 1, 0.0 );
// returns NaN

y = cdf( 2.0, 1, -5.0 );
// returns NaN
```

#### cdf.factory( k, lambda )

Returns a function for evaluating the [cumulative distribution function][cdf] for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var mycdf = cdf.factory( 2, 0.5 );

var y = mycdf( 6.0 );
// returns ~0.801

y = mycdf( 2.0 );
// returns ~0.264
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var cdf = require( '@stdlib/stats/base/dists/erlang/cdf' );

var lambda;
var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = round( randu() * 10.0 );
    lambda = randu() * 5.0;
    y = cdf( x, k, lambda );
    console.log( 'x: %d, k: %d, λ: %d, F(x;k,λ): %d', x.toFixed( 4 ), k, lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

</section>

<!-- /.links -->
