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

# incrsumprod

> Compute a sum of products incrementally.

<section class="intro">

The sum of products is defined as

<!-- <equation class="equation" label="eq:sum_product" align="center" raw="s = \sum_{i=0}^{n-1} x_i y_i" alt="Equation for the sum of products."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{n-1} x_i y_i" data-equation="eq:sum_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/sumprod/docs/img/equation_sum_product.svg" alt="Equation for the sum of products.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrsumprod = require( '@stdlib/stats/incr/sumprod' );
```

#### incrsumprod()

Returns an accumulator `function` which incrementally computes a sum of products.

```javascript
var accumulator = incrsumprod();
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated sum. If not provided input value `x` and `y`, the accumulator function returns the current sum.

```javascript
var accumulator = incrsumprod();

var sum = accumulator( 2.0, 3.0 );
// returns 6.0

sum = accumulator( 1.0, -1.0 );
// returns 5.0

sum = accumulator( 3.0, 4.0 );
// returns 17.0

sum = accumulator();
// returns 17.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   For long running accumulations or accumulations of large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrsumprod = require( '@stdlib/stats/incr/sumprod' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrsumprod();

// For each simulated datum, update the sum-product...
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
