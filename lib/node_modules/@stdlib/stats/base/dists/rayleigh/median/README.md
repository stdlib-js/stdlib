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

# Median

> [Rayleigh][rayleigh-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_median" align="center" raw="\operatorname{Median}\left( X \right) = \sigma \sqrt{2 \ln(2)}" alt="Median for a Rayleigh distribution."> -->

```math
\mathop{\mathrm{Median}}\left( X \right) = \sigma \sqrt{2 \ln(2)}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = \sigma \sqrt{2 \ln(2)}" data-equation="eq:rayleigh_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/median/docs/img/equation_rayleigh_median.svg" alt="Median for a Rayleigh distribution.">
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
var median = require( '@stdlib/stats/base/dists/rayleigh/median' );
```

#### median( sigma )

Returns the [median][median] of a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var y = median( 9.0 );
// returns ~10.597

y = median( 1.5 );
// returns ~1.766
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = median( -1.0 );
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

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var median = require( '@stdlib/stats/base/dists/rayleigh/median' );

var sigma;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    sigma = randu() * 20.0;
    y = median( sigma );
    console.log( 'σ: %d, Median(X,σ): %d', sigma.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/rayleigh/median.h"
```

#### stdlib_base_dists_rayleigh_median( sigma )

Returns the [median][median] of a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```c
double out = stdlib_base_dists_rayleigh_median( 9.0 );
// returns ~10.595
```

The function accepts the following arguments:

-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_rayleigh_median( const double sigma );
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
#include "stdlib/stats/base/dists/rayleigh/median.h"
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
        sigma = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_rayleigh_median( sigma );
        printf( "σ: %lf, Median(X;σ): %lf\n", sigma, y );
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

[median]: https://en.wikipedia.org/wiki/Median

</section>

<!-- /.links -->
