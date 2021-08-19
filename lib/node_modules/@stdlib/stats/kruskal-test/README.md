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

# kruskalTest

> Compute the Kruskal-Wallis test for equal medians.

<section class="intro">

The Kruskal-Wallis rank sum test evaluates for multiple samples the null hypothesis that their medians are identical. The Kruskal-Wallis test is a nonparametric test which does not require the data to be normally distributed.

To carry out the test, the rank sums `S_h` of the individual groups are calculated. The test statistic is then calculated as

<!-- <equation class="equation" label="eq:kruskal_test_statistic" align="center" raw="H = \frac{\tfrac{12}{N(N+1)}\sum_h\tfrac{S_h^2}{n_h}-3(N+1)}{1-\tfrac{1}{(N^3-N)} \sum t_{r(i)}^3 - t_{r(i)}}" alt="Equation for the Kruskal-Wallis test statistic."> -->

<div class="equation" align="center" data-raw-text="H = \frac{\tfrac{12}{N(N+1)}\sum_h\tfrac{S_h^2}{n_h}-3(N+1)}{1-\tfrac{1}{(N^3-N)} \sum t_{r(i)}^3 - t_{r(i)}}" data-equation="eq:kruskal_test_statistic">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e1fbdee688c5409e4cc6b0cd06d90b1cd2abd67c/lib/node_modules/@stdlib/stats/kruskal-test/docs/img/equation_kruskal_test_statistic.svg" alt="Equation for the Kruskal-Wallis test statistic.">
    <br>
</div>

<!-- </equation> -->

where `N` denotes the total number of observations and `t_{r(i)}` are the number of tied observations with rank _i_.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var kruskalTest = require( '@stdlib/stats/kruskal-test' );
```

#### kruskalTest( a\[,b,...,k]\[, opts] )

For input arrays `a`, `b`, ... holding numeric observations, this function calculates the Kruskal-Wallis rank sums test, which tests the null hypothesis that the medians in all `k` groups are the same. 

```javascript
// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = kruskalTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': 2,
        'pValue': ~0.68,
        'statistic': ~0.771,
        ...
    }
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **groups**: an `array` of group indicators. If set, the function assumes that only a single numeric array is provided holding all observations.

By default, the test is carried out at a significance level of `0.05`. To choose a custom significance level, set the `alpha` option.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = kruskalTest( x, y, z, {
    'alpha': 0.01
});
/* returns
    {
        'rejected': false,
        'alpha': 0.01,
        'df': 2,
        'pValue': ~0.68,
        'statistic': ~0.771,
        ...
    }
*/
```

The function provides an alternate interface by supplying an array of group indicators to the `groups` option. In this case, it is assumed that only a single numeric array holding all observations is provided to the function.

<!-- eslint-disable array-element-newline -->

```javascript
var arr = [
    2.9, 3.0, 2.5, 2.6, 3.2,
    3.8, 2.7, 4.0, 2.4,
    2.8, 3.4, 3.7, 2.2, 2.0
];
var groups = [
    'a', 'a', 'a', 'a', 'a',
    'b', 'b', 'b', 'b',
    'c', 'c', 'c', 'c', 'c'
];
var out = kruskalTest( arr, {
    'groups': groups
});
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = kruskalTest( x, y, z );
console.log( out.print() );
/* =>
    Kruskal-Wallis Test

    Null hypothesis: the medians of all groups are the same

        pValue: 0.68
        statistic: 0.7714    df: 2

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var kruskalTest = require( '@stdlib/stats/kruskal-test' );

// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = kruskalTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': 2,
        'pValue': ~0.68,
        'statistic': ~0.771,
        ...
    }
*/

var table = out.print();
/* returns
    Kruskal-Wallis Test

    Null hypothesis: the medians of all groups are the same

        pValue: 0.68
        statistic: 0.7714    df: 2

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<section class="links">

</section>

<!-- /.links -->
