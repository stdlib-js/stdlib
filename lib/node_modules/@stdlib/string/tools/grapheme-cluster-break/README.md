<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# grapheme

> Grapheme cluster break tooling.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var grapheme = require( '@stdlib/string/tools/grapheme-cluster-break' );
```

#### grapheme

A collection of functions for performing grapheme cluster break operations.

* * *

### Methods

#### grapheme.breakProperty( code )

Returns the grapheme break property from the [Unicode Standard][unicode-grapheme-break-property].

```javascript
var out = grapheme.breakProperty( 0x008f );
// returns 2

out = grapheme.breakProperty( 0x111C2 );
// returns 12

out = grapheme.breakProperty( 0x1F3FC );
// returns 3
```

#### grapheme.emojiProperty( code )

Returns the emoji property from the [Unicode Standard][unicode-emoji-property].

```javascript
var out = grapheme.emojiProperty( 0x23EC );
// returns 101

out = grapheme.emojiProperty( 0x1FFFE );
// returns 11
```

#### grapheme.breakType( breaks, emoji )

Returns the break type between grapheme breaking classes according to _UAX #29 3.1.1 Grapheme Cluster Boundary Rules_ on extended grapheme clusters.

```javascript
var out = grapheme.breakType( [ 11, 3, 11 ], [ 11, 11, 11 ] );
// returns 1
```

* * *

### Properties

#### grapheme.constants

An object mapping break type names to integer values.

```javascript
var out = grapheme.constants;
// returns {...}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var grapheme = require( '@stdlib/string/tools/grapheme-cluster-break' );

var out = grapheme.breakProperty( 0x008f );
// returns 2

out = grapheme.emojiProperty( 0x23EC );
// returns 101

out = grapheme.breakType( [ 11, 3, 11 ], [ 11, 11, 11 ] );
// returns 1

out = grapheme.constants;
// returns {...}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[unicode-grapheme-break-property]: https://www.unicode.org/Public/13.0.0/ucd/auxiliary/GraphemeBreakProperty.txt

[unicode-emoji-property]: https://www.unicode.org/Public/13.0.0/ucd/emoji/emoji-data.txt

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
