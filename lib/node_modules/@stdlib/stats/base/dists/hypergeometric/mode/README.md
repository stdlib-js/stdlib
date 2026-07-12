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

# Mode

> [Hypergeometric][hypergeometric-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [mode][mode] for a [hypergeometric][hypergeometric-distribution] random variable is

<!-- <equation class="equation" label="eq:hypergeometric_mode" align="center" raw="\operatorname{mode}\left( X \right) = \left\lfloor {\frac{(n+1)(K+1)}{N+2}}\right\rfloor" alt="Mode for a hypergeometric distribution."> -->

```math
\mathop{\mathrm{mode}}\left( X \right) = \left\lfloor {\frac{(n+1)(K+1)}{N+2}}\right\rfloor
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = \left\lfloor {\frac{(n+1)(K+1)}{N+2}}\right\rfloor" data-equation="eq:hypergeometric_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/mode/docs/img/equation_hypergeometric_mode.svg" alt="Mode for a hypergeometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/hypergeometric/mode' );
```

#### mode( N, K, n )

Returns the [mode][mode] of a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var v = mode( 16, 11, 4 );
// returns 3

v = mode( 2, 1, 1 );
// returns 1
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mode( NaN, 10, 4 );
// returns NaN

v = mode( 20, NaN, 4 );
// returns NaN

v = mode( 20, 10, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K`, or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = mode( 10.5, 5, 2 );
// returns NaN

v = mode( 10, 1.5, 2 );
// returns NaN

v = mode( 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.

```javascript
var v = mode( 10, 5, 12 );
// returns NaN

v = mode( 10, 12, 5 );
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
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var mode = require( '@stdlib/stats/base/dists/hypergeometric/mode' );

var v;
var i;
var N;
var K;
var n;

for ( i = 0; i < 10; i++ ) {
    N = round( randu() * 20 );
    K = round( randu() * N );
    n = round( randu() * K );
    v = mode( N, K, n );
    console.log( 'N: %d, K: %d, n: %d, mode(X;N,K,n): %d', N, K, n, v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/hypergeometric/mode.h"
```

#### stdlib_base_dists_hypergeometric_mode( N, K, n )

Returns the mode of a hypergeometric distribution.

```c
double out = stdlib_base_dists_hypergeometric_mode( 16, 11, 4 );
// returns 3.0
```

The function accepts the following arguments:

-   **N**: `[in] int32_t` population size.
-   **K**: `[in] int32_t` subpopulation size.
-   **n**: `[in] int32_t` number of draws.

```c
double stdlib_base_dists_hypergeometric_mode( const int32_t N, const int32_t K, const int32_t n );
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
#include "stdlib/stats/base/dists/hypergeometric/mode.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

static int32_t random_int( const int32_t min, const int32_t max ) {
    int32_t v = rand() % ( max - min + 1 );
    return min + v;
}

int main( void ) {
    int32_t N;
    int32_t K;
    int32_t n;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        N = random_int( 1, 20 );
        K = random_int( 0, N );
        n = random_int( 0, K );
        y = stdlib_base_dists_hypergeometric_mode( N, K, n );
        printf( "N: %d, K: %d, n: %d, mode(X;N,K,n): %.4f\n", N, K, n, y );
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

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
