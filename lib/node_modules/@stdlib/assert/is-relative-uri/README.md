<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isRelativeURI

> Test whether a value is a relative [URI][uri].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isRelativeURI = require( '@stdlib/assert/is-relative-uri' );
```

#### isRelativeURI( value )

Tests whether a value is a relative [URI][uri].

```javascript
var bool = isRelativeURI( 'foo/bar' );
// returns true

bool = isRelativeURI( 'https://example.com/' );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For more information regarding the URI scheme, see [RFC 3986][rfc-3986] and [Wikipedia][uri].
-   On the distinction between URI, URL, and URN, see [The Difference Between URLs and URIs][difference-url-uri].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isRelativeURI = require( '@stdlib/assert/is-relative-uri' );

var bool = isRelativeURI( './foo.js' );
// returns true

bool = isRelativeURI( '/dashboard/admin' );
// returns true

bool = isRelativeURI( 'image.png' );
// returns true

bool = isRelativeURI( 'http://www.example.com/' );
// returns false

bool = isRelativeURI( 'https://www.example.com/' );
// returns false

bool = isRelativeURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
// returns false

bool = isRelativeURI( 'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D' );
// returns false

bool = isRelativeURI( 'mailto:beep@boop.com' );
// returns false

bool = isRelativeURI( null );
// returns false
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
Usage: is-relative-uri [options] [<uri>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
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
$ is-relative-uri google.com
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'https://google.com' | is-relative-uri
false
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'https://google.com\tbeep' | is-absolute-uri --split '\t'
false
true
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

[uri]: https://en.wikipedia.org/wiki/URI_scheme

[rfc-3986]: https://tools.ietf.org/html/rfc3986

[difference-url-uri]: https://danielmiessler.com/study/url-uri/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
