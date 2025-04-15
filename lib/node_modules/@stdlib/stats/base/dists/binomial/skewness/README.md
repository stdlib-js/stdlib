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

> [Binomial][binomial-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac {1-2p}{\sqrt{np(1-p)}}" alt="Skewness for a binomial distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = \frac {1-2p}{\sqrt{np(1-p)}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac {1-2p}{\sqrt{np(1-p)}}" data-equation="eq:binomial_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/skewness/docs/img/equation_binomial_skewness.svg" alt="Skewness for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/binomial/skewness' );
```

#### skewness( n, p )

Returns the [skewness][skewness] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var v = skewness( 20, 0.1 );
// returns ~0.596

v = skewness( 50, 0.5 );
// returns 0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 0.5 );
// returns NaN

v = skewness( 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = skewness( 1.5, 0.5 );
// returns NaN

v = skewness( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = skewness( 20, -1.0 );
// returns NaN

v = skewness( 20, 1.5 );
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
var skewness = require( '@stdlib/stats/base/dists/binomial/skewness' );

var v;
var i;
var n;
var p;

for ( i = 0; i < 10; i++ ) {
    n = round( randu() * 100.0 );
    p = randu();
    v = skewness( n, p );
    console.log( 'n: %d, p: %d, skew(X;n,p): %d', n, p.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/binomial/skewness.h"
```

#### stdlib_base_dists_binomial_skewness( n, p )

Returns the [skewness][skewness] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```c
double out = stdlib_base_dists_binomial_skewness( 100, 0.1 );
// returns ~0.267
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` number of trials.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_binomial_skewness( const int32_t n, const double p );
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
#include "stdlib/stats/base/dists/binomial/skewness.h"
#include "stdlib/math/base/special/ceil.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * (max - min) );
}

int main( void ) {
    int32_t n;
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        n = stdlib_base_ceil( random_uniform( 0.0, 100.0 ) );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_binomial_skewness( n, p );
        printf( "n: %d, p: %lf, skew(X;n,p): %lf\n", n, p, y );
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

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
