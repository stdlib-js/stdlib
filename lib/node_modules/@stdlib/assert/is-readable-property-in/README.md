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

# isReadablePropertyIn

> Test if an object's own or inherited property is readable.

<section class="usage">

## Usage

```javascript
var isReadablePropertyIn = require( '@stdlib/assert/is-readable-property-in' );
```

#### isReadablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a readable `property`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

defineProperty( obj, 'setter', {
    'configurable': false,
    'enumerable': false,
    'set': function setter( v ) {
        obj.foo = v;
    }
});

var bool = isReadablePropertyIn( obj, 'foo' );
// returns true

bool = isReadablePropertyIn( obj, 'beep' );
// returns true

bool = isReadablePropertyIn( obj, 'setter' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isReadablePropertyIn( 'beep', 'toString' );
    // returns true
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isReadablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isReadablePropertyIn = require( '@stdlib/assert/is-readable-property-in' );

var bool = isReadablePropertyIn( [ 'a' ], 'length' );
// returns true

bool = isReadablePropertyIn( { 'a': 'b' }, 'a' );
// returns true

bool = isReadablePropertyIn( [ 'a' ], 0 );
// returns true

bool = isReadablePropertyIn( { 'null': false }, null );
// returns true

bool = isReadablePropertyIn( { '[object Object]': false }, {} );
// returns true

bool = isReadablePropertyIn( {}, 'toString' );
// returns true

bool = isReadablePropertyIn( {}, 'hasOwnProperty' );
// returns true

bool = isReadablePropertyIn( null, 'a' );
// returns false

bool = isReadablePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
