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

# Z-Test

> One-sample z-Test.

<section class="usage">

## Usage

```javascript
var ztest = require( '@stdlib/stats/ztest' );
```

#### ztest( x, sigma\[, opts] )

The function performs a one-sample z-test for the null hypothesis that the data in [array][mdn-array] or [typed array][mdn-typed-array] `x` is drawn from a normal distribution with mean zero and known standard deviation `sigma`.

```javascript
var normal = require( '@stdlib/random/base/normal' ).factory;

var rnorm = normal( 0.0, 2.0, {
    'seed': 5776
});

var arr = new Array( 300 );
var i;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = rnorm();
}

var out = ztest( arr, 2.0 );
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.155,
        'statistic': -1.422,
        'ci': [~-0.391,~0.062],
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the hypothesis test results. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
var table = out.print({
    'digits': 3
});
console.log( table );
/* e.g., =>
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0.155
        statistic: -1.422
        95% confidence interval: [-0.391,0.062]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

The `ztest` function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that the mean of `x` is larger than `mu` (`greater`), smaller than `mu` (`less`) or equal to `mu` (`two-sided`). Default: `two-sided`.
-   **mu**: `number` denoting the hypothesized true mean under the null hypothesis. Default: `0`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

```javascript
var table;
var out;
var arr;

arr = [ 2, 4, 3, 1, 0 ];

out = ztest( arr, 2.0, {
    'alpha': 0.01
});
table = out.print();
/* e.g., returns
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0.0253
        statistic: 2.2361
        99% confidence interval: [-0.3039,4.3039]

    Test Decision: Fail to reject null in favor of alternative at 1% significance level
*/

out = ztest( arr, 2.0, {
    'alpha': 0.1
});
table = out.print();
/* e.g., returns
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0.0253
        statistic: 2.2361
        90% confidence interval: [0.5288,3.4712]

    Test Decision: Reject null in favor of alternative at 10% significance level
*/
```

To test whether the data comes from a distribution with a mean different than zero, set the `mu` option.

```javascript
var out;
var arr;

arr = [ 4, 4, 6, 6, 5 ];

out = ztest( arr, 1.0, {
    'mu': 5.0
});
/* e.g., returns
    {
        'rejected': false,
        'pValue': 1,
        'statistic': 0,
        'ci': [ ~4.123, ~5.877 ],
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

out = ztest( arr, 1.0, {
    'alternative': 'less'
});
table = out.print();
/* e.g., returns
    One-sample z-test

    Alternative hypothesis: True mean is less than 0

        pValue: 1
        statistic: 11.1803
        95% confidence interval: [-Infinity,5.7356]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

out = ztest( arr, 1.0, {
    'alternative': 'greater'
});
table = out.print();
/* e.g., returns
    One-sample z-test

    Alternative hypothesis: True mean is greater than 0

        pValue: 0
        statistic: 11.1803
        95% confidence interval: [4.2644,Infinity]

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
var ztest = require( '@stdlib/stats/ztest' );

var rnorm;
var arr;
var out;
var i;

rnorm = normal( 5.0, 4.0, {
    'seed': 37827
});
arr = new Array( 500 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = rnorm();
}

// Test whether true mean is equal to zero:
out = ztest( arr, 4.0 );
console.log( out.print() );
/* e.g., =>
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0
        statistic: 28.6754
        95% confidence interval: [4.779,5.4802]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/

// Test whether true mean is equal to five:
out = ztest( arr, 4.0, {
    'mu': 5.0
});
console.log( out.print() );
/* e.g., =>
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 5

        pValue: 0.4688
        statistic: 0.7245
        95% confidence interval: [4.779,5.4802]

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
