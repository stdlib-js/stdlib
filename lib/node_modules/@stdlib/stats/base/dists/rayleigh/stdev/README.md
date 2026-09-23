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

> [Rayleigh][rayleigh-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_stdev" align="center" raw="\sqrt{ \frac{4-\pi }{2} }\sigma" alt="Standard deviation for a Rayleigh distribution."> -->

```math
\sqrt{ \frac{4-\pi }{2} }\sigma
```

<!-- <div class="equation" align="center" data-raw-text="\sqrt{ \frac{4-\pi }{2} }\sigma" data-equation="eq:rayleigh_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/stdev/docs/img/equation_rayleigh_stdev.svg" alt="Standard deviation for a Rayleigh distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `σ > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/rayleigh/stdev' );
```

#### stdev( sigma )

Returns the [standard deviation][standard-deviation] of a [Rayleigh][rayleigh-distribution] distribution with scale `sigma`.

```javascript
var y = stdev( 9.0 );
// returns ~5.896

y = stdev( 3.5 );
// returns ~2.293
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = stdev( -1.0 );
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
var stdev = require( '@stdlib/stats/base/dists/rayleigh/stdev' );

var opts = {
    'dtype': 'float64'
};
var sigma = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'σ: %0.4f, SD(X;σ): %0.4f', sigma, stdev );
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
#include "stdlib/stats/base/dists/rayleigh/stdev.h"
```

#### stdlib_base_dists_rayleigh_stdev( sigma )

Returns the [standard deviation][standard-deviation] of a [Rayleigh][rayleigh-distribution] distribution with scale `sigma`.

```c
double out = stdlib_base_dists_rayleigh_stdev( 9.0 );
// returns ~5.896
```

The function accepts the following arguments:

-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_rayleigh_stdev( const double sigma );
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
#include "stdlib/stats/base/dists/rayleigh/stdev.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        sigma = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_rayleigh_stdev( sigma );
        printf( "σ: %lf, SD(X;σ): %lf\n", sigma, y );
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

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
