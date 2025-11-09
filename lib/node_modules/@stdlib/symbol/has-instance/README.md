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

# HasInstanceSymbol

> Has instance [symbol][mdn-symbol] which is used to determine if a constructor object recognizes an object as its instance.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var HasInstanceSymbol = require( '@stdlib/symbol/has-instance' );
```

#### HasInstanceSymbol

Has instance [`symbol`][mdn-symbol] which is used to determine if a constructor object recognizes an object as its instance.

```javascript
var s = typeof HasInstanceSymbol;
// e.g., returns 'symbol'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [symbol][mdn-symbol] is only supported in environments which support [symbols][mdn-symbol]. In non-supporting environments, the value is `null`.

-   The `instanceof` operator uses the following algorithm to determine the return value of `object instanceof constructor`:

    -   If `constructor` has a `[HasInstanceSymbol]()` method, the `instanceof` operator calls the method with `object` as the first argument and returns the result (coerced to a boolean). If `constructor` is not an object or if `constructor[HasInstanceSymbol]` is neither `null`, `undefined`, nor a function, the `instanceof` operator raises an exception.
    -   Otherwise, if `constructor` does not have a `[HasInstanceSymbol]()` method (i.e., `constructor[HasInstanceSymbol]` is `null` or `undefined`), the `instanceof` operator determines the result using the same algorithm as `Function.prototype[HasInstanceSymbol]()`. If `constructor` is not a function, the `instanceof` operator raises an exception.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isArray = require( '@stdlib/assert/is-array' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var defineProperty = require( '@stdlib/utils/define-property' );
var HasInstanceSymbol = require( '@stdlib/symbol/has-instance' );

function ArrayLike() {
    return {
        'length': 3,
        '0': 4,
        '1': 5,
        '2': 6
    };
}

function hasInstance( instance ) {
    return isArray( instance );
}

var x = [ 1, 2, 3 ];

defineProperty( ArrayLike, HasInstanceSymbol, {
    'configurable': true,
    'value': null
});
console.log( instanceOf( x, ArrayLike ) );

defineProperty( ArrayLike, HasInstanceSymbol, {
    'configurable': true,
    'value': hasInstance
});
console.log( instanceOf( x, ArrayLike ) );
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
