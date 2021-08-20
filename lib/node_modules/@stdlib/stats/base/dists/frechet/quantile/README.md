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

> [Fréchet][frechet-distribution] distribution [quantile function][quantile].

<section class="intro">

The [quantile function][quantile] for a [Fréchet][frechet-distribution] random variable is

<!-- <equation class="equation" label="eq:frechet_quantile" align="center" raw="Q\left( p; \alpha, s, m \right ) = m + s ( -\ln p )^{-\tfrac{1}{\alpha}}" alt="Quantile function for a Fréchet distribution."> -->

<div class="equation" align="center" data-raw-text="Q\left( p; \alpha, s, m \right ) = m + s ( -\ln p )^{-\tfrac{1}{\alpha}}" data-equation="eq:frechet_quantile">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/quantile/docs/img/equation_frechet_quantile.svg" alt="Quantile function for a Fréchet distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the shape, `s > 0` the scale, and `m` the location parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/frechet/quantile' );
```

#### quantile( p, alpha, s, m )

Evaluates the [quantile function][quantile] for a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m` at a probability `p`.

```javascript
var y = quantile( 0.8, 2.0, 3.0, 5.0 );
// returns ~11.351

y = quantile( 0.1, 1.0, 2.0, -4.0 );
// returns ~-3.131

y = quantile( 0.3, 2.0, 1.0, -1.0 );
// returns ~-0.089
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 2.0, 2.0, 0.0 );
// returns NaN

y = quantile( -0.1, 2.0, 2.0, 0.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0, 1.0, 0.0 );
// returns NaN

y = quantile( 0.9, NaN, 1.0, 0.0 );
// returns NaN

y = quantile( 0.9, 1.0, NaN, 0.0);
// returns NaN

y = quantile( 0.9, 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.1, -0.1, 1.0, 1.0 );
// returns NaN

y = quantile( 0.1, 0.0, 1.0, 1.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.3, 1.0, -1.0, 1.0 );
// returns NaN

y = quantile( 0.3, 1.0, 0.0, 1.0 );
// returns NaN
```

#### quantile.factory( alpha, s, m )

Returns a function for evaluating the [quantile function][quantile] of a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m`.

```javascript
var myQuantile = quantile.factory( 3.0, 3.0, 5.0 );

var y = myQuantile( 0.7 );
// returns ~9.23

y = myQuantile( 0.2 );
// returns ~7.56
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/frechet/quantile' );

var alpha;
var m;
var s;
var p;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    alpha = randu() * 10.0;
    p = randu();
    s = randu() * 10.0;
    m = randu() * 10.0;
    y = quantile( p, alpha, s, m );
    console.log( 'x: %d, α: %d, s: %d, m: %d, Q(p;α,s,m): %d', p.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[quantile]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
