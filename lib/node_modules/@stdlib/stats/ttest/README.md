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

# Student's t-Test

> One-sample and paired Student's t-Test.

<section class="usage">

## Usage

```javascript
var ttest = require( '@stdlib/stats/ttest' );
```

#### ttest( x\[, y]\[, opts] )

The function performs a one-sample t-test for the null hypothesis that the data in [array][mdn-array] or [typed array][mdn-typed-array] `x` is drawn from a normal distribution with mean zero and unknown variance.

```javascript
var normal = require( '@stdlib/random/base/normal' ).factory;

var rnorm;
var arr;
var out;
var i;

rnorm = normal( 0.0, 2.0, {
    'seed': 5776
});
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = rnorm();
}
out = ttest( arr );
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.722,
        'statistic': ~0.357,
        'ci': [~-0.333,~0.479],
        // ...
    }
*/
```

When [array][mdn-array] or [typed array][mdn-typed-array] `y` is supplied, the function tests whether the differences `x - y` come from a normal distribution with mean zero and unknown variance via the paired t-test.

```javascript
var normal = require( '@stdlib/random/base/normal' ).factory;

var rnorm;
var out;
var i;
var x;
var y;

rnorm = normal( 1.0, 2.0, {
    'seed': 786
});
x = new Array( 100 );
y = new Array( 100 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = rnorm();
    y[ i ] = rnorm();
}
out = ttest( x, y );
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.191,
        'statistic': ~1.315,
        'ci': [ ~-0.196, ~0.964 ],
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the hypothesis test results. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
console.log( out.print() );
/* e.g., =>
    Paired t-test

    Alternative hypothesis: True difference in means is not equal to 0

        pValue: 0.1916
        statistic: 1.3148
        df: 99
        95% confidence interval: [-0.1955,0.9635]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

The `ttest` function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that the mean of `x` is larger than `mu` (`greater`), smaller than `mu` (`less`) or equal to `mu` (`two-sided`). Default: `two-sided`.
-   **mu**: `number` denoting the hypothesized true mean under the null hypothesis. Default: `0`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

```javascript
var table;
var out;
var arr;

arr = [ 2, 4, 3, 1, 0 ];

out = ttest( arr, {
    'alpha': 0.01
});
table = out.print();
/* e.g., returns
    One-sample t-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0.0474
        statistic: 2.8284
        df: 4
        99% confidence interval: [-1.2556,5.2556]

    Test Decision: Fail to reject null in favor of alternative at 1% significance level
*/

out = ttest( arr, {
    'alpha': 0.1
});
table = out.print();
/* e.g., returns
    One-sample t-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0.0474
        statistic: 2.8284
        df: 4
        90% confidence interval: [0.4926,3.5074]

    Test Decision: Reject null in favor of alternative at 10% significance level
*/
```

To test whether the data comes from a distribution with a mean different than zero, set the `mu` option.

```javascript
var out;
var arr;

arr = [ 4, 4, 6, 6, 5 ];

out = ttest( arr, {
    'mu': 5
});
/* e.g., returns
{
    'rejected': false,
    'pValue': 1,
    'statistic': 0,
    'ci': [ ~3.758, ~6.242 ],
    // ...
}
*/
```

By default, a two-sided test is performed. To perform either of the one-sided tests, set the `alternative` option to `less` or `greater`.

```javascript
var table;
var out;
var arr;

arr = [ 4, 4, 6, 6, 5 ];

out = ttest( arr, {
    'alternative': 'less'
});
table = out.print();
/* e.g., returns
    One-sample t-test

    Alternative hypothesis: True mean is less than 0

        pValue: 0.9998
        statistic: 11.1803
        df: 4
        95% confidence interval: [-Infinity,5.9534]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

out = ttest( arr, {
    'alternative': 'greater'
});
table = out.print();
/* e.g., returns
    One-sample t-test

    Alternative hypothesis: True mean is greater than 0

        pValue: 0.0002
        statistic: 11.1803
        df: 4
        95% confidence interval: [4.0466,Infinity]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var normal = require( '@stdlib/random/base/normal' ).factory;
var ttest = require( '@stdlib/stats/ttest' );

var rnorm;
var arr;
var out;
var i;

rnorm = normal( 5.0, 4.0, {
    'seed': 37827
});
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = rnorm();
}

// Test whether true mean is equal to zero:
out = ttest( arr );
console.log( out.print() );
/* e.g., =>
    One-sample t-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0
        statistic: 15.0513
        df: 99
        95% confidence interval: [4.6997,6.127]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/

// Test whether true mean is equal to five:
out = ttest( arr, {
    'mu': 5.0
});
console.log( out.print() );
/* e.g., =>
    One-sample t-test

    Alternative hypothesis: True mean is not equal to 5

        pValue: 0.2532
        statistic: 1.1494
        df: 99
        95% confidence interval: [4.6997,6.127]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
