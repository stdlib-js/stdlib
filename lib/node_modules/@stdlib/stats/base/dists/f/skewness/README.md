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

> [F][f-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [F][f-distribution] random variable with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` is

<!-- <equation class="equation" label="eq:f_skewness" align="center" raw="\operatorname{skew}\left( X \right) =  \frac{(2d_{1}+d_{2}-2){\sqrt{8(d_{2}-4)}}}{(d_{2}-6){\sqrt{d_{1}(d_{1}+d_{2}-2)}}}" alt="Skewness for an F distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) =  \frac{(2d_{1}+d_{2}-2){\sqrt{8(d_{2}-4)}}}{(d_{2}-6){\sqrt{d_{1}(d_{1}+d_{2}-2)}}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) =  \frac{(2d_{1}+d_{2}-2){\sqrt{8(d_{2}-4)}}}{(d_{2}-6){\sqrt{d_{1}(d_{1}+d_{2}-2)}}}" data-equation="eq:f_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/f/skewness/docs/img/equation_f_skewness.svg" alt="Skewness for an F distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `d1 > 0` and `d2 > 6`. Otherwise, the skewness is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/f/skewness' );
```

#### skewness( d1, d2 )

Returns the [skewness][skewness] of an [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var v = skewness( 4.0, 7.0 );
// returns ~10.614

v = skewness( 4.0, 12.0 );
// returns ~3.207

v = skewness( 8.0, 7.0 );
// returns ~10.088
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 7.0 );
// returns NaN

v = skewness( 3.0, NaN );
// returns NaN
```

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var v = skewness( 0.0, 7.0 );
// returns NaN

v = skewness( -1.0, 7.0 );
// returns NaN
```

If provided `d2 <= 6`, the function returns `NaN`.

```javascript
var v = skewness( 3.0, 6.0 );
// returns NaN

v = skewness( 3.0, 5.5 );
// returns NaN

v = skewness( 3.0, -1.0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var skewness = require( '@stdlib/stats/base/dists/f/skewness' );

var d1;
var d2;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    d1 = ( randu()*10.0 ) + EPS;
    d2 = ( randu()*20.0 ) + EPS;
    v = skewness( d1, d2 );
    console.log( 'd1: %d, d2: %d, skew(X;d1,d2): %d', d1.toFixed( 4 ), d2.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/f/skewness.h"
```

#### stdlib_base_dists_f_skewness( d1, d2 )

Evaluates the [skewness][skewness] of an [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```c
double out = stdlib_base_dists_f_skewness( 3.0, 7.0 );
// returns 11.0
```

The function accepts the following arguments:

-   **d1**: `[in] double` numerator degrees of freedom.
-   **d2**: `[in] double` denominator degrees of freedom.

```c
double stdlib_base_dists_f_skewness( const double d1, const double d2 );
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
#include "stdlib/stats/base/dists/f/skewness.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double d1;
    double d2;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        d1 = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        d2 = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
        y = stdlib_base_dists_f_skewness( d1, d2 );
        printf( "d1: %lf, d2: %lf, skew(X;d1,d2): %lf\n", d1, d2, y );
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

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
