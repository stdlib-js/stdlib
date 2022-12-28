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

# replace

> Replace search occurrences with a replacement string.

<section class="usage">

## Usage

```javascript
var replace = require( '@stdlib/string/replace' );
```

#### replace( str, search, newval )

Replaces search occurrences with a replacement string.

```javascript
var out = replace( 'beep', 'e', 'o' );
// returns 'boop'
```

If provided a function as the [third argument][mdn-string-replace], the function is invoked for each match, and the function's return value is used as the replacement string.

```javascript
function replacer( match, p1 ) {
    return '/' + p1 + '/';
}
var str = 'Oranges and lemons';
var out = replace( str, /([^\s]+)/gi, replacer );
// returns '/Oranges/ /and/ /lemons/'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function has one notable difference from [`String.prototype.replace`][mdn-string-replace]. When provided a string as the `search` value, the function replaces **all** occurrences. To remove only the first match, use a regular expression.

    ```javascript
    var out = replace( 'beep', /e/, 'o' );
    // returns 'boep'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var capitalize = require( '@stdlib/string/capitalize' );
var replace = require( '@stdlib/string/replace' );

var out = replace( 'beep', 'e', 'o' );
// returns 'boop'

out = replace( 'Hello World', /world/i, 'Mr. President' );
// returns 'Hello Mr. President'

function replacer( match, p1 ) {
    return capitalize( p1 );
}
var str = 'Oranges and lemons say the bells of St. Clement\'s';
out = replace( str, /([^\s]*)/gi, replacer );
// returns 'Oranges And Lemons Say The Bells Of St. Clement\'s'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: replace [options] [<string>] --search=<string> --newval=<string>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --search string       Search string.
         --newval string       Replacement string.
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
    $ echo -n $'foo\nbar' | replace --search='o' --newval='e' --split /\r?\n/

    # Escaped...
    $ echo -n $'foo\nbar' | replace --search='o' --newval='e' --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ replace --search='/[eo]/' --newval=a beep
baap
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | replace --search='o' --newval='e'
beep
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'boop\tfoo' | replace --search='o' --newval='e' --split '\t'
beep
fee
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

[mdn-string-replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
