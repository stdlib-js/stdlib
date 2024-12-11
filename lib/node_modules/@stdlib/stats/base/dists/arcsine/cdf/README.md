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

> [Arcsine][arcsine-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for an [arcsine][arcsine-distribution] random variable is

<!-- <equation class="equation" label="eq:arcsine_cdf" align="center" raw="F(x) = \frac{2}{\pi} \arcsin \left( \sqrt{\frac{x-a}{b-a}} \right)" alt="Cumulative distribution function for an arcsine distribution."> -->

```math
F(x) = \frac{2}{\pi} \arcsin \left( \sqrt{\frac{x-a}{b-a}} \right)
```

<!-- <div class="equation" align="center" data-raw-text="F(x) = \frac{2}{\pi} \arcsin \left( \sqrt{\frac{x-a}{b-a}} \right)" data-equation="eq:arcsine_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/arcsine/cdf/docs/img/equation_arcsine_cdf.svg" alt="Cumulative distribution function for an arcsine distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/arcsine/cdf' );
```

#### cdf( x, a, b )

Evaluates the [cumulative distribution function][cdf] (CDF) for an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = cdf( 9.0, 0.0, 10.0 );
// returns ~0.795

y = cdf( 0.5, 0.0, 2.0 );
// returns ~0.333

y = cdf( -Infinity, 2.0, 4.0 );
// returns 0.0

y = cdf( +Infinity, 2.0, 4.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = cdf( 1.0, 2.5, 2.0 );
// returns NaN
```

#### cdf.factory( a, b )

Returns a function for evaluating the [cumulative distribution function][cdf] of an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var mycdf = cdf.factory( 0.0, 10.0 );
var y = mycdf( 0.5 );
// returns ~0.144

y = mycdf( 8.0 );
// returns ~0.705
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/arcsine/cdf' );

var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    x = ( randu()*20.0 ) - 10.0;
    a = ( randu()*20.0 ) - 20.0;
    b = a + ( randu()*40.0 );
    y = cdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, F(x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/arcsine/cdf.h"
```

#### stdlib_base_dists_arcsine_cdf( x, a, b )

Evaluates the cumulative distribution function (CDF) for an arcsine distribution.

```c
double out = stdlib_base_dists_arcsine_cdf( 0.5, 0.0, 2.0 );
// returns ~0.333
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] double` minimum support.
-   **b**: `[in] double` maximum support.

```c
double stdlib_base_dists_arcsine_cdf( const double x, const double a, const double b );
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
#include "stdlib/stats/base/dists/arcsine/cdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double a;
    double b;
    double y;
    int i;
    
    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( -10.0, 10.0 );
        a = random_uniform( -20.0, 0.0 );
        b = random_uniform( a, a+40.0 );
        y = stdlib_base_dists_arcsine_cdf( x, a, b );
        printf( "x: %lf, a: %lf, b: %lf, F(x;a,b): %lf\n", x, a, b, y );
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

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

</section>

<!-- /.links -->
