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

> [Bernoulli][bernoulli-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_cdf" align="center" raw="F(x;p)= \begin{cases} 0 & \text{ for } x < 0 \\ 1-p & \text{ for } 0 \le x < 1  \\ 1 & \text{ for } x \ge 1 \end{cases}" alt="Cumulative distribution function for a Bernoulli distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;p)= \begin{cases} 0 &amp; \text{ for } x &lt; 0 \\ 1-p &amp; \text{ for } 0 \le x &lt; 1  \\ 1 &amp; \text{ for } x \ge 1 \end{cases}" data-equation="eq:bernoulli_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/cdf/docs/img/equation_bernoulli_cdf.svg" alt="Cumulative distribution function for a Bernoulli distribution.">
    <br>
</div>

<!-- </equation> -->

where `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/bernoulli/cdf' );
```

#### cdf( x, p )

Evaluates the [cumulative distribution function][cdf] for a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var y = cdf( 1.0, 0.5 );
// returns 1.0

y = cdf( 0.5, 0.5 );
// returns 0.5
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.5 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = cdf( 0.9, -1.0 );
// returns NaN

y = cdf( 0.9, 1.5 );
// returns NaN
```

#### cdf.factory( p )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`

```javascript
var mycdf = cdf.factory( 0.5 );
var y = mycdf( 0.5 );
// returns 0.5

y = mycdf( 2.0 );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/bernoulli/cdf' );

var p;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 5.0;
    p = randu();
    y = cdf( x, p );
    console.log( 'x: %d, p: %d, F(x;p): %d', x.toFixed( 4 ), p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

</section>

<!-- /.links -->
