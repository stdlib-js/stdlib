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

# isConfigurablePropertyIn

> Test if an object's own or inherited property is configurable.

<section class="usage">

## Usage

```javascript
var isConfigurablePropertyIn = require( '@stdlib/assert/is-configurable-property-in' );
```

#### isConfigurablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a configurable `property` (i.e., a property which may be deleted or whose descriptor may be changed).

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

bool = isConfigurablePropertyIn( obj, 'foo' );
// returns true

bool = isConfigurablePropertyIn( obj, 'beep' );
// returns true

bool = isConfigurablePropertyIn( obj, 'boop' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isConfigurablePropertyIn( 'beep', 'toString' );
    // returns true
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isConfigurablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isConfigurablePropertyIn = require( '@stdlib/assert/is-configurable-property-in' );

var bool = isConfigurablePropertyIn( { 'a': 'b' }, 'a' );
// returns true

bool = isConfigurablePropertyIn( [ 'a' ], 0 );
// returns true

bool = isConfigurablePropertyIn( { 'null': false }, null );
// returns true

bool = isConfigurablePropertyIn( { '[object Object]': false }, {} );
// returns true

bool = isConfigurablePropertyIn( {}, 'toString' );
// returns true

bool = isConfigurablePropertyIn( {}, 'hasOwnProperty' );
// returns true

bool = isConfigurablePropertyIn( [ 'a' ], 'length' );
// returns false

bool = isConfigurablePropertyIn( null, 'a' );
// returns false

bool = isConfigurablePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
