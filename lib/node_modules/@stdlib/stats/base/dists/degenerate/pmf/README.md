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

# Probability Mass Function

> [Degenerate distribution][degenerate-distribution] [probability mass function][pmf] (PMF).

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/degenerate/pmf' );
```

#### pmf( x, mu )

Evaluates the [PMF][pmf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = pmf( 2.0, 8.0 );
// returns 0.0

y = pmf( 8.0, 8.0 );
// returns 1.0
```

#### pmf.factory( mu )

Returns a function for evaluating the [PMF][pmf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var mypmf = pmf.factory( 10.0 );

var y = mypmf( 10.0 );
// returns 1.0

y = mypmf( 5.0 );
// returns 0.0

y = mypmf( 12.0 );
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
var pmf = require( '@stdlib/stats/base/dists/degenerate/pmf' );

var mu;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*5.0 );
    mu = round( randu()*5.0 );
    y = pmf( x, mu );
    console.log( 'x: %d, µ: %d, P(X=x;µ): %d', x, mu, y );
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
#include "stdlib/stats/base/dists/degenerate/pmf.h"
```

#### stdlib_base_dists_degenerate_pmf( x, mu )

Evaluates the [PMF][pmf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```c
double out = stdlib_base_dists_degenerate_pmf( 2.0, 3.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` constant value of the distribution.

```c
double stdlib_base_dists_degenerate_pmf( const double x, const double mu );
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
#include "stdlib/stats/base/dists/degenerate/pmf.h"
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
        result = stdlib_base_dists_degenerate_pmf( x, mu );
        printf( "x: %lf, µ: %lf, P(X=x;µ): %lf \n", x, mu, result );
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

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
