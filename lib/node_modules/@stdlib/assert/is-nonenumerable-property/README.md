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

# isNonEnumerableProperty

> Test if an object's own property is non-enumerable.

<section class="usage">

## Usage

```javascript
var isNonEnumerableProperty = require( '@stdlib/assert/is-nonenumerable-property' );
```

#### isNonEnumerableProperty( value, property )

Returns a `boolean` indicating if a `value` has a non-enumerable `property`.

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': true,
    'value': 'boop'
});

var bool = isNonEnumerableProperty( obj, 'beep' );
// returns true

bool = isNonEnumerableProperty( obj, 'foo' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isNonEnumerableProperty( 'beep', 'length' );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isNonEnumerableProperty = require( '@stdlib/assert/is-nonenumerable-property' );

var bool = isNonEnumerableProperty( [ 'a' ], 'length' );
// returns true

bool = isNonEnumerableProperty( { 'a': 'b' }, 'a' );
// returns false

bool = isNonEnumerableProperty( [ 'a' ], 0 );
// returns false

bool = isNonEnumerableProperty( {}, 'toString' );
// returns false

bool = isNonEnumerableProperty( {}, 'hasOwnProperty' );
// returns false

bool = isNonEnumerableProperty( null, 'a' );
// returns false

bool = isNonEnumerableProperty( void 0, 'a' );
// returns false

bool = isNonEnumerableProperty( { 'null': false }, null );
// returns false

bool = isNonEnumerableProperty( { '[object Object]': false }, {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
