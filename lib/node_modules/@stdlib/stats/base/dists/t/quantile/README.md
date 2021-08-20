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

> [Student's t][t-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Student's t][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_quantile_function" align="center" raw="Q(p;\nu)\,=\,\inf\left\{ x\in \mathbb{R} : p \le F(x;\nu) \right\}" alt="Quantile function for a Student's t distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\nu)\,=\,\inf\left\{ x\in \mathbb{R} : p \le F(x;\nu) \right\}" data-equation="eq:t_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/t/quantile/docs/img/equation_t_quantile_function.svg" alt="Quantile function for a Student's t distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `v > 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/t/quantile' );
```

#### quantile( p, v )

Evaluates the [quantile function][quantile-function] for a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = quantile( 0.8, 1.0 );
// returns ~1.376

y = quantile( 0.1, 1.0 );
// returns ~-3.078

y = quantile( 0.5, 0.1 );
// returns 0.0
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

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0 );
// returns NaN
```

#### quantile.factory( v )

Returns a function for evaluating the [quantile function][quantile-function] of an [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var myquantile = quantile.factory( 4.0 );

var y = myquantile( 0.2 );
// returns ~-0.941

y = myquantile( 0.9 );
// returns ~1.533
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/t/quantile' );

var v;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = randu() * 10.0;
    y = quantile( p, v );
    console.log( 'p: %d, v: %d, Q(p;v): %d', p.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

</section>

<!-- /.links -->
