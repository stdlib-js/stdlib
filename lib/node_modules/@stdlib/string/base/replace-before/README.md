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

# replaceBefore

> Replace the substring before the first occurrence of a specified search string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var replaceBefore = require( '@stdlib/string/base/replace-before' );
```

#### replaceBefore( str, search, replacement, fromIndex )

Replaces the substring before the first occurrence of a specified search string.

```javascript
var out = replaceBefore( 'beep boop', ' ', 'loop', 0 );
// returns 'loop boop'

out = replaceBefore( 'beep boop', 'o', 'bar', 0 );
// returns 'baroop'

out = replaceBefore( 'beep boop', 'p', 'bar', 5 );
// returns 'barp'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a search string is not present in a provided string, the function returns the provided string unchanged.
-   If a search string is an empty string, the function returns the provided string unchanged.
-   If `fromIndex` is less than `0` or greater than `str.length`, the search starts at index `0` and `str.length`, respectively.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var replaceBefore = require( '@stdlib/string/base/replace-before' );

var out = replaceBefore( 'beep boop', 'p', 'see', 0 );
// returns 'seep boop'

out = replaceBefore( 'Hello World!', 'xyz', 'foo', 0 );
// returns 'Hello World!'

out = replaceBefore( 'Hello World!', '', 'foo', 0 );
// returns 'Hello World!'

out = replaceBefore( '', 'xyz', 'foo', 0 );
// returns ''
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

</section>

<!-- /.links -->
