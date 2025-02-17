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

# Quantile Function

> [Uniform][uniform-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [continuous uniform][uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:uniform_quantile_function" align="center" raw="Q(p) = a + p (b - a)" alt="Quantile function for a continuous uniform distribution."> -->

```math
Q(p) = a + p (b - a)
```

<!-- <div class="equation" align="center" data-raw-text="Q(p) = a + p (b - a)" data-equation="eq:uniform_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/uniform/quantile/docs/img/equation_uniform_quantile_function.svg" alt="Quantile function for a continuous uniform distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p <= 1`, where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/uniform/quantile' );
```

#### quantile( p, a, b )

Evaluates the [quantile function][quantile-function] for a [continuous uniform][uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = quantile( 0.8, 0.0, 1.0 );
// returns 0.8

y = quantile( 0.5, 0.0, 10.0 );
// returns 5.0
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 2.0, 1.0 );
// returns NaN
```

#### quantile.factory( a, b )

Returns a function for evaluating the quantile function of a [continuous uniform][uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myquantile = quantile.factory( 0.0, 4.0 );
var y = myquantile( 0.8 );
// returns 3.2
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/uniform/quantile' );

var a;
var b;
var p;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    p = randu();
    a = (randu() * 20.0) - 20.0;
    b = a + (randu() * 40.0);
    y = quantile( p, a, b );
    console.log( 'p: %d, a: %d, b: %d, Q(p;a,b): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/uniform/quantile.h"
```

#### stdlib_base_dists_uniform_quantile( p, a, b )

Evaluates the [quantile-function][quantile-function] function for a [continuous uniform][uniform-distribution] distribution with minimum support `a` and maximum support `b` at a probability `p`.

```c
double out = stdlib_base_dists_uniform_quantile( 0.8, 0.0, 1.0 );
// returns 0.8
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] double` minimum support.
-   **b**: `[in] double` maximum support.

```c
double stdlib_base_dists_uniform_quantile( const double p, const double a, const double b );
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
#include "stdlib/stats/base/dists/uniform/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double a;
    double b;
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        a = random_uniform( -20.0, 0.0 );
        b = random_uniform( a, a+40.0 );
        y = stdlib_base_dists_uniform_quantile( p, a, b );
        printf( "p: %lf, a: %lf, b: %lf, Q(p;a,b): %lf\n", p, a, b, y );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[uniform-distribution]: https://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
