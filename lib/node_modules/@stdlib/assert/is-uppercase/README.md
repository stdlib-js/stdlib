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

# isUppercase

> Test if a value is an uppercase string.

<section class="usage">

## Usage

```javascript
var isUppercase = require( '@stdlib/assert/is-uppercase' );
```

#### isUppercase( value )

Tests if a `value` is an uppercase `string`.

```javascript
var bool = isUppercase( 'HELLO' );
// returns true

bool = isUppercase( 'salt and light' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function validates that a `value` is a `string`. For all other types, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isUppercase = require( '@stdlib/assert/is-uppercase' );

var bool = isUppercase( 'HELLO' );
// returns true

bool = isUppercase( '' );
// returns false

bool = isUppercase( 'Hello' );
// returns false

bool = isUppercase( 'hello' );
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
Usage: is-uppercase [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-uppercase BEEP
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | is-uppercase
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
