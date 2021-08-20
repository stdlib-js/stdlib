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

> [Poisson][poisson-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Poisson][poisson-distribution] random variable returns for `0 <= p <= 1` the smallest nonnegative integer for which

<!-- <equation class="equation" label="eq:poisson_condition" align="center" raw="F(x;\lambda) \ge p" alt="Quantile condition."> -->

<div class="equation" align="center" data-raw-text="F(x;\lambda) \ge p" data-equation="eq:poisson_condition">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/quantile/docs/img/equation_poisson_condition.svg" alt="Quantile condition.">
    <br>
</div>

<!-- </equation> -->

where `F` is the cumulative distribution function (CDF) of a Poisson distribution with mean parameter `lambda > 0`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/poisson/quantile' );
```

#### quantile( p, lambda )

Evaluates the [quantile function][quantile-function] for a [Poisson][poisson-distribution] distribution with mean parameter `lambda` at a probability `p`.

```javascript
var y = quantile( 0.5, 2.0 );
// returns 2

y = quantile( 0.9, 4.0 );
// returns 7

y = quantile( 0.1, 200.0 );
// returns 182
```

If provided an input probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.5 );
// returns NaN

y = quantile( -0.1, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0 );
// returns NaN

y = quantile( 0.0, NaN );
// returns NaN
```

If provided a negative `lambda`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN
```

If provided `lambda = 0`, the function evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `0.0`.

```javascript
var y = quantile( 0.1, 0.0 );
// returns 0.0

y = quantile( 0.9, 0.0 );
// returns 0.0
```

#### quantile.factory( lambda )

Returns a function for evaluating the [quantile function][quantile-function] of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var myquantile = quantile.factory( 5.0 );
var y = myquantile( 0.4 );
// returns 4

y = myquantile( 0.8 );
// returns 7

y = myquantile( 1.0 );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/poisson/quantile' );

var lambda;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    lambda = randu() * 10.0;
    y = quantile( p, lambda );
    console.log( 'p: %d, λ: %d, Q(p;λ): %d', p.toFixed( 4 ), lambda.toFixed( 4 ), y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
