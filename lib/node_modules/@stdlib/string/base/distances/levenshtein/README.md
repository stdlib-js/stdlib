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

# levenshteinDistance

> Calculate the [Levenshtein][levenshtein] (edit) distance between two strings.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var levenshteinDistance = require( '@stdlib/string/base/distances/levenshtein' );
```

#### levenshteinDistance( s1, s2 )

Calculates the [Levenshtein][levenshtein] (edit) distance between two strings.

```javascript
var dist = levenshteinDistance( 'frog', 'from' );
// returns 1

dist = levenshteinDistance( 'frog', 'froth' );
// returns 2

dist = levenshteinDistance( 'cat', 'kitty' );
// returns 4

dist = levenshteinDistance( '', 'abcdef' );
// returns 6

dist = levenshteinDistance( '1638452297', '2311638451' );
// returns 7
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var levenshteinDistance = require( '@stdlib/string/base/distances/levenshtein' );

var dist = levenshteinDistance( 'algorithm', 'altruistic' );
// returns 6

dist = levenshteinDistance( 'elephant', 'hippo' );
// returns 7

dist = levenshteinDistance( 'javascript', 'typescript' );
// returns 4

dist = levenshteinDistance( 'levenshtein', 'leviathan' );
// returns 6
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[levenshtein]: https://en.wikipedia.org/wiki/Levenshtein_distance

</section>

<!-- /.links -->
