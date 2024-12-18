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

# asecf

> Compute the [inverse (arc) secant][arcsecant] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var asecf = require( '@stdlib/math/base/special/asecf' );
```

#### asecf( x )

Computes the [inverse (arc) secant][arcsecant] of a single-precision floating-point number.

```javascript
var v = asecf( 1.0 );
// returns 0.0

v = asecf( 2.0 );
// returns ~1.0472

v = asecf( NaN );
// returns NaN
```

The domain of `x` is restricted to the intervals `[-inf, -1]` and `[1, inf]`. For `x` outside of these intervals, the function returns `NaN`.

```javascript
var v = asecf( -0.5 );
// returns NaN

v = asecf( 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var asecf = require( '@stdlib/math/base/special/asecf' );

var x = linspace( 1.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( asecf( x[ i ] ) );
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
#include "stdlib/math/base/special/asecf.h"
```

#### stdlib_base_asecf( x )

Computes the [inverse (arc) secant][arcsecant] of a single-precision floating-point number.

```c
float out = stdlib_base_asecf( 2.0f );
// returns ~1.0472f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_asecf( const float x );
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
#include "stdlib/math/base/special/asecf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.56f, 0.56f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_asecf( x[ i ] );
        printf( "asec(%f) = %f\n", x[ i ], v );
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

[arcsecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

</section>

<!-- /.links -->
