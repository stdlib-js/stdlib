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

# nanmin

> Return the minimum value, ignoring NaN.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

<!-- <equation class="equation" label="eq:nanmin_function" align="center" raw="\operatorname{nanmin}(x, y) = \begin{cases} y & \textrm{if}\ x = \text{NaN} \\ x & \textrm{if}\ y = \text{NaN} \\ \min(x, y) & \textrm{otherwise} \end{cases}" alt="Minimum value ignoring NaN"> -->

```math
\mathop{\mathrm{nanmin}}(x, y) = \begin{cases} y & \textrm{if}\ x = \text{NaN} \\ x & \textrm{if}\ y = \text{NaN} \\ \min(x, y) & \textrm{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{nanmin}(x, y) = \begin{cases} y &amp; \textrm{if}\ x = \text{NaN} \\ x &amp; \textrm{if}\ y = \text{NaN} \\ \min(x, y) &amp; \textrm{otherwise} \end{cases}" data-equation="eq:nanmin_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@85f48534ef6908bbcd982d48f1c5fbea3fb7aafd/lib/node_modules/@stdlib/math/base/special/nanmin/docs/img/equation_nanmin_function.svg" alt="Minimum value ignoring NaN">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nanmin = require( '@stdlib/math/base/special/nanmin' );
```

#### nanmin( x, y )

Returns the minimum value.

```javascript
var v = nanmin( 4.2, 3.14 );
// returns 3.14

v = nanmin( +0.0, -0.0 );
// returns -0.0
```

If any argument is `NaN`, the function returns the other operand.

```javascript
var v = nanmin( 4.2, NaN );
// returns 4.2

v = nanmin( NaN, 3.14 );
// returns 3.14
```

If both arguments are `NaN`, the function returns `NaN`.

```javascript
var v = nanmin( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var nanmin = require( '@stdlib/math/base/special/nanmin' );

var m = nanmin( 3.0, 4.0 );
console.log( m );
// => 3.0

m = nanmin( NaN, 4.0 );
console.log( m );
// => 4.0

m = nanmin( 4.0, NaN );
console.log( m );
// => 4.0

m = nanmin( NaN, NaN );
console.log( m );
// => NaN
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
#include "stdlib/math/base/special/nanmin.h"
```

#### stdlib_base_nanmin( x, y )

Returns the minimum value, ignoring NaN.

```c
double out = stdlib_base_nanmin( 4.2, 3.14 );
// returns 3.14

out = stdlib_base_nanmin( 4.14, 0.0 / 0.0 );
// returns 4.14
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_nanmin( const double x, const double y );
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
#include "stdlib/math/base/special/nanmin.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 0.45, -0.89, 0.0 / 0.0, -0.78, -0.22, 0.66, 0.11, -0.55, 0.0 };
    const double y[] = { -0.22, 0.66, 0.0, -0.55, 0.33, 1.0, 0.0 / 0.0, 0.11, 0.45, -0.78 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_nanmin( x[i], y[i] );
        printf( "x[ %d ]: %lf, y[ %d ]: %lf, nanmin( x[ %d ], y[ %d ] ): %lf\n", i, x[ i ], i, y[ i ], i, i, v );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
