<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# isProbability

> Test if a double-precision floating-point number is a probability.

<section class="usage">

## Usage

```javascript
var isProbability = require( '@stdlib/math/base/assert/is-probability' );
```

#### isProbability( x )

Tests if a double-precision floating-point number is a probability.

```javascript
var bool = isProbability( 0.5 );
// returns true

bool = isProbability( 3.14 );
// returns false

bool = isProbability( NaN );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var isProbability = require( '@stdlib/math/base/assert/is-probability' );

var bool;
var len;
var x;
var i;

len = 100;
x = uniform( len, -1.0, 1.0 );

for ( i = 0; i < 100; i++ ) {
    bool = isProbability( x[ i ] );
    console.log( '%d is %s', x[ i ], ( bool ) ? 'a probability' : 'not a probability' );
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
#include "stdlib/math/base/assert/is_probability.h"
```

#### stdlib_base_is_probability( x )

Tests if a double-precision floating-point number is a probability.

```c
bool out = stdlib_base_is_probability( 0.5 );
// returns true

out = stdlib_base_is_probability( 3.14 );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
bool stdlib_base_is_probability( const double x );
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
#include "stdlib/math/base/assert/is_probability.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main( void ) {
    double x;
    bool v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 2.0 ) - 1.0;
        v = stdlib_base_is_probability( x );
        printf( "%lf is %sa probability\n", x, ( v ) ? "" : "not " );
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
