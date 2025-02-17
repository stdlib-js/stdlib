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

> [Chi-squared][chisquare-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{12}{k}" alt="Excess kurtosis for a chi-squared distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = \frac{12}{k}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{12}{k}" data-equation="eq:chisquare_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chisquare/kurtosis/docs/img/equation_chisquare_kurtosis.svg" alt="Excess kurtosis for a chi-squared distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k > 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/chisquare/kurtosis' );
```

#### kurtosis( k )

Returns the [excess kurtosis][kurtosis] of a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var v = kurtosis( 9.0 );
// returns ~1.333

v = kurtosis( 0.5 );
// returns 24.0
```

If provided `k <= 0`, the function returns `NaN`.

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
var kurtosis = require( '@stdlib/stats/base/dists/chisquare/kurtosis' );

var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = randu() * 20.0;
    v = kurtosis( k );
    console.log( 'k: %d, Kurt(X,k): %d', k.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/chisquare/kurtosis.h"
```

#### stdlib_base_dists_chisquare_kurtosis( k )

Returns the [excess kurtosis][kurtosis] of a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```c
double out = stdlib_base_dists_chisquare_kurtosis( 9.0 );
// returns ~1.333
```

The function accepts the following arguments:

-   **k**: `[in] double` degrees of freedom (must be positive).

```c
double stdlib_base_dists_chisquare_kurtosis( const double k );
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
#include "stdlib/stats/base/dists/chisquare/kurtosis.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double result;
    double k;
    int i;

    for ( i = 0; i < 10; i++ ) {
        k = random_uniform( 1.0, 10.0 );
        result = stdlib_base_dists_chisquare_kurtosis( k );
        printf( "k: %lf, Kurt(X,k): %lf \n", k, result );
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

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
