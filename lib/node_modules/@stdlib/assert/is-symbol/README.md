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

# isSymbol

> Test if a value is a [symbol][mdn-symbol].

<section class="usage">

## Usage

```javascript
var isSymbol = require( '@stdlib/assert/is-symbol' );
```

#### isSymbol( value )

Tests if a value is a [symbol][mdn-symbol].

```javascript
var Symbol = require( '@stdlib/symbol/ctor' );

var bool = isSymbol( Symbol( 'beep' ) );
// returns true

bool = isSymbol( Object( Symbol( 'beep' ) ) );
// returns true
```

#### isSymbol.isPrimitive( value )

Tests if a `value` is a primitive [symbol][mdn-symbol].

```javascript
var Symbol = require( '@stdlib/symbol/ctor' );

var bool = isSymbol.isPrimitive( Symbol( 'beep' ) );
// returns true

bool = isSymbol.isPrimitive( Object( Symbol( 'boop' ) ) );
// returns false
```

#### isSymbol.isObject( value )

Tests if a `value` is a [`Symbol`][mdn-symbol] object.

```javascript
var Symbol = require( '@stdlib/symbol/ctor' );

var bool = isSymbol.isObject( Symbol( 'beep' ) );
// returns false

bool = isSymbol.isObject( Object( Symbol( 'boop' ) ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var isSymbol = require( '@stdlib/assert/is-symbol' );

var bool;
if ( hasSymbolSupport() ) {
    bool = isSymbol( Symbol( 'beep' ) );
    // returns true
} else {
    console.log( 'Environment does not support symbols.' );
}
bool = isSymbol( 'beep' );
// returns false

bool = isSymbol( {} );
// returns false

bool = isSymbol( [] );
// returns false

bool = isSymbol( null );
// returns false

bool = isSymbol( void 0 );
// returns false

bool = isSymbol( true );
// returns false

bool = isSymbol( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

</section>

<!-- /.links -->
