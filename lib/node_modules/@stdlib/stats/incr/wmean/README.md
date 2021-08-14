<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# incrwmean

> Compute a [weighted arithmetic mean][weighted-arithmetic-mean] incrementally.

<section class="intro">

The [weighted arithmetic mean][weighted-arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:weighted_arithmetic_mean" align="center" raw="\bar{x} = \frac{\sum_{i=0}^{n-1} w_{i} x_{i}}{\sum_{i=0}^{n-1} w_{i}}" alt="Equation for the weighted arithmetic mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x} = \frac{\sum_{i=0}^{n-1} w_{i} x_{i}}{\sum_{i=0}^{n-1} w_{i}}" data-equation="eq:weighted_arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@adbea9806383f70c982e3191475c874efba1296b/lib/node_modules/@stdlib/stats/incr/wmean/docs/img/equation_weighted_arithmetic_mean.svg" alt="Equation for the weighted arithmetic mean.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrwmean = require( '@stdlib/stats/incr/wmean' );
```

#### incrwmean()

Returns an accumulator `function` which incrementally computes a [weighted arithmetic mean][weighted-arithmetic-mean].

```javascript
var accumulator = incrwmean();
```

#### accumulator( \[x, w] )

If provided an input value `x` and a weight `w`, the accumulator function returns an updated weighted mean. If not provided any input values, the accumulator function returns the current mean.

```javascript
var accumulator = incrwmean();

var mu = accumulator( 2.0, 1.0 );
// returns 2.0

mu = accumulator( 2.0, 0.5 );
// returns 2.0

mu = accumulator( 3.0, 1.5 );
// returns 2.5

mu = accumulator();
// returns 2.5
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrwmean = require( '@stdlib/stats/incr/wmean' );

var accumulator;
var v;
var w;
var i;

// Initialize an accumulator:
accumulator = incrwmean();

// For each simulated datum, update the weighted mean...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    w = randu() * 100.0;
    accumulator( v, w );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[weighted-arithmetic-mean]: https://en.wikipedia.org/wiki/Weighted_arithmetic_mean

</section>

<!-- /.links -->
