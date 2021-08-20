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

> [Laplace][laplace-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Laplace][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_quantile_function" align="center" raw="Q(p) = \mu - b\,\operatorname{sgn}(p-0.5)\,\ln(1 - 2|p-0.5|)" alt="Quantile function for a Laplace distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p) = \mu - b\,\operatorname{sgn}(p-0.5)\,\ln(1 - 2|p-0.5|)" data-equation="eq:laplace_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/laplace/quantile/docs/img/equation_laplace_quantile_function.svg" alt="Quantile function for a Laplace distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/laplace/quantile' );
```

#### quantile( p, mu, b )

Evaluates the [quantile function][quantile-function] for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var y = quantile( 0.8, 0.0, 1.0 );
// returns ~0.916

y = quantile( 0.5, 4.0, 2.0 );
// returns 4
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

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 0.0 );
// returns NaN
```

#### quantile.factory( mu, b )

Returns a function for evaluating the [quantile function][quantile-function] of a [Laplace][laplace-distribution] distribution with parameters `mu` and `b > 0`.

```javascript
var myquantile = quantile.factory( 10.0, 2.0 );

var y = myquantile( 0.5 );
// returns 10.0

y = myquantile( 0.8 );
// returns ~11.833
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/laplace/quantile' );

var mu;
var b;
var p;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    mu = randu() * 10.0;
    b = randu() * 10.0;
    y = quantile( p, mu, b );
    console.log( 'p: %d, µ: %d, b: %d, Q(p;µ,b): %d', p.toFixed( 4 ), mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
