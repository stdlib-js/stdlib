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

# fromWordf

> Create a [single-precision floating-point number][ieee754] from an unsigned integer corresponding to an [IEEE 754][ieee754] binary representation.

<section class="usage">

## Usage

```javascript
var fromWordf = require( '@stdlib/number/float32/base/from-word' );
```

#### fromWordf( word )

Creates a [single-precision floating-point number][ieee754] from an unsigned `integer` corresponding to an [IEEE 754][ieee754] binary representation.

```javascript
var word = 1068180177; // => 0 01111111 01010110010001011010001

var f32 = fromWordf( word ); // when printed, implicitly promoted to float64
// returns 1.3370000123977661
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The equivalent of this function in C/C++,

    ```c
    float fromWordf(unsigned int x) {
      return *(float*)&x;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var MAX_UINT32 = require( '@stdlib/constants/uint32/max' );
var fromWordf = require( '@stdlib/number/float32/base/from-word' );

var word;
var f32;
var i;

// Create single-precision floating-point numbers from unsigned integers...
for ( i = 0; i < 1000; i++ ) {
    word = round( randu()*MAX_UINT32 );
    f32 = fromWordf( word );
    console.log( 'word: %d => float32: %d', word, f32 );
}
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
#include "stdlib/number/float32/base/from_word.h"
```

#### stdlib_base_float32_from_word( word, \*x )

Creates a [single-precision floating-point number][ieee754] from an unsigned 32-bit integer corresponding to an [IEEE 754][ieee754] binary representation.

```c
#include <stdint.h>

uint32_t word = 1078523331;

float x;
stdlib_base_float32_from_word( word, &x );
```

The function accepts the following arguments:

-   **word**: `[in] uint32_t` input word.
-   **x**: `[out] float*` destination for a single-precision floating-point number.

```c
void stdlib_base_float32_from_word( const uint32_t word, float *x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/number/float32/base/from_word.h"
#include <stdint.h>
#include <stdio.h>

int main() {
    uint32_t word = 1078523331;

    float x;
    int i;
    for ( i = 0; i < 10; i++ ) {
        stdlib_base_float32_from_word( word+(uint32_t)(i*10), &x );
        printf( "word: %u => %f\n", word, x );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
