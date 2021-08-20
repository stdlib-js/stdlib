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

> [Negative binomial][negative-binomial-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [negative binomial][negative-binomial-distribution] random variable `X` is

<!-- <equation class="equation" label="eq:negative_binomial_cdf" align="center" raw="F(x;r,p)=1-I_p(x+1,r)" alt="Cumulative distribution function for a negative binomial distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;r,p)=1-I_p(x+1,r)" data-equation="eq:negative_binomial_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/cdf/docs/img/equation_negative_binomial_cdf.svg" alt="Cumulative distribution function for a negative binomial distribution.">
    <br>
</div>

<!-- </equation> -->

where `r` is the number of successes until experiment is stopped, `p` is the success probability in each trial and `I` is the [lower regularized incomplete beta function][incomplete-beta]. The random variable `X` denotes the number of failures until the `r` success is reached. 

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/negative-binomial/cdf' );
```

#### cdf( x, r, p )

Evaluates the [cumulative distribution function][cdf] for a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var y = cdf( 5.0, 20.0, 0.8 );
// returns ~0.617

y = cdf( 21.0, 20.0, 0.5 );
// returns ~0.622

y = cdf( 5.0, 10.0, 0.4 );
// returns ~0.034

y = cdf( 0.0, 10.0, 0.9 );
// returns ~0.349
```

While `r` can be interpreted as the number of successes until the experiment is stopped, the [negative binomial][negative-binomial-distribution] distribution is also defined for non-integers `r`. In this case, `r` denotes shape parameter of the [gamma mixing distribution][negative-binomial-mixture-representation].

```javascript
var y = cdf( 21.0, 15.5, 0.5 );
// returns ~0.859

y = cdf( 5.0, 7.4, 0.4 );
// returns ~0.131
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, 0.5 );
// returns NaN

y = cdf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 20.0, 0.5 );
// returns NaN

y = cdf( 0.0, NaN, 0.5 );
// returns NaN

y = cdf( 0.0, 20.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 20, -1.0 );
// returns NaN

y = cdf( 2.0, 20, 1.5 );
// returns NaN
```

#### cdf.factory( r, p )

Returns a function for evaluating the [cumulative distribution function][cdf] of  a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var mycdf = cdf.factory( 10, 0.5 );
var y = mycdf( 3.0 );
// returns ~0.046

y = mycdf( 11.0 );
// returns ~0.668
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/negative-binomial/cdf' );

var i;
var r;
var p;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 50;
    r = randu() * 50;
    p = randu();
    y = cdf( x, r, p );
    console.log( 'x: %d, r: %d, p: %d, F(x;r,p): %d', x.toFixed( 4 ), r.toFixed( 4 ), p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[incomplete-beta]: https://en.wikipedia.org/wiki/Beta_function#Incomplete_beta_function

[negative-binomial-mixture-representation]: https://en.wikipedia.org/wiki/Negative_binomial_distribution#Gamma.E2.80.93Poisson_mixture

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

</section>

<!-- /.links -->
