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

# propertySymbolsIn

> Return an array of an object's own and inherited [symbol][@stdlib/symbol/ctor] properties.

<section class="usage">

## Usage

```javascript
var propertySymbolsIn = require( '@stdlib/utils/property-symbols-in' );
```

#### propertySymbolsIn( obj )

Returns an `array` of an object's own and inherited [symbol][@stdlib/symbol/ctor] properties.

```javascript
var symbols = propertySymbolsIn( [] );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the built-in `Object.getOwnPropertySymbols()`, if provided `null` or `undefined`, the function returns an empty `array`, rather than throwing an error.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var propertySymbolsIn = require( '@stdlib/utils/property-symbols-in' );

var hasSymbols;
var symbols;
var obj;

hasSymbols = hasSymbolSupport();

function Foo() {
    if ( hasSymbols ) {
        this[ Symbol( 'beep' ) ] = 'boop';
    }
    return this;
}

if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'foo' ) ] = 'bar';
}

obj = new Foo();
symbols = propertySymbolsIn( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/symbol/ctor

</section>

<!-- /.links -->
