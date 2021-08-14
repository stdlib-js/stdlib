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

# incrmmeanabs2

> Compute a moving [arithmetic mean][arithmetic-mean] of squared absolute values incrementally.

<section class="intro">

For a window of size `W`, the [arithmetic mean][arithmetic-mean] of squared absolute values is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean_squared_absolute_values" align="center" raw="m = \frac{1}{W} \sum_{i=0}^{W-1} x_i^2" alt="Equation for the arithmetic mean of squared absolute values."> -->

<div class="equation" align="center" data-raw-text="m = \frac{1}{W} \sum_{i=0}^{W-1} x_i^2" data-equation="eq:arithmetic_mean_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@320a89534d4f59b82d162f31e968222555dae2f7/lib/node_modules/@stdlib/stats/incr/mmeanabs2/docs/img/equation_arithmetic_mean_squared_absolute_values.svg" alt="Equation for the arithmetic mean of squared absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmmeanabs2 = require( '@stdlib/stats/incr/mmeanabs2' );
```

#### incrmmeanabs2( window )

Returns an accumulator `function` which incrementally computes a moving [arithmetic mean][arithmetic-mean] of squared absolute values. The `window` parameter defines the number of values over which to compute the moving mean.

```javascript
var accumulator = incrmmeanabs2( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated mean. If not provided an input value `x`, the accumulator function returns the current mean.

```javascript
var accumulator = incrmmeanabs2( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0 ); // [2.0]
// returns 4.0

m = accumulator( -1.0 ); // [2.0, -1.0]
// returns 2.5

m = accumulator( 3.0 ); // [2.0, -1.0, 3.0]
// returns ~4.67

// Window begins sliding...
m = accumulator( -7.0 ); // [-1.0, 3.0, -7.0]
// returns ~19.67

m = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns ~27.67

m = accumulator();
// returns ~27.67
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmmeanabs2 = require( '@stdlib/stats/incr/mmeanabs2' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmmeanabs2( 5 );

// For each simulated datum, update the moving mean...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*100.0 ) - 50.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

</section>

<!-- /.links -->
