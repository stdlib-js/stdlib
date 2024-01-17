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

# isSameValue

> Test whether two double-precision complex floating-point numbers are the same value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isSameValue = require( '@stdlib/complex/base/assert/is-same-value' );
```

#### isSameValue( z1, z2 )

Tests whether two double-precision complex floating-point numbers are the same value.

```javascript
var Complex128 = require( '@stdlib/complex/float64' );

var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( 5.0, 3.0 );

var out = isSameValue( z1, z2 );
// returns true
```

In contract to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.

```javascript
var Complex128 = require( '@stdlib/complex/float64' );

var z1 = new Complex128( NaN, NaN );
var z2 = new Complex128( NaN, NaN );

var out = isSameValue( z1, z2 );
// returns true

z1 = new Complex128( -0.0, 0.0 );
z2 = new Complex128( 0.0, -0.0 );

out = isSameValue( z1, z2 );
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
var Complex128 = require( '@stdlib/complex/float64' );
var isSameValue = require( '@stdlib/complex/base/assert/is-same-value' );

var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( 5.0, 3.0 );
var out = isSameValue( z1, z2 );
// returns true

z1 = new Complex128( -5.0, -3.0 );
z2 = new Complex128( 5.0, 3.0 );
out = isSameValue( z1, z2 );
// returns false

z1 = new Complex128( NaN, 3.0 );
z2 = new Complex128( NaN, 3.0 );
out = isSameValue( z1, z2 );
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
#include "stdlib/complex/base/assert/is_same_value.h"
```

#### stdlib_base_complex128_is_same_value( z1, z2 )

Tests whether two double-precision complex floating-point numbers are the same value.

```c
#include "stdlib/complex/float64.h"
#include <stdbool.h>

stdlib_complex128_t z1 = stdlib_complex128( 5.0, 2.0 );
stdlib_complex128_t z2 = stdlib_complex128( 5.0, 2.0 );

bool v = stdlib_base_complex128_is_same_value( z1, z2 );
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex128_t` first double-precision complex floating-point number.
-   **z2**: `[in] stdlib_complex128_t` second double-precision complex floating-point number.

```c
bool stdlib_base_complex128_is_same_value( const stdlib_complex128_t z1, const stdlib_complex128_t z2 );
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
#include "stdlib/complex/base/assert/is_same_value.h"
#include "stdlib/complex/float64.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t z[] = {
        stdlib_complex128( 5.0, 2.0 ),
        stdlib_complex128( -2.0, 1.0 ),
        stdlib_complex128( 0.0, -0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    bool v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = stdlib_base_complex128_is_same_value( z[ i ], z[ i ] );
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
