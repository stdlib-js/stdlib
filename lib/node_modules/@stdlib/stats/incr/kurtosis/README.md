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

# incrkurtosis

> Compute a [corrected sample excess kurtosis][sample-excess-kurtosis] incrementally.

<section class="intro">

The [kurtosis][sample-excess-kurtosis] for a random variable `X` is defined as

<!-- <equation class="equation" label="eq:kurtosis" align="center" raw="\operatorname{Kurtosis}[X] = \mathrm{E}\biggl[ \biggl( \frac{X - \mu}{\sigma} \biggr)^4 \biggr]" alt="Equation for the kurtosis."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurtosis}[X] = \mathrm{E}\biggl[ \biggl( \frac{X - \mu}{\sigma} \biggr)^4 \biggr]" data-equation="eq:kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/kurtosis/docs/img/equation_kurtosis.svg" alt="Equation for the kurtosis.">
    <br>
</div>

<!-- </equation> -->

Using a univariate normal distribution as the standard of comparison, the [excess kurtosis][sample-excess-kurtosis] is the kurtosis minus `3`.

For a sample of `n` values, the [sample excess kurtosis][sample-excess-kurtosis] is

<!-- <equation class="equation" label="eq:sample_excess_kurtosis" align="center" raw="g_2 = \frac{m_4}{m_2^2} - 3 = \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^4}{\biggl(\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^2\biggr)^2}" alt="Equation for the sample excess kurtosis."> -->

<div class="equation" align="center" data-raw-text="g_2 = \frac{m_4}{m_2^2} - 3 = \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^4}{\biggl(\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^2\biggr)^2}" data-equation="eq:sample_excess_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/kurtosis/docs/img/equation_sample_excess_kurtosis.svg" alt="Equation for the sample excess kurtosis.">
    <br>
</div>

<!-- </equation> -->

where `m_4` is the sample fourth central moment and `m_2` is the sample second central moment.

The previous equation is, however, a biased estimator of the population excess kurtosis. An alternative estimator which is unbiased under normality is

<!-- <equation class="equation" label="eq:corrected_sample_excess_kurtosis" align="center" raw="G_2 = \frac{(n+1)n}{(n-1)(n-2)(n-3)} \frac{\sum_{i=0}^{n-1} (x_i - \bar{x})^4}{\biggl(\sum_{i=0}^{n-1} (x_i - \bar{x})^2\biggr)^2} - 3 \frac{(n-1)^2}{(n-2)(n-3)}" alt="Equation for the corrected sample excess kurtosis."> -->

<div class="equation" align="center" data-raw-text="G_2 = \frac{(n+1)n}{(n-1)(n-2)(n-3)} \frac{\sum_{i=0}^{n-1} (x_i - \bar{x})^4}{\biggl(\sum_{i=0}^{n-1} (x_i - \bar{x})^2\biggr)^2} - 3 \frac{(n-1)^2}{(n-2)(n-3)}" data-equation="eq:corrected_sample_excess_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/kurtosis/docs/img/equation_corrected_sample_excess_kurtosis.svg" alt="Equation for the corrected sample excess kurtosis.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrkurtosis = require( '@stdlib/stats/incr/kurtosis' );
```

#### incrkurtosis()

Returns an accumulator `function` which incrementally computes a [corrected sample excess kurtosis][sample-excess-kurtosis].

```javascript
var accumulator = incrkurtosis();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [corrected sample excess kurtosis][sample-excess-kurtosis]. If not provided an input value `x`, the accumulator function returns the current [corrected sample excess kurtosis][sample-excess-kurtosis].

```javascript
var accumulator = incrkurtosis();

var kurtosis = accumulator( 2.0 );
// returns null

kurtosis = accumulator( 2.0 );
// returns null

kurtosis = accumulator( -4.0 );
// returns null

kurtosis = accumulator( -4.0 );
// returns -6.0
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
var incrkurtosis = require( '@stdlib/stats/incr/kurtosis' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrkurtosis();

// For each simulated datum, update the corrected sample excess kurtosis...
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

[sample-excess-kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[@joanes:1998]: http://onlinelibrary.wiley.com/doi/10.1111/1467-9884.00122/

</section>

<!-- /.links -->
