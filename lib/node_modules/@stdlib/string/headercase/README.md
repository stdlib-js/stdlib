<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# headercase

> Convert a string to HTTP header case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headercase = require( '@stdlib/string/headercase' );
```

#### headercase( str )

Converts a string to HTTP header case.

```javascript
var out = headercase( 'foo bar' );
// returns 'Foo-Bar'

out = headercase( 'IS_MOBILE' );
// returns 'Is-Mobile'

out = headercase( 'Hello World!' );
// returns 'Hello-World'

out = headercase( '--foo-bar--' );
// returns 'Foo-Bar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var headercase = require( '@stdlib/string/headercase' );

var str = 'Hello World!';
var out = headercase( str );
// returns 'Hello-World'

str = 'HELLO WORLD!';
out = headercase( str );
// returns 'Hello-World'

str = 'To be, or not to be: that is the question.';
out = headercase( str );
// returns 'To-Be-Or-Not-To-Be-That-Is-The-Question'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: headercase [options] [<string>]

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
    $ echo -n $'beep\nfoo_bar' | headercase --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nfoo_bar' | headercase --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ headercase 'hello world!'
Hello-World
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beEp booP' | headercase
Beep-Boop
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tfoo_bar' | headercase --split '\t'
Beep
Foo-Bar
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
