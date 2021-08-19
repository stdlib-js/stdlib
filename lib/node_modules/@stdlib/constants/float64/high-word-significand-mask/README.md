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

# Significand Mask

> High word mask for the significand of a [double-precision floating-point number][ieee754].

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var FLOAT64_HIGH_WORD_SIGNIFICAND_MASK = require( '@stdlib/constants/float64/high-word-significand-mask' );
```

#### FLOAT64_HIGH_WORD_SIGNIFICAND_MASK

High word mask for the significand of a [double-precision floating-point number][ieee754]. 

<!-- eslint-disable id-length -->

```javascript
// 0x000fffff = 1048575 => 0 00000000000 11111111111111111111
var bool = ( FLOAT64_HIGH_WORD_SIGNIFICAND_MASK === 0x000fffff );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The higher order word of a [double-precision floating-point number][ieee754] is a 32-bit integer containing the more significant bits which include the exponent and sign.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var getHighWord = require( '@stdlib/number/float64/base/get-high-word' );
var FLOAT64_HIGH_WORD_SIGNIFICAND_MASK = require( '@stdlib/constants/float64/high-word-significand-mask' );

var out;
var hi;
var x;

x = 11.5;
hi = getHighWord( x ); // => 0 10000000010 01110000000000000000
// returns 1076297728

// Mask off all bits except for the significand bits:
out = hi & FLOAT64_HIGH_WORD_SIGNIFICAND_MASK; // => 0 00000000000 01110000000000000000
// returns 458752

// Mask on the significand bits and leave other bits unchanged:
out = hi | FLOAT64_HIGH_WORD_SIGNIFICAND_MASK; // => 0 10000000010 11111111111111111111
// returns 1076887551
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: http://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
