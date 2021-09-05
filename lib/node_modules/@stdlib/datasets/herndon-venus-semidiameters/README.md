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

# Venus Semidiameters

> Fifteen observations of the vertical semidiameter of Venus, made by Lieutenant Herndon, with the meridian circle at Washington, in the year 1846.

<section class="intro">

Herndon's observations are a classic dataset commonly used in examples demonstrating outlier detection.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var data = require( '@stdlib/datasets/herndon-venus-semidiameters' );
```

#### data()

Returns fifteen observations of the vertical semidiameter of Venus, made by Lieutenant Herndon, with the meridian circle at Washington, in the year 1846.

```javascript
var d = data();
// returns [ -0.30, -0.44, ..., 0.39, 0.10 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrgrubbs = require( '@stdlib/stats/incr/grubbs' );
var data = require( '@stdlib/datasets/herndon-venus-semidiameters' );

var opts;
var acc;
var d;
var i;

// Get the data:
d = data();

// Create a new accumulator for detecting an outlier using Grubbs' test:
opts = {
    'init': d.length
};
acc = incrgrubbs( opts );

// Update the accumulator...
for ( i = 0; i < d.length; i++ ) {
    acc( d[ i ] );
}

// Print the test results:
console.log( acc().print() );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: herndon-venus-semidiameters [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Data is written to `stdout` as newline-delimited data.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ herndon-venus-semidiameters
-0.30
-0.44
1.01
0.48
-0.24
0.06
0.63
-0.13
-1.40
-0.22
-0.05
0.20
0.18
0.39
0.10
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Chauvenet, William. 1868. _A Manual of Spherical and Practical Astronomy_. 5th ed. Vol. 5. London, England: Trübner & Co.
-   Grubbs, Frank E. 1950. "Sample Criteria for Testing Outlying Observations." _The Annals of Mathematical Statistics_ 21 (1). The Institute of Mathematical Statistics: 27–58. doi:[10.1214/aoms/1177729885][@grubbs:1950a].
-   Grubbs, Frank E. 1969. "Procedures for Detecting Outlying Observations in Samples." _Technometrics_ 11 (1). Taylor & Francis: 1–21. doi:[10.1080/00401706.1969.10490657][@grubbs:1969a].
-   Tietjen, Gary L., and Roger H. Moore. 1972. "Some Grubbs-Type Statistics for the Detection of Several Outliers." _Technometrics_ 14 (3). Taylor & Francis: 583–97. doi:[10.1080/00401706.1972.10488948][@tietjen:1972a].

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[@grubbs:1950a]: https://doi.org/10.1214/aoms/1177729885

[@grubbs:1969a]: https://doi.org/10.1080/00401706.1969.10490657

[@tietjen:1972a]: https://doi.org/10.1080/00401706.1972.10488948

</section>

<!-- /.links -->
