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

# Kurtosis

> [Gamma][gamma-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [gamma][gamma-distribution] random variable with shape parameter `α > 0` and rate parameter `β > 0` is

<!-- <equation class="equation" label="eq:gamma_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{6}{\alpha}" alt="Excess kurtosis for a gamma distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = \frac{6}{\alpha}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{6}{\alpha}" data-equation="eq:gamma_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gamma/kurtosis/docs/img/equation_gamma_kurtosis.svg" alt="Excess kurtosis for a gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/gamma/kurtosis' );
```

#### kurtosis( alpha, beta )

Returns the [excess kurtosis][kurtosis] of a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var v = kurtosis( 1.0, 1.0 );
// returns 6.0

v = kurtosis( 4.0, 12.0 );
// returns 1.5

v = kurtosis( 8.0, 2.0 );
// returns 0.75
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 2.0 );
// returns NaN

v = kurtosis( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = kurtosis( 0.0, 1.0 );
// returns NaN

v = kurtosis( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = kurtosis( 1.0, 0.0 );
// returns NaN

v = kurtosis( 1.0, -1.0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var kurtosis = require( '@stdlib/stats/base/dists/gamma/kurtosis' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + EPS;
    v = kurtosis( alpha, beta );
    console.log( 'α: %d, β: %d, Kurt(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/gamma/kurtosis.h"
```

#### stdlib_base_dists_gamma_kurtosis( alpha, beta )

Returns the [excess kurtosis][kurtosis] of a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```c
double out = stdlib_base_dists_gamma_kurtosis( 1.0, 1.0 );
// returns 6.0
```

The function accepts the following arguments:

-   **alpha**: `[in] double` shape parameter.
-   **beta**: `[in] double` rate parameter.

```c
double stdlib_base_dists_gamma_kurtosis( const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/gamma/kurtosis.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double alpha;
    double beta;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        alpha = random_uniform( 0.0, 20.0 );
        beta = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_gamma_kurtosis( alpha, beta );
        printf( "α: %lf, β: %lf, Kurt(X;α,β): %lf\n", alpha, beta, y );
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

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
