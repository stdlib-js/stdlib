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

# isInheritedProperty

> Test if an object has an inherited property.

<section class="usage">

## Usage

```javascript
var isInheritedProperty = require( '@stdlib/assert/is-inherited-property' );
```

#### isInheritedProperty( value, property )

Returns a `boolean` indicating if a `value` has an inherited `property`.

```javascript
var obj = {
    'beep': 'boop'
};

var bool = isInheritedProperty( obj, 'beep' );
// returns false

bool = isInheritedProperty( obj, 'hasOwnProperty' );
// returns true

bool = isInheritedProperty( obj, 'bap' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** throw when provided `null` or `undefined`. Instead, the function returns `false`.

    ```javascript
    var bool = isInheritedProperty( null, 'a' );
    // returns false

    bool = isInheritedProperty( void 0, 'a' );
    // returns false
    ```

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isInheritedProperty( 'beep', 'toString' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    function Foo() {
        return this;
    }

    Foo.prototype.null = true;
    Foo.prototype[ '[object Object]' ] = true;

    var obj = new Foo();

    var bool = isInheritedProperty( obj, null );
    // returns true

    bool = isInheritedProperty( obj, {} );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
var isInheritedProperty = require( '@stdlib/assert/is-inherited-property' );

var bool = isInheritedProperty( {}, 'hasOwnProperty' );
// returns true

bool = isInheritedProperty( { 'a': 'b' }, 'a' );
// returns false

bool = isInheritedProperty( { 'a': 'b' }, 'c' );
// returns false

bool = isInheritedProperty( { 'a': 'b' }, null );
// returns false

bool = isInheritedProperty( null, 'a' );
// returns false

bool = isInheritedProperty( void 0, 'a' );
// returns false

bool = isInheritedProperty( { 'null': false }, null );
// returns false

bool = isInheritedProperty( { '[object Object]': false }, {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
