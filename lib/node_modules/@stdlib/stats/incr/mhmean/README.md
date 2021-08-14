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

# incrmhmean

> Compute a moving [harmonic mean][harmonic-mean] incrementally.

<section class="intro">

The [harmonic mean][harmonic-mean] of positive real numbers `x_0, x_1, ..., x_{n-1}` is defined as

<!-- <equation class="equation" label="eq:harmonic_mean" align="center" raw="\begin{align}H &= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &= \frac{n}{\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &= \biggl( \frac{\sum_{i=0}^{n-1} \frac{1}{x_i}}{n} \biggr)^{-1}\end{align}" alt="Equation for the harmonic mean."> -->

<div class="equation" align="center" data-raw-text="\begin{align}H &amp;= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &amp;= \frac{n}{\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &amp;= \biggl( \frac{\sum_{i=0}^{n-1} \frac{1}{x_i}}{n} \biggr)^{-1}\end{align}" data-equation="eq:harmonic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@0a561712608b99b59d9243f7d478a2e2a019a130/lib/node_modules/@stdlib/stats/incr/mhmean/docs/img/equation_harmonic_mean.svg" alt="Equation for the harmonic mean.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmhmean = require( '@stdlib/stats/incr/mhmean' );
```

#### incrmhmean( window )

Returns an accumulator `function` which incrementally computes a moving [harmonic mean][harmonic-mean]. The `window` parameter defines the number of values over which to compute the moving [harmonic mean][harmonic-mean].

```javascript
var accumulator = incrmhmean( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [harmonic mean][harmonic-mean]. If not provided an input value `x`, the accumulator function returns the current [harmonic-mean][harmonic-mean].

```javascript
var accumulator = incrmhmean( 3 );

var v = accumulator();
// returns null

// Fill the window...
v = accumulator( 2.0 ); // [2.0]
// returns 2.0

v = accumulator( 1.0 ); // [2.0, 1.0]
// returns ~1.33

v = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns ~1.64

// Window begins sliding...
v = accumulator( 7.0 ); // [1.0, 3.0, 7.0]
// returns ~2.03

v = accumulator( 5.0 ); // [3.0, 7.0, 5.0]
// returns ~4.44

v = accumulator();
// returns ~4.44
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
var incrmhmean = require( '@stdlib/stats/incr/mhmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmhmean( 5 );

// For each simulated datum, update the moving harmonic mean...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[harmonic-mean]: https://en.wikipedia.org/wiki/Harmonic_mean

</section>

<!-- /.links -->
