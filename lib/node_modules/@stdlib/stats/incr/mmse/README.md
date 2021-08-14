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

# incrmmse

> Compute a moving [mean squared error][mean-squared-error] (MSE) incrementally.

<section class="intro">

For a window of size `W`, the [mean squared error][mean-squared-error] is defined as

<!-- <equation class="equation" label="eq:mean_squared_error" align="center" raw="\operatorname{MSE} = \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)^2" alt="Equation for the mean squared error."> -->

<div class="equation" align="center" data-raw-text="\operatorname{MSE} = \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)^2" data-equation="eq:mean_squared_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@9cb3c4a2fcf92ca07ed60c34de1ceda40f75919c/lib/node_modules/@stdlib/stats/incr/mmse/docs/img/equation_mean_squared_error.svg" alt="Equation for the mean squared error.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmmse = require( '@stdlib/stats/incr/mmse' );
```

#### incrmmse( window )

Returns an accumulator `function` which incrementally computes a moving [mean squared error][mean-squared-error]. The `window` parameter defines the number of values over which to compute the moving [mean squared error][mean-squared-error].

```javascript
var accumulator = incrmmse( 3 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [mean squared error][mean-squared-error]. If not provided input values `x` and `y`, the accumulator function returns the current [mean squared error][mean-squared-error].

```javascript
var accumulator = incrmmse( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns 1.0

m = accumulator( -1.0, 4.0 ); // [(2.0,3.0), (-1.0,4.0)]
// returns 13.0

m = accumulator( 3.0, 9.0 ); // [(2.0,3.0), (-1.0,4.0), (3.0,9.0)]
// returns ~20.67

// Window begins sliding...
m = accumulator( -7.0, 3.0 ); // [(-1.0,4.0), (3.0,9.0), (-7.0,3.0)]
// returns ~53.67

m = accumulator( -5.0, -3.0 ); // [(3.0,9.0), (-7.0,3.0), (-5.0,-3.0)]
// returns ~46.67

m = accumulator();
// returns ~46.67
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
var incrmmse = require( '@stdlib/stats/incr/mmse' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmmse( 5 );

// For each simulated datum, update the moving mean squared error...
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

[mean-squared-error]: https://en.wikipedia.org/wiki/Mean_squared_error

</section>

<!-- /.links -->
