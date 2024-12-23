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

> [F][f-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [F][f-distribution] random variable is

<!-- <equation class="equation" label="eq:f_entropy" align="center" raw="h\left( X \right) = \ln\left( \tfrac{d_2}{d_1} \Gamma\left( \tfrac{d_1}{2} \right) \Gamma\left( \tfrac{d_2}{2} \right) \Gamma\left( \tfrac{d_1+d_2}{2} \right) \right) \\ + \left( 1-\tfrac{d_1}{2} \right) \Psi\left( \tfrac{d_1}{2} \right) +  \left( 1-\tfrac{d_2}{2} \right) \Psi\left( \tfrac{d_2}{2} \right) + \tfrac{d_1+d_2}{2} \Psi\left( \tfrac{d_1+d_2}{2} \right)" alt="Differential entropy for an F distribution."> -->

```math
h\left( X \right) = \ln\left( \tfrac{d_2}{d_1} \Gamma\left( \tfrac{d_1}{2} \right) \Gamma\left( \tfrac{d_2}{2} \right) \Gamma\left( \tfrac{d_1+d_2}{2} \right) \right) \\ + \left( 1-\tfrac{d_1}{2} \right) \Psi\left( \tfrac{d_1}{2} \right) +  \left( 1-\tfrac{d_2}{2} \right) \Psi\left( \tfrac{d_2}{2} \right) + \tfrac{d_1+d_2}{2} \Psi\left( \tfrac{d_1+d_2}{2} \right)
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \ln\left( \tfrac{d_2}{d_1} \Gamma\left( \tfrac{d_1}{2} \right) \Gamma\left( \tfrac{d_2}{2} \right) \Gamma\left( \tfrac{d_1+d_2}{2} \right) \right) \\ + \left( 1-\tfrac{d_1}{2} \right) \Psi\left( \tfrac{d_1}{2} \right) +  \left( 1-\tfrac{d_2}{2} \right) \Psi\left( \tfrac{d_2}{2} \right) + \tfrac{d_1+d_2}{2} \Psi\left( \tfrac{d_1+d_2}{2} \right)" data-equation="eq:f_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/f/entropy/docs/img/equation_f_entropy.svg" alt="Differential entropy for an F distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `d1` is the numerator degrees of freedom, `d2` is the denominator degrees of freedom, and `Γ` and `Ψ` denote the [gamma][gamma-function] and [digamma][digamma] functions, respectively.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/f/entropy' );
```

#### entropy( d1, d2 )

Returns the [differential entropy][entropy] of a [F][f-distribution] distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` (in [nats][nats]).

```javascript
var v = entropy( 4.0, 7.0 );
// returns ~1.277

v = entropy( 4.0, 12.0 );
// returns ~1.12

v = entropy( 8.0, 2.0 );
// returns ~2.144
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 7.0 );
// returns NaN

v = entropy( 3.0, NaN );
// returns NaN
```

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 0.0, 2.0 );
// returns NaN

v = entropy( -1.0, 1.0 );
// returns NaN
```

If provided `d2 <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 3.0, 0.0 );
// returns NaN

v = entropy( 3.0, -1.0 );
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
var entropy = require( '@stdlib/stats/base/dists/f/entropy' );

var d1;
var d2;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    d1 = ( randu()*10.0 ) + EPS;
    d2 = ( randu()*10.0 ) + EPS;
    v = entropy( d1, d2 );
    console.log( 'd1: %d, d2: %d, h(X;d1,d2): %d', d1.toFixed( 4 ), d2.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/f/entropy.h"
```

#### stdlib_base_dists_f_entropy( d1, d2 )

Evaluates the [differential entropy][entropy] of a [F][f-distribution] distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` (in [nats][nats]).

```c
double out = stdlib_base_dists_f_entropy( 3.0, 7.0 );
// returns ~1.298
```

The function accepts the following arguments:

-   **d1**: `[in] double` numerator degrees of freedom.
-   **d2**: `[in] double` maximum support.

```c
double stdlib_base_dists_f_entropy( const double d1, const double d2 );
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
#include "stdlib/stats/base/dists/f/entropy.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double d1;
    double d2;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        d1 = random_uniform( 0.0, 10.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
        d2 = random_uniform( 0.0, 10.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
        y = stdlib_base_dists_f_entropy( d1, d2 );
        printf( "d1: %lf, d2: %lf, h(X;d1,d2): %lf\n", d1, d2, y );
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

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[digamma]: https://en.wikipedia.org/wiki/Digamma_function

</section>

<!-- /.links -->
