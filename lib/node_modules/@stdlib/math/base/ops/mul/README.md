<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# mul

> Multiply two double-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mul = require( '@stdlib/math/base/ops/mul' );
```

#### mul( x, y )

Multiplies two double-precision floating-point numbers.

```javascript
var v = mul( -1.0, 5.0 );
// returns -5.0

v = mul( 2.0, 5.0 );
// returns 10.0

v = mul( 0.0, 5.0 );
// returns 0.0

v = mul( -0.0, 0.0 );
// returns -0.0

v = mul( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var rand = require( '@stdlib/random/base/discrete-uniform' );
var mul = require( '@stdlib/math/base/ops/mul' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = rand( -50, 50 );
    y = rand( -50, 50 );
    console.log( '%d x %d = %d', x, y, mul( x, y ) );
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
#include "stdlib/math/base/ops/mul.h"
```

#### stdlib_base_mul( x, y )

Multiplies two double-precision floating-point numbers.

```c
double v = stdlib_base_mul( -5.0, 2.0 );
// returns -10.0
```

The function accepts the following arguments:

-   **x**: `[in] double` first input value.
-   **y**: `[in] double` second input value.

```c
double stdlib_base_mul( const double x, const double y );
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
#include "stdlib/math/base/ops/mul.h"
#include <stdio.h>

int main() {
    double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };
    double y[] = { 3.14, -3.14, -0.0, 0.0/0.0 };

    double z;
    int i;
    for ( i = 0; i < 4; i++ ) {
        z = stdlib_base_mul( x[ i ], y[ i ] );
        printf( "%lf x %lf = %lf\n", x[ i ], y[ i ], z );
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

</section>

<!-- /.links -->
