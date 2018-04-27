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

# instanceOf

> Test whether a value has in its prototype chain a specified constructor as a prototype property.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var instanceOf = require( '@stdlib/assert/instance-of' );
```

#### instanceOf( value, constructor )

Tests whether a `value` has in its prototype chain a specified `constructor` as a `prototype` property.

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

var bool = instanceOf( bar, Foo );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function throws a `TypeError` if provided a `constructor` argument which is not callable.

    ```javascript
    var bool = instanceOf( {}, null );
    // throws <TypeError>
    ```

-   While the prototype of an `object` created using object literal notion is `undefined`, the function returns `true` when provided an `object` literal and the `Object` constructor. This maintains consistent behavior with the `instanceof` operator.

    ```javascript
    var bool = ( {} instanceof Object );
    // returns true

    bool = instanceOf( {}, Object );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var instanceOf = require( '@stdlib/assert/instance-of' );

var bool = instanceOf( [], Array );
// returns true

bool = instanceOf( [], Object );
// returns true

bool = instanceOf( {}, Object );
// returns true

bool = instanceOf( new Date(), Date );
// returns true

bool = instanceOf( /.*/, RegExp );
// returns true

bool = instanceOf( instanceOf, Function );
// returns true

bool = instanceOf( null, Object );
// returns false

bool = instanceOf( 5, Number );
// returns false

bool = instanceOf( '5', String );
// returns false

bool = instanceOf( void 0, Object );
// returns false

bool = instanceOf( {}, Array );
// returns false

bool = instanceOf( {}, Function );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
