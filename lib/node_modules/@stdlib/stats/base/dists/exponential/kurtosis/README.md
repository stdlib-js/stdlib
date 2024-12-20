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

# Kurtosis

> [Exponential][exponential-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for an [exponential][exponential-distribution] random variable with rate parameter `λ` is

<!-- <equation class="equation" label="eq:exponential_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = 6" alt="Excess kurtosis for an exponential distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = 6
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = 6" data-equation="eq:exponential_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/kurtosis/docs/img/equation_exponential_kurtosis.svg" alt="Excess kurtosis for an exponential distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/exponential/kurtosis' );
```

#### kurtosis( lambda )

Returns the [excess kurtosis][kurtosis] of an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var v = kurtosis( 9.0 );
// returns 6.0

v = kurtosis( 0.5 );
// returns 6.0
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var v = kurtosis( -1.0 );
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
var kurtosis = require( '@stdlib/stats/base/dists/exponential/kurtosis' );

var lambda;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    lambda = randu() * 20.0;
    v = kurtosis( lambda );
    console.log( 'λ: %d, Kurt(X;λ): %d', lambda.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/exponential/kurtosis.h"
```

#### stdlib_base_dists_exponential_kurtosis( lambda )

Returns the excess kurtosis of an exponential distribution.

```c
double out = stdlib_base_dists_exponential_kurtosis( 9.0 );
// returns 6.0
```

The function accepts the following arguments:

-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_exponential_kurtosis( const double lambda );
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
#include "stdlib/stats/base/dists/exponential/kurtosis.h"
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
        y = stdlib_base_dists_exponential_kurtosis( lambda );
        printf( "λ: %lf, Kurt[X;λ]: %lf\n", lambda, y );
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

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
