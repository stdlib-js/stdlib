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

# Binomial Coefficient

> Compute the [binomial coefficient][binomial-coefficient] as a single-precision floating-point number.

<section class="intro">

The [binomial coefficient][binomial-coefficient] of two nonnegative integers `n` and `k` is defined as

<!-- <equation class="equation" label="eq:binomial_coefficient" align="center" raw="\binom {n}{k} = \frac{n!}{k!\,(n-k)!} \quad \text{for }\ 0\leq k\leq n" alt="Factorial formula for the Binomial coefficient."> -->

```math
\binom {n}{k} = \frac{n!}{k!\,(n-k)!} \quad \text{for }\ 0\leq k\leq n
```

<!-- </equation> -->

The [binomial coefficient][binomial-coefficient] can be generalized to negative integers `n` as follows:

<!-- <equation class="equation" label="eq:binomial_coefficient_negative_integers" align="center" raw="\binom {-n}{k} = (-1)^{k} \binom{n + k - 1}{k} = (-1)^{k} \left(\!\!{\binom {n}{k}}\!\!\right)" alt="Generalization of the binomial coefficient to negative n."> -->

```math
\binom {-n}{k} = (-1)^{k} \binom{n + k - 1}{k} = (-1)^{k} \left(\!\!{\binom {n}{k}}\!\!\right)
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var binomcoeff = require( '@stdlib/math/base/special/binomcoeff' );
```

#### binomcoeff( n, k )

Evaluates the [binomial coefficient][binomial-coefficient] of two integers `n` and `k` as a single-precision floating-point number.

```javascript
var v = binomcoeff( 8, 2 );
// returns 28

v = binomcoeff( 0, 0 );
// returns 1

v = binomcoeff( -4, 2 );
// returns 10

v = binomcoeff( 5, 3 );
// returns 10

v = binomcoeff( NaN, 3 );
// returns NaN

v = binomcoeff( 5, NaN );
// returns NaN

v = binomcoeff( NaN, NaN );
// returns NaN
```

For negative `k`, the function returns `0`.

```javascript
var v = binomcoeff( 2, -1 );
// returns 0

v = binomcoeff( -3, -1 );
// returns 0
```

The function returns `NaN` for non-integer `n` or `k`.

```javascript
var v = binomcoeff( 2, 1.5 );
// returns NaN

v = binomcoeff( 5.5, 2 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var binomcoeff = require( '@stdlib/math/base/special/binomcoeff' );

var opts = {
    'dtype': 'int32'
};
var n = discreteUniform( 100, -10, 30, opts );
var k = discreteUniform( 100, 0, 20, opts );

logEachMap( 'binomcoeff(%d,%d) = %0.4f', n, k, binomcoeff );
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
#include "stdlib/math/base/special/binomcoeff.h"
```

#### stdlib_base_binomcoeff( n, k )

Evaluates the [binomial coefficient][binomial-coefficient] of two integers `n` and `k` as a single-precision floating-point number.

```c
float v = stdlib_base_binomcoeff( 8, 2 );
// returns 28.0f
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.
-   **k**: `[in] int32_t` input value.

```c
float stdlib_base_binomcoeff( const int32_t n, const int32_t k );
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
#include "stdlib/math/base/special/binomcoeff.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const int32_t a[] = { 24, 32, 48, 116, 33 };
    const int32_t b[] = { 12, 6, 15, 52, 22 };

    float out;
    int i;
    for ( i = 0; i < 5; i++ ) {
        out = stdlib_base_binomcoeff( a[ i ], b[ i ] );
        printf( "binomcoeff(%d, %d) = %f\n", a[ i ], b[ i ], out );
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

[binomial-coefficient]: https://en.wikipedia.org/wiki/Binomial_coefficient

</section>

<!-- /.links -->
