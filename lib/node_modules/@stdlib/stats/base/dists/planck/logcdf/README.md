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

# Logarithm of Cumulative Distribution Function

> Evaluate the logarithm of the [cumulative distribution function][cdf] for a Planck (discrete exponential) distribution.

<section class="intro">

The [cumulative distribution function][cdf] for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_cdf" align="center" raw="F(x;\lambda) = 1 - e^{-\lambda \cdot (\lfloor x \rfloor + 1)}" alt="CDF for a Planck distribution."> -->

```math
F(x;\lambda) = 1 - e^{-\lambda (\lfloor x \rfloor + 1)}
```

<!-- </equation> -->

where `λ` is the shape parameter and `x` denotes the count of events in a quantized system.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/planck/logcdf' );
```

#### logcdf( x, lambda )

Evaluates the logarithm of the [cumulative distribution function][cdf] for a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var y = logcdf( 2.0, 0.5 );
// returns ~-0.2525

y = logcdf( 2.0, 1.5 );
// returns ~-0.0112
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.5 );
// returns NaN

y = logcdf( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is nonpositive, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0 );
// returns NaN
```

#### logcdf.factory( lambda )

Returns a function for evaluating the logarithm of the [cumulative distribution function][cdf] of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var mylogcdf = logcdf.factory( 1.5 );
var y = mylogcdf( 3.0 );
// returns ~-0.0025

y = mylogcdf( 1.0 );
// returns ~-0.0511
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpmf` or `logcdf` functions is preferable to manually computing the logarithm of the `pmf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var logcdf = require( '@stdlib/stats/base/dists/planck/logcdf' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 5, opts );
var lambda = uniform( 10, 0.1, 5.0, opts );

logEachMap( 'x: %0.4f, λ: %0.4f, ln(F(x;λ)): %0.4f', x, lambda, logcdf );
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
#include "stdlib/stats/base/dists/planck/logcdf.h"
```

#### stdlib_base_dists_planck_logcdf( x, lambda )

Evaluates the logarithm of the [cumulative distribution function][cdf] for a Planck (discrete exponential) distribution with shape parameter `lambda`.

```c
double out = stdlib_base_dists_planck_logcdf( 2, 0.5 );
// returns ~-0.2525
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_planck_logcdf( const double x, const double lambda );
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
#include "stdlib/stats/base/dists/planck/logcdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 40.0 );
        lambda = random_uniform( 0.1, 5.0 );
        y = stdlib_base_dists_planck_logcdf( x, lambda );
        printf( "x: %lf, λ: %lf, ln(F(x;λ)): %lf\n", x, lambda, y );
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

</section>

<!-- /.links -->
