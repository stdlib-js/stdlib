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

# Mean

> [Lévy][levy-distribution] distribution [expected value][mean].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][mean] for a [Lévy][levy-distribution] random variable with location `μ` and scale `c > 0` is

<!-- <equation class="equation" label="eq:levy_expectation" align="center" raw="\mathbb{E}\left[ X \right] = \infty" alt="Expected value for a Lévy distribution."> -->

```math
\mathbb{E}\left[ X \right] = \infty
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \infty" data-equation="eq:levy_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/levy/mean/docs/img/equation_levy_expectation.svg" alt="Expected value for a Lévy distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/levy/mean' );
```

#### mean( mu, c )

Returns the [expected value][mean] for a [Lévy][levy-distribution] distribution with location parameter `mu` and scale parameter `c`.

```javascript
var y = mean( 2.0, 1.0 );
// returns Infinity

y = mean( 0.0, 1.0 );
// returns Infinity

y = mean( -1.0, 4.0 );
// returns Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mean( NaN, 1.0 );
// returns NaN

y = mean( 0.0, NaN );
// returns NaN
```

If provided `c <= 0`, the function returns `NaN`.

```javascript
var y = mean( 0.0, 0.0 );
// returns NaN

y = mean( 0.0, -1.0 );
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
var mean = require( '@stdlib/stats/base/dists/levy/mean' );

var mu;
var c;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    c = randu() * 20.0;
    y = mean( mu, c );
    console.log( 'µ: %d, c: %d, E(X;µ,c): %d', mu.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/levy/mean.h"
```

#### stdlib_base_dists_levy_mean( mu, c )

Evaluates the [expected value][mean] for a [Lévy][levy-distribution] distribution with location parameter `mu` and scale parameter `c`.

```c
double out = stdlib_base_dists_levy_mean( 0.0, 1.0 );
// returns Infinity
```

The function accepts the following arguments:

-   **mu**: `[in] double` location parameter.
-   **c**: `[in] double` scale parameter.

```c
double stdlib_base_dists_levy_mean( const double mu, const double c );
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
#include "stdlib/stats/base/dists/levy/mean.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double c;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( -5.0, 5.0 );
        a = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_levy_mean( mu, c );
        printf( "µ: %lf, c: %lf, E(X;µ,c): %lf\n", mu, c, y );
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

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

[mean]: https://en.wikipedia.org/wiki/Mean

</section>

<!-- /.links -->
