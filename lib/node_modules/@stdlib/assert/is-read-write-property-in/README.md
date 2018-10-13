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

# isReadWritePropertyIn

> Test if an object's own or inherited property is readable and writable.

<section class="usage">

## Usage

```javascript
var isReadWritePropertyIn = require( '@stdlib/assert/is-read-write-property-in' );
```

#### isReadWritePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a readable **and** writable `property`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': true,
    'value': 'boop'
});

defineProperty( obj, 'accessor', {
    'configurable': false,
    'enumerable': false,
    'get': function getter() {
        return obj.foo;
    },
    'set': function setter( v ) {
        obj.foo = v;
    }
});

var bool = isReadWritePropertyIn( obj, 'foo' );
// returns true

bool = isReadWritePropertyIn( obj, 'beep' );
// returns true

bool = isReadWritePropertyIn( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isReadWritePropertyIn( 'beep', 'length' );
    // returns false
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isReadWritePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isReadWritePropertyIn = require( '@stdlib/assert/is-read-write-property-in' );

var bool = isReadWritePropertyIn( [ 'a' ], 'length' );
// returns true

bool = isReadWritePropertyIn( { 'a': 'b' }, 'a' );
// returns true

bool = isReadWritePropertyIn( [ 'a' ], 0 );
// returns true

bool = isReadWritePropertyIn( { 'null': false }, null );
// returns true

bool = isReadWritePropertyIn( { '[object Object]': false }, {} );
// returns true

bool = isReadWritePropertyIn( {}, 'toString' );
// returns true

bool = isReadWritePropertyIn( {}, 'hasOwnProperty' );
// returns true

bool = isReadWritePropertyIn( null, 'a' );
// returns false

bool = isReadWritePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
