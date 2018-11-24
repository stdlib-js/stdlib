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

# Correlation Test

> Compute a Pearson product-moment correlation test between paired samples.

<section class="usage">

## Usage

```javascript
var pcorrtest = require( '@stdlib/stats/pcorrtest' );
```

#### pcorrtest( x, y\[, opts] )

By default, the function performs a t-test for the null hypothesis that the paired data in [arrays][mdn-array] or [typed arrays][mdn-typed-array] `x` and `y` have a [Pearson correlation coefficient][pearson-correlation] of zero.

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = pcorrtest( x, y );
/* e.g., returns
    {
        'alpha': 0.05,
        'rejected': true,
        'pValue': ~0.006,
        'statistic': ~3.709,
        'ci': [ ~0.332, ~0.95 ],
        'nullValue': 0,
        'pcorr': ~0.795,
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
console.log( out.print() );
/* e.g., =>
    t-test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is not equal to 0

        pValue: 0.006
        statistic: 3.709
        95% confidence interval: [0.3315,0.9494]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that `x` has a larger mean than `y` (`greater`), `x` has a smaller mean than `y` (`less`) or the means are the same (`two-sided`). Default: `two-sided`.
-   **rho**: `number` denoting the correlation between the `x` and `y` variables under the null hypothesis. Default: `0`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = pcorrtest( x, y, {
    'alpha': 0.1
});
var table = out.print();
/* e.g., returns
    t-test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is not equal to 0

        pValue: 0.006
        statistic: 3.709
        90% confidence interval: [0.433,0.9363]

    Test Decision: Reject null in favor of alternative at 10% significance level
*/
```

By default, a two-sided test is performed. To perform either of the one-sided tests, set the `alternative` option to `less` or `greater`.

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = pcorrtest( x, y, {
    'alternative': 'less'
});
var table = out.print();
/* e.g., returns
    t-test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is less than 0

        pValue: 0.997
        statistic: 3.709
        95% confidence interval: [-1,0.9363]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

out = pcorrtest( x, y, {
    'alternative': 'greater'
});
table = out.print();
/* e.g., returns
    t-test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is greater than 0

        pValue: 0.003
        statistic: 3.709
        95% confidence interval: [0.433,1]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/
```

To test whether the correlation coefficient is equal to some other value than `0`, set the `rho` option. Hypotheses tests for correlation coefficients besides zero are carried out using the [Fisher z-transformation][fisher-transform].

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = pcorrtest( x, y, {
    'rho': 0.8
});
/* e.g., returns
    {
        'alpha': 0.05,
        'rejected': false,
        'pValue': ~0.972,
        'statistic': ~-0.035,
        'ci': [ ~0.332, ~0.949 ],
        'nullValue': 0.8,
        'pcorr': ~0.795,
        // ...
    }
*/

var table = out.print();
/* e.g., returns
    Fisher's z transform test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is not equal to 0.8

        pValue: 0.972
        statistic: -0.0351
        95% confidence interval: [0.3315,0.9494]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var rnorm = require( '@stdlib/random/base/normal' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pcorrtest = require( '@stdlib/stats/pcorrtest' );

var table;
var out;
var rho;
var x;
var y;
var i;

rho = 0.5;
x = new Array( 300 );
y = new Array( 300 );
for ( i = 0; i < 300; i++ ) {
    x[ i ] = rnorm( 0.0, 1.0 );
    y[ i ] = ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) );
}

out = pcorrtest( x, y );
table = out.print();
console.log( table );

out = pcorrtest( x, y, {
    'rho': 0.5
});
table = out.print();
console.log( table );
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[fisher-transform]: https://en.wikipedia.org/wiki/Fisher_transformation

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
