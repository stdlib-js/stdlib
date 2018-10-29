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

# isPRNGLike

> Test if a value is PRNG-like.

<section class="usage">

## Usage

```javascript
var isPRNGLike = require( '@stdlib/assert/is-prng-like' );
```

#### isPRNGLike( value )

Tests if a value is PRNG-like.

```javascript
var randu = require( '@stdlib/random/base/randu' );

var bool = isPRNGLike( randu );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function is **not** rigorous and only checks for the existence of particular properties which **should** be bound to a seedable pseudorandom number generator (PRNG) function. The function's main use case is for testing that a provided `value` (loosely) conforms to a particular interface.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var isPRNGLike = require( '@stdlib/assert/is-prng-like' );

var bool = isPRNGLike( randu );
// returns true

bool = isPRNGLike( [ 1, 2, 3, 4 ] );
// returns false

bool = isPRNGLike( {} );
// returns false

bool = isPRNGLike( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
