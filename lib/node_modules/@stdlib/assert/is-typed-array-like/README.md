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

# isTypedArrayLike

> Test if a value is [typed-array][mdn-typed-array]-like.

<section class="usage">

## Usage

```javascript
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
```

#### isTypedArrayLike( value )

Tests if a value is [typed-array][mdn-typed-array]-like.

```javascript
var Int16Array = require( '@stdlib/array/int16' );

var bool = isTypedArrayLike( new Int16Array() );
// returns true

bool = isTypedArrayLike({
    'length': 10,
    'byteOffset': 0,
    'byteLength': 10,
    'BYTES_PER_ELEMENT': 4
});
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function, no-unused-vars -->

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );

var bool;
var arr;

arr = {
    'BYTES_PER_ELEMENT': 8,
    'length': 10,
    'byteOffset': 0,
    'byteLength': 10
};
bool = isTypedArrayLike( arr );
// returns true

bool = isTypedArrayLike( new Int8Array( 4 ) );
// returns true

bool = isTypedArrayLike( [] );
// returns false

bool = isTypedArrayLike( {} );
// returns false

bool = isTypedArrayLike( null );
// returns false

bool = isTypedArrayLike( 'beep' );
// returns false

bool = isTypedArrayLike( function foo( a, b ) {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
