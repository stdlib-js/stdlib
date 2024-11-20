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

# isDomainName

> Test if a value is a domain name.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isDomainName = require( '@stdlib/assert/is-domain-name' );
```

#### isDomainName( value )

Tests if a `value` is a domain name.

```javascript
var bool = isDomainName( 'example.com' );
// returns true

bool = isDomainName( 'foo@bar.com' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Validation adheres to [RFC 2181][rfc-2181], which defines the syntax for domain names and stipulates that domain names must be 255 characters or less.

<!-- </notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isDomainName = require( '@stdlib/assert/is-domain-name' );

var bool = isDomainName( 'www.example.com' );
// returns true

bool = isDomainName( 'foo@bar.com' );
// returns false

bool = isDomainName( 'beep boop' );
// returns false

bool = isDomainName( null );
// returns false

bool = isDomainName( 5.0 );
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
Usage: is-domain-name [options] [<string>]

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
    $ echo -n $'foo@bar.com\nbaz.com' | is-domain-name --split /\r?\n/

    # Escaped...
    $ echo -n $'foo@bar.com\nbaz.com' | is-domain-name --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-domain-name example.com
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'example.com' | is-domain-name
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep boop\tbaz.com' | is-domain-name --split '\t'
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

[rfc-2181]: https://tools.ietf.org/html/rfc2181

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
