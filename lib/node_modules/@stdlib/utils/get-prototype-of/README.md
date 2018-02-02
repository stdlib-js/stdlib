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

# getPrototypeOf

> Return the prototype of a provided object.

<section class="usage">

## Usage

```javascript
var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
```

#### getPrototypeOf( value )

Returns the `prototype` of an input `value`.

```javascript
var proto = getPrototypeOf( {} );
// returns {}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the native [`Object.getPrototypeOf`][object-get-prototype-of], this function does **not** throw when provided `null` or `undefined`. Instead, similar to when provided any value with **no** inherited properties, the function returns `null`.

    ```javascript
    var proto = getPrototypeOf( Object.create( null ) );
    // returns null

    proto = getPrototypeOf( null );
    // returns null

    proto = getPrototypeOf( void 0 );
    // returns null
    ```

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var proto = getPrototypeOf( 'beep' );
    // returns String.prototype

    proto = getPrototypeOf( 5 );
    // returns Number.prototype
    ```

    This behavior matches ES6/ES2015 native [`Object.getPrototypeOf`][object-get-prototype-of] behavior. In ES5, the native [`Object.getPrototypeOf`][object-get-prototype-of] throws when provided non-object values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );

var proto = getPrototypeOf( 'beep' );
// returns String.prototype

proto = getPrototypeOf( 5 );
// returns Number.prototype

proto = getPrototypeOf( true );
// returns Boolean.prototype

proto = getPrototypeOf( null );
// returns null

proto = getPrototypeOf( void 0 );
// returns null

proto = getPrototypeOf( [] );
// returns Array.prototype

proto = getPrototypeOf( {} );
// returns {}

proto = getPrototypeOf( function foo() {} );
// returns Function.prototype
```

</section>

<!-- /.examples -->

<section class="links">

[object-get-prototype-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

</section>

<!-- /.links -->
