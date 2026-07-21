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

> [Geometric][geometric-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [geometric][geometric-distribution] random variable is

<!-- <equation class="equation" label="eq:geometric_quantile_function" align="center" raw="Q(r;p)=\left\lceil \frac{\ln(1-r)}{\ln(1-p)} \right\rceil" alt="Quantile function for a geometric distribution."> -->

```math
Q(r;p)=\left\lceil \frac{\ln(1-r)}{\ln(1-p)} \right\rceil
```

<!-- <div class="equation" align="center" data-raw-text="Q(r;p)=\left\lceil \frac{\ln(1-r)}{\ln(1-p)} \right\rceil" data-equation="eq:geometric_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/quantile/docs/img/equation_geometric_quantile_function.svg" alt="Quantile function for a geometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 < r < 1`, where `p` is the success probability.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/geometric/quantile' );
```

#### quantile( r, p )

Evaluates the [quantile function][quantile-function] for a [geometric][geometric-distribution] distribution with success probability `p` at a value `r`.

```javascript
var y = quantile( 0.8, 0.4 );
// returns 3

y = quantile( 0.5, 0.4 );
// returns 1

y = quantile( 0.9, 0.1 );
// returns 21
```

If provided an input probability `r` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.5 );
// returns NaN

y = quantile( -0.1, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0 );
// returns NaN

y = quantile( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN

y = quantile( 0.4, 1.5 );
// returns NaN
```

#### quantile.factory( p )

Returns a function for evaluating the [quantile function][quantile-function] for a [geometric][geometric-distribution] distribution with success probability `p`.

```javascript
var myquantile = quantile.factory( 0.4 );
var y = myquantile( 0.4 );
// returns 0

y = myquantile( 0.8 );
// returns 3

y = myquantile( 1.0 );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var quantile = require( '@stdlib/stats/base/dists/geometric/quantile' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 10, 0.0, 1.0, opts );
var r = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'r: %0.4f, p: %0.4f, Q(r;p): %0.4f', r, p, quantile );
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
#include "stdlib/stats/base/dists/geometric/quantile.h"
```

#### stdlib_base_dists_geometric_quantile( r, p )

Evaluates the [quantile function][quantile-function] for a [geometric][geometric-distribution] distribution with success probability `p` at a value `r`.

```c
double out = stdlib_base_dists_geometric_quantile( 0.5, 0.4 );
// returns 1
```

The function accepts the following arguments:

-   **r**: `[in] double` input probability.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_geometric_quantile( const double r, const double p );
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
#include "stdlib/stats/base/dists/geometric/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double p;
    double r;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        r = random_uniform( 0.0, 1.0 );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_geometric_quantile( r, p );
        printf( "r: %lf, p: %lf, Q(r;p): %lf\n", r, p, y );
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

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
