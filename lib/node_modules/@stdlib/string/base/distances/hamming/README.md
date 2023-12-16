<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# hammingDistance

> Calculate the [Hamming distance][hamming-distance] between two equal-length strings.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hammingDistance = require( '@stdlib/string/base/distances/hamming' );
```

#### hammingDistance( s1, s2 )

Calculates the [Hamming distance][hamming-distance] between two equal-length strings.

```javascript
var dist = hammingDistance( 'frog', 'from' );
// returns 1

dist = hammingDistance( 'tooth', 'froth' );
// returns 2

dist = hammingDistance( 'cat', 'cot' );
// returns 1

dist = hammingDistance( '', '' );
// returns 0

dist = hammingDistance( '1638452297', '2311638451' );
// returns 10
```

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the two strings differ in length, the [Hamming distance][hamming-distance] is not defined. Consequently, when provided two input strings of unequal length, the function returns a sentinel value of `-1`.  
-   As the function calculates the [Hamming distance][hamming-distance] by comparing UTF-16 code units, the function should behave as expected for strings composed of most characters. However, the function is likely to not behave as expected if strings contain visual characters composed of multiple Unicode code points, such as certain mathematical symbols and grapheme clusters (e.g., emojis).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var hammingDistance = require( '@stdlib/string/base/distances/hamming' );

var dist = hammingDistance( 'algorithms', 'altruistic' );
// returns 7

dist = hammingDistance( 'elephant', 'Tashkent' );
// returns 6

dist = hammingDistance( 'javascript', 'typescript' );
// returns 4

dist = hammingDistance( 'hamming', 'ladybug' );
// returns 5
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hamming-distance]: https://en.wikipedia.org/wiki/Hamming_distance

</section>

<!-- /.links -->
