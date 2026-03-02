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

> [Student's t][t-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [Student's t][t-distribution] random variable with degrees of freedom `ν` is

<!-- <equation class="equation" label="eq:t_entropy" align="center" raw="h\left( X \right) = \frac{\nu +1}{2} \left[\psi\left({\frac{1+\nu }{2}}\right)-\psi\left({\frac{\nu }{2}}\right)\right]+\ln{\left[{\sqrt {\nu }}B\left({\frac{\nu }{2}},{\frac{1}{2}}\right)\right]}" alt="Differential entropy for a Student's t distribution."> -->

```math
h\left( X \right) = \frac{\nu +1}{2} \left[\psi\left({\frac{1+\nu }{2}}\right)-\psi\left({\frac{\nu }{2}}\right)\right]+\ln{\left[{\sqrt {\nu }}B\left({\frac{\nu }{2}},{\frac{1}{2}}\right)\right]}
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \frac{\nu +1}{2} \left[\psi\left({\frac{1+\nu }{2}}\right)-\psi\left({\frac{\nu }{2}}\right)\right]+\ln{\left[{\sqrt {\nu }}B\left({\frac{\nu }{2}},{\frac{1}{2}}\right)\right]}" data-equation="eq:t_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/t/entropy/docs/img/equation_t_entropy.svg" alt="Differential entropy for a Student's t distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Β` and `ψ` denote the [beta][beta-function] and [digamma][digamma] functions, respectively.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/t/entropy' );
```

#### entropy( v )

Returns the [differential entropy][entropy] of a [Student's t][t-distribution] distribution with degrees of freedom `v` (in [nats][nats]).

```javascript
var y = entropy( 9.0 );
// returns ~1.533

y = entropy( 3.5 );
// returns ~1.721
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = entropy( -1.0 );
// returns NaN

y = entropy( 0.0 );
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
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var entropy = require( '@stdlib/stats/base/dists/t/entropy' );

var opts = {
    'dtype': 'float64'
};
var v = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'v: %0.4f, h(X;v): %0.4f', v, entropy );
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
#include "stdlib/stats/base/dists/t/entropy.h"
```

#### stdlib_base_dists_t_entropy( v )

Returns the differential entropy of a Student's t distribution.

```c
double out = stdlib_base_dists_t_entropy( 9.0 );
// returns ~1.553
```

The function accepts the following arguments:

-   **v**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_t_entropy( const double v );
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
#include "stdlib/stats/base/dists/t/entropy.h"
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
        y = stdlib_base_dists_t_entropy( v );
        printf( "v: %lf, h(X;v): %lf\n", v, y );
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

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[digamma]: https://en.wikipedia.org/wiki/Digamma_function

</section>

<!-- /.links -->
