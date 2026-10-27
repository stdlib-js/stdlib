<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

> Planck (discrete exponential) distribution [cumulative distribution function][cdf].

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
var cdf = require( '@stdlib/stats/base/dists/planck/cdf' );
```

#### cdf( x, lambda )

Evaluates the [cumulative distribution function][cdf] for a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var y = cdf( 2.0, 0.5 );
// returns ~0.7769

y = cdf( 2.0, 1.5 );
// returns ~0.9889
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.5 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is nonpositive, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN
```

#### cdf.factory( lambda )

Returns a function for evaluating the [cumulative distribution function][cdf] of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var mycdf = cdf.factory( 1.5 );
var y = mycdf( 3.0 );
// returns ~0.9975

y = mycdf( 1.0 );
// returns ~0.9502
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cdf = require( '@stdlib/stats/base/dists/planck/cdf' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 5, opts );
var lambda = uniform( 10, 0.1, 5.0, opts );

logEachMap( 'x: %d, λ: %04f, F(x;λ): %04f', x, lambda, cdf );
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
#include "stdlib/stats/base/dists/planck/cdf.h"
```

#### stdlib_base_dists_planck_cdf( x, lambda )

Evaluates the [cumulative distribution function][cdf] for a Planck (discrete exponential) distribution with input value `x` and shape parameter `lambda`.

```c
double out = stdlib_base_dists_planck_cdf( 2.0, 0.5 );
// returns ~0.7769
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_planck_cdf( const double x, const double lambda );
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
#include "stdlib/stats/base/dists/planck/cdf.h"
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
        x = random_uniform( 0.0, 11.0 );
        lambda = random_uniform( 0.1, 5.0 );
        y = stdlib_base_dists_planck_cdf( x, lambda );
        printf( "x: %lf, λ: %lf, F(x;λ): %lf\n", x, lambda, y );
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
