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

# Signum

> [Signum][signum] function.

<section class="intro">

The [signum][signum] function is defined as

<!-- <equation class="equation" label="eq:signum_function" align="center" raw="\operatorname{sign}(x) := \begin{cases} -1 & \textrm{if}\ x < 0 \\ 0 & \textrm{if}\ x = 0 \\ 1 & \textrm{if}\ x > 0 \end{cases}" alt="Signum function"> -->

<div class="equation" align="center" data-raw-text="\operatorname{sign}(x) := \begin{cases} -1 &amp; \textrm{if}\ x &lt; 0 \\ 0 &amp; \textrm{if}\ x = 0 \\ 1 &amp; \textrm{if}\ x &gt; 0 \end{cases}" data-equation="eq:signum_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/signum/docs/img/equation_signum_function.svg" alt="Signum function">
    <br>
</div>

<!-- </equation> -->

for any real number `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var signum = require( '@stdlib/math/base/special/signum' );
```

#### signum( x )

Evaluates the [signum][signum] function for a double-precision floating-point number.

```javascript
var sign = signum( -5.0 );
// returns -1

sign = signum( 5.0 );
// returns 1

sign = signum( -0.0 );
// returns -0

sign = signum( 0.0 );
// returns 0

sign = signum( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

Table of results:

| Value   | Sign  |
| ------- | ----- |
| `x > 0` | `+1`  |
| `x < 0` | `-1`  |
| `0`     | `0`   |
| `-0`    | `-0`  |
| `NaN`   | `NaN` |

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var signum = require( '@stdlib/math/base/special/signum' );

var sign;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*100.0 ) - 50.0;
    sign = signum( x );
    console.log( 'signum(%d) = %d', x, sign );
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
#include "stdlib/math/base/special/signum.h"
```

#### stdlib_base_signum( x )

Evaluates the [signum][signum] function for a double-precision floating-point number.

```c
double y = stdlib_base_signum( -9.0 );
// returns -1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_signum( const double x );
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
#include "stdlib/math/base/special/signum.h"
#include <stdio.h>

int main() {
    double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_signum( x[ i ] );
        printf( "signum(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[signum]: http://en.wikipedia.org/wiki/Sign_function

</section>

<!-- /.links -->
