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

# isASCII

> Test whether a character belongs to the [ASCII][ascii] character set and whether this is true for all characters in a provided string.

<section class="usage">

## Usage

```javascript
var isASCII = require( '@stdlib/assert/is-ascii' );
```

#### isASCII( value )

Tests whether a character belongs to the [ASCII][ascii] character set and whether this is true for all characters in a provided string.

```javascript
var bool = isASCII( 'beep' );
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
var isASCII = require( '@stdlib/assert/is-ascii' );

var out = isASCII( 'beep' );
// returns true

out = isASCII( '' );
// returns false

out = isASCII( 'È' );
// returns false

out = isASCII( 123 );
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
Usage: is-ascii [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-ascii beep
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep' | is-ascii
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[ascii]: https://en.wikipedia.org/wiki/ASCII

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
