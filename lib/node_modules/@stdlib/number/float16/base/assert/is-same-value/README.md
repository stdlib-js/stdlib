<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# isSameValue

> Test if two half-precision floating-point numbers are the same value.

<section class="usage">

## Usage

```javascript
var isSameValue = require( '@stdlib/number/float16/base/assert/is-same-value' );
```

#### isSameValue( a, b )

Tests if two half-precision floating-point numbers `a` and `b` are the same value.

```javascript
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );

var bool = isSameValue( toFloat16( 3.14 ), toFloat16( 3.14 ) );
// returns true

bool = isSameValue( toFloat16( 5.0 ), toFloat16( 3.0 ) );
// returns false
```

In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.

<!-- eslint-disable no-compare-neg-zero, use-isnan, @cspell/spellchecker -->

```javascript
var bool = ( 0.0 === -0.0 );
// returns true

bool = isSameValue( 0.0, -0.0 );
// returns false

bool = isSameValue( -0.0, -0.0 );
// returns true

bool = ( NaN === NaN );
// returns false

bool = isSameValue( NaN, NaN );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function implements the [SameValue Algorithm][ecma-262-same-value-algorithm] as specified in ECMAScript 5.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var isSameValue = require( '@stdlib/number/float16/base/assert/is-same-value' );

var bool = isSameValue( toFloat16( 3.14 ), toFloat16( 3.14 ) );
// returns true

bool = isSameValue( toFloat16( 0.0 ), toFloat16( 0.0 ) );
// returns true

bool = isSameValue( toFloat16( -0.0 ), toFloat16( 0.0 ) );
// returns false

bool = isSameValue( toFloat16( NaN ), toFloat16( NaN ) );
// returns true
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
#include "stdlib/number/float16/base/assert/is_same_value.h"
```

#### stdlib_base_float16_is_same_value( a, b )

Tests if two half-precision floating-point numbers `a` and `b` are the same value.

```c
#include "stdlib/number/float16/ctor.h"
#include <stdbool.h>

stdlib_float16_t x = stdlib_float16_from_bits( 51648 ); // => -11.5
stdlib_float16_t y = stdlib_float16_from_bits( 18880 ); // => 11.5

bool v = stdlib_base_float16_is_same_value( x, x );
// returns true

v = stdlib_base_float16_is_same_value( x, y );
// returns false
```

The function accepts the following arguments:

-   **a**: `[in] stdlib_float16_t` first input value.
-   **b**: `[in] stdlib_float16_t` second input value.

```c
bool stdlib_base_float16_is_same_value( const stdlib_float16_t a, const stdlib_float16_t b );
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
#include "stdlib/number/float16/base/assert/is_same_value.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/number/float32/base/to_float16.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    const float a[] = {
        5.0f,
        -2.0f,
        0.0f,
        0.0f/0.0f
    };
    const float b[] = {
        5.0f,
        2.0f,
        -0.0f,
        0.0f/0.0f
    };

    stdlib_float16_t x;
    stdlib_float16_t y;
    bool v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        x = stdlib_base_float32_to_float16( a[ i ] );
        y = stdlib_base_float32_to_float16( b[ i ] );
        v = stdlib_base_float16_is_same_value( x, y );
        printf( "Same value? %s\n", ( v ) ? "True" : "False" );
    }
}
```

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

[ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12

</section>

<!-- /.links -->
