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

# isTypedArrayLength

> Test if a value is a valid [typed array][mdn-typed-array] length.

<section class="usage">

## Usage

```javascript
var isTypedArrayLength = require( '@stdlib/assert/is-typed-array-length' );
```

#### isTypedArrayLength( value )

Tests if a value is a valid [typed array][mdn-typed-array] length.

```javascript
var bool = isTypedArrayLength( 5 );
// returns true

bool = isTypedArrayLength( -1 );
// returns false

bool = isTypedArrayLength( 2.0e200 );
// returns false

bool = isTypedArrayLength( 3.14 );
// returns false

bool = isTypedArrayLength( null );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A valid `length` property for a [typed array][mdn-typed-array] is any integer value on the interval `[0, 2^53-1]`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isTypedArrayLength = require( '@stdlib/assert/is-typed-array-length' );

var bool = isTypedArrayLength( 5 );
// returns true

bool = isTypedArrayLength( 0 );
// returns true

bool = isTypedArrayLength( 2.0e200 );
// returns false

bool = isTypedArrayLength( 5.256 );
// returns false

bool = isTypedArrayLength( 1.0/0.0 );
// returns false

bool = isTypedArrayLength( -1.0/0.0 );
// returns false

bool = isTypedArrayLength( NaN );
// returns false

bool = isTypedArrayLength( '5' );
// returns false

bool = isTypedArrayLength( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
