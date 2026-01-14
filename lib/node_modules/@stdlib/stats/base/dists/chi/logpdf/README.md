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

> Evaluate the natural logarithm of the [probability density function][pdf] (PDF) for a [chi][chi-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [chi][chi-distribution] random variable is

<!-- <equation class="equation" label="eq:chi_pdf" align="center" raw="f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}" alt="Probability density function (PDF) for a chi distribution."> -->

```math
f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}" data-equation="eq:chi_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chi/logpdf/docs/img/equation_chi_pdf.svg" alt="Probability density function (PDF) for a chi distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the degrees of freedom and `Γ` denotes the [gamma][gamma-function] function.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/chi/logpdf' );
```

#### logpdf( x, k )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var y = logpdf( 0.1, 1.0 );
// returns ~-0.231

y = logpdf( 0.5, 2.0 );
// returns ~-0.818

y = logpdf( -1.0, 4.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the natural logarithm of the [PDF][pdf] for a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logpdf( 2.0, 0.0 );
// returns -Infinity

y = logpdf( 0.0, 0.0 );
// returns Infinity
```

#### logpdf.factory( k )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var mylogPDF = logpdf.factory( 6.0 );

var y = mylogPDF( 3.0 );
// returns ~-1.086

y = mylogPDF( 1.0 );
// returns ~-2.579
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var logpdf = require( '@stdlib/stats/base/dists/chi/logpdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 20, 0.0, 10.0, opts );
var k = uniform( 20, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, k: %0.4f, ln(f(x;k)): %0.4f', x, k, logpdf );
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
#include "stdlib/stats/base/dists/chi/logpdf.h"
```

#### stdlib_base_dists_chi_logpdf( x, k )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```c
double out = stdlib_base_dists_chi_logpdf( 2.0, 2.0 );
// returns ~-1.309
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **k**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_chi_logpdf( const double x, const double k );
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
#include "stdlib/stats/base/dists/chi/logpdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        k = random_uniform( 0.1, 10.0 );
        y = stdlib_base_dists_chi_logpdf( x, k );
        printf( "x: %lf, k: %lf, ln(f(x;k)): %lf\n", x, k, y );
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

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
