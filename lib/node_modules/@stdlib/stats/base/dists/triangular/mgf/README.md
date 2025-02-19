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

# Moment-Generating Function

> [Triangular][triangular-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 2\frac{(b\!-\!c)e^{at}\!-\!(b\!-\!a)e^{ct}\!+\!(c\!-\!a)e^{bt}} {(b-a)(c-a)(b-c)t^2}" alt="Moment-generating function (MGF) for a triangular distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 2\frac{(b\!-\!c)e^{at}\!-\!(b\!-\!a)e^{ct}\!+\!(c\!-\!a)e^{bt}} {(b-a)(c-a)(b-c)t^2}
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 2\frac{(b\!-\!c)e^{at}\!-\!(b\!-\!a)e^{ct}\!+\!(c\!-\!a)e^{bt}} {(b-a)(c-a)(b-c)t^2}" data-equation="eq:triangular_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/mgf/docs/img/equation_triangular_mgf_function.svg" alt="Moment-generating function (MGF) for a triangular distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the lower limit, `b` is the upper limit, and `c` is the mode of the distribution. The parameters must satisfy `b > a` and `a <= b <= c`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/triangular/mgf' );
```

#### mgf( t, a, b, c )

Evaluates the [moment-generating function][mgf] (MGF) for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit), and `c` (mode).

```javascript
var y = mgf( 0.5, -1.0, 1.0, 0.0 );
// returns ~1.021

y = mgf( 0.5, -1.0, 1.0, 0.5 );
// returns ~1.111

y = mgf( -0.3, -20.0, 0.0, -2.0 );
// returns ~24.334

y = mgf( -2.0, -1.0, 1.0, 0.0 );
// returns ~1.381
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0, 1.0, 0.5 );
// returns NaN

y = mgf( 0.0, NaN, 1.0, 0.5 );
// returns NaN

y = mgf( 0.0, 0.0, NaN, 0.5 );
// returns NaN

y = mgf( 2.0, 1.0, 0.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 1.0, 0.0, 1.5 );
// returns NaN

y = mgf( 2.0, 1.0, 0.0, -1.0 );
// returns NaN

y = mgf( 2.0, 0.0, -1.0, 0.5 );
// returns NaN
```

#### mgf.factory( a, b, c )

Returns a function for evaluating the [moment-generating function][mgf] of a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit), and `c` (mode).

```javascript
var mymgf = mgf.factory( 0.0, 2.0, 1.0 );

var y = mymgf( -1.0 );
// returns ~0.3996

y = mymgf( 2.0 );
// returns ~10.205
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
var mgf = require( '@stdlib/stats/base/dists/triangular/mgf' );

var a;
var b;
var c;
var t;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 5.0;
    a = randu() * 10.0;
    b = a + (randu() * 40.0);
    c = a + (( b - a ) * randu());
    v = mgf( t, a, b, c );
    console.log( 't: %d, a: %d, b: %d, c: %d, M_X(t;a,b,c): %d', t.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

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
#include "stdlib/stats/base/dists/triangular/mgf.h"
```

#### stdlib_base_dists_triangular_mgf( t, a, b, c )

Evaluates the [moment-generating function][mgf] (MGF) for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit), and `c` (mode).

```c
double y = stdlib_base_dists_triangular_mgf( 0.5, -1.0, 1.0, 0.0 );
// returns ~1.021
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **a**: `[in] double` lower limit.
-   **b**: `[in] double` upper limit.
-   **c**: `[in] double` mode.

```c
double stdlib_base_dists_triangular_mgf( const double t, const double a, const double b, const double c );
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
#include "stdlib/stats/base/dists/triangular/mgf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double a;
    double b;
    double c;
    double t;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        t = random_uniform( 0.0, 5.0 );
        a = random_uniform( 0.0, 10.0 );
        b = random_uniform( a+STDLIB_CONSTANT_FLOAT64_EPS, 40.0 );
        c = random_uniform( a, b );
        y = stdlib_base_dists_triangular_mgf( t, a, b, c );
        printf( "t: %lf, a: %lf, b: %lf, c: %lf, M_X(t;a,b,c): %lf\n", t, a, b, c, y );
    }
}
```

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
