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

# Binomial Test

> Exact test for the success probability in a Bernoulli experiment.

<section class="usage">

## Usage

```javascript
var binomialTest = require( '@stdlib/stats/binomial-test' );
```

#### binomialTest( x\[, n]\[, opts] )

When supplied nonnegative integers `x` (number of successes in a Bernoulli experiment) and `n` (total number of trials), the function computes an exact test for the success probability in a Bernoulli experiment. Alternatively, `x` may be a two-element array containing the number of successes and failures, respectively.

```javascript
var out = binomialTest( 550, 1000 );
/* returns
    {
        'rejected': true,
        'pValue': ~0.001,
        'statistic': 0.55,
        'ci': [ ~0.519, ~0.581 ],
        // ...
    }
*/

out = binomialTest( [ 550, 450 ] );
/* returns
    {
        'rejected': true,
        'pValue': ~0.001,
        'statistic': 0.55,
        'ci': [ ~0.519, ~0.581 ],
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
console.log( out.print() );
/* e.g., =>
    Exact binomial test

    Alternative hypothesis: True correlation coefficient is not equal to 0.5

        pValue: 0.0017
        statistic: 0.55
        95% confidence interval: [0.5186,0.5811]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that the true ratio of variances is greater than one (`greater`), smaller than one (`less`), or that the variances are the same (`two-sided`). Default: `two-sided`.
-   **p**: success `probability` under the null hypothesis. Default: `0.5`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

```javascript
var out = binomialTest( 59, 100, {
    'alpha': 0.1
});
/* returns
    {
        'rejected': true,
        'pValue': ~0.089,
        'statistic': 0.59,
        'ci': [ ~0.487, ~0.687 ],
        // ...
    }
*/
```

By default, a two-sided test is performed. To perform either of the one-sided tests, set the `alternative` option to `less` or `greater`.

```javascript
out = binomialTest( 550, 1000, {
    'alternative': 'greater'
});
table = out.print();
/** e.g., returns
    Exact binomial test

    Alternative hypothesis: True correlation coefficient is greater than 0.5

        pValue: 0.0009
        statistic: 0.55
        95% confidence interval: [0.5235,1]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/

out = binomialTest( 550, 1000, {
    'alternative': 'less'
});
table = out.print();
/* e.g., returns
    Exact binomial test

    Alternative hypothesis: True correlation coefficient is less than 0.5

        pValue: 0.9993
        statistic: 0.55
        95% confidence interval: [0,0.5762]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

To test whether the success probability in the population is equal to some other value than `0.5`, set the `p` option.

```javascript
var out = binomialTest( 23, 100, {
    'p': 0.2
});
/* returns
    {
        'rejected': false,
        'pValue': ~0.453,
        'statistic': 0.23,
        'ci': [ ~0.152, ~0.325 ],
        // ...
    }
*/

var table = out.print();
/* e.g., returns
    Exact binomial test

    Alternative hypothesis: True correlation coefficient is not equal to 0.2

        pValue: 0.4534
        statistic: 0.23
        95% confidence interval: [0.1517,0.3249]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var binomialTest = require( '@stdlib/stats/binomial-test' );

var out = binomialTest( 682, 925 );
/* returns
    {
        'rejected': true,
        'pValue': ~3.544e-49,
        'statistic': 0.737,
        'ci': [ ~0.708, ~0.765 ],
        // ...
    }
*/

out = binomialTest( [ 682, 925 - 682 ] );
/* returns
    {
        'rejected': true,
        'pValue': ~3.544e-49,
        'statistic': 0.737,
        'ci': [ ~0.708, ~0.765 ],
        // ...
    }
*/

out = binomialTest( 682, 925, {
    'p': 0.75,
    'alpha': 0.05
});
/* returns
    {
        'rejected': false,
        'pValue': ~0.382
        'statistic': 0.737,
        'ci': [ ~0.708, ~0.765 ],
        // ...
    }
*/

out = binomialTest( 21, 40, {
    'p': 0.4,
    'alternative': 'greater'
});
/* returns
    {
        'rejected': false,
        'pValue': ~0.382,
        'statistic': 0.737,
        'ci': [ ~0.385, 1.0 ],
        // ...
    }
*/
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
