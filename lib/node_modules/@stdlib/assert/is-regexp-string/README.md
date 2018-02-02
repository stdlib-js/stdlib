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

# isRegExpString

> Test if a value is a regular expression string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isRegExpString = require( '@stdlib/assert/is-regexp-string' );
```

#### isRegExpString( value )

Tests if a `value` is a regular expression `string`.

```javascript
var bool = isRegExpString( '/^beep$/' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isRegExpString = require( '@stdlib/assert/is-regexp-string' );

var bool;

bool = isRegExpString( '/beep/' );
// returns true

bool = isRegExpString( '/beep/gim' );
// returns true

bool = isRegExpString( 'beep' );
// returns false

bool = isRegExpString( '' );
// returns false

bool = isRegExpString( null );
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
Usage: is-regexp-string [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-regexp-string '/beep/'
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '/beep/' | is-regexp-string
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
