<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# ReplaceSymbol

> [Symbol][mdn-symbol] which provides a method for replacing substrings matched by the current object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ReplaceSymbol = require( '@stdlib/symbol/replace' );
```

#### ReplaceSymbol

[`symbol`][mdn-symbol] which provides a method for replacing substrings matched by the current object.

```javascript
var s = typeof ReplaceSymbol;
// e.g., returns 'symbol'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [symbol][mdn-symbol] is only supported in environments which support [symbols][mdn-symbol]. In non-supporting environments, the value is `null`.
-   When calling `String.prototype.replace` and `String.prototype.replaceAll` and the `pattern` argument is an object with a `[ReplaceSymbol]()` method, this method is called with the target string and replacement as arguments.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var ReplaceSymbol = require( '@stdlib/symbol/replace' );

function replace( str, replacement ) {
    return replacement;
}

var obj = {};

defineProperty( obj, ReplaceSymbol, {
    'configurable': true,
    'value': null
});

var str = 'beep';
console.log( str.replace( obj, 'boop' ) );

defineProperty( obj, ReplaceSymbol, {
    'configurable': true,
    'value': replace
});
console.log( str.replace( obj, 'boop' ) );
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

[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

</section>

<!-- /.links -->
