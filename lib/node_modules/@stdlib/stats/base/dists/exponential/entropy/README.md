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

> [Exponential][exponential-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_entropy" align="center" raw="h\left( X \right) = 1 − \ln( \lambda )" alt="Differential entropy for an exponential distribution."> -->

```math
h\left( X \right) = 1 − \ln( \lambda )
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = 1 − \ln( \lambda )" data-equation="eq:exponential_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/entropy/docs/img/equation_exponential_entropy.svg" alt="Differential entropy for an exponential distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/exponential/entropy' );
```

#### entropy( lambda )

Returns the [differential entropy][entropy] of an [exponential][exponential-distribution] distribution with rate parameter `lambda` (in [nats][nats]).

```javascript
var v = entropy( 9.0 );
// returns ~-1.197

v = entropy( 0.5 );
// returns ~1.693
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var v = entropy( -1.0 );
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
var entropy = require( '@stdlib/stats/base/dists/exponential/entropy' );

var lambda;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    lambda = randu() * 20.0;
    v = entropy( lambda );
    console.log( 'λ: %d, h(X;λ): %d', lambda.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/exponential/entropy.h"
```

#### stdlib_base_dists_exponential_entropy( lambda )

Returns the [differential entropy][entropy] of an [exponential][exponential-distribution] distribution with rate parameter `lambda` (in [nats][nats]).

```c
double out = stdlib_base_dists_exponential_entropy( 9.0 );
// returns ~-1.197
```

The function accepts the following arguments:

-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_exponential_entropy( const double lambda );
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
#include "stdlib/stats/base/dists/exponential/entropy.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        lambda = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_exponential_entropy( lambda );
        printf( "λ: %lf, h(X;λ): %lf\n", lambda, y );
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

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
