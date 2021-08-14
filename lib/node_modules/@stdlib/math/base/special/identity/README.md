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

# Identity Function

> Evaluate the [identity function][identity-function] of a double-precision floating-point number.

<section class="intro">

The [identity-function][identity-function] is defined as

<!-- <equation class="equation" label="eq:identity_function" align="center" raw="f(x) = x" alt="Identity function"> -->

<div class="equation" align="center" data-raw-text="f(x) = x" data-equation="eq:identity_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ad7afa5d7ec1b1596f8a4828153d8c2e87a90161/lib/node_modules/@stdlib/math/base/special/identity/docs/img/equation_identity_function.svg" alt="Identity function">
    <br>
</div>

<!-- </equation> -->

for all `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var identity = require( '@stdlib/math/base/special/identity' );
```

#### identity( x )

Evaluates the [identity function][identity-function] for a double-precision floating-point number.

```javascript
var v = identity( -1.0 );
// returns -1.0

v = identity( 2.0 );
// returns 2.0

v = identity( 0.0 );
// returns 0.0

v = identity( -0.0 );
// returns -0.0

v = identity( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var identity = require( '@stdlib/math/base/special/identity' );

var rand;
var i;

for ( i = 0; i < 100; i++ ) {
    rand = round( randu() * 100.0 ) - 50.0;
    console.log( 'identity(%d) = %d', rand, identity( rand ) );
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
#include "stdlib/math/base/special/identity.h"
```

#### stdlib_base_identity( x )

Evaluates the identity function for a double-precision floating-point number.

```c
double y = stdlib_base_identity( 2.0 );
// returns 2.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_identity( const double x );
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
#include "stdlib/math/base/special/identity.h"
#include <stdio.h>

int main() {
    double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_identity( x[ i ] );
        printf( "f(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[identity-function]: https://en.wikipedia.org/wiki/Identity_function

</section>

<!-- /.links -->
