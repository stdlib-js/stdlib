<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# rempio2f

> Compute `x - nπ/2 = r` (single-precision).

<section class="usage">

## Usage

```javascript
var rempio2f = require( '@stdlib/math/base/special/rempio2f' );
```

#### rempio2f( x, y )

Computes `x - nπ/2 = r`.

```javascript
var y = [ 0.0 ];
var n = rempio2f( 128.0, y );
// returns 81

var y1 = y[ 0 ];
// returns ~0.765
```

When `x` is `NaN` or infinite, the function returns `0` and sets `y[0]` to `NaN`.

```javascript
var y = [ 0.0 ];
var n = rempio2f( NaN, y );
// returns 0

var y1 = y[ 0 ];
// returns NaN

y = [ 0.0 ];
n = rempio2f( Infinity, y );
// returns 0

y1 = y[ 0 ];
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns `n` and stores the remainder `r` as `y[0]`.
-   For input values larger than `2^28*π/2` in magnitude, the function **only** returns the last three binary digits of `n` and not the full result.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var rempio2f = require( '@stdlib/math/base/special/rempio2f' );

var x = linspace( 0.0, 100.0, 100 );
var y = [ 0.0 ];
var n;
var i;

for ( i = 0; i < x.length; i++ ) {
    n = rempio2f( x[ i ], y );
    console.log( '%d - %dπ/2 = %d', x[ i ], n, y[ 0 ] );
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
#include "stdlib/math/base/special/rempio2f.h"
```

#### stdlib_base_rempio2f( x, &rem )

Computes `x - nπ/2 = r` (single-precision).

```c
#include <stdint.h>

double rem;

int32_t n = stdlib_base_rempio2f( 4.0f, &rem );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **rem**: `[out] double*` destination for the remainder.

```c
int32_t stdlib_base_rempio2f( const float x, double *rem );
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
#include "stdlib/math/base/special/rempio2f.h"
#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>

int main( void ) {
    const float x[] = { 0.0f, 1.0f, 4.0f, 128.0f };

    double rem;
    int32_t n;
    int i;
    for ( i = 0; i < 4; i++ ) {
        n = stdlib_base_rempio2f( x[ i ], &rem );
        printf( "%f - %"PRId32"π/2 = %lf\n", x[ i ], n, rem );
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
