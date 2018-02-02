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

# isCapitalized

> Test if a value is a string having an uppercase first character.

<section class="usage">

## Usage

```javascript
var isCapitalized = require( '@stdlib/assert/is-capitalized' );
```

#### isCapitalized( value )

Tests if a `value` is a `string` having an uppercase first character.

```javascript
var bool = isCapitalized( 'Every noble work is at first impossible.' );
// returns true

bool = isCapitalized( 'HELLO WORLD!' );
// returns true

bool = isCapitalized( 'salt and light' );
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
var isCapitalized = require( '@stdlib/assert/is-capitalized' );

var bool = isCapitalized( 'Hello' );
// returns true

bool = isCapitalized( 'HELLO' );
// returns true

bool = isCapitalized( '' );
// returns false

bool = isCapitalized( 'hello' );
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
Usage: is-capitalized [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-capitalized Beep
true
```

</section>

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | is-capitalized
false
```

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
