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

# last

> Return the last `n` UTF-16 code units of a string.

<section class="usage">

## Usage

```javascript
var last = require( '@stdlib/string/base/last' );
```

#### last( str, n )

Returns the last `n` UTF-16 code units of a string.

```javascript
var s = last( 'hello world', 1 );
// returns 'd'

s = last( 'this is stdlib', 1 );
// returns 'b'

s = last( 'foo', 2 );
// returns 'oo'

s = last( 'foo bar', 10 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var last = require( '@stdlib/string/base/last' );

var str = last( 'elections', 1 );
// returns 's'

str = last( 'JavaScript', 1 );
// returns 't'

str = last( 'good night', 5 );
// returns 'night'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
