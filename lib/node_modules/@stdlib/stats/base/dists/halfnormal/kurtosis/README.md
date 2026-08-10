<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# Kurtosis

> [Half-normal][half-normal-distribution] distribution [excess kurtosis][kurtosis].

<section class="intro">

The [excess kurtosis][kurtosis] of a [half-normal][half-normal-distribution] distribution with scale `sigma > 0` is

<!-- <equation class="equation" label="eq:halfnormal_kurtosis" align="center" raw="\gamma_2 = \frac{8(\pi-3)}{(\pi-2)^2}" alt="Excess kurtosis for a half-normal distribution."> -->

```math
\gamma_2 = \frac{8(\pi-3)}{(\pi-2)^2}
```

<!-- <div class="equation" align="center" data-raw-text="\gamma_2 = \frac{8(\pi-3)}{(\pi-2)^2}" data-equation="eq:halfnormal_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@2d398018e6a1275033c4ad59453a233302c3409d/lib/node_modules/@stdlib/stats/base/dists/halfnormal/kurtosis/docs/img/equation_halfnormal_kurtosis.svg" alt="Excess kurtosis for a half-normal distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/halfnormal/kurtosis' );
```

#### kurtosis( sigma )

Returns the [excess kurtosis][kurtosis] of a [half-normal][half-normal-distribution] distribution with scale parameter `sigma`.

```javascript
var x = kurtosis( 1.0 );
// returns ~0.869

var y = kurtosis( 4.0 );
// returns ~0.869
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var x = kurtosis( 0.0 );
// returns NaN

var y = kurtosis( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var kurtosis = require( '@stdlib/stats/base/dists/halfnormal/kurtosis' );

var opts = {
    'dtype': 'float64'
};
var sigma = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'σ: %0.4f, Kurt(X;σ): %0.4f', sigma, kurtosis );
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
#include "stdlib/stats/base/dists/halfnormal/kurtosis.h"
```

#### stdlib_base_dists_halfnormal_kurtosis( sigma )

Returns the [excess kurtosis][kurtosis] of a [half-normal][half-normal-distribution] distribution with scale parameter `sigma`.

```c
double out = stdlib_base_dists_halfnormal_kurtosis( 1.0 );
// returns ~0.869
```

The function accepts the following arguments:

-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_halfnormal_kurtosis( const double sigma );
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
#include "stdlib/stats/base/dists/halfnormal/kurtosis.h"
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

    for ( i = 0; i < 10; i++ ) {
        sigma = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_halfnormal_kurtosis( sigma );
        printf( "σ: %lf, Kurt(σ): %lf\n", sigma, y );
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

[half-normal-distribution]: https://en.wikipedia.org/wiki/Half-normal_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
