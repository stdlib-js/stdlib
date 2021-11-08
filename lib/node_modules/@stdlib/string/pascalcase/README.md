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

# pascalcase

> Convert a string to Pascal case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var pascalcase = require( '@stdlib/string/pascalcase' );
```

#### pascalcase( str )

Converts a string to Pascal case.

```javascript
var out = pascalcase( 'foo bar' );
// returns 'FooBar'

out = pascalcase( 'IS_MOBILE' );
// returns 'IsMobile'

out = pascalcase( 'Hello World!' );
// returns 'HelloWorld'

out = pascalcase( '--foo-bar--' );
// returns 'FooBar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var pascalcase = require( '@stdlib/string/pascalcase' );

var str = 'Hello World!';
var out = pascalcase( str );
// returns 'HelloWorld'

str = 'HELLO WORLD!';
out = pascalcase( str );
// returns 'HelloWorld'

str = 'To be, or not to be: that is the question.';
out = pascalcase( str );
// returns 'ToBeOrNotToBeThatIsTheQuestion'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: pascalcase [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beEp booP\nisMobile' | pascalcase --split /\r?\n/

    # Escaped...
    $ echo -n $'beEp booP\nisMobile' | pascalcase --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ pascalcase 'hello world!'
HelloWorld
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beEp booP' | pascalcase
BeEpBooP
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep_boop\tisMobile' | pascalcase --split '\t'
BeepBoop
IsMobile
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
