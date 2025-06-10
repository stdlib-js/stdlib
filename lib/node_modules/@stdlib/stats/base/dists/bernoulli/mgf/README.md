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

> [Bernoulli][bernoulli-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1-p + p \exp( t )" alt="Moment-generating function (MGF) for a Bernoulli distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1-p + p \exp( t )
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1-p + p \exp( t )" data-equation="eq:bernoulli_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/mgf/docs/img/equation_bernoulli_mgf_function.svg" alt="Moment-generating function (MGF) for a Bernoulli distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/bernoulli/mgf' );
```

#### mgf( t, p )

Evaluates the moment-generating function ([MGF][mgf]) of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var y = mgf( 0.2, 0.5 );
// returns ~1.111

y = mgf( 0.4, 0.5 );
// returns ~1.246
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = mgf( -2.0, -1.0 );
// returns NaN

y = mgf( 0.2, 2.0 );
// returns NaN
```

#### mgf.factory( p )

Returns a function for evaluating the [moment-generating function][mgf] of a [Bernoulli][bernoulli-distribution] distribution with parameter `p` (success probability).

```javascript
var mymgf = mgf.factory( 0.8 );
var y = mymgf( -0.2 );
// returns ~0.855
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
var logEachMap = require( '@stdlib/console/log-each-map' );
var mgf = require( '@stdlib/stats/base/dists/bernoulli/mgf' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 25, 0.0, 1.0, opts );
var t = uniform( p.length, -2.0, 2.0, opts );

logEachMap( 't: %0.4f, p: %0.4f, M_X(t;p): %0.4f', t, p, mgf );
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
#include "stdlib/stats/base/dists/bernoulli/mgf.h"
```

#### stdlib_base_dists_bernoulli_mgf( t, p )

Evaluates the moment-generating function ([MGF][mgf]) of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```c
double y = stdlib_base_dists_bernoulli_mgf( 0.2, 0.5 );
// returns ~1.111
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_bernoulli_mgf( const double t, const double p );
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
#include "stdlib/stats/base/dists/bernoulli/mgf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double p;
    double t;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        t = random_uniform( -2.0, 2.0 );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_bernoulli_mgf( t, p );
        printf( "t: %lf, p: %lf, M_X(t;p): %lf\n", t, p, y );
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

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
