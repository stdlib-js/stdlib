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

> [Triangular][triangular-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [triangular][triangular-distribution] random variable with lower limit `a`, upper limit `b`, and mode `c` is

<!-- <equation class="equation" label="eq:triangular_entropy" align="center" raw="h\left( X \right) = \frac{1}{2} + \ln \left({\frac{b-a}{2}}\right)" alt="Differential entropy for a triangular distribution."> -->

```math
h\left( X \right) = \frac{1}{2} + \ln \left({\frac{b-a}{2}}\right)
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \frac{1}{2} + \ln \left({\frac{b-a}{2}}\right)" data-equation="eq:triangular_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@556e0ebc42f54244079cecc91c0883bb6c442244/lib/node_modules/@stdlib/stats/base/dists/triangular/entropy/docs/img/equation_triangular_entropy.svg" alt="Differential entropy for a triangular distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/triangular/entropy' );
```

#### entropy( a, b, c )

Returns the [differential entropy][entropy] of a [triangular][triangular-distribution] distribution with minimum support `a`, maximum support`b`, and mode `c` (in [nats][nats]).

```javascript
var v = entropy( 0.0, 1.0, 0.8 );
// returns ~-0.193

v = entropy( 4.0, 12.0, 5.0 );
// returns ~1.886

v = entropy( 2.0, 8.0, 5.0 );
// returns ~1.599
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 4.0, 2.0 );
// returns NaN

v = entropy( 0.0, NaN, 2.0 );
// returns NaN

v = entropy( 0.0, 4.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = entropy( 1.0, 0.0, 1.5 );
// returns NaN

y = entropy( 0.0, 1.0, -1.0 );
// returns NaN

y = entropy( 0.0, -1.0, 0.5 );
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
var entropy = require( '@stdlib/stats/base/dists/triangular/entropy' );

var a;
var b;
var c;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = ( randu()*10.0 );
    b = ( randu()*10.0 ) + a;
    c = ( randu()*( b-a ) ) + a;
    v = entropy( a, b, c );
    console.log( 'a: %d, b: %d, c: %d, h(X;a,b,c): %d', a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/triangular/entropy.h"
```

#### stdlib_base_dists_triangular_entropy( a, b, c )

Returns the [differential entropy][entropy] of a [triangular][triangular-distribution] distribution with minimum support `a`, maximum support`b`, and mode `c` (in [nats][nats]).

```c
double out = stdlib_base_dists_triangular_entropy( 0.0, 1.0, 0.5 );
// returns ~-0.193
```

The function accepts the following arguments:

-   **a**: `[in] double` minimum support.
-   **b**: `[in] double` maximum support.
-   **c**: `[in] double` mode.

```c
double stdlib_base_dists_triangular_entropy( const double a, const double b, const double c );
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
#include "stdlib/stats/base/dists/triangular/entropy.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double a;
    double b;
    double c;
    double v;
    int i;

    for ( i = 0; i < 25; i++ ) {
        a = random_uniform( 0.0, 10.0 );
        b = random_uniform( a, a+10.0 );
        c = random_uniform( a, b );
        v = stdlib_base_dists_triangular_entropy( a, b, c );
        printf( "a: %lf, b: %lf, c: %lf, h(X;a,b,c): %lf\n", a, b, c, v );
    }
}
```

</section>

<!-- /.examples -->

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

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
