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

> [Exponential][exponential-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_quantile_function" align="center" raw="Q(p;\lambda) = \frac{-\ln(1-p)}{\lambda}" alt="Quantile function for an exponential distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\lambda) = \frac{-\ln(1-p)}{\lambda}" data-equation="eq:exponential_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/quantile/docs/img/equation_exponential_quantile_function.svg" alt="Quantile function for an exponential distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/exponential/quantile' );
```

#### quantile( p, lambda )

Evaluates the [quantile function][quantile-function] for a [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var y = quantile( 0.5, 0.1 );
// returns ~6.931

y = quantile( 0.2, 4.0 );
// returns ~0.056
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

y = quantile( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN
```

#### quantile.factory( lambda )

Returns a function for evaluating the [quantile function][quantile-function] of an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var myquantile = quantile.factory( 4.0 );

var y = myquantile( 0.2 );
// returns ~0.056

y = myquantile( 0.9 );
// returns ~0.576
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/exponential/quantile' );

var lambda;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    lambda = randu() * 10.0;
    y = quantile( p, lambda );
    console.log( 'p: %d, λ: %d, Q(p;λ): %d', p.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

</section>

<!-- /.links -->
