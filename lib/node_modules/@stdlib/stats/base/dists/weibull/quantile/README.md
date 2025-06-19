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

> [Weibull][weibull-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_quantile_function" align="center" raw="Q(p;k,\lambda) = \lambda {(-\ln(1-p))}^{1/k}" alt="Quantile function for a Weibull distribution."> -->

```math
Q(p;k,\lambda) = \lambda {(-\ln(1-p))}^{1/k}
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;k,\lambda) = \lambda {(-\ln(1-p))}^{1/k}" data-equation="eq:weibull_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/quantile/docs/img/equation_weibull_quantile_function.svg" alt="Quantile function for a Weibull distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p < 1`, where `lambda > 0` is the [scale parameter][scale] and `k > 0` is the [shape parameter][shape].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/weibull/quantile' );
```

#### quantile( p, k, lambda )

Evaluates the [quantile function][quantile-function] for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var y = quantile( 0.5, 1.0, 1.0 );
// returns ~0.693

y = quantile( 0.2, 2.0, 4.0 );
// returns ~1.89
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 1.0, 1.0 );
// returns NaN

y = quantile( -0.1, 1.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 1.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0, 1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 1.0, -1.0 );
// returns NaN

y = quantile( 0.4, 1.0, 0.0 );
// returns NaN
```

#### quantile.factory( k, lambda )

Returns a function for evaluating the quantile function of a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var myquantile = quantile.factory( 2.0, 10.0 );

var y = myquantile( 0.2 );
// returns ~4.724

y = myquantile( 0.8 );
// returns ~12.686
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/weibull/quantile' );

var lambda;
var k;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    lambda = randu() * 10.0;
    k = randu() * 10.0;
    y = quantile( p, k, lambda );
    console.log( 'p: %d, k: %d, λ: %d, Q(p;k,λ): %d', p, k, lambda, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
