<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# abs2

> Compute the squared [absolute value][absolute-value] of a double-precision floating-point number.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var abs2 = require( '@stdlib/math/base/special/abs2' );
```

#### abs2( x )

Computes the squared [absolute value][absolute-value] of a double-precision floating-point number.

```javascript
var v = abs2( -1.0 );
// returns 1.0

v = abs2( 2.0 );
// returns 4.0

v = abs2( 0.0 );
// returns 0.0

v = abs2( -0.0 );
// returns 0.0

v = abs2( NaN );
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
var abs2 = require( '@stdlib/math/base/special/abs2' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 ) - 50.0;
    console.log( 'abs2(%d) = %d', x, abs2( x ) );
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
#include "stdlib/math/base/special/abs2.h"
```

#### stdlib_base_abs2( x )

Computes the squared absolute value of a double-precision floating-point number.

```c
double y = stdlib_base_abs2( -5.0 );
// returns 25.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_abs2( const double x );
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
#include "stdlib/math/base/special/abs2.h"
#include <stdio.h>

int main() {
    double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_abs2( x[ i ] );
        printf( "abs2(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

</section>

<!-- /.links -->
