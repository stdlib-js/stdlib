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

# Heaviside Function

> Evaluate the [Heaviside function][heaviside-function] for a single-precision floating-point number.

<section class="intro">

The [Heaviside function][heaviside-function] is defined as

<!-- <equation class="equation" label="eq:heaviside_function" align="center" raw="H(x) = \begin{cases} 1 & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function."> -->

```math
H(x) = \begin{cases} 1 & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} 1 &amp; \textrm{if}\ x \gt 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function.svg" alt="Heaviside function.">
    <br>
</div> -->

<!-- </equation> -->

and is discontinuous at `0`. Depending on the context, the [Heaviside function][heaviside-function] may be defined as a continuous function. To define the [Heaviside function][heaviside-function] such that the function has rotational symmetry,

<!-- <equation class="equation" label="eq:heaviside_function_half_maximum" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ \frac{1}{2} & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function half-maximum."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ \frac{1}{2} & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \gt 0 \\ \frac{1}{2} &amp; \textrm{if}\ x = 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function_half_maximum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_half_maximum.svg" alt="Heaviside function half-maximum.">
    <br>
</div> -->

<!-- </equation> -->

To define the [Heaviside function][heaviside-function] as a left-continuous function,

<!-- <equation class="equation" label="eq:heaviside_function_left_continuous" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \leq 0\end{cases}" alt="Heaviside function left-continuous."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \leq 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \gt 0 \\ 0 &amp; \textrm{if}\ x \leq 0\end{cases}" data-equation="eq:heaviside_function_left_continuous">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_left_continuous.svg" alt="Heaviside function left-continuous.">
    <br>
</div> -->

<!-- </equation> -->

To define the [Heaviside function][heaviside-function] as a right-continuous function,

<!-- <equation class="equation" label="eq:heaviside_function_right_continuous" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function right-continuous."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function_right_continuous">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_right_continuous.svg" alt="Heaviside function right-continuous.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var heavisidef = require( '@stdlib/math/base/special/heavisidef' );
```

#### heavisidef( x\[, continuity] )

Evaluates the [Heaviside function][heaviside-function] for a single-precision floating-point number.

```javascript
var v = heavisidef( 3.14 );
// returns 1.0

v = heavisidef( -3.14 );
// returns 0.0

v = heavisidef( NaN );
// returns NaN
```

The `continuity` parameter may be one of the following values:

-   `'half-maximum'`: if `x == 0`, the function returns `0.5`.
-   `'left-continuous'`: if `x == 0`, the function returns `0.0`.
-   `'right-continuous'`: if `x == 0`, the function returns `1.0`.

By default, the function is discontinuous at `0`.

```javascript
var v = heavisidef( 0.0 );
// returns NaN
```

To define the [Heaviside function][heaviside-function] as a continuous function, set the `continuity` parameter.

```javascript
var v = heavisidef( 0.0, 'half-maximum' );
// returns 0.5

v = heavisidef( 0.0, 'left-continuous' );
// returns 0.0

v = heavisidef( 0.0, 'right-continuous' );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var heavisidef = require( '@stdlib/math/base/special/heavisidef' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'H(%0.4f) = %0.4f', x, heavisidef );
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
#include "stdlib/math/base/special/heavisidef.h"
```

#### stdlib_base_heavisidef( x, continuity )

Evaluates the [Heaviside function][heaviside-function] for a single-precision floating-point number.

```c
float y = stdlib_base_heavisidef( 0.0f, STDLIB_BASE_HEAVISIDEF_CONTINUITY_HALF_MAXIMUM );
// returns 0.5f

y = stdlib_base_heavisidef( 0.0f, STDLIB_BASE_HEAVISIDEF_CONTINUITY_LEFT_CONTINUOUS );
// returns 0.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **continuity**: `[in] enum STDLIB_BASE_HEAVISIDEF_CONTINUITY` continuity option.

The `continuity` parameter may be one of the following values:

-   `STDLIB_BASE_HEAVISIDEF_CONTINUITY_HALF_MAXIMUM`: if `x == 0`, the function returns `0.5`.
-   `STDLIB_BASE_HEAVISIDEF_CONTINUITY_LEFT_CONTINUOUS`: if `x == 0`, the function returns `0.0`.
-   `STDLIB_BASE_HEAVISIDEF_CONTINUITY_RIGHT_CONTINUOUS`: if `x == 0`, the function returns `1.0`.
-   `STDLIB_BASE_HEAVISIDEF_CONTINUITY_DISCONTINUOUS`: if `x == 0`, the function returns `NaN`.

If provided a `continuity` argument which is not one of the enumeration constants listed above, the function returns `NaN` for `x == 0`, behaving like the discontinuous case.

```c
float stdlib_base_heavisidef( const float x, const enum STDLIB_BASE_HEAVISIDEF_CONTINUITY continuity );
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
#include "stdlib/math/base/special/heavisidef.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -4.0f, -3.0f, -2.0f, -1.0f, 0.0f, 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };

    float y;
    int i;
    for ( i = 0; i < 10; i++ ) {
        y = stdlib_base_heavisidef( x[ i ], STDLIB_BASE_HEAVISIDEF_CONTINUITY_HALF_MAXIMUM );
        printf( "H(%f) = %f\n", x[ i ], y );
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

[heaviside-function]: https://en.wikipedia.org/wiki/Heaviside_step_function

</section>

<!-- /.links -->
