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

# increwmean

> Compute an [exponentially weighted mean][moving-average] incrementally.

<section class="intro">

An [exponentially weighted mean][moving-average] can be defined recursively as

<!-- <equation class="equation" label="eq:exponentially_weighted_mean" align="center" raw="\mu_t = \begin{cases} x_0 & \textrm{if}\ t = 0 \\ \alpha x_t + (1-\alpha) \mu_{t-1} & \textrm{if}\ t > 0 \end{cases}" alt="Recursive definition for computing an exponentially weighted mean."> -->

<div class="equation" align="center" data-raw-text="\mu_t = \begin{cases} x_0 &amp; \textrm{if}\ t = 0 \\ \alpha x_t + (1-\alpha) \mu_{t-1} &amp; \textrm{if}\ t &gt; 0 \end{cases}" data-equation="eq:exponentially_weighted_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1445ad5c454bc3c1a86bde2be87d6cec87781174/lib/node_modules/@stdlib/stats/incr/ewmean/docs/img/equation_exponentially_weighted_mean.svg" alt="Recursive definition for computing an exponentially weighted mean.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var increwmean = require( '@stdlib/stats/incr/ewmean' );
```

#### increwmean( alpha )

Returns an accumulator `function` which incrementally computes an [exponentially weighted mean][moving-average], where `alpha` is a smoothing factor between `0` and `1`.

```javascript
var accumulator = increwmean( 0.5 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated mean. If not provided an input value `x`, the accumulator function returns the current mean.

```javascript
var accumulator = increwmean( 0.5 );

var v = accumulator();
// returns null

v = accumulator( 2.0 );
// returns 2.0

v = accumulator( 1.0 );
// returns 1.5

v = accumulator( 3.0 );
// returns 2.25

v = accumulator();
// returns 2.25
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
var increwmean = require( '@stdlib/stats/incr/ewmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = increwmean( 0.5 );

// For each simulated datum, update the exponentially weighted mean...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[moving-average]: https://en.wikipedia.org/wiki/Moving_average

</section>

<!-- /.links -->
