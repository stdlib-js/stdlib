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

# isNegativeIntegerf

> Test if a finite single-precision floating-point number is a negative integer.

<section class="usage">

## Usage

```javascript
var isNegativeIntegerf = require( '@stdlib/math/base/assert/is-negative-integerf' );
```

#### isNegativeIntegerf( x )

Tests if a finite single-precision floating-point number is a negative integer.

```javascript
var bool = isNegativeIntegerf( -1.0 );
// returns true

bool = isNegativeIntegerf( 0.0 );
// returns false

bool = isNegativeIntegerf( 10.0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes a **finite** `number`. If provided negative `infinity`, the function will return `true`, when, in fact, the result is undefined. If `x` can be `infinite`, wrap the implementation as follows:

    ```javascript
    function check( x ) {
        return (
            x > -Infinity &&
            isNegativeIntegerf( x )
        );
    }

    var bool = check( -Infinity );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isNegativeIntegerf = require( '@stdlib/math/base/assert/is-negative-integerf' );

var bool = isNegativeIntegerf( -5.0 );
// returns true

bool = isNegativeIntegerf( 5.0 );
// returns false

bool = isNegativeIntegerf( -3.14 );
// returns false

bool = isNegativeIntegerf( 0.0 );
// returns false

bool = isNegativeIntegerf( NaN );
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
#include "stdlib/math/base/assert/is_negative_integerf.h"
```

#### stdlib_base_is_negative_integerf( x )

Tests if a finite single-precision floating-point number is a negative integer.

```c
bool out = stdlib_base_is_negative_integerf( -1.0f );
// returns true

out = stdlib_base_is_negative_integerf( 0.0f );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
bool stdlib_base_is_negative_integerf( const float x );
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
#include "stdlib/math/base/assert/is_negative_integerf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 5.0f, -5.0f, 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    bool b;
    int i;
    for ( i = 0; i < 6; i++ ) {
        b = stdlib_base_is_negative_integerf( x[i] );
        printf( "Value: %f. Is negative integer? %s.\n", x[i], ( b ) ? "True" : "False" );
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
