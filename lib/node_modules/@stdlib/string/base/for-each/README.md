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

# forEach

> Invokes a function for each UTF-16 code unit in a string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var forEach = require( '@stdlib/string/base/for-each' );
```

#### forEach( str, clbk\[, thisArg ] )

Invokes a function for each UTF-16 code unit in a string.

```javascript
function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEach( 'Beep!', log );
/* =>
    0: B
    1: e
    2: e
    3: p
    4: !
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

forEach( str, clbk, ctx );

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
var forEach = require( '@stdlib/string/base/for-each' );

function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEach( 'presidential election', log );
forEach( 'Iñtërnâtiônàlizætiøn', log );
forEach( '🌷🍕', log );
forEach( '\uD834\uDD1E', log );
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
