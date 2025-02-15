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

# Skewness

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable with first shape parameter `a` and second shape parameter `b` is

<!-- <equation class="equation" label="eq:kumaraswamy_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{ m_3 - 3m_1\sigma^2 - m_1^3 }{ \left( \sigma^2 \right)^{3/2} }" alt="Skewness for a Kumaraswamy's double bounded distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = \frac{ m_3 - 3m_1\sigma^2 - m_1^3 }{ \left( \sigma^2 \right)^{3/2} }
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{ m_3 - 3m_1\sigma^2 - m_1^3 }{ \left( \sigma^2 \right)^{3/2} }" data-equation="eq:kumaraswamy_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/skewness/docs/img/equation_kumaraswamy_skewness.svg" alt="Skewness for a Kumaraswamy's double bounded distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `σ^2` is the [variance][variance] and the raw moments of the distribution are given by

<!-- <equation class="equation" label="eq:kumaraswamy_raw_moments" align="center" raw="m_n = b \, B\left(1+\tfrac{n}{a}, b \right)" alt="Raw moments for a Kumaraswamy's double bounded distribution."> -->

```math
m_n = b \, B\left(1+\tfrac{n}{a}, b \right)
```

<!-- <div class="equation" align="center" data-raw-text="m_n = b \, B\left(1+\tfrac{n}{a}, b \right)" data-equation="eq:kumaraswamy_raw_moments">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/skewness/docs/img/equation_kumaraswamy_raw_moments.svg" alt="Raw moments for a Kumaraswamy's double bounded distribution.">
    <br>
</div> -->

<!-- </equation> -->

with `B` denoting the [beta function][beta-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/kumaraswamy/skewness' );
```

#### skewness( a, b )

Returns the [skewness][skewness] of a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with first shape parameter `a` and second shape parameter `b`.

```javascript
var v = skewness( 1.0, 1.0 );
// returns ~0.0

v = skewness( 4.0, 12.0 );
// returns ~-0.201

v = skewness( 2.0, 8.0 );
// returns ~0.384
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 2.0 );
// returns NaN

v = skewness( 2.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = skewness( -1.0, 0.5 );
// returns NaN

y = skewness( 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 0.5, -1.0 );
// returns NaN

y = skewness( 0.5, 0.0 );
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
var skewness = require( '@stdlib/stats/base/dists/kumaraswamy/skewness' );

var a;
var b;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = randu() * 10.0;
    b = randu() * 10.0;
    v = skewness( a, b );
    console.log( 'a: %d, b: %d, skew(X;a,b): %d', a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/kumaraswamy/skewness.h"
```

#### stdlib_base_dists_kumaraswamy_skewness( a, b )

Returns the [skewness][skewness] of a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with first shape parameter `a` and second shape parameter `b`.

```c
double out = stdlib_base_dists_kumaraswamy_skewness( 1.0, 1.0 );
// returns ~0.0
```

The function accepts the following arguments:

-   **a**: `[in] double` first shape parameter.
-   **b**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_kumaraswamy_skewness( const
double a, const double b );
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
#include "stdlib/stats/base/dists/kumaraswamy/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double a;
    double b;
    double y;
    int i;
    for ( i = 0; i < 25; i++ ) {
        a = random_uniform( 0.1, 10.0 );
        b = random_uniform( 0.1, 10.0 );
        y = stdlib_base_dists_kumaraswamy_skewness( a, b );
        printf( "a: %lf, b: %lf, skew(X;a,b): %lf\n", a, b, y );
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

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
