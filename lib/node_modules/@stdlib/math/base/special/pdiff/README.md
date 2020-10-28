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

# pdiff

> Return the positive difference between `x` and `y`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var pdiff = require( '@stdlib/math/base/special/pdiff' );
```

#### pdiff( x, y )

Returns the positive difference between `x` and `y` if `x < y`; otherwise, returns `0`.

```javascript
var v = pdiff( 4.2, 3.14 );
// returns 1.06

v = pdiff( 3.14, 4.2 );
// returns +0.0

v = pdiff( -0.0, +0.0 );
// returns +0.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = pdiff( 4.2, NaN );
// returns NaN

v = pdiff( NaN, 3.14 );
// returns NaN

v = pdiff( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function is the equivalent of [`fdim`][fdim] in the C/C++ standard library.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var pdiff = require( '@stdlib/math/base/special/pdiff' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = minstd();
    y = minstd();
    v = pdiff( x, y );
    console.log( 'pdiff(%d,%d) = %d', x, y, v );
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
#include "stdlib/math/base/special/pdiff.h
```

#### stdlib_base_pdiff( x, y )

Returns the positive difference between `x` and `y`.

```c
double v = stdlib_base_pdiff( 4.0, 3.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_pdiff( const double x, const double y );
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
#include "stdlib/math/base/special/pdiff.h"
#include <stdio.h>

int main() {
    double x[] = { 3.0, 4.0, 6.0, 5.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i += 2 ) {
        y = stdlib_base_pdiff( x[ i ], x[ i+1 ] );
        printf( "pdiff(%lf, %lf) = %lf\n", x[ i ], x[ i+1 ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[fdim]: http://en.cppreference.com/w/cpp/numeric/math/fdim

</section>

<!-- /.links -->
