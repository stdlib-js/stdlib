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

# abs2f

> Compute the squared [absolute value][absolute-value] of a single-precision floating-point number.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var abs2f = require( '@stdlib/math/base/special/abs2f' );
```

#### abs2f( x )

Computes the squared [absolute value][absolute-value] of a single-precision floating-point number.

```javascript
var v = abs2f( -1.0 );
// returns 1.0

v = abs2f( 2.0 );
// returns 4.0

v = abs2f( 0.0 );
// returns 0.0

v = abs2f( -0.0 );
// returns 0.0

v = abs2f( NaN );
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
var abs2f = require( '@stdlib/math/base/special/abs2f' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 ) - 50.0;
    console.log( 'abs2f(%d) = %d', x, abs2f( x ) );
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
#include "stdlib/math/base/special/abs2f.h"
```

#### stdlib_base_abs2f( x )

Computes the squared absolute value of a single-precision floating-point number.

```c
float y = stdlib_base_abs2f( -5.0f );
// returns 25.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_abs2f( const float x );
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
#include "stdlib/math/base/special/abs2f.h"
#include <stdio.h>

int main() {
    float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_abs2f( x[ i ] );
        printf( "abs2f(%f) = %f\n", x[ i ], y );
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
