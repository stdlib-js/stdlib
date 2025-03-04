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

# Bernoulli

> Compute the nth [Bernoulli number][bernoulli-number].

<section class="intro">

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var bernoulli = require( '@stdlib/math/base/special/bernoulli' );
```

#### bernoulli( n )

Computes the nth [Bernoulli number][bernoulli-number].

```javascript
var v = bernoulli( 0 );
// returns 1.0

v = bernoulli( 1 );
// returns 0.5

v = bernoulli( 2 );
// returns ~0.167

v = bernoulli( 3 );
// returns 0.0

v = bernoulli( 4 );
// returns ~-0.033

v = bernoulli( 5 );
// returns 0.0

v = bernoulli( 20 );
// returns ~-529.124
```

For even integers `n >= 260`, the function alternates between returning positive and negative infinity, as larger [Bernoulli numbers][bernoulli-number] cannot be safely represented in [double-precision floating-point format][ieee754].

```javascript
var v = bernoulli( 260 );
// returns -Infinity

v = bernoulli( 262 );
// returns Infinity

v = bernoulli( 264 );
// returns -Infinity
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = bernoulli( 3.14 );
// returns NaN

v = bernoulli( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = bernoulli( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/math/base/special/bernoulli' );

var v;
var i;

for ( i = 0; i < 280; i++ ) {
    v = bernoulli( i );
    console.log( v );
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
#include "stdlib/math/base/special/bernoulli.h"
```

#### stdlib_base_bernoulli( n )

Computes the nth [Bernoulli number][bernoulli-number].

```c
double out = stdlib_base_bernoulli( 0 );
// returns 1.0

out = stdlib_base_bernoulli( 1 );
// returns 0.5
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.

```c
double stdlib_base_bernoulli( const int32_t n );
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
#include "stdlib/math/base/special/bernoulli.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    int32_t i;
    double v;

    for ( i = 0; i < 130; i++ ) {
        v = stdlib_base_bernoulli( i );
        printf( "bernoulli(%d) = %lf\n", i, v );
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

[bernoulli-number]: https://en.wikipedia.org/wiki/Bernoulli_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
