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

> [Raised cosine][cosine-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [raised cosine][cosine-distribution] random variable with location parameter `mu` and scale parameter `s` is

<!-- <equation class="equation" label="eq:cosine_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{6(90-\pi^{4})}{5(\pi^{2}-6)^{2}}" alt="Excess kurtosis for a raised cosine distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = \frac{6(90-\pi^{4})}{5(\pi^{2}-6)^{2}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{6(90-\pi^{4})}{5(\pi^{2}-6)^{2}}" data-equation="eq:cosine_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cosine/kurtosis/docs/img/equation_cosine_kurtosis.svg" alt="Excess kurtosis for a raised cosine distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/cosine/kurtosis' );
```

#### kurtosis( mu, s )

Returns the [excess kurtosis][kurtosis] for a [raised cosine][cosine-distribution] distribution with location parameter `mu` and scale parameter `s`.

```javascript
var y = kurtosis( 2.0, 1.0 );
// returns ~-0.594

y = kurtosis( 0.0, 1.0 );
// returns ~-0.594

y = kurtosis( -1.0, 4.0 );
// returns ~-0.594
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = kurtosis( NaN, 1.0 );
// returns NaN

y = kurtosis( 0.0, NaN );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = kurtosis( 0.0, 0.0 );
// returns NaN

y = kurtosis( 0.0, -1.0 );
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
var kurtosis = require( '@stdlib/stats/base/dists/cosine/kurtosis' );

var mu;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    s = randu() * 20.0;
    y = kurtosis( mu, s );
    console.log( 'µ: %d, s: %d, Kurt(X;µ,s): %d', mu.toFixed( 4 ), s.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

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
#include "stdlib/stats/base/dists/cosine/kurtosis.h"
```

#### stdlib_base_dists_cosine_kurtosis( mu, s )

Returns the [excess kurtosis][kurtosis] for a [raised cosine][cosine-distribution] distribution with location parameter `mu` and scale parameter `s`.

```c
double out = stdlib_base_dists_cosine_kurtosis( 0.0, 1.0 );
// returns ~-0.594
```

The function accepts the following arguments:

-   **mu**: `[in] double` location parameter.
-   **s**: `[in] double` scale parameter.

```c
double stdlib_base_dists_cosine_kurtosis( const double mu, const double s );
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
#include "stdlib/stats/base/dists/cosine/kurtosis.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * (max - min) );
}

int main( void ) {
    double mu;
    double s;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        mu = random_uniform( -50.0, 50.0 );
        s = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
        y = stdlib_base_dists_cosine_kurtosis( mu, s );
        printf( "µ: %lf, s: %lf, Kurt(X;µ,s): %lf\n", mu, s , y );
    }

    return 0;
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

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
