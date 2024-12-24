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

# Mean

> [Rayleigh][rayleigh-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_expectation" align="center" raw="\mathbb{E}\left[ X \right] = \sigma \sqrt{\dfrac{\pi}{2}}" alt="Expected value for a Rayleigh distribution."> -->

```math
\mathbb{E}\left[ X \right] = \sigma \sqrt{\dfrac{\pi}{2}}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \sigma \sqrt{\dfrac{\pi}{2}}" data-equation="eq:rayleigh_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/mean/docs/img/equation_rayleigh_expectation.svg" alt="Expected value for a Rayleigh distribution.">
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
var mean = require( '@stdlib/stats/base/dists/rayleigh/mean' );
```

#### mean( sigma )

Returns the [expected value][expected-value] of a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var y = mean( 9.0 );
// returns ~11.28

y = mean( 1.5 );
// returns ~1.88
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = mean( -1.0 );
// returns NaN

y = mean( -0.1 );
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
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var mean = require( '@stdlib/stats/base/dists/rayleigh/mean' );

var sigma;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    sigma = randu() * 20.0;
    y = mean( sigma );
    console.log( 'σ: %d, E(X,σ): %d', sigma.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/rayleigh/mean.h"
```

#### stdlib_base_dists_rayleigh_mean( sigma )

Returns the mean of a Rayleigh distribution.

```c
double out = stdlib_base_dists_rayleigh_mean( 9.0 );
// returns ~11.253
```

The function accepts the following arguments:

-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_rayleigh_mean( const double sigma );
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
#include "stdlib/stats/base/dists/rayleigh/mean.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double sigma;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        sigma = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_rayleigh_mean( sigma );
        printf( "σ: %lf, E(X;σ): %lf\n", sigma, y );
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

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
