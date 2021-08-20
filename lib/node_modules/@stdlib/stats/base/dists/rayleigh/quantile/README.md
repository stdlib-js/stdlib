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

> [Rayleigh][rayleigh-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_quantile_function" align="center" raw="Q(p;\sigma)=\sigma \sqrt{-\ln[(1 - p)^2]}" alt="Quantile function for a Rayleigh distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\sigma)=\sigma \sqrt{-\ln[(1 - p)^2]}" data-equation="eq:rayleigh_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/quantile/docs/img/equation_rayleigh_quantile_function.svg" alt="Quantile function for a Rayleigh distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `sigma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/rayleigh/quantile' );
```

#### quantile( p, sigma )

Evaluates the [quantile function][quantile-function] for a [Rayleigh][rayleigh-distribution] distribution with parameter `sigma` (scale parameter).

```javascript
var y = quantile( 0.8, 1.0 );
// returns ~1.794

y = quantile( 0.5, 4.0 );
// returns ~4.71
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 1.0 );
// returns NaN

y = quantile( -0.1, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0 );
// returns NaN

y = quantile( 0.0, NaN);
// returns NaN
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN
```

If provided `sigma = 0`, the function evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = quantile( 0.3, 0.0 );
// returns 0.0

y = quantile( 0.9, 0.0 );
// returns 0.0
```

#### quantile.factory( sigma )

Returns a function for evaluating the [quantile function][quantile-function] of a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var myQuantile = quantile.factory( 0.4 );

y = myQuantile( 0.4 );
// returns ~0.404

y = myQuantile( 1.0 );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/rayleigh/quantile' );

var sigma;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    sigma = randu() * 10.0;
    y = quantile( p, sigma );
    console.log( 'p: %d, σ: %d, Q(p;σ): %d', p.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
