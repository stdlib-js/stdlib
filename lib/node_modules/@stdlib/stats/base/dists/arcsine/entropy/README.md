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

# Entropy

> [Arcsine][arcsine-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for an [arcsine][arcsine-distribution] random variable with minimum support `a` and maximum support `b` is

<!-- <equation class="equation" label="eq:arcsine_entropy" align="center" raw="h\left( X \right) = \ln {\tfrac{\pi}{4}}" alt="Differential entropy for an arcsine distribution."> -->

```math
h\left( X \right) = \ln {\tfrac{\pi}{4}}
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \ln {\tfrac{\pi}{4}}" data-equation="eq:arcsine_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/arcsine/entropy/docs/img/equation_arcsine_entropy.svg" alt="Differential entropy for an arcsine distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/arcsine/entropy' );
```

#### entropy( a, b )

Returns the [differential entropy][entropy] of an [arcsine][arcsine-distribution] distribution with minimum support `a` and maximum support `b` (in [nats][nats]).

```javascript
var v = entropy( 0.0, 1.0 );
// returns ~-0.242

v = entropy( 4.0, 12.0 );
// returns ~1.838

v = entropy( 2.0, 8.0 );
// returns ~1.55
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 2.0 );
// returns NaN

v = entropy( 2.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = entropy( 3.0, 2.0 );
// returns NaN

y = entropy( 3.0, 3.0 );
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
var entropy = require( '@stdlib/stats/base/dists/arcsine/entropy' );

var a;
var b;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = ( randu()*10.0 );
    b = ( randu()*10.0 ) + a + EPS;
    v = entropy( a, b );
    console.log( 'a: %d, b: %d, h(X;a,b): %d', a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/arcsine/entropy.h"
```

#### stdlib_base_dists_arcsine_entropy( a, b )

Returns the differential entropy of an arcsine distribution.

```c
double out = stdlib_base_dists_arcsine_entropy( -4.0, 4.0 );
// returns ~1.838
```

The function accepts the following arguments:

-   **a**: `[in] double` minimum support.
-   **b**: `[in] double` maximum support.

```c
double stdlib_base_dists_arcsine_entropy( const double a, const double b );
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
#include "stdlib/stats/base/dists/arcsine/entropy.h"
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
        a = random_uniform( 0, 20 );
        b = random_uniform( 0, 20 ) + a;
        y = stdlib_base_dists_arcsine_entropy( a, b );
        printf( "x: %lf, a: %lf, b: %lf, h(X;a,b): %lf\n", a, b, y );
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

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
