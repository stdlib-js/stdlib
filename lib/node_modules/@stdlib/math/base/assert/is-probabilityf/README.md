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

# isProbabilityf

> Test if a single-precision floating-point number is a probability.

<section class="usage">

## Usage

```javascript
var isProbabilityf = require( '@stdlib/math/base/assert/is-probabilityf' );
```

#### isProbabilityf( x )

Tests if a single-precision floating-point number is a probability.

```javascript
var bool = isProbabilityf( 0.5 );
// returns true

bool = isProbabilityf( 3.14 );
// returns false

bool = isProbabilityf( NaN );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var isProbabilityf = require( '@stdlib/math/base/assert/is-probabilityf' );

var bool;
var opts;
var x;
var i;

opts = {
    'dtype': 'float32'
};
x = uniform( 100, -1.0, 1.0, opts );

for ( i = 0; i < 100; i++ ) {
    bool = isProbabilityf( x[ i ] );
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
#include "stdlib/math/base/assert/is_probabilityf.h"
```

#### stdlib_base_is_probabilityf( x )

Tests if a single-precision floating-point number is a probability.

```c
bool out = stdlib_base_is_probabilityf( 0.5f );
// returns true

out = stdlib_base_is_probabilityf( 3.14f );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
bool stdlib_base_is_probabilityf( const float x );
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
#include "stdlib/math/base/assert/is_probabilityf.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main( void ) {
    float x;
    bool v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (float)rand() / (float)RAND_MAX ) * 2.0f ) - 1.0f;
        v = stdlib_base_is_probabilityf( x );
        printf( "%f is %sa probability\n", x, ( v ) ? "" : "not " );
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
