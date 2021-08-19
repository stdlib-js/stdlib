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

# erfinv

> [Inverse error function][inverse-error-function].

<section class="intro">

The [inverse error function][inverse-error-function] is defined in terms of the [Maclaurin series][maclaurin-series]

<!-- <equation class="equation" label="eq:inverse_error_function" align="center" raw="\operatorname{erf}^{-1}(z)=\sum_{k=0}^\infty\frac{c_k}{2k+1}\left (\frac{\sqrt{\pi}}{2}z\right )^{2k+1}" alt="Inverse error function."> -->

<div class="equation" align="center" data-raw-text="\operatorname{erf}^{-1}(z)=\sum_{k=0}^\infty\frac{c_k}{2k+1}\left (\frac{\sqrt{\pi}}{2}z\right )^{2k+1}" data-equation="eq:inverse_error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/erfinv/docs/img/equation_inverse_error_function.svg" alt="Inverse error function.">
    <br>
</div>

<!-- </equation> -->

where `c_0 = 1` and 

<!-- <equation class="equation" label="eq:inverse_error_function_series_coefficients" align="center" raw="c_k=\sum_{m=0}^{k-1}\frac{c_m c_{k-1-m}}{(m+1)(2m+1)} = \left\{1,1,\frac{7}{6},\frac{127}{90},\frac{4369}{2520},\frac{34807}{16200},\ldots\right\}" alt="Series coefficients."> -->

<div class="equation" align="center" data-raw-text="c_k=\sum_{m=0}^{k-1}\frac{c_m c_{k-1-m}}{(m+1)(2m+1)} = \left\{1,1,\frac{7}{6},\frac{127}{90},\frac{4369}{2520},\frac{34807}{16200},\ldots\right\}" data-equation="eq:inverse_error_function_series_coefficients">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/erfinv/docs/img/equation_inverse_error_function_series_coefficients.svg" alt="Series coefficients.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var erfinv = require( '@stdlib/math/base/special/erfinv' );
```

#### erfinv( x )

Evaluates the [inverse error function][inverse-error-function].

```javascript
var y = erfinv( 0.5 );
// returns ~0.4769

y = erfinv( 0.8 );
// returns ~0.9062

y = erfinv( -1.0 );
// returns -Infinity

y = erfinv( 1.0 );
// returns Infinity
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var y = erfinv( -3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfinv( NaN );
// returns NaN
```

The [inverse error function][inverse-error-function] is an [odd function][odd-function]; i.e., `erfinv(-x) = -erfinv(x)`. Thus, in accordance with the [IEEE 754][ieee754] standard, if provided `-0`, the function returns `-0`.

```javascript
var y = erfinv( -0.0 );
// returns -0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var erfinv = require( '@stdlib/math/base/special/erfinv' );

var x = linspace( -1.0, 1.0, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
    y = erfinv( x[ i ] );
    console.log( 'x: %d, erfinv(x): %d', x[ i ], y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[inverse-error-function]: https://en.wikipedia.org/wiki/Error_function#Inverse_functions

[maclaurin-series]: http://mathworld.wolfram.com/MaclaurinSeries.html

[odd-function]: https://en.wikipedia.org/wiki/Even_and_odd_functions

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
