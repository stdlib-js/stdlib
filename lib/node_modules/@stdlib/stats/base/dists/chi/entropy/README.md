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

> [Chi][chi-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [chi][chi-distribution] random variable is

<!-- <equation class="equation" label="eq:chi_entropy" align="center" raw="h\left( X \right) = \ln(\Gamma(k/2)) + {\tfrac{1}{2}}(k\!-\!\ln(2)\!-\!(k\!-\!1)\psi(k/2))" alt="Differential entropy for a chi distribution."> -->

```math
h\left( X \right) = \ln(\Gamma(k/2)) + {\tfrac{1}{2}}(k\!-\!\ln(2)\!-\!(k\!-\!1)\psi(k/2))
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \ln(\Gamma(k/2)) + {\tfrac{1}{2}}(k\!-\!\ln(2)\!-\!(k\!-\!1)\psi(k/2))" data-equation="eq:chi_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chi/entropy/docs/img/equation_chi_entropy.svg" alt="Differential entropy for a chi distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k > 0` is the degrees of freedom and `Γ` and `Ψ` denote the [gamma][gamma-function] and [digamma][digamma] functions, respectively.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/chi/entropy' );
```

#### entropy( k )

Returns the [differential entropy][entropy] of a [chi][chi-distribution] distribution with degrees of freedom `k` (in [nats][nats]).

```javascript
var v = entropy( 9.0 );
// returns ~1.052

v = entropy( 0.5 );
// returns ~0.135
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = entropy( -1.0 );
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
var entropy = require( '@stdlib/stats/base/dists/chi/entropy' );

var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = randu() * 20.0;
    v = entropy( k );
    console.log( 'k: %d, h(X,k): %d', k.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/chi/entropy.h"
```

#### stdlib_base_dists_chi_entropy( k )

Returns the [differential entropy][entropy] of a [chi][chi-distribution] distribution with degrees of freedom `k` (in [nats][nats]).

```c
double out = stdlib_base_dists_chi_entropy( 9.0 );
// returns ~1.052
```

The function accepts the following arguments:

-   **k**: `[in] double` degrees of freedom (must be positive).

```c
double stdlib_base_dists_chi_entropy( const double k );
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
#include "stdlib/stats/base/dists/chi/entropy.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double result;
    double k;
    int i;

    for ( i = 0; i < 10; i++ ) {
        k = random_uniform( 0.0, 10.0 );
        result = stdlib_base_dists_chi_entropy( k );
        printf( "k: %lf, h(X,k): %lf \n", k, result );
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

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

[digamma]: https://en.wikipedia.org/wiki/Digamma_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
