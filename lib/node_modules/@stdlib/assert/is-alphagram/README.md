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

# isAlphagram

> Test if a value is an [alphagram][alphagram].

<section class="usage">

## Usage

```javascript
var isAlphagram = require( '@stdlib/assert/is-alphagram' );
```

#### isAlphagram( value )

Tests if a `value` is an [alphagram][alphagram] (i.e., a sequence of characters arranged in alphabetical order).

```javascript
var value = 'beep';

var bool = isAlphagram( value );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function first checks that an input `value` is a `string` before validating that the `value` is an [alphagram][alphagram]. For non-string values, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var isAlphagram = require( '@stdlib/assert/is-alphagram' );

var out = isAlphagram( 'beep' );
// returns true

out = isAlphagram( new String( 'beep' ) );
// returns true

out = isAlphagram( '' );
// returns false

out = isAlphagram( 'zba' );
// returns false

out = isAlphagram( 123 );
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
Usage: is-alphagram [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-alphagram beep
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'hello' | is-alphagram
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[alphagram]: https://en.wiktionary.org/wiki/alphagram

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
