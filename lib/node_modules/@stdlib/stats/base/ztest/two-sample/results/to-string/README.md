<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# res2str

> Serialize a two-sample Z-test results object as a formatted string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var res2str = require( '@stdlib/stats/base/ztest/two-sample/results/to-string' );
```

#### res2str( results\[, options] )

Serializes a two-sample Z-test results object as a formatted string.

```javascript
var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );

var results = new Float64Results();

// ...

var s = res2str( results );
// returns <string>
```

The function supports the following parameters:

-   **results**: two-sample Z-test results object.
-   **options**: function options.

The function supports the following options:

-   **digits**: number of digits to display after decimal points. Default: `4`.
-   **decision**: boolean indicating whether to show the test decision. Default: `true`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Example output:

    ```text

    Two-sample Z-test

    Alternative hypothesis: True difference in means is less than 1.0

        pValue: 0.0406
        statistic: 9.9901
        95% confidence interval: [9.7821, 10.4451]

    Test Decision: Reject null in favor of alternative at 5% significance level

    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
var Float64Array = require( '@stdlib/array/float64' );
var res2str = require( '@stdlib/stats/base/ztest/two-sample/results/to-string' );

var results = new Float64Results();
results.rejected = true;
results.alpha = 0.05;
results.pValue = 0.0132;
results.statistic = 2.4773;
results.nullValue = 0.0;
results.xmean = 3.7561;
results.ymean = 3.0129;
results.ci = new Float64Array( [ 0.1552, 1.3311 ] );
results.alternative = resolveEnum( 'two-sided' );

var s = res2str( results );
console.log( s );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
