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

# Nightingale's Rose

> Dataset for [Florence Nightingale][nightingale]'s famous [polar area diagram][polar-area-diagram].

<section class="intro">

<!-- <image class="image" align="center" alt="Nightingale's famous polar area diagram."> -->

<div class="image" align="center">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aeef456ddeeb9af2a4d17f11cb0e002fa5e535d6/lib/node_modules/%40stdlib/datasets/nightingales-rose/docs/img/charts.png" alt="Nightingale's famous polar area diagram.">
    <br>
</div>

<!-- </image> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var rose = require( '@stdlib/datasets/nightingales-rose' );
```

#### rose()

Returns dataset for [Florence Nightingale][nightingale]'s famous [polar area diagram][polar-area-diagram].

```javascript
var data = rose();
/* returns
    [
        {
            'date': '1854-04-01T07:00:00.000Z',
            'army_size': 8571,
            'disease': 1,
            'wounds': 0,
            'other': 5
        },
        ...
    ]
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var rose = require( '@stdlib/datasets/nightingales-rose' );

var scalar;
var data;
var d;
var i;

data = rose();

// As done by Nightingale, calculate the average annual mortality per 1000 for each cause. See http://understandinguncertainty.org/node/214.
for ( i = 0; i < data.length; i++ ) {
    d = data[ i ];
    scalar = 1000.0 * 12.0 / d.army_size;
    d.disease *= scalar;
    d.wounds *= scalar;
    d.other *= scalar;
}
console.dir( data );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: nightingales-rose [options]

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
$ nightingales-rose
date,army_size,disease,wounds,other
1854-04-01T07:00:00.000Z,8571,1,0,5
1854-05-01T07:00:00.000Z,23333,12,0,9
1854-06-01T07:00:00.000Z,28333,11,0,6
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Nightingale, Florence. 1859. [_A contribution to the sanitary history of the British army during the late war with Russia_][@nightingale:1859a]. London, United Kingdom: John W. Parker and Son. 

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under a [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[nightingale]: https://en.wikipedia.org/wiki/Florence_Nightingale

[polar-area-diagram]: https://en.wikipedia.org/wiki/Polar_area_diagram

[@nightingale:1859a]: https://curiosity.lib.harvard.edu/contagion/catalog/36-990101646750203941

[csv]: https://tools.ietf.org/html/rfc4180

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->
