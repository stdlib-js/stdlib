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

# atob

> Decode a string of data which has been encoded using Base64 encoding.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var atob = require( '@stdlib/string/base/atob' );
```

#### atob( str )

Decodes a string of data which has been encoded using Base64 encoding.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var out = atob( 'SGVsbG8sIHdvcmxk' );
// returns 'Hello, world'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from the global [`atob`][mdn-atob] available in web browsers and more recent Node.js versions in that the function returns `null` when provided a string containing non-ASCII characters, rather than raising an exception.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var atob = require( '@stdlib/string/base/atob' );

var str = 'SGVsbG8gV29ybGQh';
var out = atob( str );
// returns 'Hello World!'

str = 'SEVMTE8gV09STEQh';
out = atob( str );
// returns 'HELLO WORLD!'

str = 'VG8gYmUsIG9yIG5vdCB0byBiZTogdGhhdCBpcyB0aGUgcXVlc3Rpb24u';
out = atob( str );
// returns 'To be, or not to be: that is the question.'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-atob]: https://developer.mozilla.org/en-US/docs/Web/API/Window/atob

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
