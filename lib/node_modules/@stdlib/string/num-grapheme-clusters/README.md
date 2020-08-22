<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# numGraphemeClusters

> Return the number of [grapheme clusters][unicode-text-segmentation] in a string.

<section class="usage">

## Usage

```javascript
var numGraphemeClusters = require( '@stdlib/string/num-grapheme-clusters' );
```

#### numGraphemeClusters( str )

Returns the number of [grapheme clusters][unicode-text-segmentation] in a `string`.

```javascript
var out = numGraphemeClusters( 'last man standing' );
// returns 17

out = numGraphemeClusters( 'Hidden Treasures' );
// returns 16
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var numGraphemeClusters = require( '@stdlib/string/num-grapheme-clusters' );

var str = numGraphemeClusters( 'last man standing' );
// returns 17

str = numGraphemeClusters( '六书/六書' );
// returns 5

str = numGraphemeClusters( 'अनुच्छेद' );
// returns 5

str = numGraphemeClusters( '🌷' );
// returns 1
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: num-grapheme-clusters [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -l,    --lines               Analyze individual lines.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ num-grapheme-clusters beep
4
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep\nboop🌷' | num-grapheme-clusters
10
```

```bash
$ echo -n 'beep\nboop🌷' | num-grapheme-clusters -l
4
5
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[unicode-text-segmentation]: http://www.unicode.org/reports/tr29/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
