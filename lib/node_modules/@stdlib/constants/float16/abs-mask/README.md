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

# FLOAT16_ABS_MASK

> Mask for excluding the sign bit of a [half-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var FLOAT16_ABS_MASK = require( '@stdlib/constants/float16/abs-mask' );
```

#### FLOAT16_ABS_MASK

Mask for excluding the sign bit of a [half-precision floating-point number][ieee754].

```javascript
// 0x7fff = 32767 => 0 11111 1111111111
var bool = ( FLOAT16_ABS_MASK === 0x7fff );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toWord = require( '@stdlib/number/float16/base/to-word' );
var fromWord = require( '@stdlib/number/float16/base/from-word' );
var toBinaryString = require( '@stdlib/number/uint32/base/to-binary-string' );
var FLOAT16_ABS_MASK = require( '@stdlib/constants/float16/abs-mask' );

var x = -11.5;
var w = toWord( x ); // 1 10010 0111000000
// returns 51648

// Turn off the sign bit and leave other bits unchanged:
var out = w & FLOAT16_ABS_MASK; // 0 10010 0111000000
// returns 18880

// Generate a new value:
out = fromWord( out );
// returns 11.5
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
#include "stdlib/constants/float16/abs_mask.h"
```

#### STDLIB_CONSTANT_FLOAT16_ABS_MASK

Macro for the mask for excluding the sign bit of a [half-precision floating-point number][ieee754].

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
