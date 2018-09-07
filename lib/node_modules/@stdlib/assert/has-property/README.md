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

# hasProperty

> Test if an object has a specified property, either own or inherited.

<section class="usage">

## Usage

```javascript
var hasProp = require( '@stdlib/assert/has-property' );
```

#### hasProp( value, property )

Returns a `boolean` indicating if a `value` has a specified `property`, either own or inherited.

```javascript
var value = {
    'beep': 'boop'
};

var bool = hasProp( value, 'beep' );
// returns true

bool = hasProp( value, 'hasOwnProperty' );
// returns true

bool = hasProp( value, 'bap' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** throw when provided `null` or `undefined`. Instead, the function returns `false`.

    ```javascript
    var bool = hasProp( null, 'a' );
    // returns false

    bool = hasProp( void 0, 'a' );
    // returns false
    ```

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = hasProp( 'beep', 'length' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var value = {
        'null': false
    };
    var bool = hasProp( value, null );
    // returns true

    value = {
        '[object Object]': false
    };
    bool = hasProp( value, {} );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
var hasProp = require( '@stdlib/assert/has-property' );

var bool = hasProp( { 'a': 'b' }, 'a' );
// returns true

bool = hasProp( {}, 'hasOwnProperty' );
// returns true

bool = hasProp( { 'a': 'b' }, 'c' );
// returns false

bool = hasProp( { 'a': 'b' }, null );
// returns false

bool = hasProp( null, 'a' );
// returns false

bool = hasProp( void 0, 'a' );
// returns false

bool = hasProp( { 'null': false }, null );
// returns true

bool = hasProp( { '[object Object]': false }, {} );
// returns true
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
