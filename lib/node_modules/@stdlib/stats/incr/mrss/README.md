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

# incrmrss

> Compute a moving [residual sum of squares][residual-sum-of-squares] (RSS) incrementally.

<section class="intro">

For a window of size `W`, the [residual sum of squares][residual-sum-of-squares] (also referred to as the **sum of squared residuals** (SSR) and the **sum of squared errors** (SSE)) is defined as

<!-- <equation class="equation" label="eq:residual_sum_of_squares" align="center" raw="\operatorname{RSS} = \sum_{i=0}^{W-1} (y_i - x_i)^2" alt="Equation for the residual sum of squares."> -->

<div class="equation" align="center" data-raw-text="\operatorname{RSS} = \sum_{i=0}^{W-1} (y_i - x_i)^2" data-equation="eq:residual_sum_of_squares">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@df44d1456cc422c38a368a47b586b7eaffb19cc8/lib/node_modules/@stdlib/stats/incr/mrss/docs/img/equation_residual_sum_of_squares.svg" alt="Equation for the residual sum of squares.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmrss = require( '@stdlib/stats/incr/mrss' );
```

#### incrmrss( window )

Returns an accumulator `function` which incrementally computes a moving [residual sum of squares][residual-sum-of-squares]. The `window` parameter defines the number of values over which to compute the moving [residual sum of squares][residual-sum-of-squares].

```javascript
var accumulator = incrmrss( 3 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [residual sum of squares][residual-sum-of-squares]. If not provided input values `x` and `y`, the accumulator function returns the current [residual sum of squares][residual-sum-of-squares].

```javascript
var accumulator = incrmrss( 3 );

var r = accumulator();
// returns null

// Fill the window...
r = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns 1.0

r = accumulator( -1.0, 4.0 ); // [(2.0,3.0), (-1.0,4.0)]
// returns 26.0

r = accumulator( 3.0, 9.0 ); // [(2.0,3.0), (-1.0,4.0), (3.0,9.0)]
// returns 62.0

// Window begins sliding...
r = accumulator( -7.0, 3.0 ); // [(-1.0,4.0), (3.0,9.0), (-7.0,3.0)]
// returns 161.0

r = accumulator( -5.0, -3.0 ); // [(3.0,9.0), (-7.0,3.0), (-5.0,-3.0)]
// returns 140.0

r = accumulator();
// returns 140.0
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
var incrmrss = require( '@stdlib/stats/incr/mrss' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmrss( 5 );

// For each simulated datum, update the moving residual sum of squares...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) - 50.0;
    v2 = ( randu()*100.0 ) - 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[residual-sum-of-squares]: https://en.wikipedia.org/wiki/Residual_sum_of_squares

</section>

<!-- /.links -->
