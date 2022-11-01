<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# duration2ms

> Convert a duration string to milliseconds.

<section class="usage">

## Usage

```javascript
var duration2ms = require( '@stdlib/time/duration2ms' );
```

#### duration2ms( str )

Converts a duration string to milliseconds.

```javascript
var ms = duration2ms( '1d' );
// returns 86400000

ms = duration2ms( '1d2h3m4s5ms' );
// returns 93784005
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A duration string is a string containing a sequence of time units. A time unit is a nonnegative integer followed by a unit identifier. The following unit identifiers are supported:

    -   `d`: days
    -   `h`: hours
    -   `m`: minutes
    -   `s`: seconds
    -   `ms`: milliseconds

    For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes).

-   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var duration2ms = require( '@stdlib/time/duration2ms' );

var ms = duration2ms( '5s20ms' );
// returns 5020

ms = duration2ms( '1h' );
// returns 3600000

ms = duration2ms( '1m2s3ms' );
// returns 62003
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: duration2ms [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'3s\n5s20ms' | duration2ms --split /\r?\n/

    # Escaped...
    $ echo -n $'3s\n5s20ms' | duration2ms --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ duration2ms 1s
1000
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '1s\n2s' | duration2ms
1000
2000
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '1s350ms,2s' | duration2ms --split ','
1350
2000
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
