<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isSameValuef

> Test whether two single-precision complex floating-point numbers are the same value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isSameValuef = require( '@stdlib/complex/float32/base/assert/is-same-value' );
```

#### isSameValuef( z1, z2 )

Tests whether two single-precision complex floating-point numbers are the same value.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var z1 = new Complex64( 5.0, 3.0 );
var z2 = new Complex64( 5.0, 3.0 );

var out = isSameValuef( z1, z2 );
// returns true
```

In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var z1 = new Complex64( NaN, NaN );
var z2 = new Complex64( NaN, NaN );

var out = isSameValuef( z1, z2 );
// returns true

z1 = new Complex64( -0.0, 0.0 );
z2 = new Complex64( 0.0, -0.0 );

out = isSameValuef( z1, z2 );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function implements the [SameValue Algorithm][ecma-262-same-value-algorithm] as specified in ECMAScript 5.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var isSameValuef = require( '@stdlib/complex/float32/base/assert/is-same-value' );

var z1 = new Complex64( 5.0, 3.0 );
var z2 = new Complex64( 5.0, 3.0 );
var out = isSameValuef( z1, z2 );
// returns true

z1 = new Complex64( -5.0, -3.0 );
z2 = new Complex64( 5.0, 3.0 );
out = isSameValuef( z1, z2 );
// returns false

z1 = new Complex64( NaN, 3.0 );
z2 = new Complex64( NaN, 3.0 );
out = isSameValuef( z1, z2 );
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
#include "stdlib/complex/float32/base/assert/is_same_value.h"
```

#### stdlib_base_complex64_is_same_value( z1, z2 )

Tests whether two single-precision complex floating-point numbers are the same value.

```c
#include "stdlib/complex/float32/ctor.h"
#include <stdbool.h>

stdlib_complex64_t z1 = stdlib_complex64( 5.0f, 2.0f );
stdlib_complex64_t z2 = stdlib_complex64( 5.0f, 2.0f );

bool v = stdlib_base_complex64_is_same_value( z1, z2 );
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex64_t` first single-precision complex floating-point number.
-   **z2**: `[in] stdlib_complex64_t` second single-precision complex floating-point number.

```c
bool stdlib_base_complex64_is_same_value( const stdlib_complex64_t z1, const stdlib_complex64_t z2 );
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
#include "stdlib/complex/float32/base/assert/is_same_value.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t z[] = {
        stdlib_complex64( 5.0f, 2.0f ),
        stdlib_complex64( -2.0f, 1.0f ),
        stdlib_complex64( 0.0f, -0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    bool v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = stdlib_base_complex64_is_same_value( z[ i ], z[ i ] );
        printf( "Same value? %s\n", ( v ) ? "True" : "False" );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12

</section>

<!-- /.links -->
