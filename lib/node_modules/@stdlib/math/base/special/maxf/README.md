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

# maxf

> Return the maximum single-precision floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var maxf = require( '@stdlib/math/base/special/maxf' );
```

#### maxf( x, y )

Returns the maximum single-precision floating-point number.

```javascript
var v = maxf( 4.2, 3.14 );
// returns 4.2

v = maxf( +0.0, -0.0 );
// returns +0.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = maxf( 4.2, NaN );
// returns NaN

v = maxf( NaN, 3.14 );
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
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var maxf = require( '@stdlib/math/base/special/maxf' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = minstd();
    y = minstd();
    v = maxf( x, y );
    console.log( 'maxf(%d,%d) = %d', x, y, v );
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
#include "stdlib/math/base/special/maxf.h"
```

#### stdlib_base_maxf( x, y )

Returns the maximum single-precision floating-point number.

```c
float out = stdlib_base_maxf( 4.2f, 3.14f );
// returns 4.2f

out = stdlib_base_maxf( 0.0f, -0.0f );
// returns 0.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **y**: `[in] float` input value.

```c
float stdlib_base_maxf( const float x, const float y );
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
#include "stdlib/math/base/special/maxf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float x;
    float y;
    float v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (float)rand() / (float)RAND_MAX ) * 200.0f ) - 100.0f;
        y = ( ( (float)rand() / (float)RAND_MAX ) * 200.0f ) - 100.0f;
        v = stdlib_base_maxf( x, y );
        printf( "x: %f, y: %f, maxf(x, y): %f\n", x, y, v );
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
