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

# Percent-encoding

> [Percent-encode][percent-encoding] a [UTF-16][utf-16] encoded string according to [RFC 3986][rfc-3986-percent-encoding].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var percentEncode = require( '@stdlib/string/percent-encode' );
```

#### percentEncode( str )

[Percent-encodes][percent-encoding] a [UTF-16][utf-16] encoded string according to [RFC 3986][rfc-3986-percent-encoding].

```javascript
var out = percentEncode( '☃' );
// returns '%E2%98%83'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function [percent-encodes][percent-encoding] an **entire** `string`. Hence, if provided a URI, the function [percent-encodes][percent-encoding] the entire URI.

    ```javascript
    var out = percentEncode( 'https://en.wikipedia.org/wiki/Mode_(statistics)' );
    // returns 'https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMode_%28statistics%29'
    ```

    To [percent-encode][percent-encoding] a URI, split the URI into separate components, [percent-encode][percent-encoding] relevant components, and then reassemble. 

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var percentEncode = require( '@stdlib/string/percent-encode' );

var values;
var out;
var i;

values = [
    'Ladies + Gentlemen',
    'An encoded string!',
    'Dogs, Cats & Mice',
    '☃',
    'æ',
    '𐐷'
];
for ( i = 0; i < values.length; i++ ) {
    out = percentEncode( values[ i ] );
    console.log( '%s: %s', values[ i ], out );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: percent-encode [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ percent-encode ☃
%E2%98%83
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '☃' | percent-encode
%E2%98%83
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

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

[percent-encoding]: https://en.wikipedia.org/wiki/Percent-encoding

[rfc-3986-percent-encoding]: https://tools.ietf.org/html/rfc3986#section-2.1

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
