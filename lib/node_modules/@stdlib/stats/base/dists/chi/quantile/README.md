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

> [Chi][chi-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [chi][chi-distribution] random variable is

<!-- <equation class="equation" label="eq:chi_chi_quantile_function" align="center" raw="Q(p; k) = 2 \cdot P^{-1}( p, k/2 )" alt="Quantile function for a chi distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p; k) = 2 \cdot P^{-1}( p, k/2 )" data-equation="eq:chi_chi_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chi/quantile/docs/img/equation_chi_chi_quantile_function.svg" alt="Quantile function for a chi distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `k` is the degrees of freedom and `P^{-1}` is the inverse of the lower, regularized [incomplete gamma function][@stlib/math/base/special/gammaincinv].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/chi/quantile' );
```

#### quantile( p, k )

Evaluates the [quantile function][quantile-function] for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var y = quantile( 0.8, 1.0 );
// returns ~1.282

y = quantile( 0.5, 4.0 );
// returns ~1.832

y = quantile( 0.8, 0.1 );
// returns ~0.116
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

y = quantile( 0.2, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = quantile( 0.3, 0.0 );
// returns 0.0

y = quantile( 0.9, 0.0 );
// returns 0.0
```

#### quantile.factory( k )

Returns a function for evaluating the [quantile function][quantile-function] of a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var myquantile = quantile.factory( 0.4 );

var y = myquantile( 0.9 );
// returns ~1.1

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
var quantile = require( '@stdlib/stats/base/dists/chi/quantile' );

var k;
var p;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    p = randu();
    k = randu() * 10.0;
    y = quantile( p, k );
    console.log( 'p: %d, k: %d, Q(p;k): %d', p.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

[@stlib/math/base/special/gammaincinv]: https://github.com/stdlib-js/stdlib

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
