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

# inheritedProperties

> Return an array of an object's inherited property names and [symbols][@stdlib/symbol/ctor].

<section class="usage">

## Usage

```javascript
var inheritedProperties = require( '@stdlib/utils/inherited-properties' );
```

#### inheritedProperties( obj\[, level] )

Returns an `array` of an object's inherited property names and [symbols][@stdlib/symbol/ctor].

```javascript
var props = inheritedProperties( [ 1, 2, 3 ] );
// returns [...]
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var props = inheritedProperties( [ 1, 2, 3 ], 1 );
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
var defineProperty = require( '@stdlib/utils/define-property' );
var inheritedProperties = require( '@stdlib/utils/inherited-properties' );

var hasSymbols;
var props;
var obj;

hasSymbols = hasSymbolSupport();

function Foo() {
    this.a = 'b';
    defineProperty( this, 'foo', {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'bar'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
        defineProperty( this, 'beep', {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'boop'
        });
    }
    return this;
}

Foo.prototype.c = 'd';
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bap'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'd';
    defineProperty( Foo.prototype, Symbol( 'e' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'f'
    });
}

obj = new Foo();
props = inheritedProperties( obj );

console.log( props );
// => [ ..., 'c', 'bip', ... ]
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/symbol/ctor

</section>

<!-- /.links -->
