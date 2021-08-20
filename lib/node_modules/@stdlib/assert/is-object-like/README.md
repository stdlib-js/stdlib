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

# isObjectLike

> Test if a value is object-like.

<section class="usage">

## Usage

```javascript
var isObjectLike = require( '@stdlib/assert/is-object-like' );
```

#### isObjectLike( value )

Tests if a `value` is object-like.

```javascript
var bool = isObjectLike( {} );
// returns true

bool = isObjectLike( [] );
// returns true

bool = isObjectLike( true );
// returns false
```

#### isObjectLike.isObjectLikeArray( value )

Tests if a `value` is an `array` of object-like values.

```javascript
var bool = isObjectLike.isObjectLikeArray( [ {}, [] ] );
// returns true

bool = isObjectLike.isObjectLikeArray( [ {}, '3.0' ] );
// returns false

bool = isObjectLike.isObjectLikeArray( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Return values are the same as would be obtained using the built-in [`typeof`][type-of] operator **except** that `null` is **not** considered an `object`.

    ```javascript
    var bool = ( typeof null === 'object' );
    // returns true

    bool = isObjectLike( null );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var isObjectLike = require( '@stdlib/assert/is-object-like' );

var bool = isObjectLike( {} );
// returns true

bool = isObjectLike( [] );
// returns true

bool = isObjectLike( /./ );
// returns true

bool = isObjectLike( new Date() );
// returns true

bool = isObjectLike( Math );
// returns true

bool = isObjectLike( JSON );
// returns true

bool = isObjectLike( new Int8Array() );
// returns true

bool = isObjectLike( new ArrayBuffer() );
// returns true

bool = isObjectLike( 'a' );
// returns false

bool = isObjectLike( 5 );
// returns false

bool = isObjectLike( null );
// returns false

bool = isObjectLike( void 0 );
// returns false

bool = isObjectLike( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[type-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

</section>

<!-- /.links -->
