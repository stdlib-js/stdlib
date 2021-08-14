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

# incrmmean

> Compute a moving [arithmetic mean][arithmetic-mean] incrementally.

<section class="intro">

For a window of size `W`, the [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" alt="Equation for the arithmetic mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@320a89534d4f59b82d162f31e968222555dae2f7/lib/node_modules/@stdlib/stats/incr/mmean/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmmean = require( '@stdlib/stats/incr/mmean' );
```

#### incrmmean( window )

Returns an accumulator `function` which incrementally computes a moving [arithmetic mean][arithmetic-mean]. The `window` parameter defines the number of values over which to compute the moving mean.

```javascript
var accumulator = incrmmean( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated mean. If not provided an input value `x`, the accumulator function returns the current mean.

```javascript
var accumulator = incrmmean( 3 );

var mu = accumulator();
// returns null

// Fill the window...
mu = accumulator( 2.0 ); // [2.0]
// returns 2.0

mu = accumulator( 1.0 ); // [2.0, 1.0]
// returns 1.5

mu = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 2.0

// Window begins sliding...
mu = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns -1.0

mu = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns -3.0

mu = accumulator();
// returns -3.0
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
var incrmmean = require( '@stdlib/stats/incr/mmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmmean( 5 );

// For each simulated datum, update the moving mean...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
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
