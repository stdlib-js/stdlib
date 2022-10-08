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

# isEmail

> Test if a value is an email address.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isEmail = require( '@stdlib/assert/is-email-address' );
```

#### isEmail( value )

Tests if a `value` is an [email address][validate-email-address].

```javascript
var bool = isEmail( 'beep@boop.com' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Validation is **not** rigorous, nor [should it be][validate-email-address]. **9** RFCs relate to email addresses, and accounting for all of them is a fool's errand. This module performs the simplest validation; i.e., requiring **at least** one `@` symbol.
-   For rigorous validation, send a confirmation email. If the email bounces, consider the email invalid.

<!-- </notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEmail = require( '@stdlib/assert/is-email-address' );

var bool;

bool = isEmail( 'beep@boop.com' );
// returns true

bool = isEmail( 'beep' );
// returns false

bool = isEmail( 'beep.com' );
// returns false

bool = isEmail( null );
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
Usage: is-email-address [options] [<string>]

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
    $ echo -n $'foo@bar.com\nboop' | is-email --split /\r?\n/

    # Escaped...
    $ echo -n $'foo@bar.com\nboop' | is-email --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-email-address beep@boop.com
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep@boop.com' | is-email
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'foo@bar.com\tbeep' | is-email --split '\t'
true
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

[validate-email-address]: http://davidcel.is/posts/stop-validating-email-addresses-with-regex/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
