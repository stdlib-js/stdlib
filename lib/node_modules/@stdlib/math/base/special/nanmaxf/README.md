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

# nanmaxf

> Return the maximum value of two single-precision floating-point numbers, ignoring NaN.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nanmaxf = require( '@stdlib/math/base/special/nanmaxf' );
```

#### nanmaxf( x, y )

Returns the maximum value of two single-precision floating-point numbers, ignoring NaN.

```javascript
var v = nanmaxf( 4.2, 3.14 );
// returns 4.2

v = nanmaxf( +0.0, -0.0 );
// returns +0.0
```

If any argument is `NaN`, the function returns the other operand.

```javascript
var v = nanmaxf( 4.2, NaN );
// returns 4.2

v = nanmaxf( NaN, 3.14 );
// returns 3.14
```

If both arguments are `NaN`, the function returns `NaN`.

```javascript
var v = nanmaxf( NaN, NaN );
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
var nanmaxf = require( '@stdlib/math/base/special/nanmaxf' );

var m = nanmaxf( 3.0, 4.0 );
console.log( m );
// => 4.0

m = nanmaxf( NaN, 4.0 );
console.log( m );
// => 4.0

m = nanmaxf( 4.0, NaN );
console.log( m );
// => 4.0

m = nanmaxf( NaN, NaN );
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
#include "stdlib/math/base/special/nanmaxf.h"
```

#### stdlib_base_nanmaxf( x, y )

Returns the maximum value of two single-precision floating-point numbers, ignoring NaN.

```c
float out = stdlib_base_nanmaxf( 4.2f, 3.14f );
// returns 4.2f

out = stdlib_base_nanmaxf( 4.14f, 0.0f / 0.0f );
// returns 4.14f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **y**: `[in] float` input value.

```c
float stdlib_base_nanmaxf( const float x, const float y );
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
#include "stdlib/math/base/special/nanmaxf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 1.0f, 0.45f, -0.89f, 0.0f / 0.0f, -0.78f, -0.22f, 0.66f, 0.11f, -0.55f, 0.0f };
    const float y[] = { -0.22f, 0.66f, 0.0f, -0.55f, 0.33f, 1.0f, 0.0f / 0.0f, 0.11f, 0.45f, -0.78f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_nanmaxf( x[ i ], y[ i ] );
        printf( "x[ %d ]: %f, y[ %d ]: %f, nanmaxf( x[ %d ], y[ %d ] ): %f\n", i, x[ i ], i, y[ i ], i, i, v );
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
