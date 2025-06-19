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

# bernoullif

> Compute the nth [Bernoulli number][bernoulli-number] as a single-precision floating-point number.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var bernoullif = require( '@stdlib/math/base/special/bernoullif' );
```

#### bernoullif( n )

Computes the nth [Bernoulli number][bernoulli-number] as a single-precision floating-point number.

```javascript
var v = bernoullif( 0 );
// returns 1.0

v = bernoullif( 1 );
// returns 0.5

v = bernoullif( 2 );
// returns ~0.167

v = bernoullif( 3 );
// returns 0.0

v = bernoullif( 4 );
// returns ~-0.033

v = bernoullif( 5 );
// returns 0.0

v = bernoullif( 20 );
// returns ~-529.124
```

For even integers `n >= 66`, the function alternates between returning positive and negative infinity, as larger [Bernoulli numbers][bernoulli-number] cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = bernoullif( 66 );
// returns Infinity

v = bernoullif( 68 );
// returns -Infinity

v = bernoullif( 70 );
// returns Infinity
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = bernoullif( 3.14 );
// returns NaN

v = bernoullif( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = bernoullif( NaN );
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
var logEachMap = require( '@stdlib/console/log-each-map' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var bernoullif = require( '@stdlib/math/base/special/bernoullif' );

var x = discreteUniform( 100, 0, 70, {
    'dtype': 'int32'
});

logEachMap( 'bernoullif(%d) = %0.4f', x, bernoullif );
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
#include "stdlib/math/base/special/bernoullif.h"
```

#### stdlib_base_bernoullif( n )

Computes the nth [Bernoulli number][bernoulli-number] as a single-precision floating-point number.

```c
float out = stdlib_base_bernoullif( 0 );
// returns 1.0f

out = stdlib_base_bernoullif( 1 );
// returns 0.5f
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.

```c
float stdlib_base_bernoullif( const int32_t n );
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
#include "stdlib/math/base/special/bernoullif.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    int32_t i;
    float v;

    for ( i = 0; i < 70; i++ ) {
        v = stdlib_base_bernoullif( i );
        printf( "bernoullif(%d) = %f\n", i, v );
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
