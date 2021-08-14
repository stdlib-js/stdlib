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

# incrgrubbs

> [Grubbs' test][grubbs-test] for outliers.

<section class="intro">

[Grubbs' test][grubbs-test] (also known as the **maximum normalized residual test** or **extreme studentized deviate test**) is a statistical test used to detect outliers in a univariate dataset assumed to come from a normally distributed population. [Grubbs' test][grubbs-test] is defined for the hypothesis:

-   **H_0**: the dataset does **not** contain outliers.
-   **H_1**: the dataset contains **exactly** one outlier.

The [Grubbs' test][grubbs-test] statistic for a two-sided alternative hypothesis is defined as

<!-- <equation class="equation" label="eq:grubbs_test_statistic" align="center" raw="G = \frac{\max_{i=0,\ldots,N-1} |Y_i - \bar{Y}|}{s}" alt="Grubbs' test statistic."> -->

<div class="equation" align="center" data-raw-text="G = \frac{\max_{i=0,\ldots,N-1} |Y_i - \bar{Y}|}{s}" data-equation="eq:grubbs_test_statistic">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d6af7da0801d2116a9507668d13ef7bf607fd275/lib/node_modules/@stdlib/stats/incr/grubbs/docs/img/equation_grubbs_test_statistic.svg" alt="Grubbs' test statistic.">
    <br>
</div>

<!-- </equation> -->

where `s` is the sample standard deviation. The [Grubbs test][grubbs-test] statistic is thus the largest absolute deviation from the sample mean in units of the sample standard deviation.

The [Grubbs' test][grubbs-test] statistic for the alternative hypothesis that the minimum value is an outlier is defined as

<!-- <equation class="equation" label="eq:grubbs_test_statistic_min" align="center" raw="G = \frac{\bar{Y} - Y_{\textrm{min}}}{s}" alt="Grubbs' test statistic for testing whether the minimum value is an outlier."> -->

<div class="equation" align="center" data-raw-text="G = \frac{\bar{Y} - Y_{\textrm{min}}}{s}" data-equation="eq:grubbs_test_statistic_min">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d6af7da0801d2116a9507668d13ef7bf607fd275/lib/node_modules/@stdlib/stats/incr/grubbs/docs/img/equation_grubbs_test_statistic_min.svg" alt="Grubbs' test statistic for testing whether the minimum value is an outlier.">
    <br>
</div>

<!-- </equation> -->

The [Grubbs' test][grubbs-test] statistic for the alternative hypothesis that the maximum value is an outlier is defined as

<!-- <equation class="equation" label="eq:grubbs_test_statistic_max" align="center" raw="G = \frac{Y_{\textrm{max}} - \bar{Y}}{s}" alt="Grubbs' test statistic for testing whether the maximum value is an outlier."> -->

<div class="equation" align="center" data-raw-text="G = \frac{Y_{\textrm{max}} - \bar{Y}}{s}" data-equation="eq:grubbs_test_statistic_max">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d6af7da0801d2116a9507668d13ef7bf607fd275/lib/node_modules/@stdlib/stats/incr/grubbs/docs/img/equation_grubbs_test_statistic_max.svg" alt="Grubbs' test statistic for testing whether the maximum value is an outlier.">
    <br>
</div>

<!-- </equation> -->

For a two-sided test, the hypothesis that a dataset does **not** contain an outlier is rejected at significance level α if

<!-- <equation class="equation" label="eq:grubbs_test_two_sided" align="center" raw="G > \frac{N-1}{\sqrt{N}} \sqrt{\frac{t^2_{\alpha/(2N),N-2}}{N - 2 + t^2_{\alpha/(2N),N-2}}}" alt="Two-sided Grubbs' test."> -->

<div class="equation" align="center" data-raw-text="G > \frac{N-1}{\sqrt{N}} \sqrt{\frac{t^2_{\alpha/(2N),N-2}}{N - 2 + t^2_{\alpha/(2N),N-2}}}" data-equation="eq:grubbs_test_two_sided">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d6af7da0801d2116a9507668d13ef7bf607fd275/lib/node_modules/@stdlib/stats/incr/grubbs/docs/img/equation_grubbs_test_two_sided.svg" alt="Two-sided Grubbs' test.">
    <br>
</div>

<!-- </equation> -->

where `t` denotes the upper critical value of the _t_-distribution with `N-2` degrees of freedom and a significance level of `α/(2N)`.

For a one-sided test, the hypothesis that a dataset does **not** contain an outlier is rejected at significance level α if

<!-- <equation class="equation" label="eq:grubbs_test_one_sided" align="center" raw="G > \frac{N-1}{\sqrt{N}} \sqrt{\frac{t^2_{\alpha/N,N-2}}{N - 2 + t^2_{\alpha/N,N-2}}}" alt="One-sided Grubbs' test."> -->

<div class="equation" align="center" data-raw-text="G > \frac{N-1}{\sqrt{N}} \sqrt{\frac{t^2_{\alpha/N,N-2}}{N - 2 + t^2_{\alpha/N,N-2}}}" data-equation="eq:grubbs_test_one_sided">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d6af7da0801d2116a9507668d13ef7bf607fd275/lib/node_modules/@stdlib/stats/incr/grubbs/docs/img/equation_grubbs_test_one_sided.svg" alt="One-sided Grubbs' test.">
    <br>
</div>

<!-- </equation> -->

where `t` denotes the upper critical value of the _t_-distribution with `N-2` degrees of freedom and a significance level of `α/N`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrgrubbs = require( '@stdlib/stats/incr/grubbs' );
```

#### incrgrubbs( \[options] )

Returns an accumulator `function` which incrementally performs [Grubbs' test][grubbs-test] for outliers.

```javascript
var accumulator = incrgrubbs();
```

The function accepts the following `options`:

-   **alpha**: significance level. Default: `0.05`.

-   **alternative**: alternative hypothesis. The option may be one of the following values:

    -   `'two-sided'`: test whether the minimum or maximum value is an outlier.
    -   `'min'`: test whether the minimum value is an outlier.
    -   `'max'`: test whether the maximum value is an outlier.

    Default: `'two-sided'`.

-   **init**: number of data points the accumulator should use to compute initial statistics **before** testing for an outlier. Until the accumulator is provided the number of data points specified by this option, the accumulator returns `null`. Default: `100`.

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated test results. If not provided an input value `x`, the accumulator function returns the current test results.

```javascript
var rnorm = require( '@stdlib/random/base/normal' );

var opts = {
    'init': 0
};
var accumulator = incrgrubbs( opts );

var results = accumulator( rnorm( 10.0, 5.0 ) );
// returns null

results = accumulator( rnorm( 10.0, 5.0 ) );
// returns null

results = accumulator( rnorm( 10.0, 5.0 ) );
// returns <Object>

results = accumulator();
// returns <Object>
```

The accumulator function returns an `object` having the following fields:

-   **rejected**: boolean indicating whether the null hypothesis should be rejected.
-   **alpha**: significance level.
-   **criticalValue**: critical value.
-   **statistic**: test statistic.
-   **df**: degrees of freedom.
-   **mean**: sample mean.
-   **sd**: corrected sample standard deviation.
-   **min**: minimum value.
-   **max**: maximum value.
-   **alt**: alternative hypothesis.
-   **method**: method name.
-   **print**: method for pretty-printing test output.

The `print` method accepts the following options:

-   **digits**: number of digits after the decimal point. Default: `4`.
-   **decision**: `boolean` indicating whether to print the test decision. Default: `true`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   [Grubbs' test][grubbs-test] **assumes** that data is normally distributed. Accordingly, one should first **verify** that the data can be _reasonably_ approximated by a normal distribution before applying the [Grubbs' test][grubbs-test].
-   The accumulator must be provided **at least** three data points before performing [Grubbs' test][grubbs-test]. Until at least three data points are provided, the accumulator returns `null`.
-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the test statistic is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrgrubbs = require( '@stdlib/stats/incr/grubbs' );

var data;
var opts;
var acc;
var i;

// Define a data set (8 mass spectrometer measurements of a uranium isotope; see Tietjen and Moore. 1972. "Some Grubbs-Type Statistics for the Detection of Several Outliers".)
data = [ 199.31, 199.53, 200.19, 200.82, 201.92, 201.95, 202.18, 245.57 ];

// Create a new accumulator:
opts = {
    'init': data.length,
    'alternative': 'two-sided'
};
acc = incrgrubbs( opts );

// Update the accumulator:
for ( i = 0; i < data.length; i++ ) {
    acc( data[ i ] );
}

// Print the test results:
console.log( acc().print() );
/* e.g., =>
Grubbs' Test

Alternative hypothesis: The maximum value (245.57) is an outlier

    criticalValue: 2.1266
    statistic: 2.4688
    df: 6

Test Decision: Reject null in favor of alternative at 5% significance level

*/
```

</section>

<!-- /.examples -->

<section class="references">

* * *

## References

-   Grubbs, Frank E. 1950. "Sample Criteria for Testing Outlying Observations." _The Annals of Mathematical Statistics_ 21 (1). The Institute of Mathematical Statistics: 27–58. doi:[10.1214/aoms/1177729885][@grubbs:1950a].
-   Grubbs, Frank E. 1969. "Procedures for Detecting Outlying Observations in Samples." _Technometrics_ 11 (1). Taylor & Francis: 1–21. doi:[10.1080/00401706.1969.10490657][@grubbs:1969a].    

</section>

<!-- /.references -->

<section class="links">

[grubbs-test]: https://en.wikipedia.org/wiki/Grubbs%27_test_for_outliers

[@grubbs:1950a]: https://doi.org/10.1214/aoms/1177729885

[@grubbs:1969a]: https://doi.org/10.1080/00401706.1969.10490657

</section>

<!-- /.links -->
