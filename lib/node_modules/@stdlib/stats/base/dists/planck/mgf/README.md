<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

> Planck (discrete exponential) distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{1 - e^{-\lambda}}{1 - e^{t - \lambda}}" alt="Moment-generating function (MGF) for the Planck distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{1 - e^{-\lambda}}{1 - e^{t - \lambda}}
```

<!-- </equation> -->

where `λ` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/planck/mgf' );
```

#### mgf( t, lambda )

Evaluates the moment-generating function ([MGF][mgf]) of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var y = mgf( 0.2, 0.5 );
// returns ~1.5181

y = mgf( 0.4, 1.5 );
// returns ~1.1645
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is nonpositive, the function returns `NaN`.

```javascript
var y = mgf( 2.0, -1.0 );
// returns NaN
```

#### mgf.factory( lambda )

Returns a function for evaluating the [moment-generating function][mgf] of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var mymgf = mgf.factory( 0.8 );
var y = mymgf( -0.2 );
// returns ~0.8711
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
var mgf = require( '@stdlib/stats/base/dists/planck/mgf' );

var opts = {
    'dtype': 'float64'
};
var lambda = uniform( 10, 0.1, 5.0, opts );
var t = uniform( 10, 0.0, 10.0, opts );

logEachMap( 't: %0.4f, λ: %0.4f, M_X(t;λ): %0.4f', t, lambda, mgf );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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
#include "stdlib/stats/base/dists/planck/mgf.h"
```

#### stdlib_base_dists_planck_mgf( t, lambda )

Evaluates the moment-generating function (MGF) for a Planck distribution with shape parameter `lambda` at a value `t`.

```c
double out = stdlib_base_dists_planck_mgf( 0.2, 0.5 );
// returns ~1.5181
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_planck_mgf( const double t, const double lambda );
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
#include "stdlib/stats/base/dists/planck/mgf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double lambda;
    double t;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        t = random_uniform( 0.0, 10.0 );
        lambda = random_uniform( 0.1, 5.0 );
        y = stdlib_base_dists_planck_mgf( t, lambda );
        printf( "t: %lf, λ: %lf, M_X(t;λ): %lf\n", t, lambda, y );
    }
    return 0;
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

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
