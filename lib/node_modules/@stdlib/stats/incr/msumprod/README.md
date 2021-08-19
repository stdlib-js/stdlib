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

# incrmsumprod

> Compute a moving sum of products incrementally.

<section class="intro">

For a window of size `W`, the moving sum of products is defined as

<!-- <equation class="equation" label="eq:moving_sum_product" align="center" raw="s = \sum_{i=0}^{W-1} x_i y_i" alt="Equation for the moving sum of products."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{W-1} x_i y_i" data-equation="eq:moving_sum_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/msumprod/docs/img/equation_moving_sum_product.svg" alt="Equation for the moving sum of products.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmsumprod = require( '@stdlib/stats/incr/msumprod' );
```

#### incrmsumprod( window )

Returns an accumulator `function` which incrementally computes a moving sum of products. The `window` parameter defines the number of values over which to compute the moving sum of products.

```javascript
var accumulator = incrmsumprod( 3 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated sum. If not provided input values `x` and `y`, the accumulator function returns the current sum.

```javascript
var accumulator = incrmsumprod( 3 );

var sum = accumulator();
// returns null

// Fill the window...
sum = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns 6.0

sum = accumulator( 1.0, -1.0 ); // [(2.0,3.0), (1.0,-1.0)]
// returns 5.0

sum = accumulator( -3.0, 5.0 ); // [(2.0,3.0), (1.0,-1.0), (-3.0,5.0)]
// returns -10.0

// Window begins sliding...
sum = accumulator( -7.0, -1.0 ); // [(1.0,-1.0), (-3.0,5.0), (-7.0,-1.0)]
// returns -9.0

sum = accumulator( 5.0, 4.0 ); // [(-3.0,5.0), (-7.0,-1.0), (5.0,4.0)]
// returns 12.0

sum = accumulator();
// returns 12.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmsumprod = require( '@stdlib/stats/incr/msumprod' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmsumprod( 5 );

// For each simulated datum, update the moving sum-product...
for ( i = 0; i < 100; i++ ) {
    v1 = randu() * 100.0;
    v2 = randu() * 100.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
