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

# z-Test

> Two-sample z-Test.

<section class="usage">

## Usage

```javascript
var ztest2 = require( '@stdlib/stats/ztest2' );
```

#### ztest2( x, y, sigmax, sigmay\[, opts] )

By default, the function performs a two-sample z-test for the null hypothesis that the data in [arrays][mdn-array] or [typed arrays][mdn-typed-array] `x` and `y` is  independently drawn from normal distributions with _equal_ means and known standard deviations `sigmax` and `sigmay`.

```javascript
var x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ]; // Drawn from N(2,1)
var y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ]; // Drawn from N(3,2)

var out = ztest2( x, y, 1.0, 2.0 );
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.141,
        'statistic': ~-1.471,
        'ci': [ ~-2.658, ~0.379 ],
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
console.log( out.print() );
/* e.g., =>
    Two-sample z-test

    Alternative hypothesis: True difference in means is not equal to 0

        pValue: 0.1412
        statistic: -1.4713
        95% confidence interval: [-2.6578,0.3785]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that `x` has a larger mean than `y` (`greater`), `x` has a smaller mean than `y` (`less`) or the means are the same (`two-sided`). Default: `two-sided`.
-   **difference**: `number` denoting the difference in means under the null hypothesis. Default: `0`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

<!-- run-disable -->

```javascript
var out = ztest2( x, y, 1.0, 2.0, {
    'alpha': 0.2
});
var table = out.print();
/* e.g., returns
    Two-sample z-test

    Alternative hypothesis: True difference in means is not equal to 0

        pValue: 0.1412
        statistic: -1.4713
        80% confidence interval: [-2.1323,-0.147]

    Test Decision: Reject null in favor of alternative at 20% significance level
*/
```

By default, a two-sided test is performed. To perform either of the one-sided tests, set the `alternative` option to `less` or `greater`.

<!-- run-disable -->

```javascript
var out = ztest2( x, y, {
    'alternative': 'less'
});
var table = out.print();
/* e.g., returns
    Two-sample z-test

    Alternative hypothesis: True difference in means is less than 0

        pValue: 0.0706
        statistic: -1.4713
        95% confidence interval: [-Infinity,0.1344]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

out = ztest2( x, y, {
    'alternative': 'greater'
});
table = out.print();
/* e.g., returns
    Two-sample z-test

    Alternative hypothesis: True difference in means is greater than 0

        pValue: 0.9294
        statistic: -1.4713
        95% confidence interval: [-2.4138,Infinity]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

To test whether the difference in the population means is equal to some other value than `0`, set the `difference` option.

```javascript
var normal = require( '@stdlib/random/base/normal' ).factory;

var rnorm = normal({
    'seed': 372
});

var x = new Array( 100 );
var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = rnorm( 2.0, 1.0 );
}
var y = new Array( 100 );
for ( i = 0; i < x.length; i++ ) {
    y[ i ] = rnorm( 1.0, 1.0 );
}

var out = ztest2( x, y, 1.0, 1.0, {
    'difference': 1.0
});
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.74,
        'statistic': ~0.332,
        'ci': [ ~0.77, ~1.324 ],
        // ...
    }
*/

var table = out.print();
/* e.g., returns
    Two-sample z-test

    Alternative hypothesis: True difference in means is not equal to 1

        pValue: 0.7395
        statistic: 0.3325
        95% confidence interval: [0.7698,1.3242]

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
var ztest2 = require( '@stdlib/stats/ztest2' );

var table;
var out;
var x;
var y;
var i;

// Values drawn from a Normal(4,2) distribution
x = new Array( 100 );
for ( i = 0; i < 100; i++ ) {
    x[ i ] = rnorm( 4.0, 2.0 );
}
// Values drawn from a Normal(3,2) distribution
y = new Array( 80 );
for ( i = 0; i < 80; i++ ) {
    y[ i ] = rnorm( 3.0, 2.0 );
}

out = ztest2( x, y, 2.0, 2.0 );
table = out.print();
console.log( table );

out = ztest2( x, y, 2.0, 2.0, {
    'difference': 1.0
});
table = out.print();
console.log( table );
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
