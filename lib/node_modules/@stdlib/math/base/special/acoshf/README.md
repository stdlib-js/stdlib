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

# acoshf

> Compute the [hyperbolic arccosine][hyperbolic-arccosine] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acoshf = require( '@stdlib/math/base/special/acoshf' );
```

#### acoshf( x )

Computes the [hyperbolic arccosine][hyperbolic-arccosine] of a single-precision floating-point number.

```javascript
var v = acoshf( 1.0 );
// returns 0.0

v = acoshf( 2.0 );
// returns ~1.317

v = acoshf( 0.5 );
// returns NaN
```

The domain of `x` is restricted to `[1,+infinity)`. If `x < 1`, the function will return `NaN`.

```javascript
var v = acoshf( 0.0 );
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
var acoshf = require( '@stdlib/math/base/special/acoshf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, 1.0, 100.0, opts );

logEachMap( 'acoshf(%0.4f) = %0.4f', x, acoshf );
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
#include "stdlib/math/base/special/acoshf.h"
```

#### stdlib_base_acoshf( x )

Computes the [hyperbolic arccosine][hyperbolic-arccosine] of a single-precision floating-point number.

```c
float out = stdlib_base_acoshf( 1.0f );
// returns 0.0f

out = stdlib_base_acoshf( 2.0f );
// returns ~1.317f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_acoshf( const float x );
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
#include "stdlib/math/base/special/acoshf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float x;
    float v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (float)rand() / (float)RAND_MAX ) * 100.0f;
        v = stdlib_base_acoshf( x );
        printf( "acoshf(%f) = %f\n", x, v );
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

[hyperbolic-arccosine]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

</section>

<!-- /.links -->
