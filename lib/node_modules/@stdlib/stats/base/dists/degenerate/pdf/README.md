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

# Probability Density Function

> [Degenerate distribution][degenerate-distribution] [probability density function][pdf] (PDF).

<section class="intro">

Strictly speaking, as a discrete distribution, a [degenerate][degenerate-distribution] has no [probability density function][pdf] (PDF). Extending the notion of a [PDF][pdf], we conceptualize the [PDF][pdf] of a [degenerate][degenerate-distribution] as an infinitely tall spike centered at `mu`. More formally,

<!-- <equation class="equation" label="eq:degenerate_pdf" align="center" raw="f(x;\mu) = \delta(x-\mu)" alt="Probability density function (PDF) for a degenerate distribution."> -->

```math
f(x;\mu) = \delta(x-\mu)
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\mu) = \delta(x-\mu)" data-equation="eq:degenerate_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/degenerate/pdf/docs/img/equation_degenerate_pdf.svg" alt="Probability density function (PDF) for a degenerate distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `delta` is the Dirac delta function.

<!-- <equation class="equation" label="eq:dirac_delta" align="center" raw="\delta(x) = {\begin{cases}+\infty, & x = 0\\0, & x \neq 0\end{cases}}" alt="Dirac delta function."> -->

```math
\delta(x) = {\begin{cases}+\infty, & x = 0\\0, & x \neq 0\end{cases}}
```

<!-- <div class="equation" align="center" data-raw-text="\delta(x) = {\begin{cases}+\infty, &amp; x = 0\\0, &amp; x \neq 0\end{cases}}" data-equation="eq:dirac_delta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/degenerate/pdf/docs/img/equation_dirac_delta.svg" alt="Dirac delta function.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/degenerate/pdf' );
```

#### pdf( x, mu )

Evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = pdf( 2.0, 8.0 );
// returns 0.0

y = pdf( 8.0, 8.0 );
// returns Infinity
```

#### pdf.factory( mu )

Returns a function for evaluating the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var mypdf = pdf.factory( 10.0 );

var y = mypdf( 10.0 );
// returns Infinity

y = mypdf( 5.0 );
// returns 0.0

y = mypdf( 12.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pdf = require( '@stdlib/stats/base/dists/degenerate/pdf' );

var mu;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*5.0 );
    mu = round( randu()*5.0 );
    y = pdf( x, mu );
    console.log( 'x: %d, µ: %d, f(x;µ): %d', x, mu, y );
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
#include "stdlib/stats/base/dists/degenerate/pdf.h"
```

#### stdlib_base_dists_degenerate_pdf( x, mu )

Evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```c
double out = stdlib_base_dists_degenerate_pdf( 2.0, 3.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` constant value of the distribution.

```c
double stdlib_base_dists_degenerate_pdf( const double x, const double mu );
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
#include "stdlib/stats/base/dists/degenerate/pdf.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double result;
    double mu;
    double x;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = stdlib_base_round( random_uniform( 0.0, 5.0 ) );
        mu = stdlib_base_round( random_uniform( 0.0, 5.0 ) );
        result = stdlib_base_dists_degenerate_pdf( x, mu );
        printf( "x: %lf, µ: %lf, f(x;µ): %lf \n", x, mu, result );
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

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
