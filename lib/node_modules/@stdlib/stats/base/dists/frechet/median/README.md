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

> [Fréchet][frechet-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_median" align="center" raw="\operatorname{Median} = m+{\frac {s}{{\sqrt[ {\alpha }]{\ln(2)}}}}" alt="Median for a Fréchet distribution."> -->

```math
\mathop{\mathrm{Median}} = m+{\frac {s}{{\sqrt[ {\alpha }]{\ln(2)}}}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Median} = m+{\frac {s}{{\sqrt[ {\alpha }]{\ln(2)}}}}" data-equation="eq:frechet_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/frechet/median/docs/img/equation_frechet_median.svg" alt="Median for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var median = require( '@stdlib/stats/base/dists/frechet/median' );
```

#### median( alpha, s, m )

Returns the [median][median] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = median( 2.0, 1.0, 1.0 );
// returns ~2.201

y = median( 1.0, 2.0, -3.0 );
// returns ~-0.115

y = median( 1.0, 1.0, 2.0 );
// returns ~3.443
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = median( NaN, 1.0, -2.0 );
// returns NaN

y = median( 1.0, NaN, -2.0 );
// returns NaN

y = median( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = median( 0.0, 3.0, 2.0 );
// returns NaN

y = median( 0.0, -1.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = median( 1.0, 0.0, 2.0 );
// returns NaN

y = median( 1.0, -1.0, 2.0 );
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
var median = require( '@stdlib/stats/base/dists/frechet/median' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*40.0 ) - 20.0;
    y = median( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, Median(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/frechet/median.h"
```

#### stdlib_base_dists_frechet_median( alpha, s, m )

Returns the median for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.

```c
double y = stdlib_base_dists_frechet_median( 5.0, 2.0, 0.0 );
// returns ~2.152
```

The function accepts the following arguments:

-   **alpha**: `[in] double` shape parameter.
-   **s**: `[in] double` scale parameter.
-   **m**: `[in] double` location parameter.

```c
double stdlib_base_dists_frechet_median( const double alpha, const double s, const double m );
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
#include "stdlib/stats/base/dists/frechet/median.h"
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
       y = stdlib_base_dists_frechet_median( alpha, s, m );
       printf( "α: %.4lf, s: %.4lf, m: %.4lf, Median(X;α,s,m): %.4lf\n", alpha, s, m, y );
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

[median]: https://en.wikipedia.org/wiki/Median

</section>

<!-- /.links -->
