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

> [Cauchy][cauchy-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Cauchy][cauchy-distribution] random variable is

<!-- <equation class="equation" label="eq:cauchy_cauchy_quantile_function" align="center" raw="Q(p; x_0,\gamma) = x_0 + \gamma\,\tan\left[\pi\left(p-\tfrac{1}{2}\right)\right]" alt="Quantile function for a Cauchy distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p; x_0,\gamma) = x_0 + \gamma\,\tan\left[\pi\left(p-\tfrac{1}{2}\right)\right]" data-equation="eq:cauchy_cauchy_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/cauchy/quantile/docs/img/equation_cauchy_cauchy_quantile_function.svg" alt="Quantile function for a Cauchy distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `x0` is the location parameter and `gamma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/cauchy/quantile' );
```

#### quantile( p, x0, gamma )

Evaluates the [quantile function][quantile-function] for a [Cauchy][cauchy-distribution] distribution with parameters `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var y = quantile( 0.5, 0.0, 1.0 );
// returns 0.0

y = quantile( 0.2, 4.0, 2.0 );
// returns ~1.247

y = quantile( 0.9, 4.0, 2.0 );
// returns ~10.155
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `gamma <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 0.0 );
// returns NaN
```

#### quantile.factory( x0, gamma )

Returns a function for evaluating the [quantile function][quantile-function] of a [Cauchy][cauchy-distribution] distribution with location parameter `x0` and scale parameter `gamma > 0`.

```javascript
var myquantile = quantile.factory( 10.0, 2.0 );

var y = myquantile( 0.2 );
// returns ~7.247

y = myquantile( 0.8 );
// returns ~12.753
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var quantile = require( '@stdlib/stats/base/dists/cauchy/quantile' );

var gamma;
var x0;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    x0 = ( randu()*10.0 ) - 5.0;
    gamma = ( randu()*20.0 ) + EPS;
    y = quantile( p, gamma, x0 );
    console.log( 'p: %d, x0: %d, γ: %d, Q(p;x0,γ): %d', p.toFixed(4), x0.toFixed(4), gamma.toFixed(4), y.toFixed(4) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

</section>

<!-- /.links -->
