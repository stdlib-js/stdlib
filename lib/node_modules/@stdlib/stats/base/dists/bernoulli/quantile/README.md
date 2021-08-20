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

> [Bernoulli][bernoulli-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_quantile_function" align="center" raw="Q(r;p)=\begin{cases} 0 & \text{if } r \le 1-p \\ 1 & \text{if } r > 1-p \end{cases}" alt="Quantile function for a Bernoulli distribution."> -->

<div class="equation" align="center" data-raw-text="Q(r;p)=\begin{cases} 0 &amp; \text{if } r \le 1-p \\ 1 &amp; \text{if } r &gt; 1-p \end{cases}" data-equation="eq:bernoulli_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/quantile/docs/img/equation_bernoulli_quantile_function.svg" alt="Quantile function for a Bernoulli distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= r <= 1`, where `p` is the success probability.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/bernoulli/quantile' );
```

#### quantile( r, p )

Evaluates the [quantile function][quantile-function] for a [Bernoulli][bernoulli-distribution] distribution with success probability `p` at a value `r`.

```javascript
var y = quantile( 0.8, 0.4 );
// returns 1

y = quantile( 0.5, 0.4 );
// returns 0

y = quantile( 0.9, 0.1 );
// returns 0
```

If provided `r <= 0` or `r >= 0`, the function returns `NaN`.

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

If provided a success probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN

y = quantile( 0.4, 1.5 );
// returns NaN
```

#### quantile.factory( p )

Returns a function for evaluating the [quantile function][quantile-function] for a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var myquantile = quantile.factory( 0.4 );
var y = myquantile( 0.4 );
// returns 0

y = myquantile( 0.8 );
// returns 1

y = myquantile( 1.0 );
// returns 1
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/bernoulli/quantile' );

var p;
var r;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    r = randu();
    p = randu();
    y = quantile( r, p );
    console.log( 'r: %d, p: %d, Q(r;p): %d', r.toFixed( 4 ), p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
