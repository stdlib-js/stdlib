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

# Identity Function

> Evaluate the [identity function][identity-function] of a signed 16-bit integer.

<section class="intro">

The [identity-function][identity-function] is defined as

<!-- <equation class="equation" label="eq:identity_function" align="center" raw="f(x) = x" alt="Identity function"> -->

```math
f(x) = x
```

<!-- <div class="equation" align="center" data-raw-text="f(x) = x" data-equation="eq:identity_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ad7afa5d7ec1b1596f8a4828153d8c2e87a90161/lib/node_modules/@stdlib/number/int16/base/identity/docs/img/equation_identity_function.svg" alt="Identity function">
    <br>
</div> -->

<!-- </equation> -->

for all `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var identity = require( '@stdlib/number/int16/base/identity' );
```

#### identity( x )

Evaluates the [identity function][identity-function] for a signed 16-bit integer.

```javascript
var v = identity( 1 );
// returns 1

v = identity( 2 );
// returns 2

v = identity( 0 );
// returns 0

v = identity( 32767 );
// returns 32767
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var identity = require( '@stdlib/number/int16/base/identity' );

var opts = {
    'dtype': 'int16'
};

// Create an array of random values:
var x = discreteUniform( 100, 0, 50, opts );

// Perform element-wise operation:
logEachMap( 'identity(%d) = %d', x, identity );
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
#include "stdlib/number/int16/base/identity.h"
```

#### stdlib_base_int16_identity( x )

Evaluates the identity function for a signed 16-bit integer.

```c
#include <stdint.h>

int16_t y = stdlib_base_int16_identity( 2 );
// returns 2
```

The function accepts the following arguments:

-   **x**: `[in] int16_t` input value.

```c
int16_t stdlib_base_int16_identity( const int16_t x );
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
#include "stdlib/number/int16/base/identity.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    const int16_t x[] = { 3, 5, 10, 12 };

    int16_t y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_int16_identity( x[ i ] );
        printf( "f(%d) = %d\n", x[ i ], y );
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

[identity-function]: https://en.wikipedia.org/wiki/Identity_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
