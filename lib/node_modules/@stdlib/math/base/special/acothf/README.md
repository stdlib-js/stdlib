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

# acothf

> Compute the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acothf = require( '@stdlib/math/base/special/acothf' );
```

#### acothf( x )

Computes the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a single-precision floating-point number.

```javascript
var v = acothf( 2.0 );
// returns ~0.5493

v = acothf( 1.0 );
// returns Infinity
```

The domain of the inverse hyperbolic cotangent is the union of the intervals `(-inf,-1]` and `[1,inf)`. If provided a value on the open interval `(-1,1)`, the function returns `NaN`.

```javascript
var v = acothf( 0.0 );
// returns NaN

v = acothf( 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var acothf = require( '@stdlib/math/base/special/acothf' );

var x = uniform( 100, 1.0, 5.0, {
    'dtype': 'float32'
});

logEachMap( 'acothf(%0.4f) = %0.4f', x, acothf );
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
#include "stdlib/math/base/special/acothf.h"
```

#### stdlib_base_acothf( x )

Computes the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a single-precision floating-point number.

```c
float out = stdlib_base_acothf( 2.0f );
// returns ~0.5493f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_acothf( const float x );
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
#include "stdlib/math/base/special/acothf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 1.0f, 1.44f, 1.89f, 2.33f, 2.78f, 3.22f, 3.67f, 4.11f, 4.56f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acothf( x[ i ] );
        printf( "acothf(%f) = %f\n", x[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-arctangent]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
