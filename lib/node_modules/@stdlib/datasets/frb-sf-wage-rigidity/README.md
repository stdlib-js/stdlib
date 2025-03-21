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

# Wage Rates

> [Wage rates][@frbsf:wagerigidity] for U.S. workers that have not changed jobs within the year.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var wages = require( '@stdlib/datasets/frb-sf-wage-rigidity' );
```

#### wages()

Returns [wage rates][@frbsf:wagerigidity] for U.S. workers that have not changed jobs within the year.

```javascript
var data = wages();
// returns [{...},{...},...]
```

Each `array` element has the following fields:

-   **date**: collection date (month/day/year; e.g., `01/01/1980`).
-   **all_workers**: wage rates for hourly and non-hourly workers.
-   **hourly_workers**: wage rates for hourly workers.
-   **non_hourly_workers**: wage rates for non-hourly workers.
-   **less_than_high_school**: wage rates for workers with less than a high school education.
-   **high_school**: wage rates for workers with a high school education.
-   **some_college**: wage rates for workers with some college education.
-   **college**: wage rates for workers with a college education.
-   **construction**: wage rates for workers in the construction industry.
-   **finance**: wage rates for workers in the finance industry.
-   **manufacturing**: wage rates for workers in the manufacturing industry.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Chart = require( '@stdlib/plot/sparklines/unicode/tristate' );
var wages = require( '@stdlib/datasets/frb-sf-wage-rigidity' );

var chart;
var opts;
var data;
var v1;
var v2;
var d;
var i;

data = wages();
d = new Array( data.length );
v1 = data[ 0 ].all_workers;
for ( i = 1; i < data.length; i++ ) {
    v2 = data[ i ].all_workers;
    if ( v2 === null ) {
        d[ i ] = NaN;
    } else if ( v2 < v1 ) {
        d[ i ] = -1;
    } else if ( v2 > v1 ) {
        d[ i ] = 1;
    } else {
        d[ i ] = 0;
    }
    v1 = v2;
}

opts = {
    'data': d
};
chart = new Chart( opts );

console.log( chart.render() );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: frb-sf-wage-rigidity [options]

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
$ frb-sf-wage-rigidity
date,all_workers,hourly_workers,non_hourly_workers,less_than_high_school,high_school,some_college,college,construction,finance,manufacturing
01/01/1980,,,,,,,,,,
02/01/1980,,,,,,,,,,
03/01/1980,,,,,,,,,,
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

* * *

## License

The data files (databases) are licensed under an [Open Data Commons Attribution 1.0 License][odc-by-1.0] and their contents are licensed under a [Creative Commons Attribution 4.0 International Public License][cc-by-4.0]. The original dataset is attributed to the [Federal Reserve Bank of San Francisco][@frbsf:wagerigidity]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@frbsf:wagerigidity]: http://www.frbsf.org/economic-research/indicators-data/nominal-wage-rigidity/

[csv]: https://tools.ietf.org/html/rfc4180

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[odc-by-1.0]: http://opendatacommons.org/licenses/by/1.0/

[cc-by-4.0]: http://creativecommons.org/licenses/by/4.0/

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->
