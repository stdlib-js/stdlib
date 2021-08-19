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

# incrmstdev

> Compute a moving [corrected sample standard deviation][standard-deviation] incrementally.

<section class="intro">

For a window of size `W`, the [corrected sample standard deviation][standard-deviation] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

<div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/mstdev/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmstdev = require( '@stdlib/stats/incr/mstdev' );
```

#### incrmstdev( window\[, mean] )

Returns an accumulator `function` which incrementally computes a moving [corrected sample standard deviation][standard-deviation]. The `window` parameter defines the number of values over which to compute the moving [corrected sample standard deviation][standard-deviation].

```javascript
var accumulator = incrmstdev( 3 );
```

If the mean is already known, provide a `mean` argument.

```javascript
var accumulator = incrmstdev( 3, 5.0 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [corrected sample standard deviation][standard-deviation]. If not provided an input value `x`, the accumulator function returns the current [corrected sample standard deviation][standard-deviation].

```javascript
var accumulator = incrmstdev( 3 );

var s = accumulator();
// returns null

// Fill the window...
s = accumulator( 2.0 ); // [2.0]
// returns 0.0

s = accumulator( 1.0 ); // [2.0, 1.0]
// returns ~0.7071

s = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 1.0

// Window begins sliding...
s = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns ~5.29

s = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns ~5.29

s = accumulator();
// returns ~5.29
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
var incrmstdev = require( '@stdlib/stats/incr/mstdev' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmstdev( 5 );

// For each simulated datum, update the moving corrected sample standard deviation...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
