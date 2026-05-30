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

# Exponential Function

> [Exponential function][exponential-function] for a single-precision floating-point number.

<section class="intro">

The [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:exponential_function" align="center" raw="y = b^x" alt="Exponential function"> -->

```math
y = b^x
```

<!-- </equation> -->

where `b` is the **base** and `x` is the **exponent**.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var powf = require( '@stdlib/math/base/special/powf' );
```

#### powf( base, exponent )

Evaluates the [exponential function][exponential-function] for a single-precision floating-point number.

```javascript
var v = powf( 2.0, 3.0 );
// returns 8.0

v = powf( 4.0, 0.5 );
// returns 2.0

v = powf( 100.0, 0.0 );
// returns 1.0

v = powf( 3.1415927410125732, 5.0 );
// returns ~306.0197

v = powf( 3.1415927410125732, -0.2 );
// returns ~0.7954

v = powf( NaN, 3.0 );
// returns NaN

v = powf( 5.0, NaN );
// returns NaN

v = powf( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var powf = require( '@stdlib/math/base/special/powf' );

var opts = {
    'dtype': 'float32'
};
var b = discreteUniform( 100, 0, 10, opts );
var x = discreteUniform( 100, -5, 5, opts );

logEachMap( '%d^%d = %0.4f', b, x, powf );
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
#include "stdlib/math/base/special/powf.h"
```

#### stdlib_base_powf( base, exponent )

Evaluates the [exponential function][exponential-function] for a single-precision floating-point number.

```c
float out = stdlib_base_powf( 3.1415927410125732f, 5.0f );
// returns ~306.0197f

out = stdlib_base_powf( 4.0f, 0.5f );
// returns 2.0f
```

The function accepts the following arguments:

-   **base**: `[in] float` base.
-   **exponent**: `[in] float` exponent.

```c
float stdlib_base_powf( const float base, const float exponent );
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
#include "stdlib/math/base/special/powf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float out;
    float b;
    float x;
    int i;

    for ( i = 0; i < 100; i++ ) {
        b = ( ( (float)rand() / (float)RAND_MAX ) * 10.0f );
        x = ( ( (float)rand() / (float)RAND_MAX ) * 10.0f ) - 5.0f;
        out = stdlib_base_powf( b, x );
        printf( "powf(%f, %f) = %f\n", b, x, out );
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

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
