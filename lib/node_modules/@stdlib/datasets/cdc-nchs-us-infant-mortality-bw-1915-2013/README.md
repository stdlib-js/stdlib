<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# US Infant Mortality Rates, By Race (1915-2013)

> US infant mortality data, by race, from 1915 to 2013, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.

<section class="usage">

## Usage

```javascript
var dataset = require( '@stdlib/datasets/cdc-nchs-us-infant-mortality-bw-1915-2013' );
```

#### dataset()

Returns US infant mortality data, by race, from 1915 to 2013, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.

```javascript
var data = dataset();
// returns { 'black': [...], 'white': [...] }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   All birth data by race **before** 1980 are based on race of the child. Starting in 1980, birth data by race are based on race of the mother. Birth data are used to calculate infant mortality rate.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dataset = require( '@stdlib/datasets/cdc-nchs-us-infant-mortality-bw-1915-2013' );

// Retrieve the data:
var data = dataset();
var b = data.black;
var w = data.white;

// Compute the relative infant mortality rate for blacks versus whites...
var r;
var i;
for ( i = 0; i < b.length; i++ ) {
    r = b[ i ] / w[ i ];
    console.log( '%d', r.toFixed( 3 ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: cdc-nchs-us-infant-mortality-bw-1915-2013 [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Data is written to `stdout` as comma-separated values ([CSV][csv]), where the first line is a header line.

<section class="examples">

### Examples

```bash
$ cdc-nchs-us-infant-mortality-bw-1915-2013
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

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

[csv]: https://tools.ietf.org/html/rfc4180

</section>

<!-- /.links -->
