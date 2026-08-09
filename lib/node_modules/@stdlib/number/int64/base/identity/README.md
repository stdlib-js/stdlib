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

# Identity Function

> Evaluate the [identity function][identity-function] for a 64-bit signed integer.

<section class="intro">

The [identity function][identity-function] is defined as

<!-- <equation class="equation" label="eq:identity_function" align="center" raw="f(x) = x" alt="Identity function"> -->

```math
f(x) = x
```

<!-- </equation> -->

for all `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var identity = require( '@stdlib/number/int64/base/identity' );
```

#### identity( x )

Evaluates the [identity function][identity-function] for a 64-bit signed integer.

```javascript
var Int64 = require( '@stdlib/number/int64/ctor' );

var x = new Int64( 1 );
var v = identity( x );
// returns <Int64>[ 1n ]

x = new Int64( 0 );
v = identity( x );
// returns <Int64>[ 0n ]

x = new Int64( 4294967296 );
v = identity( x );
// returns <Int64>[ 4294967296n ]

x = new Int64( -1000000000000 );
v = identity( x );
// returns <Int64>[ -1000000000000n ]
```

The function accepts the following arguments:

-   **x**: `Int64` input value.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var Int64 = require( '@stdlib/number/int64/ctor' );
var identity = require( '@stdlib/number/int64/base/identity' );

// Create an array of random 64-bit signed integers:
var x = [];
var i;
for ( i = 0; i < 10; i++ ) {
    x.push( new Int64( discreteUniform( -500, 500 ) ) );
}

// Perform element-wise operation:
logEachMap( 'identity(%s) = %s', x, identity );
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
#include "stdlib/number/int64/base/identity.h"
```

#### stdlib_base_int64_identity( x )

Evaluates the identity function for a 64-bit signed integer.

```c
#include <stdint.h>

int64_t y = stdlib_base_int64_identity( 2 );
// returns 2
```

The function accepts the following arguments:

-   **x**: `[in] int64_t` input value.

```c
int64_t stdlib_base_int64_identity( const int64_t x );
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
#include "stdlib/number/int64/base/identity.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const int64_t x[] = { 3, 5, 10, 4294967296 };

    int64_t y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_int64_identity( x[ i ] );
        printf( "f(%ld) = %ld\n", x[ i ], y );
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
