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

# Moment-Generating Function

> [Chi-squared][chisquare-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \left( 1 - 2t \right )^{-k/2} \text{ for } t < \tfrac{1}{2}" alt="Moment-generating function (MGF) for a chi-squared distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \left( 1 - 2t \right )^{-k/2} \text{ for } t < \tfrac{1}{2}
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \left( 1 - 2t \right )^{-k/2} \text{ for } t &lt; \tfrac{1}{2}" data-equation="eq:chisquare_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/chisquare/mgf/docs/img/equation_chisquare_mgf.svg" alt="Moment-generating function (MGF) for a chi-squared distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the degrees of freedom.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/chisquare/mgf' );
```

#### mgf( t, k )

Evaluates the [moment-generating function][mgf] (MGF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var y = mgf( 0.4, 2 );
// returns ~5.0

y = mgf( -1.0, 5.0 );
// returns ~0.0642

y = mgf( 0.0, 10.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided `t >= 0.5`, the function returns `NaN`.

```javascript
var y = mgf( 0.8, 1.0 );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, -2.0 );
// returns NaN
```

#### mgf.factory( k )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var mymgf = mgf.factory( 1.0 );

var y = mymgf( 0.2 );
// returns ~1.291

y = mymgf( 0.4 );
// returns ~2.236
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
var mgf = require( '@stdlib/stats/base/dists/chisquare/mgf' );

var t;
var k;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 0.5;
    k = randu() * 10.0;
    y = mgf( t, k );
    console.log( 'x: %d, k: %d, M_X(t;k): %d', t.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/chisquare/mgf.h"
```

#### stdlib_base_dists_chisquare_mgf( t, k )

Evaluates the moment-generating function (MGF) for a chi-squared distribution with degrees of freedom `k` at a value `t`.

```c
double out = stdlib_base_dists_chisquare_mgf( 0.4, 2.0 );
// returns ~5.0
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **k**: `[in] double` degrees of freedom (must be non-negative).

```c
double stdlib_base_dists_chisquare_mgf( const double t, const double k );
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
#include "stdlib/stats/base/dists/chisquare/mgf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double result;
    double t;
    double k;
    int i;

    for ( i = 0; i < 10; i++ ) {
        t = random_uniform( -0.5, 0.4 );
        k = random_uniform( 0.1, 10.0 );
        result = stdlib_base_dists_chisquare_mgf( t, k );
        printf( "t: %lf, k: %lf, M_X(t;k): %lf \n", t, k, result );
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

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
