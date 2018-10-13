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

# isNonConfigurablePropertyIn

> Test if an object's own or inherited property is non-configurable.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isNonConfigurablePropertyIn = require( '@stdlib/assert/is-nonconfigurable-property-in' );
```

#### isNonConfigurablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a non-configurable `property` (i.e., a property which cannot be deleted and whose descriptor cannot be changed).

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
    'configurable': true,
    'enumerable': true,
    'writable': true,
    'value': true
});

defineProperty( Foo.prototype, 'boop', {
    'configurable': false,
    'enumerable': true,
    'writable': true,
    'value': true
});

obj = new Foo();

bool = isNonConfigurablePropertyIn( obj, 'foo' );
// returns false

bool = isNonConfigurablePropertyIn( obj, 'beep' );
// returns false

bool = isNonConfigurablePropertyIn( obj, 'boop' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isNonConfigurablePropertyIn( 'beep', 'length' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var defineProperty = require( '@stdlib/utils/define-property' );

    var obj = {};

    defineProperty( obj, 'null', {
        'configurable': false,
        'enumerable': true,
        'writable': true,
        'value': true
    });

    var bool = isNonConfigurablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var isNonConfigurablePropertyIn = require( '@stdlib/assert/is-nonconfigurable-property-in' );

var bool = isNonConfigurablePropertyIn( [ 'a' ], 'length' );
// returns true

bool = isNonConfigurablePropertyIn( {}, 'toString' );
// returns false

bool = isNonConfigurablePropertyIn( {}, 'hasOwnProperty' );
// returns false

bool = isNonConfigurablePropertyIn( { 'a': 'b' }, 'a' );
// returns false

bool = isNonConfigurablePropertyIn( [ 'a' ], 0 );
// returns false

bool = isNonConfigurablePropertyIn( { 'null': false }, null );
// returns false

bool = isNonConfigurablePropertyIn( { '[object Object]': false }, {} );
// returns false

bool = isNonConfigurablePropertyIn( null, 'a' );
// returns false

bool = isNonConfigurablePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
