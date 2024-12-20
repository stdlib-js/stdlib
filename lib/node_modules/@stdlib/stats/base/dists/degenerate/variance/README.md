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

# Variance

> [Degenerate][degenerate-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [degenerate][degenerate-distribution] random variable is

<!-- <equation class="equation" label="eq:degenerate_variance" align="center" raw="\operatorname{Var}\left( X \right) = 0" alt="Variance for a degenerate distribution."> -->

```math
\mathop{\mathrm{Var}}\left( X \right) = 0
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = 0" data-equation="eq:degenerate_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e1fbdee688c5409e4cc6b0cd06d90b1cd2abd67c/lib/node_modules/@stdlib/stats/base/dists/degenerate/variance/docs/img/equation_degenerate_variance.svg" alt="Variance for a degenerate distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the constant value of the distribution.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/degenerate/variance' );
```

#### variance( mu )

Returns the [variance][variance] of a [degenerate][degenerate-distribution] distribution with constant value `mu`.

```javascript
var v = variance( 10.0 );
// returns 0.0

v = variance( -0.5 );
// returns 0.0

v = variance( NaN );
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
var variance = require( '@stdlib/stats/base/dists/degenerate/variance' );

var mu;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = randu();
    v = variance( mu );
    console.log( 'µ: %d, Var(X;µ): %d', mu.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/degenerate/variance.h"
```

#### stdlib_base_dists_degenerate_variance( mu )

Returns the variance of a degenerate distribution.

```c
double out = stdlib_base_dists_degenerate_variance( 0.1 );
// returns 0.0
```

The function accepts the following arguments:

-   **mu**: `[in] double` constant value of distribution.

```c
double stdlib_base_dists_degenerate_variance( const double mu );
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
#include "stdlib/stats/base/dists/degenerate/variance.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        mu = random_uniform( 0.0, 100.0 ) - 50.0;
        y = stdlib_base_dists_degenerate_variance( mu );
        printf( "µ: %lf, Var(X;µ): %lf\n", mu, y );
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

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
