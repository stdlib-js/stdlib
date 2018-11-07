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

# isPrototypeOf

> Test if an object's prototype chain contains a provided prototype.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var isPrototypeOf = require( '@stdlib/assert/is-prototype-of' );
```

#### isPrototypeOf( obj, prototype )

Tests if an `object`'s prototype chain contains a provided `prototype`.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var inherit = require( '@stdlib/utils/inherit' );

function Foo() {
    return this;
}

function Bar() {
    return this;
}
inherit( Bar, Foo );

var bar = new Bar();

var bool = isPrototypeOf( bar, Foo.prototype );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns `false` if provided a primitive value.

    <!-- eslint-disable stdlib/no-redeclare -->

    ```javascript
    var Number = require( '@stdlib/number/ctor' );

    var bool = isPrototypeOf( 5, Number.prototype );
    // returns false

    bool = isPrototypeOf( 'beep', String.prototype );
    // returns false

    bool = isPrototypeOf( true, Boolean.prototype );
    // returns false
    ```

-   The function throws a `TypeError` if provided a `prototype` value which is neither an `object` (except `null`) or a `function`.

    <!-- eslint-disable stdlib/no-redeclare -->

    ```javascript
    var bool = isPrototypeOf( Object.create( null ), null );
    // throws <TypeError>
    ```

-   `isPrototypeOf()` is generally more robust than the `instanceof` operator. Consider the following example which does not use constructors:

    <!-- eslint-disable stdlib/no-redeclare -->

    ```javascript
    // Functionally similar to `Object.create()`...
    function createObject( proto ) {
        function Ctor() {
            // Empty constructor...
        }
        Ctor.prototype = proto;
        return new Ctor();
    }
    var superProto = {
        'beep': 'beep'
    };

    var subProto = createObject( superProto );
    subProto.boop = 'boop';

    var v = createObject( subProto );

    var bool;
    try {
        bool = ( v instanceof superProto );
    } catch ( error ) {
        // Encountered a type error...
        console.error( error.message );
    }

    bool = isPrototypeOf( v, superProto );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var inherit = require( '@stdlib/utils/inherit' );
var isPrototypeOf = require( '@stdlib/assert/is-prototype-of' );

function A() {
    return this;
}

function B() {
    return this;
}
inherit( B, A );

function C() {
    return this;
}
inherit( C, B );

function D() {
    return this;
}
inherit( D, C );

var a = new A();
var b = new B();
var c = new C();
var d = new D();

var bool = isPrototypeOf( d, C.prototype );
// returns true

bool = isPrototypeOf( d, B.prototype );
// returns true

bool = isPrototypeOf( d, A.prototype );
// returns true

bool = isPrototypeOf( c, B.prototype );
// returns true

bool = isPrototypeOf( c, A.prototype );
// returns true

bool = isPrototypeOf( c, D.prototype );
// returns false

bool = isPrototypeOf( b, A.prototype );
// returns true

bool = isPrototypeOf( b, C.prototype );
// returns false

bool = isPrototypeOf( b, D.prototype );
// returns false

bool = isPrototypeOf( a, B.prototype );
// returns false

bool = isPrototypeOf( a, C.prototype );
// returns false

bool = isPrototypeOf( a, D.prototype );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
