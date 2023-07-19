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

# headercase

> Convert a string to HTTP header case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headercase = require( '@stdlib/string/base/headercase' );
```

#### headercase( str )

Converts a string to HTTP header case.

```javascript
var out = headercase( 'foo bar' );
// returns 'Foo-Bar'

out = headercase( 'IS_MOBILE' );
// returns 'Is-Mobile'

out = headercase( 'Hello World!' );
// returns 'Hello-World'

out = headercase( '--foo-bar--' );
// returns 'Foo-Bar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var headercase = require( '@stdlib/string/base/headercase' );

var str = 'Hello World!';
var out = headercase( str );
// returns 'Hello-World'

str = 'HELLO  WORLD!';
out = headercase( str );
// returns 'Hello-World'

str = 'To be, or not to be: that is the question.';
out = headercase( str );
// returns 'To-Be-Or-Not-To-Be-That-Is-The-Question'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
