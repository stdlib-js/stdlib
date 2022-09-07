<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# constantcase

> Convert a string to constant case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var constantcase = require( '@stdlib/string/base/constantcase' );
```

#### constantcase( str )

Converts a string to constant case.

```javascript
var str = constantcase( 'foo bar' );
// returns 'FOO_BAR'

str = constantcase( 'foo bar baz' );
// returns 'FOO_BAR_BAZ'

str = constantcase( 'foo_bar' );
// returns 'FOO_BAR'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var constantcase = require( '@stdlib/string/base/constantcase' );

var str = 'Hello World!';
var out = constantcase( str );
// returns 'HELLO_WORLD'

str = 'I am a tiny little teapot';
out = constantcase( str );
// returns 'I_AM_A_TINY_LITTLE_TEAPOT'

str = 'with big problems';
out = constantcase( str );
// returns 'WITH_BIG_PROBLEMS'

str = 'To be, or not to be: that is the question.';
out = constantcase( str );
// returns 'TO_BE_OR_NOT_TO_BE_THAT_IS_THE_QUESTION'

str = 'isMobile';
out = constantcase( str );
// returns 'IS_MOBILE'
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
