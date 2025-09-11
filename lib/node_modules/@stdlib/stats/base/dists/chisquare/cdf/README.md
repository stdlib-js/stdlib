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

# Cumulative Distribution Function

> [Chi-squared][chisquare-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_cdf" align="center" raw="F(x;\,k) = P\left(\frac{x}{2},\,\frac{k}{2}\right)" alt="Cumulative distribution function for a chi-squared distribution."> -->

```math
F(x;\,k) = P\left(\frac{x}{2},\,\frac{k}{2}\right)
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\,k) = P\left(\frac{x}{2},\,\frac{k}{2}\right)" data-equation="eq:chisquare_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/chisquare/cdf/docs/img/equation_chisquare_cdf.svg" alt="Cumulative distribution function for a chi-squared distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the degrees of freedom and `P` is the lower regularized incomplete gamma function.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/chisquare/cdf' );
```

#### cdf( x, k )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var y = cdf( 2.0, 1.0 );
// returns ~0.843

y = cdf( 2.0, 3.0 );
// returns ~0.428

y = cdf( 1.0, 0.5 );
// returns ~0.846

y = cdf( -1.0, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4.0 );
// returns 0.0

y = cdf( +Infinity, 4.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( 2.0, 0.0 );
// returns 1.0

y = cdf( -2.0, 0.0 );
// returns 0.0

y = cdf( 0.0, 0.0 );
// returns 1.0
```

#### cdf.factory( k )

Returns a function for evaluating the [cumulative distribution function][cdf] for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var mycdf = cdf.factory( 3.0 );

var y = mycdf( 6.0 );
// returns ~0.888

y = mycdf( 1.5 );
// returns ~0.318
```

</section>

<!-- /.usage -->

* * *

<section class="c">

## C APIs

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/chisquare/cdf.h"
```

#### stdlib_base_dists_chisquare_cdf( x, k )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```c
double out = stdlib_base_dists_chisquare_cdf( 2.0, 1.0 );
// returns ~0.843

out = stdlib_base_dists_chisquare_cdf( 2.0, 3.0 );
// returns ~0.428
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **k**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_chisquare_cdf( const double x, const double k );
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/chisquare/cdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( double min, double max ) {
    double scale = rand() / (double) RAND_MAX;
    return min + ( scale * ( max - min ) );
}

int main( void ) {
    double x;
    double k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        k = random_uniform( 1.0, 10.0 );
        y = stdlib_base_dists_chisquare_cdf( x, k );
        printf( "x: %lf, k: %lf, F(x;k): %lf\n", x, k, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cdf = require( '@stdlib/stats/base/dists/chisquare/cdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 20, 0.0, 10.0, opts );
var k = discreteUniform( 20, 0, 10, opts );

logEachMap( 'x: %0.4f, k: %0.4f, F(x;k): %0.4f', x, k, cdf );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
