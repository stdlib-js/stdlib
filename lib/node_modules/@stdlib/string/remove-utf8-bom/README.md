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

# Remove UTF-8 BOM

> Remove a UTF-8 [byte order mark][bom] (BOM) from the beginning of a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var removeUTF8BOM = require( '@stdlib/string/remove-utf8-bom' );
```

#### removeUTF8BOM( str )

Removes a UTF-8 [byte order mark][bom] (BOM) from the beginning of a `string`.

```javascript
var str = removeUTF8BOM( '\ufeffbeep' );
// returns 'beep'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removeUTF8BOM = require( '@stdlib/string/remove-utf8-bom' );

var str = removeUTF8BOM( '\ufeffbeep' );
// returns 'beep'

str = removeUTF8BOM( 'boop\ufeff' );
// returns 'boop\ufeff'

str = removeUTF8BOM( 'be\ufeffbop' );
// returns 'be\ufeffbop'

str = removeUTF8BOM( 'foobar' );
// returns 'foobar'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: remove-utf8-bom [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

Assuming a shell which understands escape sequences,

```bash
$ remove-utf8-bom "\xEF\xBB\xBFbeep boop"
beep boop
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '\ufeffbeep' | remove-utf8-bom
beep
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bom]: https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
