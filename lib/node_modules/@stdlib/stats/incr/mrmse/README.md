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

# incrmrmse

> Compute a moving [root mean squared error][root-mean-squared-error] (RMSE) incrementally.

<section class="intro">

For a window of size `W`, the [**root mean squared error**][root-mean-squared-error] (also known as the **root mean square error** (RMSE) and **root mean square deviation** (RMSD)) is defined as

<!-- <equation class="equation" label="eq:root_mean_squared_error" align="center" raw="\operatorname{RMSE} = \sqrt{ \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)^2 }" alt="Equation for the root mean squared error."> -->

<div class="equation" align="center" data-raw-text="\operatorname{RMSE} = \sqrt{ \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)^2 }" data-equation="eq:root_mean_squared_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6c360ad04d4b48c623a626d13723b4dc33ff0e8e/lib/node_modules/@stdlib/stats/incr/mrmse/docs/img/equation_root_mean_squared_error.svg" alt="Equation for the root mean squared error.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmrmse = require( '@stdlib/stats/incr/mrmse' );
```

#### incrmrmse( window )

Returns an accumulator `function` which incrementally computes a moving [root mean squared error][root-mean-squared-error]. The `window` parameter defines the number of values over which to compute the moving [root mean squared error][root-mean-squared-error].

```javascript
var accumulator = incrmrmse( 3 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [root mean squared error][root-mean-squared-error]. If not provided input values `x` and `y`, the accumulator function returns the current [root mean squared error][root-mean-squared-error].

```javascript
var accumulator = incrmrmse( 3 );

var r = accumulator();
// returns null

// Fill the window...
r = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns 1.0

r = accumulator( -1.0, 4.0 ); // [(2.0,3.0), (-1.0,4.0)]
// returns ~3.61

r = accumulator( 3.0, 9.0 ); // [(2.0,3.0), (-1.0,4.0), (3.0,9.0)]
// returns ~4.55

// Window begins sliding...
r = accumulator( -7.0, 3.0 ); // [(-1.0,4.0), (3.0,9.0), (-7.0,3.0)]
// returns ~7.33

r = accumulator( -5.0, -3.0 ); // [(3.0,9.0), (-7.0,3.0), (-5.0,-3.0)]
// returns ~6.83

r = accumulator();
// returns ~6.83
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
var incrmrmse = require( '@stdlib/stats/incr/mrmse' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmrmse( 5 );

// For each simulated datum, update the moving root mean squared error...
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

[root-mean-squared-error]: https://en.wikipedia.org/wiki/Root-mean-square_deviation

</section>

<!-- /.links -->
