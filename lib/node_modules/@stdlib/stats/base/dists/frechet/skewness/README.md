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

> [Fréchet][frechet-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_skewness" align="center" raw="\operatorname{skew} = \begin{cases} {\frac{\Gamma \left(1-{\frac{3}{\alpha }}\right)-3\Gamma \left(1-{\frac{2}{\alpha }}\right)\Gamma \left(1-{\frac{1}{\alpha }}\right)+2\Gamma^{3}\left(1-{\frac{1}{\alpha }}\right)}{{\sqrt{\left(\Gamma \left(1-{\frac{2}{\alpha }}\right)-\Gamma^{2}\left(1-{\frac{1}{\alpha }}\right)\right)^{3}}}}} & \text{ for }\alpha > 3\\\ \infty & \text{ otherwise }\end{cases}" alt="Skewness for a Fréchet distribution."> -->

```math
\mathop{\mathrm{skew}} = \begin{cases} {\frac{\Gamma \left(1-{\frac{3}{\alpha }}\right)-3\Gamma \left(1-{\frac{2}{\alpha }}\right)\Gamma \left(1-{\frac{1}{\alpha }}\right)+2\Gamma^{3}\left(1-{\frac{1}{\alpha }}\right)}{{\sqrt{\left(\Gamma \left(1-{\frac{2}{\alpha }}\right)-\Gamma^{2}\left(1-{\frac{1}{\alpha }}\right)\right)^{3}}}}} & \text{ for }\alpha > 3\\\ \infty & \text{ otherwise }\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew} = \begin{cases} {\frac{\Gamma \left(1-{\frac{3}{\alpha }}\right)-3\Gamma \left(1-{\frac{2}{\alpha }}\right)\Gamma \left(1-{\frac{1}{\alpha }}\right)+2\Gamma^{3}\left(1-{\frac{1}{\alpha }}\right)}{{\sqrt{\left(\Gamma \left(1-{\frac{2}{\alpha }}\right)-\Gamma^{2}\left(1-{\frac{1}{\alpha }}\right)\right)^{3}}}}} &amp; \text{ for }\alpha &gt; 3\\\ \infty &amp; \text{ otherwise }\end{cases}" data-equation="eq:frechet_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/skewness/docs/img/equation_frechet_skewness.svg" alt="Skewness for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Γ` is the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/frechet/skewness' );
```

#### skewness( alpha, s, m )

Returns the [skewness][skewness] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = skewness( 4.0, 1.0, 1.0 );
// returns ~5.605

y = skewness( 4.0, 8.0, -3.0 );
// returns ~5.605

y = skewness( 5.0, 1.0, 2.0 );
// returns ~3.535
```

If `0 < alpha <= 3`, the function returns `+Infinity`.

```javascript
var y = skewness( 2.5, 1.0, 1.0 );
// returns Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = skewness( NaN, 1.0, -2.0 );
// returns NaN

y = skewness( 1.0, NaN, -2.0 );
// returns NaN

y = skewness( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 0.0, 3.0, 2.0 );
// returns NaN

y = skewness( -1.0, 3.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 1.0, 0.0, 2.0 );
// returns NaN

y = skewness( 1.0, -1.0, 2.0 );
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
var skewness = require( '@stdlib/stats/base/dists/frechet/skewness' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*40.0 ) - 20.0;
    y = skewness( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, skew(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/frechet/skewness.h"
```

#### stdlib_base_dists_frechet_skewness( alpha, s, m )

Returns the skewness for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.

```c
double y = stdlib_base_frechet_skewness( 5.0, 2.0, 0.0 );
// returns ~3.535
```

The function accepts the following arguments:

-   **alpha**: `[in] double` shape parameter.
-   **s**: `[in] double` scale parameter.
-   **m**: `[in] double` location parameter.

```c
double stdlib_base_dists_frechet_skewness( const double alpha, const double s, const double m );
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
#include "stdlib/stats/base/dists/frechet/skewness.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
   double alpha;
   double s;
   double m;
   double y;
   int i;

    for ( i = 0; i < 10; i++ ) {
       alpha = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
       s = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
       m = random_uniform( -20.0, 20.0 );
       y = stdlib_base_dists_frechet_skewness( alpha, s, m );
       printf( "α: %.4lf, s: %.4lf, m: %.4lf, skew(X;α,s,m): %.4lf\n", alpha, s, m, y );
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

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
