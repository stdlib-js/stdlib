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

# clampf

> Restrict a single-precision floating-point number to a specified range.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var clampf = require( '@stdlib/math/base/special/clampf' );
```

#### clampf( v, min, max )

Restricts a single-precision floating-point number to a specified range.

```javascript
var v = clampf( 3.0, 0.0, 5.0 );
// returns 3.0

v = clampf( -3.0, 0.0, 5.0 );
// returns 0.0

v = clampf( 10.0, 0.0, 5.0 );
// returns 5.0

v = clampf( -0.0, 0.0, 5.0 );
// returns 0.0

v = clampf( 0.0, -3.0, -0.0 );
// returns -0.0
```

If provided `NaN` for any argument, the function returns `NaN`.

```javascript
var v = clampf( NaN, 0.0, 5.0 );
// returns NaN

v = clampf( 0.0, NaN, 5.0 );
// returns NaN

v = clampf( 3.14, 0.0, NaN );
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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var clampf = require( '@stdlib/math/base/special/clampf' );

var min;
var max;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    min = discreteUniform( 0.0, 10.0 );
    max = discreteUniform( 5.0, 15.0 );
    v = discreteUniform( -20.0, 20.0 );
    console.log( 'clampf(%d,%d,%d) => %d', v, min, max, clampf( v, min, max ) );
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
#include "stdlib/math/base/special/clampf.h"
```

#### stdlib_base_clampf( v, min, max )

Restricts a single-precision floating-point number to a specified range.

```c
float y = stdlib_base_clampf( -3.14f, 0.0f, 5.0f );
// returns 0.0f
```

The function accepts the following arguments:

-   **v**: `[in] float` input value.
-   **min**: `[in] float` minimum value.
-   **max**: `[in] float` maximum value.

```c
float stdlib_base_clampf( const float v, const float min, const float max );
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
#include "stdlib/math/base/special/clampf.h"
#include <stdio.h>

int main() {
    float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_clampf( x[ i ], -3.0f, 3.0f );
        printf( "clamp(%f, %f, %f) = %f\n", x[ i ], -3.0f, 3.0f, y );
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

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
