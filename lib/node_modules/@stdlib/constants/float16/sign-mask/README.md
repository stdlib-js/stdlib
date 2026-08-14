<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# FLOAT16_SIGN_MASK

> Mask for the sign bit of a [half-precision floating-point number][ieee754].

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var FLOAT16_SIGN_MASK = require( '@stdlib/constants/float16/sign-mask' );
```

#### FLOAT16_SIGN_MASK

Mask for the sign bit of a [half-precision floating-point number][ieee754].

<!-- eslint-disable id-length -->

```javascript
// 0x8000 = 32768 => 1 00000 0000000000
var bool = ( FLOAT16_SIGN_MASK === 0x8000 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var toWord = require( '@stdlib/number/float16/base/to-word' );
var FLOAT16_SIGN_MASK = require( '@stdlib/constants/float16/sign-mask' );

var x = -11.5;
var w = toWord( x ); // 1 10010 0111000000
// returns 51648

// Mask off all bits except for the sign bit:
var out = (w & FLOAT16_SIGN_MASK)>>>0; // 1 00000 0000000000
// returns 32768

// Turn off the sign bit and leave other bits unchanged:
out = w & (~FLOAT16_SIGN_MASK); // 0 10010 0111000000
// returns 18880
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/constants/float16/sign_mask.h"
```

#### STDLIB_CONSTANT_FLOAT16_SIGN_MASK

Macro for the mask for the sign bit of a [half-precision floating-point number][ieee754].

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
