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

> [Negative binomial][negative-binomial-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [negative binomial][negative-binomial-distribution] random variable `X` returns for any `k` satisfying `0 <= k <= 1` the value `x` for which

<!-- <equation class="equation" label="eq:negative_binomial_quantile_function" align="center" raw="F(x-1;r,p) < k \le F(x;r,p)" alt="Quantile for a negative binomial distribution."> -->

<div class="equation" align="center" data-raw-text="F(x-1;r,p) &lt; k \le F(x;r,p)" data-equation="eq:negative_binomial_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/quantile/docs/img/equation_negative_binomial_quantile_function.svg" alt="Quantile for a negative binomial distribution.">
    <br>
</div>

<!-- </equation> -->

holds, where `F` is the cumulative distribution function (CDF) of a negative binomial distribution with parameters `r` and `p`, where `r` is the number of successes until the experiment is stopped and `p` is the success probability. The random variable `X` denotes the number of failures until the `r` success is reached. 

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/negative-binomial/quantile' );
```

#### quantile( k, r, p )

Evaluates the [quantile function][quantile-function] for a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var y = quantile( 0.9, 20.0, 0.2 );
// returns 106

y = quantile( 0.9, 20.0, 0.8 );
// returns 8

y = quantile( 0.5, 10.0, 0.4 );
// returns 14

y = quantile( 0.0, 10.0, 0.9 );
// returns 0
```

If provided an input value `k` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.1, 20.0, 0.5 );
// returns NaN

y = quantile( -0.1, 20.0, 0.5 );
// returns NaN
```

While `r` can be interpreted as the number of successes until the experiment is stopped, the [negative binomial][negative-binomial-distribution] distribution is also defined for non-integers `r`. In this case, `r` denotes shape parameter of the [gamma mixing distribution][negative-binomial-mixture-representation].

```javascript
var y = quantile( 0.5, 15.5, 0.5 );
// returns 15

y = quantile( 0.3, 7.4, 0.4 );
// returns 8
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var y = quantile( 0.5, 0.0, 0.5 );
// returns NaN

y = quantile( 0.5, -2.0, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 20.0, 0.5 );
// returns NaN

y = quantile( 0.3, NaN, 0.5 );
// returns NaN

y = quantile( 0.3, 20.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 0.3, 20.0, -1.0 );
// returns NaN

y = quantile( 0.3, 20.0, 1.5 );
// returns NaN
```

#### quantile.factory( r, p )

Returns a function for evaluating the [quantile function][quantile-function] for a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var myquantile = quantile.factory( 10.0, 0.5 );
var y = myquantile( 0.1 );
// returns 5

y = myquantile( 0.9 );
// returns 16
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/negative-binomial/quantile' );

var i;
var k;
var r;
var p;
var y;

for ( i = 0; i < 10; i++ ) {
    k = randu();
    r = randu() * 100;
    p = randu();
    y = quantile( k, r, p );
    console.log( 'k: %d, r: %d, p: %d, Q(k;r,p): %d', k.toFixed( 4 ), r.toFixed( 4 ), p.toFixed( 4 ), y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[negative-binomial-mixture-representation]: https://en.wikipedia.org/wiki/Negative_binomial_distribution#Gamma.E2.80.93Poisson_mixture

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
