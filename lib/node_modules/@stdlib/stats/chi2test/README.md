<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Chi-square independence test

> Perform a chi-square independence test.

<section class="usage">

## Usage

```javascript
var chi2test = require( '@stdlib/stats/chi2test' );
```

#### chi2test( x\[, options] )

Computes a chi-square independence test for the **null hypothesis** that the joint distribution of the observed frequencies is the product of the row and column marginals (i.e., that the row and column variables are independent).

```javascript
// 2x2 contigency table:
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];

var res = chi2test( x );

var o = res.toJSON();
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'pValue': ~0.072,
        'df': 1,
        'statistic': 3.24,
        ...
    }
*/
```

The function accepts the following `options`:

-   **alpha**: significance level of the hypothesis test. Must be on the interval `[0,1]`. Default: `0.05`.
-   **correct**: `boolean` indicating whether to use Yates' continuity correction when provided a 2x2 contingency table. Default: `true`.

By default, the test is performed at a significance level of `0.05`. To adjust the significance level, set the `alpha` option.

```javascript
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var opts = {
    'alpha': 0.1
};
var res = chi2test( x, opts );

var o = res.toJSON();
/* returns
    {
        'rejected': true,
        'alpha': 0.1,
        'pValue': ~0.072,
        'df': 1,
        'statistic': 3.24,
        ...
    }
*/
```

By default, the function applies Yates' continuity correction for 2x2 contingency tables. To disable the continuity correction, set `correct` to `false`.

```javascript
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var opts = {
    'correct': false
};
var res = chi2test( x, opts );

var o = res.toJSON();
/* returns
    {
        'rejected': true,
        'alpha': 0.05,
        'pValue': ~0.046,
        'df': 1,
        'statistic': 4,
        ...
    }
*/
```

The function returns a results `object` having the following properties:

-   **alpha**: significance level.
-   **rejected**: `boolean` indicating the test decision.
-   **pValue**: test p-value.
-   **statistic**: test statistic.
-   **df**: degrees of freedom.
-   **expected**: expected observation frequencies.
-   **method**: test name.
-   **toString**: serializes results as formatted test output.
-   **toJSON**: serializes results as a JSON object.

To print formatted test output, invoke the `toString` method. The method accepts the following options:

-   **digits**: number of displayed decimal digits. Default: `4`.
-   **decision**: `boolean` indicating whether to show the test decision. Default: `true`.

```javascript
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var res = chi2test( x );

var table = res.toString({
    'decision': false
});
/* e.g., returns

    Chi-square independence test

    Null hypothesis: the two variables are independent

       pValue: 0.0719
       statistic: 3.24
       degrees of freedom: 1

*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The chi-square approximation may be incorrect if the observed or expected frequencies in each category are too small. Common practice is to require frequencies **greater than** five. The Yates' continuity correction is enabled by default for 2x2 tables to account for this, although it tends to over-correct.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-multi-spaces -->

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var chi2test = require( '@stdlib/stats/chi2test' );

/*
* Data from students in grades 4-6 on whether good grades, athletic ability, or popularity are most important to them:
*
* Source: Chase, M.A and Dummer, G.M. (1992), "The Role of Sports as a Social Determinant for Children"
*/
var table = array([
    /* Grades Popularity Sports */
    [    63,      31,      25   ], // 4th
    [    88,      55,      33   ], // 5th
    [    96,      55,      32   ]  // 6th
]);

// Assess whether the grade level and the students' goals are independent of each other:
var out = chi2test( table );
// returns {...}

console.log( out.toString() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
