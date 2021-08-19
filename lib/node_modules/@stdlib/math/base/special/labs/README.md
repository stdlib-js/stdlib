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

# Absolute Value

> Compute an [absolute value][absolute-value] of a signed 32-bit integer.

<section class="intro">

The [absolute value][absolute-value] is defined as

<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

<div class="equation" align="center" data-raw-text="|x| = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ -x &amp; \textrm{if}\ x &lt; 0\end{cases}" data-equation="eq:absolute_value">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@dc413bd931fa2ac3d9d19d2cb44a08dbd5a3e9ad/lib/node_modules/@stdlib/math/base/special/labs/docs/img/equation_absolute_value.svg" alt="Absolute value">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var labs = require( '@stdlib/math/base/special/labs' );
```

#### labs( x )

Computes an [absolute value][absolute-value] of a signed 32-bit integer.

```javascript
var v = labs( -1|0 );
// returns 1

v = labs( 2|0 );
// returns 2

v = labs( 0|0 );
// returns 0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation assumes two's complement.

-   In two's complement systems, the absolute value of the minimum signed 32-bit integer is out-of-range. The absolute value for the minimum signed 32-bit integer is thus undefined.

    ```javascript
    // -2^31
    var x = -2147483648|0;

    var v = labs( x );
    // returns -2147483648
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var labs = require( '@stdlib/math/base/special/labs' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 ) - 50;
    console.log( 'abs(%d) = %d', x, labs( x|0 ) );
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
#include "stdlib/math/base/special/labs.h"
```

#### stdlib_base_labs( x )

Computes the absolute value of a signed 32-bit integer in two's complement format.

```c
#include <stdint.h>

int32_t y = stdlib_base_labs( -5 );
// returns 5
```

The function accepts the following arguments:

-   **x**: `[in] int32_t` input value.

```c
int32_t stdlib_base_labs( const int32_t x );
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
#include "stdlib/math/base/special/labs.h"
#include <stdint.h>
#include <stdio.h>

int main() {
    int32_t x[] = { 3, -3, 0, -10 };

    int32_t y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_labs( x[ i ] );
        printf( "|%i| = %i\n", x[ i ], y );
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
