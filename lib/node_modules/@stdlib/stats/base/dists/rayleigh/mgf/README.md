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

> [Rayleigh][rayleigh-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1+\sigma t\,e^{\sigma^2t^2/2}\sqrt{\frac{\pi}{2}} \left(\textrm{erf}\left(\frac{\sigma t}{\sqrt{2}}\right)\!+\!1\right)" alt="Moment-generating function (MGF) for a Rayleigh distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1+\sigma t\,e^{\sigma^2t^2/2}\sqrt{\frac{\pi}{2}} \left(\textrm{erf}\left(\frac{\sigma t}{\sqrt{2}}\right)\!+\!1\right)
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1+\sigma t\,e^{\sigma^2t^2/2}\sqrt{\frac{\pi}{2}} \left(\textrm{erf}\left(\frac{\sigma t}{\sqrt{2}}\right)\!+\!1\right)" data-equation="eq:rayleigh_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/rayleigh/mgf/docs/img/equation_rayleigh_mgf.svg" alt="Moment-generating function (MGF) for a Rayleigh distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `sigma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/rayleigh/mgf' );
```

#### mgf( t, sigma )

Evaluates the [moment-generating function][mgf] for a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var y = mgf( 1.0, 3.0 );
// returns ~678.508

y = mgf( 1.0, 2.0 );
// returns ~38.65

y = mgf( -1.0, 4.0 );
// returns ~-0.947
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, -1.0 );
// returns NaN
```

#### mgf.factory( sigma )

Returns a function for evaluating the [moment-generating function][mgf] of a [Rayleigh][rayleigh-distribution] distribution with parameter `sigma` (scale parameter).

```javascript
var myMGF = mgf.factory( 0.5 );
var y = myMGF( 1.0 );
// returns ~2.715

y = myMGF( 0.5 );
// returns ~1.888
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
var mgf = require( '@stdlib/stats/base/dists/rayleigh/mgf' );

var opts = {
    'dtype': 'float64'
};
var t = uniform( 10, 0.0, 1.0, opts );
var sigma = uniform( 10, 0.0, 5.0, opts );

logEachMap( 't: %0.4f, σ: %0.4f, M_X(t;σ): %0.4f', t, sigma, mgf );
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
#include "stdlib/stats/base/dists/rayleigh/mgf.h"
```

#### stdlib_base_dists_rayleigh_mgf( t, sigma )

Evaluates the [moment-generating function][mgf] for a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```c
double out = stdlib_base_dists_rayleigh_mgf( 1.0, 3.0  );
// returns ~678.508
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_rayleigh_mgf( const double t, const double sigma );
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
#include "stdlib/stats/base/dists/rayleigh/mgf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double t;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        t = random_uniform( 0.0, 1.0 );
        sigma = random_uniform( 0.1, 5.0 );
        y = stdlib_base_dists_rayleigh_mgf( t, sigma );
        printf( "t: %lf, σ: %lf, M_X(t;σ): %lf\n", t, sigma, y );
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

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
