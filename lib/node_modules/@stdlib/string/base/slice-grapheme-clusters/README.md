<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# sliceGraphemeClusters

> Slice a string based on grapheme cluster (i.e., user-perceived character) indices.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sliceGraphemeClusters = require( '@stdlib/string/base/slice-grapheme-clusters' );
```

#### sliceGraphemeClusters( str, start, end )

Slices a string based on grapheme cluster (i.e., user-perceived character) indices.

```javascript
var out = sliceGraphemeClusters( 'Hello World', 0, 5 );
// returns 'Hello'

out = sliceGraphemeClusters( '👋👋👋', 0, 2 );
// returns '👋👋'

out = sliceGraphemeClusters( '六书/六書', 1, 5 );
// returns '书/六書'

out = sliceGraphemeClusters( '🌷🍕👉🏿', 1, 2 );
// returns '🍕'
```

The function accepts the following arguments:

-   **str**: input string.
-   **start**: the `ith` grapheme cluster to start a slice (inclusive).
-   **end**: the `jth` grapheme cluster to end a slice (exclusive).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var sliceGraphemeClusters = require( '@stdlib/string/base/slice-grapheme-clusters' );

console.log( sliceGraphemeClusters( 'Hello World', 0, 5 ) );
// => 'Hello'

console.log( sliceGraphemeClusters( 'Hello World', -5, -1 ) );
// => 'Worl'

console.log( sliceGraphemeClusters( '👋👋👋', 0, 2 ) );
// => '👋👋'

console.log( sliceGraphemeClusters( '六书/六書', 1, 5 ) );
// => '书/六書'

console.log( sliceGraphemeClusters( '👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦', 0, 2 ) );
// => '👨‍👩‍👧‍👦👨‍👩‍👧‍👦'
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
