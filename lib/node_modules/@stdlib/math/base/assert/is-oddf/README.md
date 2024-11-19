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

# isOddf

> Test if a finite single-precision floating-point number is an odd number.

<section class="usage">

## Usage

```javascript
var isOddf = require( '@stdlib/math/base/assert/is-oddf' );
```

#### isOddf( x )

Tests if a **finite** single-precision floating-point number is an odd number.

```javascript
var bool = isOddf( 5.0 );
// returns true

bool = isOddf( -2.0 );
// returns false

bool = isOddf( 0.0 );
// returns false

bool = isOddf( NaN );
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
            isOddf( x )
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
var isOddf = require( '@stdlib/math/base/assert/is-oddf' );

var x = randu( 100, 0, 100 );

var i;
for ( i = 0; i < 100; i++ ) {
    console.log( '%d is %s', x[ i ], ( isOddf( x[ i ] ) ) ? 'odd' : 'not odd' );
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
#include "stdlib/math/base/assert/is_oddf.h"
```

#### stdlib_base_is_oddf( x )

Tests if a finite single-precision floating-point number is an odd number.

```c
#include <stdbool.h>

bool out = stdlib_base_is_oddf( 1.0 );
// returns true

out = stdlib_base_is_oddf( 4.0 );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
bool stdlib_base_is_oddf( const float x );
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
#include "stdlib/math/base/assert/is_oddf.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
    const float x[] = { 5.0f, -5.0f, 3.14f, -3.14f, 0.0f, 0.0f / 0.0f };

    bool b;
    int i;
    for ( i = 0; i < 6; i++ ) {
        b = stdlib_base_is_oddf( x[ i ] );
        printf( "Value: %f. Is Odd? %s.\n", x[ i ], ( b ) ? "True" : "False" );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
