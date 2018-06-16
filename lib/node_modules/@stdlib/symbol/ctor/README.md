<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Symbol

> [Symbol][mdn-symbol] factory.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Symbol = require( '@stdlib/symbol/ctor' );
```

#### Symbol( \[description] )

Returns a [`Symbol`][mdn-symbol] primitive.

<!-- run-disable -->

<!-- eslint-disable symbol-description -->

```javascript
var s = Symbol();
// returns <symbol>
```

To aid debugging, provide a [symbol][mdn-symbol] `description`.

<!-- run-disable -->

```javascript
var s = Symbol( 'beep' );
// returns <symbol>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Unlike conventional constructors, the function does **not** support the `new` keyword.
-   The function is only supported in environments which support [symbols][mdn-symbol]. In non-supporting environments, the value is `undefined`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );

var s;

if ( hasSymbolSupport() ) {
    s = Symbol( 'beep' );

    // Print the value type:
    console.log( typeof s );
    // => 'symbol'

    // Serialize the symbol as a string:
    console.log( s.toString() );
    // => 'Symbol(beep)'

    // Test symbol equality:
    console.log( s === Symbol( 'beep' ) );
    // => false
} else {
    console.log( 'Environment does not support symbols.' );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

</section>

<!-- /.links -->
