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

# Quantile Function

> [Degenerate distribution][degenerate-distribution] [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [degenerate][degenerate-distribution] random variable is

<!-- <equation class="equation" label="eq:degenerate_quantile_function" align="center" raw="Q(p;\mu) = \inf \left\{x \in {\mathbb {R}}:p \leq F(x;\mu)\right\} = \mu" alt="Quantile function for a degenerate distribution."> -->

```math
Q(p;\mu) = \inf \left\{x \in {\mathbb {R}}:p \leq F(x;\mu)\right\} = \mu
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;\mu) = \inf \left\{x \in {\mathbb {R}}:p \leq F(x;\mu)\right\} = \mu" data-equation="eq:degenerate_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e1fbdee688c5409e4cc6b0cd06d90b1cd2abd67c/lib/node_modules/@stdlib/stats/base/dists/degenerate/quantile/docs/img/equation_degenerate_quantile_function.svg" alt="Quantile function for a degenerate distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p <= 1` and where `µ` is the constant value of the distribution.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/degenerate/quantile' );
```

#### quantile( p, mu )

Evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = quantile( 0.3, 8.0 );
// returns 8.0

y = quantile( 0.9, 8.0 );
// returns 8.0
```

#### quantile.factory( mu )

Returns a function for evaluating the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var myquantile = quantile.factory( 10.0 );

var y = myquantile( 0.2 );
// returns 10.0

y = myquantile( 1.1 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/degenerate/quantile' );

var mu;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    mu = ( randu()*10.0 ) - 5.0;
    y = quantile( p, mu );
    console.log( 'p: %d, µ: %d, Q(p;µ): %d', p, mu, y );
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
#include "stdlib/stats/base/dists/degenerate/quantile.h"
```

#### stdlib_base_dists_degenerate_quantile( p, mu )

Evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```c
double out = stdlib_base_dists_degenerate_quantile( 0.5, 2.0 );
// returns 2.0
```

The function accepts the following arguments:

-   **p**: `[in] double` input value (probability).
-   **mu**: `[in] double` constant value of the distribution.

```c
double stdlib_base_dists_degenerate_quantile( const double p, const double mu );
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
#include "stdlib/stats/base/dists/degenerate/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double result;
    double mu;
    double p;
    int i;

    for ( i = 0; i < 10; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        mu = random_uniform( -20.0, 20.0 );
        result = stdlib_base_dists_degenerate_quantile( p, mu );
        printf( "p: %lf, µ: %lf, Q(p;µ): %lf \n", p, mu, result );
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

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
