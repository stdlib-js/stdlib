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

> [Poisson][poisson-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_expectation" align="center" raw="\mathbb{E}\left[ X \right] = \lambda" alt="Expected value for a Poisson distribution."> -->

```math
\mathbb{E}\left[ X \right] = \lambda
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \lambda" data-equation="eq:poisson_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/mean/docs/img/equation_poisson_expectation.svg" alt="Expected value for a Poisson distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `λ` is the mean parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/poisson/mean' );
```

#### mean( lambda )

Returns the [expected value][expected-value] of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var v = mean( 9.0 );
// returns 9.0

v = mean( 0.5 );
// returns 0.5
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var v = mean( -1.0 );
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
var mean = require( '@stdlib/stats/base/dists/poisson/mean' );

var lambda;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    lambda = randu() * 20.0;
    v = mean( lambda );
    console.log( 'λ: %d, E(X;λ): %d', lambda.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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
#include "stdlib/stats/base/dists/poisson/mean.h"
```

#### stdlib_base_dists_poisson_mean( λ )

Returns the [expected value][expected-value] of a [Poisson][poisson-distribution] distribution with mean parameter `λ`.

```c
double out = stdlib_base_dists_poisson_mean( 0.5 );
// returns 0.5
```

The function accepts the following arguments:

-   **λ**: `[in] double` mean parameter.

```c
double stdlib_base_dists_poisson_mean( const double lambda );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` 
element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/poisson/mean.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double lambda;
    double v;
    int i;

    for ( i = 0; i < 10; i++ ) {
        lambda = 20.0 * (double)rand() / ( (double)RAND_MAX + 1.0 );
        v = stdlib_base_dists_poisson_mean( lambda );
        printf( "λ: %lf , E(X;λ): %lf\n", lambda , v );
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

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
