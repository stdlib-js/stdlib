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

# CPS Wages Data

> A random sample of 534 workers from the Current Population Survey (CPS) from 1985.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cps = require( '@stdlib/datasets/berndt-cps-wages-1985' );
```

#### cps()

Returns a random sample of 534 workers from the Current Population Survey (CPS) from 1985, including their wages and and other characteristics.

```javascript
var data = cps();
// returns [{...},{...},...]
```

Each `array` element has the following eleven fields:

-   **education**: number of years of education.
-   **south**: indicator variable for southern region (`1` if a person lives in the South; `0` if a person does not live in the South).
-   **gender**: gender of the person.
-   **experience**: number of years of work experience.
-   **union**: indicator variable for union membership (`1` if union member; `0` if not a union member).
-   **wage**: log-transformed wage (in dollars per hour).
-   **age**: age (in years).
-   **race**: ethnicity/race (`'white'`, `'hispanic'`, and `'other'`).
-   **occupation**: occupational category (`'management'`, `'sales'`, `'clerical'`, `'service'`, `'professional'`, and `'other'`).
-   **sector**: sector (`'other'`, `'manufacturing'`, or `'construction'`).
-   **married**: marital status (`0` if unmarried; `1` if married).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Based on residual plots, wages were log-transformed to stabilize the variance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Plot = require( '@stdlib/plot' );
var dataset = require( '@stdlib/datasets/berndt-cps-wages-1985' );

var data;
var plot;
var opts;
var x;
var y;
var i;

data = dataset();

// Extract wage data...
x = [];
y = [];
for ( i = 0; i < data.length; i++ ) {
    x.push( data[ i ].age );
    y.push( data[ i ].wage );
}

// Create a plot instance:
opts = {
    'lineStyle': 'none',
    'symbols': 'closed-circle',
    'xLabel': 'Age',
    'yLabel': 'Wage',
    'title': 'Age vs Wage'
};
plot = new Plot( [ x ], [ y ], opts );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: berndt-cps-wages-1985 [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --format fmt          Output format: 'csv' or 'ndjson'.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   The CLI supports two output formats: comma-separated values ([CSV][csv]) and newline-delimited JSON ([NDJSON][ndjson]). The default output format is [CSV][csv].

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ berndt-cps-wages-1985
education,south,gender,experience,union,wage,age,race,occupation,sector,married
8,0,female,21,1,5.1,35,hispanic,other,manufacturing,0
9,0,female,42,1,4.95,57,white,other,manufacturing,0
12,0,male,1,1,6.67,19,white,other,manufacturing,1
12,0,male,4,1,4,22,white,other,other,1
12,0,male,17,1,7.5,35,white,other,other,0
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="references">

## References

-   Berndt, Ernst R. 1991. _The Practice of Econometrics_. Addison Wesley Longman Publishing Co.

</section>

<!-- /.references -->

<!-- <license> -->

* * *

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[csv]: https://tools.ietf.org/html/rfc4180

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->
