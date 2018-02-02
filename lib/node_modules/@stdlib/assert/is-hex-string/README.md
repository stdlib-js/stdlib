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

# isHexString

> Test whether a string contains only hexadecimal digits.

<section class="usage">

## Usage

```javascript
var isHexString = require( '@stdlib/assert/is-hex-string' );
```

#### isHexString( value )

Tests whether a string contains only hexadecimal digits.

```javascript
var bool = isHexString( '0123456789abcdefABCDEF' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For non-string values, the function returns `false`.
-   The function does **not** recognize `x` (as in the standard `0x` prefix).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isHexString = require( '@stdlib/assert/is-hex-string' );

var out = isHexString( '0123456789abcdefABCDEF' );
// returns true

out = isHexString( '' );
// returns false

out = isHexString( '0xffffff' );
// returns false

out = isHexString( 123 );
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
Usage: is-hex-string [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-hex-string 0123456789abcdefABCDEF
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '0123456789abcdefABCDEF' | is-hex-string
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
