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

# isDigitString

> Test whether a string contains only numeric digits.

<section class="usage">

## Usage

```javascript
var isDigitString = require( '@stdlib/assert/is-digit-string' );
```

#### isDigitString( value )

Tests whether a string contains only numeric digits.

```javascript
var bool = isDigitString( '0123456789' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For non-string values, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isDigitString = require( '@stdlib/assert/is-digit-string' );

var out = isDigitString( '0123456789' );
// returns true

out = isDigitString( '' );
// returns false

out = isDigitString( '0xffffff' );
// returns false

out = isDigitString( 123 );
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
Usage: is-digit-string [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-digit-string 0123456789
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '0123456789' | is-digit-string
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
