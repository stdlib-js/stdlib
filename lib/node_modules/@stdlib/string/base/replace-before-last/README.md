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

# replaceBeforeLast

> Replace the substring before the last occurrence of a specified search string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var replaceBeforeLast = require( '@stdlib/string/base/replace-before-last' );
```

#### replaceBeforeLast( str, search, replacement, fromIndex )

Replaces the substring before the last occurrence of a specified search string.

```javascript
var str = 'beep boop';
var out = replaceBeforeLast( str, ' ', 'loop', str.length );
// returns 'loop boop'

out = replaceBeforeLast( str, 'o', 'bar', str.length );
// returns 'barop'
```

To begin searching from a specific index, provide a corresponding `fromIndex` argument.

```javascript
var str = 'beep boop beep';
var out = replaceBeforeLast( str, ' ', 'loop', 5 );
// returns 'loop boop beep'
```

If `fromIndex` is less than zero, the starting index is resolved relative to the last string character, with the last string character corresponding to `fromIndex = -1`.

```javascript
var str = 'beep boop beep';
var out = replaceBeforeLast( str, ' ', 'loop', -1 );
// returns 'loop beep'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a search string is not present in a provided string, the function returns the provided string unchanged.
-   If a search string is an empty string, the function returns the provided string unchanged.
-   If `fromIndex` resolves to an index which is less than `0`, the function returns the provided string unchanged.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var replaceBeforeLast = require( '@stdlib/string/base/replace-before-last' );

var str = 'beep boop';
var out = replaceBeforeLast( str, 'p', 'see', str.length );
// returns 'seep'

str = 'Hello World!';
out = replaceBeforeLast( str, 'xyz', 'foo', str.length );
// returns 'Hello World!'

str = 'Hello World!';
out = replaceBeforeLast( str, '', 'foo', str.length );
// returns 'Hello World!'

str = '';
out = replaceBeforeLast( str, 'xyz', 'foo', str.length );
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
