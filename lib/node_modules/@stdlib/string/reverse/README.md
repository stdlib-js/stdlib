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

# reverseString

> Reverse a string.

<section class="usage">

## Usage

```javascript
var reverseString = require( '@stdlib/string/reverse' );
```

#### reverseString( str )

Reverses a `string`.

```javascript
var out = reverseString( 'last man standing' );
// returns 'gnidnats nam tsal'

out = reverseString( 'Hidden Treasures' );
// returns 'serusaerT neddiH'

out = reverseString( 'Lorem ipsum 𝌆 dolor sit ameͨ͆t.' );
// returns '.teͨ͆ma tis rolod 𝌆 muspi meroL'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   While Unicode aware, the function does not currently support extended grapheme clusters.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reverseString = require( '@stdlib/string/reverse' );

var str = reverseString( 'last man standing' );
// returns 'gnidnats nam tsal'

str = reverseString( 'presidential election' );
// returns 'noitcele laitnediserp'

str = reverseString( 'javaScript' );
// returns 'tpircSavaj'

str = reverseString( 'Hidden Treasures' );
// returns 'serusaerT neddiH'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: reverse [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ reverse foobar
raboof
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'foobar' | reverse
raboof
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

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
