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

# minabsf

> Return the minimum absolute single-precision floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minabsf = require( '@stdlib/math/base/special/minabsf' );
```

#### minabsf( x, y )

Returns the minimum absolute single-precision floating-point number.

```javascript
var v = minabsf( -4.0, 3.0 );
// returns 3.0

v = minabsf( +0.0, -0.0 );
// returns +0.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = minabsf( 4.2, NaN );
// returns NaN

v = minabsf( NaN, 3.14 );
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
var randu = require( '@stdlib/random/array/uniform' );
var minabsf = require( '@stdlib/math/base/special/minabsf' );

var opts = {
    'dtype': 'float32'
};

var x = randu( 100, -500.0, 500.0, opts );
var y = randu( 100, -500.0, 500.0, opts );

var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = minabsf( x[ i ], y[ i ] );
    console.log( 'minabsf(%d,%d) = %d', x[ i ], y[ i ], v );
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
#include "stdlib/math/base/special/minabsf.h"
```

#### stdlib_base_minabsf( x, y )

Returns the minimum absolute single-precision floating-point number.

```c
float out = stdlib_base_minabsf( -4.2f, 3.14f );
// returns 3.14f

out = stdlib_base_minabsf( 0.0f, -0.0f );
// returns +0.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **y**: `[in] float` input value.

```c
float stdlib_base_minabsf( const float x, const float y );
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
#include "stdlib/math/base/special/minabsf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float x;
    float y;
    float v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (float)rand() / (float)RAND_MAX ) * 1000.0f ) - 500.0f;
        y = ( ( (float)rand() / (float)RAND_MAX ) * 1000.0f ) - 500.0f;
        v = stdlib_base_minabsf( x, y );
        printf( "x: %f, y: %f, minabsf(x, y): %f\n", x, y, v );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
