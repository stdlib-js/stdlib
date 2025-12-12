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

> [Discrete uniform][discrete-uniform-distribution] distribution [entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [entropy][entropy] (in [nats][nats]) for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_entropy" align="center" raw="h\left( X \right) = \ln(b-a+1)" alt="Entropy for a discrete uniform distribution."> -->

```math
h\left( X \right) = \ln(b-a+1)
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \ln(b-a+1)" data-equation="eq:discrete_uniform_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/entropy/docs/img/equation_discrete_uniform_entropy.svg" alt="Entropy for a discrete uniform distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/discrete-uniform/entropy' );
```

#### entropy( a, b )

Returns the [entropy][entropy] of a [discrete uniform][discrete-uniform-distribution] distribution with minimum support `a` and maximum support `b` (in [nats][nats]).

```javascript
var v = entropy( 0, 1 );
// returns ~0.693

v = entropy( 4, 12 );
// returns ~2.197

v = entropy( 2, 8 );
// returns ~1.946
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var v = entropy( 0.1, 2 );
// returns NaN

v = entropy( 0, 2.2 );
// returns NaN

v = entropy( NaN, 2 );
// returns NaN

v = entropy( 2, NaN );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var v = entropy( 3, 2 );
// returns NaN

v = entropy( -1, -2 );
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
var randint = require( '@stdlib/random/base/discrete-uniform' );
var entropy = require( '@stdlib/stats/base/dists/discrete-uniform/entropy' );

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = randa();
    b = randb( a, a+randa() );
    v = entropy( a, b );
    console.log( 'a: %d, b: %d, H(X;a,b): %d', a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/discrete-uniform/entropy.h"
```

#### stdlib_base_dists_discrete_uniform_entropy( a, b )

Returns the [entropy][entropy] of a [discrete uniform][discrete-uniform-distribution] distribution with minimum support `a` and maximum support `b` (in [nats][nats]).

```c
double out = stdlib_base_dists_discrete_uniform_entropy( 0, 1 );
// returns ~0.693
```

The function accepts the following arguments:

-   **a**: `[in] int32_t` minimum support.
-   **b**: `[in] int32_t` maximum support.

```c
double stdlib_base_dists_discrete_uniform_entropy( const int32_t a, const int32_t b );
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
#include "stdlib/stats/base/dists/discrete-uniform/entropy.h"
#include "stdlib/math/base/special/round.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    int32_t a;
    int32_t b;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        a = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        b = stdlib_base_round( random_uniform( 0.0, 10.0 ) ) + a;
        y = stdlib_base_dists_discrete_uniform_entropy( a, b );
        printf( "a: %d, b: %d, H(X;a,b): %lf\n", a, b, y );
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

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
