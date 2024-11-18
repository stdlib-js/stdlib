<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isEvenf

> Test if a finite single-precision floating-point number is an even number.

<section class="usage">

## Usage

```javascript
var isEvenf = require( '@stdlib/math/base/assert/is-evenf' );
```

#### isEvenf( x )

Tests if a **finite** single-precision floating-point number is an even number.

```javascript
var bool = isEvenf( 5.0 );
// returns false

bool = isEvenf( -2.0 );
// returns true

bool = isEvenf( 0.0 );
// returns true

bool = isEvenf( NaN );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes a **finite** `number`. If provided positive or negative `infinity`, the function will return `true`, when, in fact, the result is undefined. If `x` can be `infinite`, wrap the implementation as follows:

    ```javascript
    function check( x ) {
        return (
            x < Infinity &&
            x > -Infinity &&
            isEvenf( x )
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
var randu = require( '@stdlib/random/array/discrete-uniform' );
var isEvenf = require( '@stdlib/math/base/assert/is-evenf' );

var x = randu( 100, 0, 100 );

var i;
for ( i = 0; i < 100; i++ ) {
    console.log( '%d is %s', x[ i ], ( isEvenf( x[ i ] ) ) ? 'even' : 'not even' );
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
#include "stdlib/math/base/assert/is_evenf.h"
```

#### stdlib_base_is_evenf( x )

Tests if a finite single-precision floating-point number is an even number.

```c
#include <stdbool.h>

bool out = stdlib_base_is_evenf( 1.0f );
// returns false

out = stdlib_base_is_evenf( 4.0f );
// returns true
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
bool stdlib_base_is_evenf( const float x );
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
#include "stdlib/math/base/assert/is_evenf.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main( void ) {
    float x;
    bool v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (float)rand() / (float)RAND_MAX ) * 100.0f );
        v = stdlib_base_is_evenf( x );
        printf( "x = %f, is_evenf(x) = %s\n", x, ( v ) ? "even" : "not even" );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
