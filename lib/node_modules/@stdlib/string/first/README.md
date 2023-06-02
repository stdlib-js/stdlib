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

# first

> Return the first visual character(s) of a string.

<section class="usage">

## Usage

```javascript
var first = require( '@stdlib/string/first' );
```

#### first( str\[, n] )

Returns the first visual character of a string.

```javascript
var out = first( 'last man standing' );
// returns 'l'

out = first( 'Hidden Treasures' );
// returns 'H'
```

If provided a second argument, the function returns the first `n` characters.

```javascript
var out = first( 'foo bar', 5 );
// returns 'foo b'

out = first( 'foo bar', 10 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var first = require( '@stdlib/string/first' );

var str = first( 'last man standing' );
// returns 'l'

str = first( 'presidential election' );
// returns 'p'

str = first( 'javaScript' );
// returns 'j'

str = first( 'Hidden Treasures' );
// returns 'H'

str = first( 'The Last of the Mohicans', 5 );
// returns 'The L'

str = first( '🐶🐮🐷🐰🐸', 2 );
// returns '🐶🐮'

str = first( '🐶🐮🐷🐰🐸', 10 );
// returns '🐶🐮🐷🐰🐸'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: first [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n num               Number of characters to return. Default: 1.
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
    $ echo -n $'beep\nboop' | first --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | first --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ first beep
b
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep\nboop' | first --n=2
be
bo
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tboop' | first --split '\t'
b
b
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
