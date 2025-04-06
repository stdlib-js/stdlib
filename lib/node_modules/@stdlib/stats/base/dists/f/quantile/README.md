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

> [F][f-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [F][f-distribution] random variable is

<!-- <equation class="equation" label="eq:f_quantile_function" align="center" raw="Q(p;d_1,d_2) = \,\inf\left\{ x\in [0,+\infty) : p \le F(x;d_1,d_2) \right\}" alt="Quantile function for an F distribution."> -->

```math
Q(p;d_1,d_2) = \,\inf\left\{ x\in [0,+\infty) : p \le F(x;d_1,d_2) \right\}
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;d_1,d_2) = \,\inf\left\{ x\in [0,+\infty) : p \le F(x;d_1,d_2) \right\}" data-equation="eq:f_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/f/quantile/docs/img/equation_f_quantile_function.svg" alt="Quantile function for an F distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p < 1`, where `d1` is the numerator degrees of freedom, `d2` is the denominator degrees of freedom and `F` the cumulative distribution function (CDF) of the F distribution.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/f/quantile' );
```

#### quantile( p, d1, d2 )

Evaluates the [quantile function][quantile-function] for a [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var y = quantile( 0.5, 1.0, 1.0 );
// returns 1.0

y = quantile( 0.2, 4.0, 2.0 );
// returns ~0.405

y = quantile( 0.8, 4.0, 2.0 );
// returns ~4.236
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

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0, 1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 1.0 );
// returns NaN
```

If provided `d2 <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 1.0, -1.0 );
// returns NaN

y = quantile( 0.4, 1.0, 0.0 );
// returns NaN
```

#### quantile.factory( d1, d2 )

Returns a function for evaluating the quantile function of an [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var myquantile = quantile.factory( 10.0, 2.0 );

var y = myquantile( 0.2 );
// returns ~0.527

y = myquantile( 0.8 );
// returns ~4.382
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/f/quantile' );

var d1;
var d2;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    d1 = randu() * 10.0;
    d2 = randu() * 10.0;
    y = quantile( p, d1, d2 );
    console.log( 'p: %d, d1: %d, d2: %d, Q(p;d1,d2): %d', p.toFixed( 4 ), d1.toFixed( 4 ), d2.toFixed( 4 ), y.toFixed( 4 ) );
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

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
