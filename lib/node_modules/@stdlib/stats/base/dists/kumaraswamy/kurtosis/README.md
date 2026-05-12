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

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable with first shape parameter `a` and second shape parameter `b` is

<!-- <equation class="equation" label="eq:kumaraswamy_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{ m_4 - ( 4.0 \cdot m_3 \cdot m_1 ) + ( 6.0 \cdot m_2 \cdot m_1^2 ) - ( 3.0 \cdot m_1^4 ) ) }{\left( m_2 - m_1^2 \right)^2}" alt="Excess kurtosis for a Kumaraswamy's double bounded distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = \frac{ m_4 - ( 4.0 \cdot m_3 \cdot m_1 ) + ( 6.0 \cdot m_2 \cdot m_1^2 ) - ( 3.0 \cdot m_1^4 ) ) }{\left( m_2 - m_1^2 \right)^2}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{ m_4 - ( 4.0 \cdot m_3 \cdot m_1 ) + ( 6.0 \cdot m_2 \cdot m_1^2 ) - ( 3.0 \cdot m_1^4 ) ) }{\left( m_2 - m_1^2 \right)^2}" data-equation="eq:kumaraswamy_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/kurtosis/docs/img/equation_kumaraswamy_kurtosis.svg" alt="Excess kurtosis for a Kumaraswamy's double bounded distribution.">
    <br>
</div> -->

<!-- </equation> -->

where the raw moments of the distribution are given by

<!-- <equation class="equation" label="eq:kumaraswamy_raw_moments" align="center" raw="m_n = b \, B\left(1+\tfrac{n}{a}, b \right)" alt="Raw moments for a Kumaraswamy's double bounded distribution."> -->

```math
m_n = b \, B\left(1+\tfrac{n}{a}, b \right)
```

<!-- <div class="equation" align="center" data-raw-text="m_n = b \, B\left(1+\tfrac{n}{a}, b \right)" data-equation="eq:kumaraswamy_raw_moments">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/kurtosis/docs/img/equation_kumaraswamy_raw_moments.svg" alt="Raw moments for a Kumaraswamy's double bounded distribution.">
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
var kurtosis = require( '@stdlib/stats/base/dists/kumaraswamy/kurtosis' );
```

#### kurtosis( a, b )

Returns the [excess kurtosis][kurtosis] of a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with first shape parameter `a` and second shape parameter `b`.

```javascript
var v = kurtosis( 1.0, 1.0 );
// returns ~1.8

v = kurtosis( 4.0, 12.0 );
// returns ~2.704

v = kurtosis( 2.0, 8.0 );
// returns ~2.666
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 2.0 );
// returns NaN

v = kurtosis( 2.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = kurtosis( -1.0, 0.5 );
// returns NaN

y = kurtosis( 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = kurtosis( 0.5, -1.0 );
// returns NaN

y = kurtosis( 0.5, 0.0 );
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
var kurtosis = require( '@stdlib/stats/base/dists/kumaraswamy/kurtosis' );

var opts = {
    'dtype': 'float64'
};
var a = uniform( 10, 0.0, 10.0, opts );
var b = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'a: %0.4f, b: %0.4f, Kurt(X;a,b): %0.4f', a, b, kurtosis );
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
#include "stdlib/stats/base/dists/kumaraswamy/kurtosis.h"
```

#### stdlib_base_dists_kumaraswamy_kurtosis( a, b )

Returns the [excess kurtosis][kurtosis] of a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with first shape parameter `a` and second shape parameter `b`.

```c
double v = stdlib_base_dists_kumaraswamy_kurtosis( 0.5, 1.0 );
// returns ~2.143
```

The function accepts the following arguments:

-   **a**: `[in] double` first shape parameter.
-   **b**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_kumaraswamy_kurtosis( const double a, const double b );
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
#include "stdlib/stats/base/dists/kumaraswamy/kurtosis.h"
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
        y = stdlib_base_dists_kumaraswamy_kurtosis( a, b );
        printf( "a: %lf, b: %lf, Kurt(X;a,b): %lf\n", a, b, y );
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

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
