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

# isCurrentYear

> Test if a value is the current year.

<section class="usage">

## Usage

```javascript
var isCurrentYear = require( '@stdlib/assert/is-current-year' );
```

#### isCurrentYear( value )

Tests if a `value` is either an integer equal to the current year or a `Date` object representing the current year.

```javascript
var currentYear = require( '@stdlib/time/current-year' );

var bool = isCurrentYear( currentYear() );
// returns true

bool = isCurrentYear( 2021 );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var currentYear = require( '@stdlib/time/current-year' );
var isCurrentYear = require( '@stdlib/assert/is-current-year' );

var bool = isCurrentYear( new Date() );
// returns true

bool = isCurrentYear( currentYear() );
// returns true

bool = isCurrentYear( 2021 );
// returns false

bool = isCurrentYear( null );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: is-current-year [options] [<year>]

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
    $ echo -n $'1998\n1999' | is-current-year --split /\r?\n/

    # Escaped...
    $ echo -n $'1998\n1999' | is-current-year --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-current-year 2011
false
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 1914 | is-current-year
false
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '2001\t2002' | is-current-year --split '\t'
false
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
