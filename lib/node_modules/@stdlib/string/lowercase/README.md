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

# lowercase

> Convert a string to lowercase.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var lowercase = require( '@stdlib/string/lowercase' );
```

#### lowercase( str )

Converts a `string` to lowercase.

```javascript
var str = lowercase( 'bEEp' );
// returns 'beep'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lowercase = require( '@stdlib/string/lowercase' );

var str;

str = lowercase( 'Beep' );
// returns 'beep'

str = lowercase( 'BeEp' );
// returns 'beep'

str = lowercase( 'Beep BOOP' );
// returns 'beep boop'

str = lowercase( '$**_Beep_BoOp_**$' );
// returns '$**_beep_boop_**$'

str = lowercase( '' );
// returns ''
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: lowercase [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ lowercase bEEp
beep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'bEEp' | lowercase
beep
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
