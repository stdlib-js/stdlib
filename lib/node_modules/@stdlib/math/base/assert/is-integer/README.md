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

# isInteger

> Test if a finite [double-precision floating-point number][ieee754] is an integer.

<section class="usage">

## Usage

```javascript
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
```

#### isInteger( x )

Tests if a finite [double-precision floating-point number][ieee754] is an integer.

```javascript
var bool = isInteger( 1.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes a **finite** number. If provided positive or negative `infinity`, the function will return `true`, when, in fact, the result is undefined. If `x` can be `infinite`, wrap the implementation as follows:

    ```javascript
    function check( x ) {
        return (
            x < Infinity &&
            x > -Infinity &&
            isInteger( x )
        );
    }

    var bool = check( Infinity );
    // returns false

    bool = check( -Infinity );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isInteger = require( '@stdlib/math/base/assert/is-integer' );

var bool = isInteger( -5.0 );
// returns true

bool = isInteger( 3.14 );
// returns false

bool = isInteger( NaN );
// returns false
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
#include "stdlib/math/base/assert/is_integer.h"
```

#### stdlib_base_is_integer( x )

Tests if a finite [double-precision floating-point number][ieee754] is an integer.

```c
bool out = stdlib_base_is_integer( 1.0 );
// returns true

out = stdlib_base_is_integer( 3.14 );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
bool stdlib_base_is_integer( const double x );
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
#include "stdlib/math/base/assert/is_integer.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main( void ) {
    double x;
    bool v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 100.0 ) - 50.0;
        v = stdlib_base_is_integer( x );
        printf( "x = %lf, is_integer(x) = %s\n", x, ( v ) ? "true" : "false" );
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

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
