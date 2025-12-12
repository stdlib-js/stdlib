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

# Logarithm of Probability Mass Function

> Evaluate the natural logarithm of the [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] distribution.

<section class="intro">

The [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_pmf" align="center" raw="P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} & \text{for } x \in \{ a, \ldots, b \} \\ 0 & \text{otherwise} \end{cases}" alt="Probability mass function (PMF) for a discrete uniform distribution."> -->

```math
P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} & \text{for } x \in \{ a, \ldots, b \} \\ 0 & \text{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} &amp; \text{for } x \in \{ a, \ldots, b \} \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:discrete_uniform_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/logpmf/docs/img/equation_discrete_uniform_pmf.svg" alt="Probability mass function (PMF) for a discrete uniform distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support of the distribution. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats/base/dists/discrete-uniform/logpmf' );
```

#### logpmf( x, a, b )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = logpmf( 2.0, 0, 4 );
// returns ~-1.609

y = logpmf( 5.0, 0, 4 );
// returns -Infinity

y = logpmf( 3, -4, 4 );
// returns ~-2.197
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, -2, 2 );
// returns NaN

y = logpmf( 1.0, NaN, 4 );
// returns NaN

y = logpmf( 2.0, 0, NaN );
// returns NaN
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 3, 2 );
// returns NaN
```

#### logpmf.factory( a, b )

Returns a `function` for evaluating the [PMF][pmf] for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myLogPMF = logpmf.factory( 6, 7 );
var y = myLogPMF( 7.0 );
// returns ~-0.693

y = myLogPMF( 5.0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random/base/discrete-uniform' );
var logpmf = require( '@stdlib/stats/base/dists/discrete-uniform/logpmf' );

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    a = randa();
    x = randb( a, a+randa() );
    b = randb( a, a+randa() );
    y = logpmf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, ln(P(X=x;a,b)): %d', x, a, b, y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/discrete-uniform/logpmf.h"
```

#### stdlib_base_dists_discrete_uniform_logpmf( x, a, b )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```c
double out = stdlib_base_dists_discrete_uniform_logpmf( 2.0, 0, 4 );
// returns ~-1.609
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] int32_t` minimum support.
-   **b**: `[in] int32_t` maximum support.

```c
double stdlib_base_dists_discrete_uniform_logpmf( const double x, const int32_t a, const int32_t b );
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
#include "stdlib/stats/base/dists/discrete-uniform/logpmf.h"
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
        a = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        b = stdlib_base_round( random_uniform( a, a+10.0 ) );
        x = stdlib_base_round( random_uniform( a*1.0, b*1.0 ) );
        y = stdlib_base_dists_discrete_uniform_logpmf( x, a, b );
        printf( "x:%lf, a: %d, b: %d, ln(P(X=x;a,b)): %lf\n", x, a, b, y );
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

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

</section>

<!-- /.links -->
