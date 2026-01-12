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

> [Erlang][erlang-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for an [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \left(1 \,-\, \frac{t}{\lambda}\right)^{-k}" alt="Moment-generating function (MGF) for an Erlang distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \left(1 \,-\, \frac{t}{\lambda}\right)^{-k}
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \left(1 \,-\, \frac{t}{\lambda}\right)^{-k}" data-equation="eq:erlang_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/erlang/mgf/docs/img/equation_erlang_mgf.svg" alt="Moment-generating function (MGF) for an Erlang distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `t < lambda`, where the nonnegative integer `k` is the shape parameter and `lambda > 0` is the rate parameter of the distribution. In the case that `t >= lambda`, the MGF is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/erlang/mgf' );
```

#### mgf( t, k, lambda )

Evaluates the [moment-generating function][mgf] (mgf) for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var y = mgf( 0.3, 1, 1.0 );
// returns ~1.429

y = mgf( 2.0, 2, 3.0 );
// returns ~9.0

y = mgf( -1.0, 2, 2.0 );
// returns ~0.444
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 1, NaN );
// returns NaN
```

If not provided a nonnegative integer for `k`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, -2, 0.5 );
// returns NaN

y = mgf( 0.2, 0.5, 0.5 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 1, 0.0 );
// returns NaN

y = mgf( 0.2, 1, -5.0 );
// returns NaN
```

#### mgf.factory( k, lambda )

Returns a function for evaluating the [moment-generating function][mgf] for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var myMGF = mgf.factory( 2, 0.5 );

var y = myMGF( 0.2 );
// returns ~2.778

y = myMGF( -0.5 );
// returns 0.25
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
var mgf = require( '@stdlib/stats/base/dists/erlang/mgf' );

var lambda;
var k;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    k = round( randu() * 10.0 );
    lambda = randu() * 10.0;
    t = randu() * lambda;
    y = mgf( t, k, lambda );
    console.log( 't: %d, k: %d, λ: %d, M_X(t;k,λ): %d', t.toFixed( 4 ), k, lambda.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/erlang/mgf.h"
```

#### stdlib_base_dists_erlang_mgf( t, k, lambda )

Evaluates the [moment-generating function][mgf] (MGF) for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```c
double y = stdlib_base_dists_erlang_mgf( 0.3, 1, 1.0 );
// returns ~1.429
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **k**: `[in] double` shape parameter.
-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_erlang_mgf( const double t, const double k, const double lambda );
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
#include "stdlib/stats/base/dists/erlang/mgf.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double k;
    double t;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        k = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        lambda = random_uniform( 0.0, 10.0 );
        t = random_uniform( 0.0, lambda );
        y = stdlib_base_dists_erlang_mgf( t, k, lambda );
        printf( "t: %lf, k: %lf, λ: %lf, M_X(t;k,λ): %lf\n", t, k, lambda, y );
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

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
