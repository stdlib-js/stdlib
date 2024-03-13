<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# lastCodePoint

> Return the last `n` Unicode code points of a string.

<section class="usage">

## Usage

```javascript
var lastCodePoint = require( '@stdlib/string/base/last-code-point' );
```

#### lastCodePoint( str, n )

Returns the last `n` Unicode code points of a string.

```javascript
var s = lastCodePoint( 'JavaScript', 1 );
// returns 't'

s = lastCodePoint( 'Hello World', 5 );
// returns 'World'

s = lastCodePoint( 'Good Evening', 9 );
// returns 'd Evening'

s = lastCodePoint( 'foo bar', 10 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lastCodePoint = require( '@stdlib/string/base/last-code-point' );

var str = lastCodePoint( 'Hello World', 1 );
// returns 'd'

str = lastCodePoint( 'JavaScript', 6 );
// returns 'Script'

str = lastCodePoint( 'ASCII', 2 );
// returns 'II'

str = lastCodePoint( 'index', 10 );
// returns 'index'

str = lastCodePoint( 'अनुच्छेद', 1 );
// returns 'द'

str = lastCodePoint( '六书/六書', 3 );
// returns '/六書'
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
