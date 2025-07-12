<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

> Wilcoxon signed rank test statistic [probability density function][pdf].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/signrank/pdf' );
```

#### pdf( x, n )

Evaluates the [probability density function][pdf] of the Wilcoxon signed rank test statistic with `n` observations.

```javascript
var y = pdf( 7.0, 9 );
// returns ~0.0098

y = pdf( 7.0, 6 );
// returns ~0.063

y = pdf( -1.0, 40 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 8 );
// returns NaN

y = pdf( 0.0, NaN );
// returns NaN
```

If provided `x < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -1.0 );
// returns NaN
```

If not provided a positive integer for `n`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0 );
// returns NaN

y = pdf( 2.0, -2 );
// returns NaN

y = pdf( 2.0, 8.9 );
// returns NaN
```

#### pdf.factory( n )

Returns a function for evaluating the [probability density function][pdf] of the Wilcoxon signed rank test statistic with `n` observations.

```javascript
var mypdf = pdf.factory( 8 );
var y = mypdf( 4.0 );
// returns ~0.008

y = mypdf( 17.0 );
// returns ~0.051
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ceil = require( '@stdlib/math/base/special/ceil' );
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/signrank/pdf' );

var n;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 30.0;
    n = ceil( randu() * 30.0 );
    y = pdf( x, n );
    console.log( 'x: %d, n: %d, f(x;n): %d', x.toFixed( 4 ), n.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/signrank/pdf.h"
```

#### stdlib_base_dists_signrank_pdf( x, n )

Evaluates the probability density function (PDF) of the Wilcoxon signed rank test statistic with `n` observations.

```c
double out = stdlib_base_dists_signrank_pdf( 7.0, 9 );
// returns ~0.01
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` number of observations.

```c
double stdlib_base_dists_signrank_pdf( const double x, const int32_t n );
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
#include "stdlib/stats/base/dists/signrank/pdf.h"
#include "stdlib/math/base/special/ceil.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    int32_t n;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0, 30.0 );
        n = (int32_t)stdlib_base_ceil( random_uniform( 1.0, 30.0 ) );
        y = stdlib_base_dists_signrank_pdf( x, n );
        printf( "x: %lf, n: %d, f(x;n): %lf\n", x, n, y );
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

[pdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
