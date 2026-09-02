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

# sliceCodePoints

> Slice a string based on Unicode code point indices.

<section class="usage">

## Usage

```javascript
var sliceCodePoints = require( '@stdlib/string/base/slice-code-points' );
```

#### sliceCodePoints( str, start, end )

Slices a string based on Unicode code point indices.

```javascript
var out = sliceCodePoints( 'Hello 👋 World', 0, 7 );
// returns 'Hello 👋'

out = sliceCodePoints( '👋👋👋', 1, 2 );
// returns '👋'
```

The function accepts the following arguments:

-   **str**: input string.
-   **start**: the `ith` Unicode code point to start a slice (inclusive).
-   **end**: the `jth` Unicode code point to end a slice (exclusive).

</section>

<!-- /.usage -->

<section class="examples">

## Examples

```javascript
var sliceCodePoints = require( '@stdlib/string/base/slice-code-points' );

console.log( sliceCodePoints( 'Hello 👋 World', 0, 7 ) );
// => 'Hello 👋'

console.log( sliceCodePoints( 'last man standing', 1, 17 ) );
// => 'ast man standing'

console.log( sliceCodePoints( '六书/六書', 1, 14 ) );
// => '书/六書'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Do not manually edit this section, as it is automatically populated. -->

<section class="links">

</section>

<!-- /.links -->
