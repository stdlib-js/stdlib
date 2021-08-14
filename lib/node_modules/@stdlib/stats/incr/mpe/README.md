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

# incrmpe

> Compute the [mean percentage error][mean-percentage-error] (MPE) incrementally.

<section class="intro">

The [mean percentage error][mean-percentage-error] is defined as

<!-- <equation class="equation" label="eq:mean_percentage_error" align="center" raw="\operatorname{MPE}  = \frac{100}{n} \sum_{i=0}^{n-1} \frac{a_i - f_i}{a_i}" alt="Equation for the mean percentage error."> -->

<div class="equation" align="center" data-raw-text="\operatorname{MPE}  = \frac{100}{n} \sum_{i=0}^{n-1} \frac{a_i - f_i}{a_i}" data-equation="eq:mean_percentage_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@2acedf866c9a4f1353af22f95780535612c5ee06/lib/node_modules/@stdlib/stats/incr/mpe/docs/img/equation_mean_percentage_error.svg" alt="Equation for the mean percentage error.">
    <br>
</div>

<!-- </equation> -->

where `f_i` is the forecast value and `a_i` is the actual value.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmpe = require( '@stdlib/stats/incr/mpe' );
```

#### incrmpe()

Returns an accumulator `function` which incrementally computes the [mean percentage error][mean-percentage-error].

```javascript
var accumulator = incrmpe();
```

#### accumulator( \[f, a] )

If provided input values `f` and `a`, the accumulator function returns an updated [mean percentage error][mean-percentage-error]. If not provided input values `f` and `a`, the accumulator function returns the current [mean percentage error][mean-percentage-error].

```javascript
var accumulator = incrmpe();

var m = accumulator( 2.0, 3.0 );
// returns ~33.33

m = accumulator( 1.0, 4.0 );
// returns ~54.17

m = accumulator( 3.0, 5.0 );
// returns ~49.44

m = accumulator();
// returns ~49.44
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   Be careful when interpreting the [mean percentage error][mean-percentage-error] as errors can cancel. This stated, that errors can cancel makes the [mean percentage error][mean-percentage-error] suitable for measuring the bias in forecasts. 
-   **Warning**: the [mean percentage error][mean-percentage-error] is **not** suitable for intermittent demand patterns (i.e., when `a_i` is `0`). Interpretation is most straightforward when actual and forecast values are positive valued (e.g., number of widgets sold). 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmpe = require( '@stdlib/stats/incr/mpe' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmpe();

// For each simulated datum, update the mean percentage error...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) + 50.0;
    v2 = ( randu()*100.0 ) + 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[mean-percentage-error]: https://en.wikipedia.org/wiki/Mean_percentage_error

</section>

<!-- /.links -->
