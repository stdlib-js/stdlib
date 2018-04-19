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

# isAlphaNumeric

> Test whether a string contains only alphanumeric characters.

<section class="usage">

## Usage

```javascript
var isAlphaNumeric = require( '@stdlib/assert/is-alphanumeric' );
```

#### isAlphaNumeric( value )

Tests whether a string contains only alphanumeric characters.

```javascript
var bool = isAlphaNumeric( 'abc0123456789' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For non-string values, the function returns `false`.
-   _Alphanumeric_ is defined as the characters `a-zA-Z` and the numeric characters `0-9`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isAlphaNumeric = require( '@stdlib/assert/is-alphanumeric' );

var out = isAlphaNumeric( 'abs0123456789' );
// returns true

out = isAlphaNumeric( '0xffffff' );
// returns true

out = isAlphaNumeric( '' );
// returns false

out = isAlphaNumeric( 123 );
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
Usage: is-alphanumeric [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-alphanumeric 01abc23456789
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '0123456789' | is-alphanumeric
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
