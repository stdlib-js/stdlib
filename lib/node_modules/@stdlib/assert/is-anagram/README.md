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

# isAnagram

> Test if a value is an [anagram][anagram].

<section class="usage">

## Usage

```javascript
var isAnagram = require( '@stdlib/assert/is-anagram' );
```

#### isAnagram( str, value )

Tests if a `value` is an [anagram][anagram].

```javascript
var str = 'I am a weakish speller';
var value = 'William Shakespeare';

var bool = isAnagram( str, value );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** address the presence of [diacritics][diacritics].
-   Only **alphanumeric** characters are considered.
-   Capitalization is **ignored**.
-   If provided a non-string for the first `argument`, the function throws an `Error`.
-   If provided a non-string for the second `argument`, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isAnagram = require( '@stdlib/assert/is-anagram' );

var bool = isAnagram( 'I am a weakish speller', 'William Shakespeare' );
// returns true

bool = isAnagram( 'bat', 'tab' );
// returns true

bool = isAnagram( 'bat', 'TAB' );
// returns true

bool = isAnagram( 'bat', 't a b' );
// returns true

bool = isAnagram( 'bat 321', 'tab 123' );
// returns true

bool = isAnagram( 'bat', 'tabba' );
// returns false

bool = isAnagram( 'bat', 5 );
// returns false

bool = isAnagram( '123', 321 );
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
Usage: is-anagram [options] [<string>] --str=<string>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --str string          Comparison string.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-anagram baz --str=zab
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'tab\nbaz' | is-anagram --str=bat
true
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[anagram]: http://en.wikipedia.org/wiki/Anagram

[diacritics]: http://en.wikipedia.org/wiki/Diacritic

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
