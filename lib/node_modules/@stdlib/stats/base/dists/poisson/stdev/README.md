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

# Standard Deviation

> [Poisson][poisson-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_stdev" align="center" raw="\sigma = \sqrt{\lambda}" alt="Standard deviation for a Poisson distribution."> -->

```math
\sigma = \sqrt{\lambda}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma = \sqrt{\lambda}" data-equation="eq:poisson_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/stdev/docs/img/equation_poisson_stdev.svg" alt="Standard deviation for a Poisson distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `λ` is the mean parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/poisson/stdev' );
```

#### stdev( lambda )

Returns the [standard deviation][standard-deviation] of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var v = stdev( 9.0 );
// returns 3.0

v = stdev( 0.5 );
// returns ~0.707
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var v = stdev( -1.0 );
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
var stdev = require( '@stdlib/stats/base/dists/poisson/stdev' );

var opts = {
    'dtype': 'float64'
};
var lambda = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'λ: %0.4f, SD(X;λ): %0.4f', lambda, stdev );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

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
#include "stdlib/stats/base/dists/poisson/stdev.h"
```

#### stdlib_base_dists_poisson_stdev( lambda )

Returns the [standard deviation][standard-deviation] of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```c
double out = stdlib_base_dists_poisson_stdev( 9.0 );
// returns 3.0
```

The function accepts the following arguments:

-   **lambda**: `[in] double` mean parameter.

```c
double stdlib_base_dists_poisson_stdev( const double lambda );
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
#include "stdlib/stats/base/dists/poisson/stdev.h"
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

    for ( i = 0; i < 10; i++ ) {
        lambda = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_poisson_stdev( lambda );
        printf( "λ: %.4f, SD(X;λ): %.4f\n", lambda, y );
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

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
