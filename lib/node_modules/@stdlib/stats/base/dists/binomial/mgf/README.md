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

> [Binomial][binomial-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = (1-p + pe^t)^n" alt="Moment-generating function (MGF) for a binomial distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = (1-p + pe^t)^n
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = (1-p + pe^t)^n" data-equation="eq:binomial_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/mgf/docs/img/equation_binomial_mgf.svg" alt="Moment-generating function (MGF) for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where the nonnegative integer `n` is the number of trials and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/binomial/mgf' );
```

#### mgf( t, n, p )

Evaluates the [moment-generating function][mgf] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = mgf( 0.5, 20, 0.2 );
// returns ~11.471

y = mgf( 5.0, 20, 0.2 );
// returns ~4.798e29

y = mgf( 0.9, 10, 0.4 );
// returns ~99.338

y = mgf( 0.0, 10, 0.4 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 20, 0.5 );
// returns NaN

y = mgf( 0.0, NaN, 0.5 );
// returns NaN

y = mgf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 1.5, 0.5 );
// returns NaN

y = mgf( 0.2, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 20, -1.0 );
// returns NaN

y = mgf( 0.2, 20, 1.5 );
// returns NaN
```

#### mgf.factory( n, p )

Returns a function for evaluating the [moment-generating function][mgf] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var myMGF = mgf.factory( 10, 0.5 );

var y = myMGF( 0.3 );
// returns ~5.013
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var mgf = require( '@stdlib/stats/base/dists/binomial/mgf' );

var opts = {
    'dtype': 'float64'
};
var t = discreteUniform( 10, 0, 5, opts );
var n = discreteUniform( 10, 0, 10, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 't: %0.4f, n: %0.4f, p: %0.4f, M_X(t;n,p): %0.4f', t, n, p, mgf );
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
#include "stdlib/stats/base/dists/binomial/mgf.h"
```

#### stdlib_base_dists_binomial_mgf( t, n, p )

Evaluates the [moment-generating function][mgf] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```c
double out = stdlib_base_dists_binomial_mgf( 0.5, 20, 0.2 );
// returns ~11.471
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **n**: `[in] int32_t` number of trials.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_binomial_mgf( const double t, const int32_t n, const double p );
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
#include "stdlib/stats/base/dists/binomial/mgf.h"
#include "stdlib/math/base/special/ceil.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * (max - min) );
}

int main( void ) {
    int32_t n;
    double p;
    double t;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        n = (int32_t)stdlib_base_ceil( random_uniform( 0, 100 ) );
        p = random_uniform( 0, 1 );
        t = random_uniform( 0, 5 );
        y = stdlib_base_dists_binomial_mgf( t, n, p );
        printf( "t: %lf, n: %d, p: %lf, M_X(t;n,p): %lf\n", t, n, p, y );
    }

    return 0;
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

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
