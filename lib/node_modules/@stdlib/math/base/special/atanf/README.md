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

# atanf

> Compute the [arctangent][arctangent] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var atanf = require( '@stdlib/math/base/special/atanf' );
```

#### atanf( x )

Computes the [arctangent][arctangent] of a single-precision floating-point number (in radians).

```javascript
var v = atanf( 0.0 );
// returns 0.0

v = atanf( -3.14/4.0 );
// returns ~-0.666
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var atanf = require( '@stdlib/math/base/special/atanf' );

var x = linspace( -1.0, 1.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( atanf( x[ i ] ) );
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
#include "stdlib/math/base/special/atanf.h"
```

#### stdlib_base_atanf( x )

Computes the [arctangent][arctangent] of a single-precision floating-point number (in radians).

```c
float out = stdlib_base_atanf( 0.0f );
// returns 0.0f

out = stdlib_base_atanf( -3.14f/4.0f );
// returns ~-0.666f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value (in radians).

```c
float stdlib_base_atanf( const float x );
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
#include "stdlib/math/base/special/atanf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -1000.0f, -777.78f, -555.56f, -333.33f, -111.11f, 111.11f, 333.33f, 555.56f, 777.78f, 1000.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_atanf( x[ i ] );
        printf( "atan(%f) = %f\n", x[ i ], v );
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

[arctangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

</section>

<!-- /.links -->
