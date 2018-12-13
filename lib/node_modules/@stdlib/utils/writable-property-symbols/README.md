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

# writablePropertySymbols

> Return an array of an object's own writable symbol properties.

<section class="usage">

## Usage

```javascript
var writablePropertySymbols = require( '@stdlib/utils/writable-property-symbols' );
```

#### writablePropertySymbols( obj )

Returns an `array` of an object's own writable symbol properties.

```javascript
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {};

if ( hasSymbolSupport() ) {
    defineProperty( obj, Symbol( 'a' ), {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
}

var symbols = writablePropertySymbols( obj );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var writablePropertySymbols = require( '@stdlib/utils/writable-property-symbols' );

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    if ( hasSymbols ) {
        this[ Symbol( 'baz' ) ] = 'qux';
    }
    return this;
}

if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'bip' ) ] = 'bop';
}

obj = new Foo();
symbols = writablePropertySymbols( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<section class="links">

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
