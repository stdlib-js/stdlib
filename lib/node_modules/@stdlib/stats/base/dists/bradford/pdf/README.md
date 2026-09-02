<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

> [Bradford][bradford-distribution] distribution [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Bradford][bradford-distribution] random variable is

<!-- <equation class="equation" label="eq:bradford_pdf" align="center" raw="f(x;c)=\frac{c}{(\ln(1+c)) (1 + cx)}" alt="Probability density function (PDF) for a Bradford distribution."> -->

```math
f(x;c)=\frac{c}{(\ln(1+c)) (1 + cx)}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;c)=\frac{c}{(\ln(1+c)) (1 + cx)}" data-equation="eq:bradford_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/bradford/pdf/docs/img/equation_bradford_pdf.svg" alt="Probability density function (PDF) for a Bradford distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `c > 0` is the shape parameter of the distribution.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/bradford/pdf' );
```

#### pdf( x, c )

Evaluates the [probability density function][pdf] (PDF) for a [Bradford][bradford-distribution] distribution with shape parameter `c` at a value `x`.

```javascript
var y = pdf( 0.1, 0.1 );
// returns ~1.039

y = pdf( 0.5, 5.0 );
// returns ~0.797

y = pdf( 1.0, 10.0 );
// returns ~0.379
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0 );
// returns NaN

y = pdf( 0.0, NaN );
// returns NaN
```

If provided an `x` value which is outside the support `[0,1]`, the function returns `0`.

```javascript
var y = pdf( 2.0, 1.0 );
// returns 0.0

y = pdf( -0.5, 1.0 );
// returns 0.0
```

If provided a shape parameter `c <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 0.5, 0.0 );
// returns NaN

y = pdf( 0.5, -5.0 );
// returns NaN
```

#### pdf.factory( c )

Returns a function for evaluating the [PDF][pdf] of a [Bradford][bradford-distribution] distribution with shape parameter `c`.

```javascript
var myPDF = pdf.factory( 5.0 );
var y = myPDF( 0.5 );
// returns ~0.797

y = myPDF( 1.0 );
// returns ~0.465
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var pdf = require( '@stdlib/stats/base/dists/bradford/pdf' );

var opts = {
    'dtype': 'float64'
};
var c = uniform( 10, 0.0, 1.0, opts );
var x = uniform( 10, 0.1, 10.0, opts );

logEachMap( 'x: %0.4f, c: %0.4f, f(x;c): %0.4f', x, c, pdf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

<section class="c">

## C APIs

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/bradford/pdf.h"
```

#### stdlib_base_dists_bradford_pdf( x, c )

Evaluates the probability density function for a Bradford distribution.

```c
double out = stdlib_base_dists_bradford_pdf( 0.5, 5.0 );
// returns ~0.797
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **c**: `[in] double` shape parameter.

```c
double stdlib_base_dists_bradford_pdf( const double x, const double c );
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/bradford/pdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double c;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = random_uniform( 0.0, 1.0 );
        c = random_uniform( 0.01, 10.0 );
        y = stdlib_base_dists_bradford_pdf( x, c );
        printf( "x: %lf, c: %lf, f(x;c): %lf\n", x, c, y );
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

[bradford-distribution]: https://en.wikipedia.org/wiki/Bradford%27s_law

</section>

<!-- /.links -->
