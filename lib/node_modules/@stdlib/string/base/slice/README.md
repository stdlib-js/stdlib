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

# slice

> Slice UTF-16 code units from a string.

<section class="usage">

## Usage

```javascript
var slice = require( '@stdlib/string/base/slice' );
```

#### slice( str, start, end )

Slices UTF-16 code units from a string.

```javascript
var out = slice( 'last man standing', 1, 17 );
// returns 'ast man standing'

out = slice( 'Hidden Treasures', 0, 6 );
// returns 'Hidden'

out = slice( 'foo bar', 2, 7 );
// returns 'o bar'

out = slice( 'foo bar', -1, 7 );
// returns 'r'
```

The function accepts the following arguments:

-   **str**: input string.
-   **start**: slice start index (inclusive).
-   **end**: slice end index (exclusive).

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var slice = require( '@stdlib/string/base/slice' );

var str = slice( 'presidential election', 1, 21 );
// returns 'residential election'

str = slice( 'JavaScript', 4, 10 );
// returns 'Script'

str = slice( 'The Last of the Mohicans', 5, 24 );
// returns 'ast of the Mohicans'
```

</section>

<!-- /.examples -->

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
