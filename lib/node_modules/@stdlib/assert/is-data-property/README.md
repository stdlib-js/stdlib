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

# isDataProperty

> Test if an object's own property has a data descriptor.

<section class="usage">

## Usage

```javascript
var isDataProperty = require( '@stdlib/assert/is-data-property' );
```

#### isDataProperty( value, property )

Returns a `boolean` indicating if a `value` has a data `property`.

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

var bool = isDataProperty( obj, 'foo' );
// returns true

bool = isDataProperty( obj, 'beep' );
// returns true

bool = isDataProperty( obj, 'accessor' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isDataProperty( 'beep', 'length' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isDataProperty( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isDataProperty = require( '@stdlib/assert/is-data-property' );

var bool = isDataProperty( [ 'a' ], 'length' );
// returns true

bool = isDataProperty( { 'a': 'b' }, 'a' );
// returns true

bool = isDataProperty( [ 'a' ], 0 );
// returns true

bool = isDataProperty( { 'null': false }, null );
// returns true

bool = isDataProperty( { '[object Object]': false }, {} );
// returns true

bool = isDataProperty( {}, 'toString' );
// returns false

bool = isDataProperty( {}, 'hasOwnProperty' );
// returns false

bool = isDataProperty( null, 'a' );
// returns false

bool = isDataProperty( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
