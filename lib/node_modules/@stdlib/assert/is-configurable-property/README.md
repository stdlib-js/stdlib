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

# isConfigurableProperty

> Test if an object's own property is configurable.

<section class="usage">

## Usage

```javascript
var isConfigurableProperty = require( '@stdlib/assert/is-configurable-property' );
```

#### isConfigurableProperty( value, property )

Returns a `boolean` indicating if a `value` has a configurable `property` (i.e., a property which may be deleted or whose descriptor may be changed).

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': true,
    'enumerable': true,
    'writable': true,
    'value': true
});

defineProperty( obj, 'boop', {
    'configurable': false,
    'enumerable': true,
    'writable': true,
    'value': true
});

var bool = isConfigurableProperty( obj, 'foo' );
// returns true

bool = isConfigurableProperty( obj, 'beep' );
// returns true

bool = isConfigurableProperty( obj, 'boop' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isConfigurableProperty( 'beep', 'length' );
    // returns false
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isConfigurableProperty( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isConfigurableProperty = require( '@stdlib/assert/is-configurable-property' );

var bool = isConfigurableProperty( { 'a': 'b' }, 'a' );
// returns true

bool = isConfigurableProperty( [ 'a' ], 0 );
// returns true

bool = isConfigurableProperty( { 'null': false }, null );
// returns true

bool = isConfigurableProperty( { '[object Object]': false }, {} );
// returns true

bool = isConfigurableProperty( [ 'a' ], 'length' );
// returns false

bool = isConfigurableProperty( {}, 'toString' );
// returns false

bool = isConfigurableProperty( {}, 'hasOwnProperty' );
// returns false

bool = isConfigurableProperty( null, 'a' );
// returns false

bool = isConfigurableProperty( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
