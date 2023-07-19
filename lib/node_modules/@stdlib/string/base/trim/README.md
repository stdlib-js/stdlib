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

# trim

> Trim whitespace characters from the beginning and end of a string.

<section class="usage">

## Usage

```javascript
var trim = require( '@stdlib/string/base/trim' );
```

#### trim( str )

Trims whitespace characters from the beginning and end of a string.

```javascript
var out = trim( ' \t\t\n  Beep \r\n\t  ' );
// returns 'Beep'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Following [Unicode 6.3.0][unicode] and later, "whitespace" is defined as the following characters:

    -   `\f`
    -   `\n`
    -   `\r`
    -   `\t`
    -   `\v`
    -   `\u0020`
    -   `\u00a0`
    -   `\u1680`
    -   `\u2000-\u200a`
    -   `\u2028`
    -   `\u2029`
    -   `\u202f`
    -   `\u205f`
    -   `\u3000`
    -   `\ufeff`

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var trim = require( '@stdlib/string/base/trim' );

var out = trim( '   Whitespace   ' );
// returns 'Whitespace'

out = trim( '\t\t\tTabs\t\t\t' );
// returns 'Tabs'

out = trim( '\n\n\nNew Lines\n\n\n' );
// returns 'New Lines'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[unicode]: https://en.wikipedia.org/wiki/Unicode

</section>

<!-- /.links -->
