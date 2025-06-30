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

# Standard Deviation

> [Erlang][erlang-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for an [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_stdev" align="center" raw="\sigma = \frac{\sqrt{k}}{\lambda}" alt="Standard deviation for an Erlang distribution."> -->

```math
\sigma = \frac{\sqrt{k}}{\lambda}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma = \frac{\sqrt{k}}{\lambda}" data-equation="eq:erlang_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/erlang/stdev/docs/img/equation_erlang_stdev.svg" alt="Standard deviation for an Erlang distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the shape parameter and `λ` is the rate parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/erlang/stdev' );
```

#### stdev( k, lambda )

Returns the [standard deviation][standard-deviation] of an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var v = stdev( 1, 1.0 );
// returns 1.0

v = stdev( 4, 12.0 );
// returns ~0.167

v = stdev( 8, 2.0 );
// returns ~1.414
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = stdev( NaN, 2.0 );
// returns NaN

v = stdev( 2.0, NaN );
// returns NaN
```

If not provided a positive integer for `k`, the function returns `NaN`.

```javascript
var v = stdev( 1.8, 1.0 );
// returns NaN

v = stdev( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 2, 0.0 );
// returns NaN

v = stdev( 2, -1.0 );
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
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var EPS = require( '@stdlib/constants/float64/eps' );
var stdev = require( '@stdlib/stats/base/dists/erlang/stdev' );

var opts = {
    'dtype': 'float64'
};
var k = discreteUniform( 10, 0, 10, opts );
var lambda = uniform( 10, EPS, 10.0, opts );

logEachMap( 'k: %d, λ: %0.4f, SD(X;k,λ): %0.4f', k, lambda, stdev );
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
#include "stdlib/stats/base/dists/erlang/stdev.h"
```

#### stdlib_base_dists_erlang_stdev( k, lambda )

Returns the [standard deviation][standard-deviation] of an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```c
double out = stdlib_base_dists_erlang_stdev( 1, 1.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **k**: `[in] int32_t` shape parameter.
-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_erlang_stdev( const int32_t k, const double lambda );
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
#include "stdlib/stats/base/dists/erlang/stdev.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/math/base/special/round.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    int32_t k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        k = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        lambda = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        y = stdlib_base_dists_erlang_stdev( k, lambda );
        printf( "k: %d, λ: %lf, SD(X;k,λ): %lf\n", k, lambda, y );
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

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
