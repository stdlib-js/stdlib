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

# isDataPropertyIn

> Test if an object's own or inherited property has a data descriptor.

<section class="usage">

## Usage

```javascript
var isDataPropertyIn = require( '@stdlib/assert/is-data-property-in' );
```

#### isDataPropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a data `property` (either own or inherited).

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var bool;
var obj;

function Foo() {
    this.foo = 'bar';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

defineProperty( Foo.prototype, 'accessor', {
    'configurable': false,
    'enumerable': false,
    'get': function getter() {
        return obj.foo;
    },
    'set': function setter( v ) {
        obj.foo = v;
    }
});

obj = new Foo();

bool = isDataPropertyIn( obj, 'foo' );
// returns true

bool = isDataPropertyIn( obj, 'beep' );
// returns true

bool = isDataPropertyIn( obj, 'accessor' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isDataPropertyIn( 'beep', 'length' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isDataPropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isDataPropertyIn = require( '@stdlib/assert/is-data-property-in' );

var bool = isDataPropertyIn( [ 'a' ], 'length' );
// returns true

bool = isDataPropertyIn( { 'a': 'b' }, 'a' );
// returns true

bool = isDataPropertyIn( [ 'a' ], 0 );
// returns true

bool = isDataPropertyIn( { 'null': false }, null );
// returns true

bool = isDataPropertyIn( { '[object Object]': false }, {} );
// returns true

bool = isDataPropertyIn( {}, 'toString' );
// returns true

bool = isDataPropertyIn( {}, 'hasOwnProperty' );
// returns true

bool = isDataPropertyIn( null, 'a' );
// returns false

bool = isDataPropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
