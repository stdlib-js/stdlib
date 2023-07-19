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

# prevGraphemeClusterBreak

> Return the previous extended grapheme cluster break in a string before a specified position.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var prevGraphemeClusterBreak = require( '@stdlib/string/prev-grapheme-cluster-break' );
```

#### prevGraphemeClusterBreak( string\[, fromIndex] )

Returns the previous extended grapheme cluster break in a string before a specified position.

```javascript
var out = prevGraphemeClusterBreak( 'last man standing' );
// returns 15
```

By default, the last extended grapheme cluster break in the string is returned. For the previous extended grapheme cluster break before a specified position in the string, provide a `fromIndex`.

```javascript
var out = prevGraphemeClusterBreak( 'last man standing', 4 );
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `string` is an empty string, the function returns `-1` irrespective of `fromIndex`.
-   If there is no extended grapheme cluster break before `fromIndex`, the function returns `-1`.
-   Note that `fromIndex` does **not** refer to a visual character position, but to an index in the ordered sequence of [UTF-16][utf-16] code units.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var prevGraphemeClusterBreak = require( '@stdlib/string/prev-grapheme-cluster-break' );

console.log( prevGraphemeClusterBreak( 'last man standing', 4 ) );
// => 3

console.log( prevGraphemeClusterBreak( 'presidential election', 8 ) );
// => 7

console.log( prevGraphemeClusterBreak( 'अनुच्छेद', 2 ) );
// => 0

console.log( prevGraphemeClusterBreak( '🌷', 1 ) );
// => -1
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
Usage: prev-grapheme-cluster-break [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --fromIndex index     Position in string. Default: string.length-1.
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
$ prev-grapheme-cluster-break --fromIndex=2 अनुच्छेद
0
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'अनुच्छेद' | prev-grapheme-cluster-break --fromIndex=2
0
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

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

</section>

<!-- /.links -->
