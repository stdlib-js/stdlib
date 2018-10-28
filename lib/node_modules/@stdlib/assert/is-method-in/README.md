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

# isMethodIn

> Test if an object has a specified method name, either own or inherited.

<section class="usage">

## Usage

```javascript
var isMethodIn = require( '@stdlib/assert/is-method-in' );
```

#### isMethodIn( value, property )

Returns a `boolean` indicating if a `value` has a specified method name, either own or inherited.

```javascript
var value = {
    'beep': 'boop'
};

var bool = isMethodIn( value, 'toString' );
// returns true

bool = isMethodIn( value, 'beep' );
// returns false

bool = isMethodIn( value, 'bap' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** throw when provided `null` or `undefined`. Instead, the function returns `false`.

    ```javascript
    var bool = isMethodIn( null, 'toString' );
    // returns false

    bool = isMethodIn( void 0, 'toString' );
    // returns false
    ```

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isMethodIn( 'beep', 'toString' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    function noop() {
        // Example function...
    }

    var value = {
        'null': noop
    };
    var bool = isMethodIn( value, null );
    // returns true

    value = {
        '[object Object]': noop
    };
    bool = isMethodIn( value, {} );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
var isMethodIn = require( '@stdlib/assert/is-method-in' );

var bool = isMethodIn( {}, 'toString' );
// returns true

bool = isMethodIn( { 'a': 'b' }, 'a' );
// returns false

bool = isMethodIn( { 'a': 'b' }, 'c' );
// returns false

bool = isMethodIn( { 'a': 'b' }, null );
// returns false

bool = isMethodIn( null, 'a' );
// returns false

bool = isMethodIn( void 0, 'a' );
// returns false

bool = isMethodIn( { 'null': isMethodIn }, null );
// returns true

bool = isMethodIn( { '[object Object]': isMethodIn }, {} );
// returns true
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
