<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# hasUTF16SurrogatePairAt

> Test if a position in a string marks the start of a [UTF-16][utf-16] surrogate pair.

<section class="usage">

## Usage

```javascript
var hasUTF16SurrogatePairAt = require( '@stdlib/assert/has-utf16-surrogate-pair-at' );
```

#### hasUTF16SurrogatePairAt( string, position )

Tests if a `position` (in [UTF-16][utf-16] code units) in a `string` marks the start of a [UTF-16][utf-16] surrogate pair.

```javascript
var bool = hasUTF16SurrogatePairAt( '🌷', 0 );
// returns true

bool = hasUTF16SurrogatePairAt( '🌷', 1 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Note that `position` does **not** refer to a visual character position, but to an index in the ordered sequence of [UTF-16][utf-16] code units.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasUTF16SurrogatePairAt = require( '@stdlib/assert/has-utf16-surrogate-pair-at' );

var bool = hasUTF16SurrogatePairAt( '🌷', 0 );
// returns true

bool = hasUTF16SurrogatePairAt( '🌷', 1 );
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
Usage: has-utf16-surrogate-pair-at [options] [<string>] --pos=<index>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --pos index           Position in string.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-utf16-surrogate-pair-at --pos=0 🌷
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '🌷' | has-utf16-surrogate-pair-at --pos=1
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
