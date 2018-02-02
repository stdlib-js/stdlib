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

# isBinaryString

> Test if a value is a binary string.

<section class="usage">

## Usage

```javascript
var isBinaryString = require( '@stdlib/assert/is-binary-string' );
```

#### isBinaryString( value )

Tests if a `value` is a binary `string`; i.e., a character sequence of `1`'s and `0`'s.

```javascript
var bool = isBinaryString( '1000101' );
// returns true

bool = isBinaryString( 'beep' );
// returns false

bool = isBinaryString( '' );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isBinaryString = require( '@stdlib/assert/is-binary-string' );

var bool = isBinaryString( '1' );
// returns true

bool = isBinaryString( '0' );
// returns true

bool = isBinaryString( '101010101001' );
// returns true

bool = isBinaryString( '' );
// returns false

bool = isBinaryString( 'beep' );
// returns false

bool = isBinaryString( null );
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
Usage: is-binary-string [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-binary-string 01234
false
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '0110' | is-binary-string
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
