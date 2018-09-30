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

# Native Class

> Determine the specification defined classification of an object.

<section class="usage">

## Usage

```javascript
var nativeClass = require( '@stdlib/utils/native-class' );
```

#### nativeClass( value )

Returns a `string` value indicating a [specification defined][object-to-string] classification of an `object`.

```javascript
var str = nativeClass( 'a' );
// returns '[object String]'

str = nativeClass( 5 );
// returns '[object Number]'

function Beep() {
    return this;
}
str = nativeClass( new Beep() );
// returns '[object Object]'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function is **not** robust for ES2015+ environments. In ES2015+, [`Symbol.toStringTag`][mdn-symbol-tostringtag] allows overriding the default description of an object.

    ```javascript
    var toStr = Object.prototype.toString;

    var str = toStr.call( false );
    // returns '[object Boolean]'

    var o = {};
    str = toStr.call( o );
    // returns '[object Object]'

    // Mask the default description:
    o[ Symbol.toStringTag ] = 'Boolean';

    str = toStr.call( o );
    // returns '[object Boolean]'
    ```

    While measures are taken to uncover the default description, such measures can be thwarted. While this function remains useful for type-checking, be aware that value impersonation is possible. Prefer functions tailored to checking for particular value types, as specialized functions are better equipped to address [`Symbol.toStringTag`][mdn-symbol-tostringtag].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

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
var nativeClass = require( '@stdlib/utils/native-class' );

var str = nativeClass( 'a' );
// returns '[object String]'

str = nativeClass( 5 );
// returns '[object Number]'

str = nativeClass( NaN );
// returns '[object Number]'

str = nativeClass( null );
// returns '[object Null]'

str = nativeClass( void 0 );
// returns '[object Undefined]'

str = nativeClass( true );
// returns '[object Boolean]'

str = nativeClass( false );
// returns '[object Boolean]'

str = nativeClass( {} );
// returns '[object Object]'

str = nativeClass( [] );
// returns '[object Array]'

str = nativeClass( function noop() {} );
// returns '[object Function]'

str = nativeClass( /./ );
// returns '[object RegExp]'

str = nativeClass( new Date() );
// returns '[object Date]'

str = nativeClass( new Map() );
// returns '[object Map]'

str = nativeClass( new WeakMap() );
// returns '[object WeakMap]'

str = nativeClass( new Set() );
// returns '[object Set]'

str = nativeClass( new WeakSet() );
// returns '[object WeakSet]'

str = nativeClass( Symbol( 'beep' ) );
// returns '[object Symbol]'

str = nativeClass( new Error() );
// returns '[object Error]'

str = nativeClass( new TypeError() );
// returns '[object Error]'

str = nativeClass( new SyntaxError() );
// returns '[object Error]'

str = nativeClass( new URIError() );
// returns '[object Error]'

str = nativeClass( new RangeError() );
// returns '[object Error]'

str = nativeClass( new ReferenceError() );
// returns '[object Error]'

str = nativeClass( new EvalError() );
// returns '[object Error]'

str = nativeClass( new Int8Array() );
// returns '[object Int8Array]'

str = nativeClass( new Uint8Array() );
// returns '[object Uint8Array]'

str = nativeClass( new Uint8ClampedArray() );
// returns '[object Uint8ClampedArray]'

str = nativeClass( new Int16Array() );
// returns '[object Int16Array]'

str = nativeClass( new Uint16Array() );
// returns '[object Uint16Array]'

str = nativeClass( new Int32Array() );
// returns '[object Int32Array]'

str = nativeClass( new Uint32Array() );
// returns '[object Uint32Array]'

str = nativeClass( new Float32Array() );
// returns '[object Float32Array]'

str = nativeClass( new Float64Array() );
// returns '[object Float64Array]'

str = nativeClass( new ArrayBuffer() );
// returns '[object ArrayBuffer]'

str = nativeClass( Math );
// returns '[object Math]'

str = nativeClass( JSON );
// returns '[object JSON]'

function Person() {
    return this;
}
str = nativeClass( new Person() );
// returns '[object Object]'
```

</section>

<!-- /.examples -->

<section class="links">

[object-to-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

[mdn-symbol-tostringtag]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag

</section>

<!-- /.links -->
