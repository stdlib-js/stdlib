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

# isURI

> Test if a value is a [URI][uri].

<section class="usage">

## Usage

```javascript
var isURI = require( '@stdlib/assert/is-uri' );
```

#### isURI( value )

Tests if a `value` is a [URI][uri].

```javascript
var bool = isURI( 'https://google.com' );
// returns true

bool = isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
// returns true

bool = isURI( '' );
// returns false

bool = isURI( 'foo' );
// returns false

bool = isURI( null );
// returns false

bool = isURI( NaN );
// returns false

bool = isURI( true );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For more information regarding the URI scheme, see [RFC 3986][rfc-3986] and [Wikipedia][uri].
-   On the distinction between URI, URL, and URN, see [The Difference Between URLs and URIs][difference-url-uri].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isURI = require( '@stdlib/assert/is-uri' );

/* Valid */

var bool = isURI( 'http://google.com' );
// returns true

bool = isURI( 'http://localhost/' );
// returns true

bool = isURI( 'http://example.w3.org/path%20with%20spaces.html' );
// returns true

bool = isURI( 'http://example.w3.org/%20' );
// returns true

bool = isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
// returns true

bool = isURI( 'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt' );
// returns true

bool = isURI( 'http://www.ietf.org/rfc/rfc2396.txt' );
// returns true

bool = isURI( 'ldap://[2001:db8::7]/c=GB?objectClass?one' );
// returns true

bool = isURI( 'mailto:John.Doe@example.com' );
// returns true

bool = isURI( 'news:comp.infosystems.www.servers.unix' );
// returns true

bool = isURI( 'tel:+1-816-555-1212' );
// returns true

bool = isURI( 'telnet://192.0.2.16:80/' );
// returns true

bool = isURI( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2' );
// returns true

/* Invalid */

// No scheme:
bool = isURI( '' );
// returns false

// No scheme:
bool = isURI( 'foo' );
// returns false

// No scheme:
bool = isURI( 'foo@bar' );
// returns false

// No scheme:
bool = isURI( '://foo/' );
// returns false

// Illegal characters:
bool = isURI( 'http://<foo>' );
// returns false

// Invalid path:
bool = isURI( 'http:////foo.html' );
// returns false

// Incomplete hex escapes...
bool = isURI( 'http://example.w3.org/%a' );
// returns false

bool = isURI( 'http://example.w3.org/%a/foo' );
// returns false

bool = isURI( 'http://example.w3.org/%at' );
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
Usage: is-uri [options] [<uri>]

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
    $ echo -n $'beEp booP\nhttp://google.com' | is-uri --split /\r?\n/
    # Escaped...
    $ echo -n $'beEp booP\nhttp://google.com' | is-uri --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-uri http://google.com
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'http://google.com' | is-uri
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\thttps://google.com' | is-uri --split '\t'
false
true
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

[uri]: https://en.wikipedia.org/wiki/URI_scheme

[rfc-3986]: https://tools.ietf.org/html/rfc3986

[difference-url-uri]: https://danielmiessler.com/study/url-uri/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
