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

# isNonEnumerablePropertyIn

> Test if an object's own or inherited property is non-enumerable.

<section class="usage">

## Usage

```javascript
var isNonEnumerablePropertyIn = require( '@stdlib/assert/is-nonenumerable-property-in' );
```

#### isNonEnumerablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a non-enumerable `property`.

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
    'configurable': true,
    'enumerable': false,
    'writable': true,
    'value': true
});

obj = new Foo();

bool = isNonEnumerablePropertyIn( obj, 'foo' );
// returns false

bool = isNonEnumerablePropertyIn( obj, 'beep' );
// returns false

bool = isNonEnumerablePropertyIn( obj, 'boop' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isNonEnumerablePropertyIn( 'beep', 'length' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var defineProperty = require( '@stdlib/utils/define-property' );

    var obj = {};

    defineProperty( obj, 'null', {
        'configurable': true,
        'enumerable': false,
        'writable': true,
        'value': true
    });

    var bool = isNonEnumerablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isNonEnumerablePropertyIn = require( '@stdlib/assert/is-nonenumerable-property-in' );

var bool = isNonEnumerablePropertyIn( {}, 'toString' );
// returns true

bool = isNonEnumerablePropertyIn( {}, 'hasOwnProperty' );
// returns true

bool = isNonEnumerablePropertyIn( [ 'a' ], 'length' );
// returns true

bool = isNonEnumerablePropertyIn( { 'a': 'b' }, 'a' );
// returns false

bool = isNonEnumerablePropertyIn( [ 'a' ], 0 );
// returns false

bool = isNonEnumerablePropertyIn( { 'null': false }, null );
// returns false

bool = isNonEnumerablePropertyIn( { '[object Object]': false }, {} );
// returns false

bool = isNonEnumerablePropertyIn( null, 'a' );
// returns false

bool = isNonEnumerablePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
