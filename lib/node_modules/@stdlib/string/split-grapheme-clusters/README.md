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

# splitGraphemeClusters

> Split a string by its [grapheme cluster][unicode-text-segmentation] breaks.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var splitGraphemeClusters = require( '@stdlib/string/split-grapheme-clusters' );
```

#### splitGraphemeClusters( str )

Splits a string by its [grapheme cluster][unicode-text-segmentation] breaks.

```javascript
var out = splitGraphemeClusters( 'café' );
// returns [ 'c', 'a', 'f', 'é' ]

out = splitGraphemeClusters( '🍕🍕🍕' );
// returns [ '🍕', '🍕', '🍕' ]
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
var splitGraphemeClusters = require( '@stdlib/string/split-grapheme-clusters' );

var out = splitGraphemeClusters( 'abc' );
// returns [ 'a', 'b', 'c' ]

out = splitGraphemeClusters( 'Iñtërnâtiônàlizætiøn' );
// returns [ 'I', 'ñ', 't', 'ë', 'r', 'n', 'â', 't', 'i', 'ô', 'n', 'à', 'l', 'i', 'z', 'æ', 't', 'i', 'ø', 'n' ]

out = splitGraphemeClusters( '\uD834\uDD1E' );
// returns [ '𝄞' ]

out = splitGraphemeClusters( '! !' );
// returns [ '!', ' ', '!' ]

out = splitGraphemeClusters( '' );
// returns []
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

[unicode-text-segmentation]: http://www.unicode.org/reports/tr29/

</section>

<!-- /.links -->
