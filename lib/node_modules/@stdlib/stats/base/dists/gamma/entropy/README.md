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

# Entropy

> [Gamma][gamma-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [gamma][gamma-distribution] random variable with shape parameter `α > 0` and rate parameter `β > 0` is

<!-- <equation class="equation" label="eq:gamma_entropy" align="center" raw="h\left( X \right) = \alpha \,-\, \ln \beta \,+\, \ln[\Gamma(\alpha)] \,+\, (1 \,-\, \alpha)\psi(\alpha)" alt="Differential entropy for a gamma distribution."> -->

```math
h\left( X \right) = \alpha \,-\, \ln \beta \,+\, \ln[\Gamma(\alpha)] \,+\, (1 \,-\, \alpha)\psi(\alpha)
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \alpha \,-\, \ln \beta \,+\, \ln[\Gamma(\alpha)] \,+\, (1 \,-\, \alpha)\psi(\alpha)" data-equation="eq:gamma_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gamma/entropy/docs/img/equation_gamma_entropy.svg" alt="Differential entropy for a gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Γ` and `Ψ` denote the [gamma][gamma-function] and [digamma][digamma] function, respectively.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/gamma/entropy' );
```

#### entropy( alpha, beta )

Returns the [differential entropy][entropy] of a [gamma][gamma-distribution] distribution with shape parameter `alpha` and rate parameter `beta` (in [nats][nats]).

```javascript
var v = entropy( 1.0, 1.0 );
// returns 1.0

v = entropy( 4.0, 12.0 );
// returns ~-0.462

v = entropy( 8.0, 2.0 );
// returns ~1.723
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 2.0 );
// returns NaN

v = entropy( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 0.0, 1.0 );
// returns NaN

v = entropy( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 1.0, 0.0 );
// returns NaN

v = entropy( 1.0, -1.0 );
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
var entropy = require( '@stdlib/stats/base/dists/gamma/entropy' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + EPS;
    v = entropy( alpha, beta );
    console.log( 'α: %d, β: %d, h(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/gamma/entropy.h"
```

#### stdlib_base_dists_gamma_entropy( alpha, beta )

Returns the differential entropy of a gamma distribution with shape parameter `alpha` and rate parameter `beta`.

```c
double y = stdlib_base_dists_gamma_entropy( 1.0, 1.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **alpha**: `[in] double` shape parameter.
-   **beta**: `[in] double` rate parameter.

```c
double stdlib_base_dists_gamma_entropy( const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/gamma/entropy.h"
#include "stdlib/constants/float64/eps.h"
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

    for ( i = 0; i < 10; i++ ) {
        alpha = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        beta = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 ) ;
        y = stdlib_base_dists_gamma_entropy( alpha, beta );
        printf( "α: %1f. β: %1f. h(X;α,β): %lf\n", alpha , beta , y );
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

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[digamma]: https://en.wikipedia.org/wiki/Digamma_function

</section>

<!-- /.links -->
