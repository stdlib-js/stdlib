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

# toWord

> Return an unsigned 32-bit integer corresponding to the [IEEE 754][ieee754] binary representation of a [single-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var toWordf = require( '@stdlib/number/float32/base/to-word' );
```

#### toWordf( x )

Returns an unsigned 32-bit `integer` corresponding to the [IEEE 754][ieee754] binary representation of a [single-precision floating-point number][ieee754].

```javascript
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );

var f32 = float64ToFloat32( 1.337 );
// returns 1.3370000123977661

var w = toWordf( f32 ); // => 0 01111111 01010110010001011010001
// returns 1068180177
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The equivalent of this function in C/C++,

    ```c
    unsigned int toWordf(float x) {
        return *(unsigned int*)&x;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var randu = require( '@stdlib/random/base/randu' );
var toWordf = require( '@stdlib/number/float32/base/to-word' );

var word;
var f64;
var f32;
var i;

// Convert single-precision floating-point numbers to integers representing the binary literal...
for ( i = 0; i < 1000; i++ ) {
    f64 = (randu()*100.0) - 50.0;
    f32 = float64ToFloat32( f64 );
    word = toWordf( f32 );
    console.log( 'float64: %d => float32: %d => word: %d', f64, f32, word );
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
#include "stdlib/number/float32/base/to_word.h"
```

#### stdlib_base_float32_to_word( x, \*word )

Converts a [single-precision floating-point number][ieee754] to an unsigned 32-bit integer corresponding to the number's [IEEE 754][ieee754] binary representation.

```c
#include <stdint.h>

uint32_t word;
stdlib_base_float32_to_word( 3.14f, &word );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **word**: `[out] uint32_t*` destination.

```c
void stdlib_base_float32_to_word( const float x, uint32_t *word );
```

#### stdlib_base_float32_word_t

An opaque type definition for a union for converting between a [single-precision floating-point number][ieee754] and an unsigned 32-bit integer.

```c
#include <stdint.h>

stdlib_base_float32_word_t w;

// Assign a single-precision floating-point number:
w.value = 3.14f;

// Retrieve the word:
uint32_t word = w.word;
```

The union has the following members:

-   **value**: `float` [single-precision floating-point number][ieee754].
-   **word**: `uint32_t` word.

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
#include "stdlib/number/float32/base/to_word.h"
#include <stdint.h>
#include <stdio.h>

int main() {
    float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    uint32_t word;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float32_to_word( x[ i ], &word );
        printf( "%f => word: %u\n", x[ i ], word );
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
