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

# Skewness

> [Student's t][t-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Student's t][t-distribution] random variable with degrees of freedom `ν` is

<!-- <equation class="equation" label="eq:t_skewness" align="center" raw="\operatorname{skew}\left( X \right) = 0" alt="Skewness for a Student's t distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = 0
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = 0" data-equation="eq:t_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/t/skewness/docs/img/equation_t_skewness.svg" alt="Skewness for a Student's t distribution.">
    <br>
</div> -->

<!-- </equation> -->

when `ν > 3`. Otherwise, the skewness is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/t/skewness' );
```

#### skewness( v )

Returns the [skewness][skewness] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = skewness( 9.0 );
// returns 0.0

y = skewness( 3.5 );
// returns 0.0
```

If provided `v <= 3`, the function returns `NaN`.

```javascript
var y = skewness( -1.0 );
// returns NaN

y = skewness( 0.8 );
// returns NaN

y = skewness( 2.0 );
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
var skewness = require( '@stdlib/stats/base/dists/t/skewness' );

var v;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    v = randu() * 20.0;
    y = skewness( v );
    console.log( 'v: %d, skew(X,v): %d', v.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/t/skewness.h"
```

#### stdlib_base_dists_t_skewness( v )

Returns the skewness of a Student's t distribution.

```c
double out = stdlib_base_dists_t_skewness( 9.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **v**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_t_skewness( const double v );
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
#include "stdlib/stats/base/dists/t/skewness.h"
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
        v = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_t_skewness( v );
        printf( "v: %lf, skew(X;v): %lf\n", v, y );
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

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
