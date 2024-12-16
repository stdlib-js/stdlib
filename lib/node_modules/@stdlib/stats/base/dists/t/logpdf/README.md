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

# Logarithm of Probability Density Function

> Evaluate the natural logarithm of the probability density function (PDF) for a [Student's t][t-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [t distribution][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_pdf" align="center" raw="\frac{1} {\sqrt{\nu}\,B\left( \tfrac{1}{2}, \tfrac{\nu}{2} \right )} \left(1+\frac{x^2}{\nu} \right)^{-\frac{\nu+1}{2}}" alt="Probability density function (PDF) for a Student's t distribution."> -->

```math
\frac{1} {\sqrt{\nu}\,B\left( \tfrac{1}{2}, \tfrac{\nu}{2} \right )} \left(1+\frac{x^2}{\nu} \right)^{-\frac{\nu+1}{2}}
```

<!-- <div class="equation" align="center" data-raw-text="\frac{1} {\sqrt{\nu}\,B\left( \tfrac{1}{2}, \tfrac{\nu}{2} \right )} \left(1+\frac{x^2}{\nu} \right)^{-\frac{\nu+1}{2}}" data-equation="eq:t_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/t/logpdf/docs/img/equation_t_pdf.svg" alt="Probability density function (PDF) for a Student's t distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `v > 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/t/logpdf' );
```

#### logpdf( x, v )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = logpdf( 0.3, 4.0 );
// returns ~-1.036

y = logpdf( 2.0, 0.7 );
// returns ~-2.841

y = logpdf( -1.0, 0.5 );
// returns ~-2.134
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.0 );
// returns NaN
```

#### logpdf.factory( v )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var mylogpdf = logpdf.factory( 1.0 );
var y = mylogpdf( 3.0 );
// returns ~-3.447

y = mylogpdf( 1.0 );
// returns ~-1.838
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var logpdf = require( '@stdlib/stats/base/dists/t/logpdf' );

var v;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu() * 6.0) - 3.0;
    v = randu() * 10.0;
    y = logpdf( x, v );
    console.log( 'x: %d, v: %d, ln(f(x;v)): %d', x, v, y );
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
#include "stdlib/stats/base/dists/t/logpdf.h"
```

#### stdlib_base_dists_t_logpdf( x, a, b )

Evaluates the natural logarithm of the [PDF][pdf] for a [Student's t][t-distribution] distribution with degree of freedom `v`.

```c
double out = stdlib_base_dists_t_logpdf( 0.5, 1.0 );
// returns ~-1.368
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **v**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_t_logpdf( const double x, const double v );
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
#include "stdlib/stats/base/dists/t/logpdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double v;
    double y;
    int i;
    
    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( -10.0, 10.0 );
        v = random_uniform( 1.0, 100.0 );
        y = stdlib_base_dists_t_logpdf( x, v );
        printf( "x: %lf, v: %lf, logPDF(x;v): %lf\n", x, v, y );
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

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

</section>

<!-- /.links -->
