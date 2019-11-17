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

# propertiesIn

> Return an array of an object's own and inherited property names and [symbols][@stdlib/symbol/ctor].

<section class="usage">

## Usage

```javascript
var propertiesIn = require( '@stdlib/utils/properties-in' );
```

#### propertiesIn( obj )

Returns an `array` of an object's own and inherited property names and [symbols][@stdlib/symbol/ctor].

```javascript
var props = propertiesIn( [] );
// returns [...]
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
var propertiesIn = require( '@stdlib/utils/properties-in' );

var hasSymbols;
var props;
var obj;

hasSymbols = hasSymbolSupport();

function Foo() {
    this.a = 'b';
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
    }
    return this;
}

Foo.prototype.foo = 'bar';
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'foo' ) ] = 'bar';
}

obj = new Foo();
props = propertiesIn( obj );

console.log( props );
// e.g., => [ 'a', 'foo', ... ]
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/symbol/ctor

</section>

<!-- /.links -->
