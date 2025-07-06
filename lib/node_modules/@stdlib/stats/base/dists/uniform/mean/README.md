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

# Mean

> [Uniform][uniform-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [uniform][uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:uniform_expectation" align="center" raw="\mathbb{E}\left[ X \right] = 0.5 \cdot ( a + b )" alt="Expected value for a uniform distribution."> -->

```math
\mathbb{E}\left[ X \right] = 0.5 \cdot ( a + b )
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = 0.5 \cdot ( a + b )" data-equation="eq:uniform_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/uniform/mean/docs/img/equation_uniform_expectation.svg" alt="Expected value for a uniform distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` the maximum support of the distribution.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/uniform/mean' );
```

#### mean( a, b )

Returns the [expected value][expected-value] of a [uniform][uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var v = mean( 0.0, 1.0 );
// returns 0.5

v = mean( 4.0, 12.0 );
// returns 8.0

v = mean( 2.0, 8.0 );
// returns 5.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mean( NaN, 2.0 );
// returns NaN

v = mean( 2.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = mean( 3.0, 2.0 );
// returns NaN

y = mean( 3.0, 3.0 );
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
var mean = require( '@stdlib/stats/base/dists/uniform/mean' );

var a;
var b;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = ( randu()*10.0 );
    b = ( randu()*10.0 ) + a;
    v = mean( a, b );
    console.log( 'a: %d, b: %d, E(X;a,b): %d', a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/uniform/mean.h"
```

#### stdlib_base_dists_uniform_mean( a, b )

Returns the [expected value][expected-value] of a [uniform][uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```c
double out = stdlib_base_dists_uniform_mean( 0.0, 1.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **a**: `[in] double` minimum support.
-   **b**: `[in] double` maximum support.

```c
double stdlib_base_dists_uniform_mean( const double a, const double b );
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
#include "stdlib/stats/base/dists/uniform/mean.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double a;
    double b;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        a = random_uniform( 0.0, 10.0 );
        b = random_uniform( a, 20.0 ); // ensure b > a
        y = stdlib_base_dists_uniform_mean( a, b );
        printf( "a: %lf, b: %lf, E(X;a,b): %lf\n", a, b, y );
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

[uniform-distribution]: https://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
