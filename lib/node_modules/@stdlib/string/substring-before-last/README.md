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

# substringBeforeLast

> Return the part of a string before the last occurrence of a specified substring.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var substringBeforeLast = require( '@stdlib/string/substring-before-last' );
```

#### substringBeforeLast( str, search )

Returns the part of a string before the last occurrence of a specified substring.

```javascript
var str = 'Beep Boop Beep';
var out = substringBeforeLast( str, 'Beep' );
// returns 'Beep Boop '

out = substringBeforeLast( str, 'Boop' );
// returns 'Beep '
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var substringBeforeLast = require( '@stdlib/string/substring-before-last' );

var str = 'beep boop';
var out = substringBeforeLast( str, ' ' );
// returns 'beep'

out = substringBeforeLast( str, 'e' );
// returns 'be'

out = substringBeforeLast( str, 'x' );
// returns 'beep boop'

out = substringBeforeLast( str, '' );
// returns 'beep boop'
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
Usage: substring-before-last [options] --search=<string> [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --search string       Search string.
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
$ substring-before-last abcdefg --search d
abc
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
