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

# Cumulative Distribution Function

> [Discrete uniform][discrete-uniform-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_cdf" align="center" raw="F(x)= \begin{cases} 0 & \text{for }x < a \\ \frac{\lfloor x \rfloor - a + 1}{b-a+1} & \text{for }a \le x < b \\ 1 & \text{for }x \ge b \end{cases}" alt="Cumulative distribution function for a discrete uniform distribution."> -->

```math
F(x)= \begin{cases} 0 & \text{for }x < a \\ \frac{\lfloor x \rfloor - a + 1}{b-a+1} & \text{for }a \le x < b \\ 1 & \text{for }x \ge b \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x)= \begin{cases} 0 &amp; \text{for }x &lt; a \\ \frac{\lfloor x \rfloor - a + 1}{b-a+1} &amp; \text{for }a \le x &lt; b \\ 1 &amp; \text{for }x \ge b \end{cases}" data-equation="eq:discrete_uniform_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/cdf/docs/img/equation_discrete_uniform_cdf.svg" alt="Cumulative distribution function for a discrete uniform distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/discrete-uniform/cdf' );
```

#### cdf( x, a, b )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = cdf( 9.0, 0, 10 );
// returns ~0.909

y = cdf( 0.5, -2, 2 );
// returns ~0.6

y = cdf( -Infinity, 2, 4 );
// returns 0.0

y = cdf( Infinity, 2, 4 );
// returns 1.0
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = cdf( 0.2, 1, 5.5 );
// returns NaN

y = cdf( NaN, 0, 1 );
// returns NaN

y = cdf( 0.0, NaN, 1 );
// returns NaN

y = cdf( 0.0, 0, NaN );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = cdf( 0.5, 3, 2);
// returns NaN
```

#### cdf.factory( a, b )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var mycdf = cdf.factory( 0, 10 );
var y = mycdf( 0.5 );
// returns ~0.091

y = mycdf( 8.0 );
// returns ~0.818
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random/base/discrete-uniform' );
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/discrete-uniform/cdf' );

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 15.0;
    a = randa();
    b = randb( a, a+randa() );
    v = cdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, F(x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

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
#include "stdlib/stats/base/dists/discrete-uniform/cdf.h"
```

#### stdlib_base_dists_discrete_uniform_cdf( x, a, b )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```c
double out = stdlib_base_dists_discrete_uniform_cdf( 9.0, 0, 10 );
// returns ~0.909
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] int32_t` minimum support.
-   **b**: `[in] int32_t` maximum support.

```c
double stdlib_base_dists_discrete_uniform_cdf( const double x, const int32_t a, const int32_t b );
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
#include "stdlib/stats/base/dists/discrete-uniform/cdf.h"
#include "stdlib/math/base/special/round.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    int32_t a;
    int32_t b;
    double x;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = random_uniform( -10.0, 10.0 );
        a = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        b = stdlib_base_round( random_uniform( 0.0, 10.0 ) ) + a;
        y = stdlib_base_dists_discrete_uniform_cdf( x, a, b );
        printf( "x:%lf, a: %d, b: %d, F(X;a,b): %lf\n", x, a, b, y );
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

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

</section>

<!-- /.links -->
