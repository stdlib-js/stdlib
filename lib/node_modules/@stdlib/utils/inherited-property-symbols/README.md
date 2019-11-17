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

# inheritedPropertySymbols

> Return an array of an object's inherited [symbol][@stdlib/symbol/ctor] properties.

<section class="usage">

## Usage

```javascript
var inheritedPropertySymbols = require( '@stdlib/utils/inherited-property-symbols' );
```

#### inheritedPropertySymbols( obj\[, level] )

Returns an `array` of an object's inherited [symbol][@stdlib/symbol/ctor] properties.

```javascript
var symbols = inheritedPropertySymbols( [ 1, 2, 3 ] );
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var symbols = inheritedPropertySymbols( [ 1, 2, 3 ], 1 );
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var inheritedPropertySymbols = require( '@stdlib/utils/inherited-property-symbols' );

var hasSymbols;
var symbols;
var obj;

hasSymbols = hasSymbolSupport();

function Foo() {
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
    }
    return this;
}

if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'd';
}

obj = new Foo();
symbols = inheritedPropertySymbols( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/symbol/ctor

</section>

<!-- /.links -->
