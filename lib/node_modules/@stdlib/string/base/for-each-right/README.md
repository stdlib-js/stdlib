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

# forEachRight

> Invokes a function for each UTF-16 code unit in a string iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var forEachRight = require( '@stdlib/string/base/for-each-right' );
```

#### forEachRight( str, clbk\[, thisArg ] )

Invokes a function for each UTF-16 code unit in a string iterating from right to left.

```javascript
function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEachRight( 'Beep!', log );
/* =>
    4: !
    3: p
    2: e
    1: e
    0: B
*/
```

The invoked function is provided three arguments:

-   **value**: character.
-   **index**: character index.
-   **str**: input string.

To set the function execution context, provide a `thisArg`.

```javascript
function clbk() {
    this.count += 1;
}

var str = '👉🏿';

var ctx = {
    'count': 0
};

forEachRight( str, clbk, ctx );

var cnt = ctx.count;
// returns 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var forEachRight = require( '@stdlib/string/base/for-each-right' );

function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEachRight( 'presidential election', log );
forEachRight( 'Iñtërnâtiônàlizætiøn', log );
forEachRight( '🌷🍕', log );
forEachRight( '\uD834\uDD1E', log );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
