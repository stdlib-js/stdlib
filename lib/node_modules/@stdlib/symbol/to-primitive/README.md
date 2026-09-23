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

# ToPrimitiveSymbol

> [Symbol][mdn-symbol] which specifies a method for converting an object to a primitive value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ToPrimitiveSymbol = require( '@stdlib/symbol/to-primitive' );
```

#### ToPrimitiveSymbol

[Symbol][mdn-symbol] which specifies a method for converting an object to a primitive value.

```javascript
var s = typeof ToPrimitiveSymbol;
// e.g., returns 'symbol'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [symbol][mdn-symbol] is only supported in environments which support [symbols][mdn-symbol]. In non-supporting environments, the value is `null`.

-   When an object needs to be converted to a primitive value, JavaScript runtimes look for a `[ToPrimitiveSymbol]()` method on the object. If the method exists, JavaScript runtimes call the method with a `hint` string argument (one of `'number'`, `'string'`, or `'default'`) indicating the preferred type of the primitive value to be returned.

    -   If the hint is `'number'`, the method should return a number.
    -   If the hint is `'string'`, the method should return a string.
    -   If the hint is `'default'`, the method can return either a number or a string.

-   If an object does not have a `[ToPrimitiveSymbol]()` method, JavaScript runtimes use the default type conversion algorithm by calling `valueOf()` and/or `toString()` methods.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable no-invalid-this -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var Number = require( '@stdlib/number/ctor' );
var ToPrimitiveSymbol = require( '@stdlib/symbol/to-primitive' );

function CustomObject( value ) {
    if ( !(this instanceof CustomObject) ) {
        return new CustomObject( value );
    }
    this._value = value;
    return this;
}

function toPrimitive( hint ) {
    var value = this._value;
    if ( hint === 'string' ) {
        return 'CustomObject: ' + value;
    }
    if ( hint === 'number' ) {
        return value;
    }
    // Default hint:
    return value;
}

defineProperty( CustomObject.prototype, ToPrimitiveSymbol, {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': toPrimitive
});

var obj = new CustomObject( 42 );

console.log( String( obj ) );
// => 'CustomObject: 42'

console.log( Number( obj ) );
// => 42

console.log( obj + 10 );
// => 52
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
