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

# Skewness

> Planck (discrete exponential) distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_skewness" align="center" raw="\mathop{\mathrm{skew}}\left( X \right) = 2 \cosh\left( \frac{\lambda}{2} \right)" alt="Skewness for a Planck distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = 2 \cosh\left( \frac{\lambda}{2} \right)
```

<!-- </equation> -->

where `λ` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/planck/skewness' );
```

#### skewness( lambda )

Returns the [skewness][skewness] of a Planck distribution with shape parameter `lambda`.

```javascript
var v = skewness( 0.1 );
// returns ~2.0025

v = skewness( 1.5 );
// returns ~2.5894
```

If provided a shape parameter `lambda` which is nonpositive or `NaN`, the function returns `NaN`.

```javascript
var v = skewness( NaN );
// returns NaN

v = skewness( -1.5 );
// returns NaN
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
var skewness = require( '@stdlib/stats/base/dists/planck/skewness' );

var opts = {
    'dtype': 'float64'
};
var lambda = uniform( 10, 0.1, 10.0, opts );

logEachMap( 'λ: %0.4f, skew(X;λ): %0.4f', lambda, skewness );
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
#include "stdlib/stats/base/dists/planck/skewness.h"
```

#### stdlib_base_dists_planck_skewness( lambda )

Returns the [skewness][skewness] of a Planck distribution with shape parameter `lambda`.

```c
double out = stdlib_base_dists_planck_skewness( 0.1 );
// returns ~2.0025
```

The function accepts the following arguments:

-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_planck_skewness( const double lambda );
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
#include "stdlib/stats/base/dists/planck/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        lambda = random_uniform( 0.1, 5.0 );
        y = stdlib_base_dists_planck_skewness( lambda );
        printf( "λ: %lf, skew(X;λ): %lf\n", lambda, y );
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

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
