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

# isAccessorProperty

> Test if an object's own property has an accessor descriptor.

<section class="usage">

## Usage

```javascript
var isAccessorProperty = require( '@stdlib/assert/is-accessor-property' );
```

#### isAccessorProperty( value, property )

Returns a `boolean` indicating if an object's own `property` has an accessor descriptor.

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

var bool = isAccessorProperty( obj, 'foo' );
// returns false

bool = isAccessorProperty( obj, 'beep' );
// returns false

bool = isAccessorProperty( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isAccessorProperty( 'beep', 'length' );
    // returns false
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var defineProperty = require( '@stdlib/utils/define-property' );

    var obj = {};

    function getter() {
        return true;
    }

    defineProperty( obj, 'null', {
        'configurable': true,
        'enumerable': true,
        'get': getter
    });

    var bool = isAccessorProperty( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isAccessorProperty = require( '@stdlib/assert/is-accessor-property' );

var bool = isAccessorProperty( [ 'a' ], 'length' );
// returns false

bool = isAccessorProperty( { 'a': 'b' }, 'a' );
// returns false

bool = isAccessorProperty( [ 'a' ], 0 );
// returns false

bool = isAccessorProperty( { 'null': false }, null );
// returns false

bool = isAccessorProperty( { '[object Object]': false }, {} );
// returns false

bool = isAccessorProperty( {}, 'toString' );
// returns false

bool = isAccessorProperty( {}, 'hasOwnProperty' );
// returns false

bool = isAccessorProperty( null, 'a' );
// returns false

bool = isAccessorProperty( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
