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

> [Student's t][t-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [Student's t][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_expectation" align="center" raw="\mathbb{E}\left[ X \right] = 0" alt="Expected value for a Student's t distribution."> -->

```math
\mathbb{E}\left[ X \right] = 0
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = 0" data-equation="eq:t_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/t/mean/docs/img/equation_t_expectation.svg" alt="Expected value for a Student's t distribution.">
    <br>
</div> -->

<!-- </equation> -->

for degrees of freedom `v` greater than one. For `v <= 1`, the mean is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/t/mean' );
```

#### mean( v )

Returns the [expected value][expected-value] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = mean( 9.0 );
// returns 0.0

y = mean( 1.5 );
// returns 0.0
```

If provided `v <= 1`, the function returns `NaN`.

```javascript
var y = mean( -1.0 );
// returns NaN

y = mean( 0.8 );
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
var round = require( '@stdlib/math/base/special/round' );
var mean = require( '@stdlib/stats/base/dists/t/mean' );

var v;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    v = randu() * 20.0;
    y = mean( v );
    console.log( 'v: %d, E(X,v): %d', v.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/t/mean.h"
```

#### stdlib_base_dists_t_mean( v )

Returns the [expected value][expected-value] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```c
double out = stdlib_base_dists_t_mean( 10.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **v**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_t_mean( const double v );
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
#include "stdlib/stats/base/dists/t/mean.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double v;
    double y;
    int i;
    
    for ( i = 0; i < 25; i++ ) {
        v = random_uniform( 1.0, 100.0 );
        y = stdlib_base_dists_t_mean( v );
        printf( "v: %lf, mean: %lf\n", v, y );
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

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
