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

# typeOf

> Determine a value's type.

<section class="usage">

## Usage

```javascript
var typeOf = require( '@stdlib/utils/type-of' );
```

#### typeOf( value )

Returns a value's type.

```javascript
var str = typeOf( 'a' );
// returns 'string'

str = typeOf( 5 );
// returns 'number'
```

| description           | value                               | type                  | notes        |
| --------------------- | ----------------------------------- | --------------------- | ------------ |
| string                | `'beep'`                            | `'string'`            |              |
| number                | `5`                                 | `'number'`            |              |
| NaN                   | `NaN`                               | `'number'`            |              |
| infinity              | `+infinity`/`-infinity`             | `'number'`            |              |
| boolean               | `true`/`false`                      | `'boolean'`           |              |
| null                  | `null`                              | `'null'`              |              |
| undefined             | `undefined`                         | `'undefined'`         |              |
| array                 | `['beep', 5]`                       | `'array'`             |              |
| object                | `{'foo': 'bar'}`                    | `'object'`            |              |
| function              | `function (){}`                     | `'function'`          |              |
| symbol                | `Symbol()`                          | `'symbol'`            | ES2015       |
| regexp                | `/./`                               | `'regexp'`            | Android 4.1+ |
| String                | `new String('beep')`                | `'string'`            |              |
| Number                | `new Number(5)`                     | `'number'`            |              |
| Boolean               | `new Boolean(false)`                | `'boolean'`           |              |
| Object                | `new Object()`                      | `'object'`            |              |
| Array                 | `new Array()`                       | `'array'`             |              |
| Int8Array             | `new Int8Array()`                   | `'int8array'`         |              |
| Uint8Array            | `new Uint8Array()`                  | `'uint8array'`        |              |
| Uint8ClampedArray     | `new Uint8ClampedArray()`           | `'uint8clampedarray'` |              |
| Int16Array            | `new Int16Array()`                  | `'int16array'`        |              |
| Uint16Array           | `new Uint16Array()`                 | `'uint16array'`       |              |
| Int32Array            | `new Int32Array()`                  | `'int32array'`        |              |
| Uint32Array           | `new Uint32Array()`                 | `'uint32array'`       |              |
| Float32Array          | `new Float32Array()`                | `'float32array'`      |              |
| Float64Array          | `new Float64Array()`                | `'float64array'`      |              |
| ArrayBuffer           | `new ArrayBuffer()`                 | `'arraybuffer'`       |              |
| Buffer                | `new Buffer()`                      | `'buffer'`            | Node.js      |
| Date                  | `new Date()`                        | `'date'`              |              |
| RegExp                | `new RegExp('.')`                   | `'regexp'`            | Android 4.1+ |
| Function              | `new Function('x', 'return x')`     | `'function'`          |              |
| Map                   | `new Map()`                         | `'map'`               | ES2015       |
| WeakMap               | `new WeakMap()`                     | `'weakmap'`           | ES2015       |
| Set                   | `new Set()`                         | `'set'`               | ES2015       |
| WeakSet               | `new WeakSet()`                     | `'weakset'`           | ES2015       |
| Error                 | `new Error()`                       | `'error'`             |              |
| TypeError             | `new TypeError()`                   | `'typeerror'`         |              |
| SyntaxError           | `new SyntaxError()`                 | `'syntaxerror'`       |              |
| ReferenceError        | `new ReferenceError()`              | `'referenceerror'`    |              |
| URIError              | `new URIError()`                    | `'urierror'`          |              |
| RangeError            | `new RangeError()`                  | `'rangeerror'`        |              |
| EvalError             | `new EvalError()`                   | `'evalerror'`         |              |
| Math                  | `Math`                              | `'math'`              |              |
| JSON                  | `JSON`                              | `'json'`              | IE8+         |
| arguments             | `(function(){return arguments;})()` | `'arguments'`         | IE9+         |
| custom constructor    | `new Beep()`                        | `'beep'`              |              |
| anonymous constructor | `new (function(){})()`              | `''`                  |              |

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function, func-names, func-style -->

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Symbol = require( '@stdlib/symbol/ctor' );
var typeOf = require( '@stdlib/utils/type-of' );

var str = typeOf( 'a' );
// returns 'string'

str = typeOf( 5 );
// returns 'number'

str = typeOf( NaN );
// returns 'number'

str = typeOf( Infinity );
// returns 'number'

str = typeOf( true );
// returns 'boolean'

str = typeOf( false );
// returns 'boolean'

str = typeOf( void 0 );
// returns 'undefined'

str = typeOf( null );
// returns 'null'

str = typeOf( [] );
// returns 'array'

str = typeOf( {} );
// returns 'object'

str = typeOf( function noop() {} );
// returns 'function'

str = typeOf( new Map() );
// returns 'map'

str = typeOf( new WeakMap() );
// returns 'weakmap'

str = typeOf( new Set() );
// returns 'set'

str = typeOf( new WeakSet() );
// returns 'weakset'

str = typeOf( Symbol( 'beep' ) );
// returns 'symbol'

str = typeOf( new Error( 'beep' ) );
// returns 'error'

str = typeOf( new TypeError( 'beep' ) );
// returns 'typeerror'

str = typeOf( new SyntaxError( 'beep' ) );
// returns 'syntaxerror'

str = typeOf( new ReferenceError( 'beep' ) );
// returns 'referenceerror'

str = typeOf( new URIError( 'beep' ) );
// returns 'urierror'

str = typeOf( new EvalError( 'beep' ) );
// returns 'evalerror'

str = typeOf( new RangeError( 'beep' ) );
// returns 'rangeerror'

str = typeOf( new Date() );
// returns 'date'

str = typeOf( /./ );
// returns 'regexp'

str = typeOf( Math );
// returns 'math'

str = typeOf( JSON );
// returns 'json'

str = typeOf( new Int8Array( 10 ) );
// returns 'int8array'

str = typeOf( new Uint8Array( 10 ) );
// returns 'uint8array'

str = typeOf( new Int16Array( 10 ) );
// returns 'int16array'

str = typeOf( new Uint16Array( 10 ) );
// returns 'uint16array'

str = typeOf( new Int32Array( 10 ) );
// returns 'int32array'

str = typeOf( new Uint32Array( 10 ) );
// returns 'uint32array'

str = typeOf( new Float32Array( 10 ) );
// returns 'float32array'

str = typeOf( new Float64Array( 10 ) );
// returns 'float64array'

str = typeOf( new ArrayBuffer( 10 ) );
// returns 'arraybuffer'

function Person1() {
    return this;
}
str = typeOf( new Person1() );
// returns 'person1'

var Person2 = function () {
    return this;
};
str = typeOf( new Person2() );
// returns ''
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
