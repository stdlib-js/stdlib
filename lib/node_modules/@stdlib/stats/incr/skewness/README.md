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

# incrskewness

> Compute a [corrected sample skewness][sample-skewness] incrementally.

<section class="intro">

The [skewness][sample-skewness] for a random variable `X` is defined as

<!-- <equation class="equation" label="eq:skewness" align="center" raw="\operatorname{Skewness}[X] = \mathrm{E}\biggl[ \biggl( \frac{X - \mu}{\sigma} \biggr)^3 \biggr]" alt="Equation for skewness."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Skewness}[X] = \mathrm{E}\biggl[ \biggl( \frac{X - \mu}{\sigma} \biggr)^3 \biggr]" data-equation="eq:skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/skewness/docs/img/equation_skewness.svg" alt="Equation for skewness.">
    <br>
</div>

<!-- </equation> -->

For a sample of `n` values, the [sample skewness][sample-skewness] is

<!-- <equation class="equation" label="eq:sample_skewness" align="center" raw="b_1 = \frac{m_3}{s^3} = \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^3}{\biggl( \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2 \biggr)^{3/2}}" alt="Equation for the sample skewness."> -->

<div class="equation" align="center" data-raw-text="b_1 = \frac{m_3}{s^3} = \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^3}{\biggl( \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2 \biggr)^{3/2}}" data-equation="eq:sample_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/skewness/docs/img/equation_sample_skewness.svg" alt="Equation for the sample skewness.">
    <br>
</div>

<!-- </equation> -->

where `m_3` is the sample third central moment and `s` is the sample standard deviation.

An alternative definition for the [sample skewness][sample-skewness] which includes an adjustment factor (and is the implemented definition) is

<!-- <equation class="equation" label="eq:adjusted_sample_skewness" align="center" raw="G_1 = \frac{n^2}{(n-1)(n-2)} \frac{m_3}{s^3} = \frac{\sqrt{n(n-1)}}{n-2} \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^3}{\biggl( \frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^2 \biggr)^{3/2}}" alt="Equation for the adjusted sample skewness."> -->

<div class="equation" align="center" data-raw-text="G_1 = \frac{n^2}{(n-1)(n-2)} \frac{m_3}{s^3} = \frac{\sqrt{n(n-1)}}{n-2} \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^3}{\biggl( \frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^2 \biggr)^{3/2}}" data-equation="eq:adjusted_sample_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/skewness/docs/img/equation_adjusted_sample_skewness.svg" alt="Equation for the adjusted sample skewness.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrskewness = require( '@stdlib/stats/incr/skewness' );
```

#### incrskewness()

Returns an accumulator `function` which incrementally computes a [corrected sample skewness][sample-skewness].

```javascript
var accumulator = incrskewness();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [corrected sample skewness][sample-skewness]. If not provided an input value `x`, the accumulator function returns the current [corrected sample skewness][sample-skewness].

```javascript
var accumulator = incrskewness();

var skewness = accumulator();
// returns null

skewness = accumulator( 2.0 );
// returns null

skewness = accumulator( -5.0 );
// returns null

skewness = accumulator( -10.0 );
// returns ~0.492

skewness = accumulator();
// returns ~0.492
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
var incrskewness = require( '@stdlib/stats/incr/skewness' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrskewness();

// For each simulated datum, update the corrected sample skewness...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Joanes, D. N., and C. A. Gill. 1998. "Comparing measures of sample skewness and kurtosis." _Journal of the Royal Statistical Society: Series D (The Statistician)_ 47 (1). Blackwell Publishers Ltd: 183–89. doi:[10.1111/1467-9884.00122][@joanes:1998].

</section>

<!-- /.references -->

<section class="links">

[sample-skewness]: https://en.wikipedia.org/wiki/Skewness

[@joanes:1998]: http://onlinelibrary.wiley.com/doi/10.1111/1467-9884.00122/

</section>

<!-- /.links -->
