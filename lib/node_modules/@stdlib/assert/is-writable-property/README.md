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

# isWritableProperty

> Test if an object's own property is writable.

<section class="usage">

## Usage

```javascript
var isWritableProperty = require( '@stdlib/assert/is-writable-property' );
```

#### isWritableProperty( value, property )

Returns a `boolean` indicating if a `value` has a writable `property`.

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

var bool = isWritableProperty( obj, 'foo' );
// returns true

bool = isWritableProperty( obj, 'setter' );
// returns true

bool = isWritableProperty( obj, 'beep' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isWritableProperty( 'beep', 'length' );
    // returns false
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isWritableProperty( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isWritableProperty = require( '@stdlib/assert/is-writable-property' );

var bool = isWritableProperty( [ 'a' ], 'length' );
// returns true

bool = isWritableProperty( { 'a': 'b' }, 'a' );
// returns true

bool = isWritableProperty( [ 'a' ], 0 );
// returns true

bool = isWritableProperty( { 'null': false }, null );
// returns true

bool = isWritableProperty( { '[object Object]': false }, {} );
// returns true

bool = isWritableProperty( {}, 'toString' );
// returns false

bool = isWritableProperty( {}, 'hasOwnProperty' );
// returns false

bool = isWritableProperty( null, 'a' );
// returns false

bool = isWritableProperty( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
