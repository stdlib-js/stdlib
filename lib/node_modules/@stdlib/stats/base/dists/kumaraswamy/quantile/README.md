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

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [quantile function][quantile].

<section class="intro">

The [quantile function][quantile] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_quantile_function" align="center" raw="Q(p;a,b) = \left( 1 - (1-p)^{\tfrac{1}{b}} \right)^{\tfrac{1}{a}}" alt="Quantile function for a Kumaraswamy's double bounded distribution."> -->

```math
Q(p;a,b) = \left( 1 - (1-p)^{\tfrac{1}{b}} \right)^{\tfrac{1}{a}}
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;a,b) = \left( 1 - (1-p)^{\tfrac{1}{b}} \right)^{\tfrac{1}{a}}" data-equation="eq:beta_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/quantile/docs/img/equation_beta_quantile_function.svg" alt="Quantile function for a Kumaraswamy's double bounded distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p <= 1`, where `a > 0` is the first shape parameter and `b > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/kumaraswamy/quantile' );
```

#### quantile( p, a, b )

Evaluates the [quantile function][quantile] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var y = quantile( 0.5, 1.0, 1.0 );
// returns 0.5

y = quantile( 0.5, 2.0, 4.0 );
// returns ~0.399

y = quantile( 0.2, 2.0, 2.0 );
// returns ~0.325

y = quantile( 0.8, 4.0, 4.0 );
// returns ~0.759
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( -0.5, 4.0, 2.0 );
// returns NaN

y = quantile( 1.5, 4.0, 2.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0, 1.0 );
// returns NaN

y = quantile( 0.2, NaN, 1.0 );
// returns NaN

y = quantile( 0.2, 1.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.2, -1.0, 0.5 );
// returns NaN

y = quantile( 0.2, 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.2, 0.5, -1.0 );
// returns NaN

y = quantile( 0.2, 0.5, 0.0 );
// returns NaN
```

#### quantile.factory( a, b )

Returns a function for evaluating the [quantile function][quantile] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var myQuantile = quantile.factory( 0.5, 0.5 );

var y = myQuantile( 0.8 );
// returns ~0.922

y = myQuantile( 0.3 );
// returns ~0.26
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var EPS = require( '@stdlib/constants/float64/eps' );
var quantile = require( '@stdlib/stats/base/dists/kumaraswamy/quantile' );

var a;
var b;
var p;
var y;
var i;

p = uniform( 10, 0.0, 1.0 );
a = uniform( 10, EPS, 5.0 );
b = uniform( 10, EPS, 5.0 );

for ( i = 0; i < p.length; i++ ) {
    y = quantile( p[ i ], a[ i ], b[ i ] );
    console.log( 'p: %d, a: %d, b: %d, Q(p;a,b): %d', p[ i ].toFixed( 4 ), a[ i ].toFixed( 4 ), b[ i ].toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/kumaraswamy/quantile.h"
```

#### stdlib_base_dists_kumaraswamy_quantile( p, a, b )

Evaluates the quantile function of a Kumaraswamy's double bounded distribution.

```c
double out = stdlib_base_dists_kumaraswamy_quantile( 0.5, 1.0, 1.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **p**: `[in] double` probability.
-   **a**: `[in] double` first shape parameter.
-   **b**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_kumaraswamy_quantile( const double p, const
double a, const double b );
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
#include "stdlib/stats/base/dists/kumaraswamy/quantile.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double p;
    double a;
    double b;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        a = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        b = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        y = stdlib_base_dists_kumaraswamy_quantile( p, a, b );
        printf( "p: %lf, a: %lf, b: %lf, Q(p;a,b): %lf\n", p, a, b, y );
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

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[quantile]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
