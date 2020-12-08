<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Cube Root

> Compute the [cube root][cube-root] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var cbrtf = require( '@stdlib/math/base/special/cbrtf' );
```

#### cbrtf( x )

Computes the [cube root][cube-root] of a single-precision floating-point number.

```javascript
var v = cbrtf( 64.0 );
// returns 4.0

v = cbrtf( 27.0 );
// returns 3.0

v = cbrtf( 0.0 );
// returns 0.0

v = cbrtf( -0.0 );
// returns -0.0

v = cbrtf( -9.0 );
// returns ~-2.08

v = cbrtf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cbrtf = require( '@stdlib/math/base/special/cbrtf' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*200.0) - 100.0;
    console.log( 'cbrt(%d) = %d', x, cbrtf( x ) );
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
#include "stdlib/math/base/special/cbrtf.h"
```

#### stdlib_base_cbrtf( x )

Computes the cube root of a single-precision floating-point number.

```c
float y = stdlib_base_cbrtf( 27.0f );
// returns 3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_cbrtf( const float x );
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
#include "stdlib/math/base/special/cbrtf.h"
#include <stdio.h>

int main() {
    float x[] = { 3.14f, 9.00f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_cbrtf( x[ i ] );
        printf( "cbrt(%f) = %f\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[cube-root]: https://en.wikipedia.org/wiki/Cube_root

</section>

<!-- /.links -->
