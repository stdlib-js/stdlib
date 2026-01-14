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

> [Normal][normal-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [normal][normal-distribution] random variable with mean `μ` and standard deviation `σ > 0` is

<!-- <equation class="equation" label="eq:normal_skewness" align="center" raw="\operatorname{skew}\left( X \right) = 0" alt="Skewness for a normal distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = 0
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = 0" data-equation="eq:normal_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/normal/skewness/docs/img/equation_normal_skewness.svg" alt="Skewness for a normal distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/normal/skewness' );
```

#### skewness( mu, sigma )

Returns the [skewness][skewness] for a [normal][normal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var y = skewness( 2.0, 1.0 );
// returns 0.0

y = skewness( -1.0, 4.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = skewness( NaN, 1.0 );
// returns NaN

y = skewness( 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 0.0, 0.0 );
// returns NaN

y = skewness( 0.0, -1.0 );
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
var skewness = require( '@stdlib/stats/base/dists/normal/skewness' );

var opts = {
    'dtype': 'float64'
};
var sigma = uniform( 10, 0.0, 20.0, opts );
var mu = uniform( 10, -5.0, 5.0, opts );

logEachMap( 'µ: %0.4f, σ: %0.4f, skew(X;µ,σ): %0.4f', mu, sigma, skewness );
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
#include "stdlib/stats/base/dists/normal/skewness.h"
```

#### stdlib_base_dists_normal_skewness( mu, sigma )

Returns the skewness for a normal distribution with mean `mu` and standard deviation `sigma`.

```c
double out = stdlib_base_dists_normal_skewness( 0.0, 1.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **mu**: `[in] double` mean.
-   **sigma**: `[in] double` standard deviation.

```c
double stdlib_base_dists_normal_skewness( const double mu, const double sigma );
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
#include "stdlib/stats/base/dists/normal/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double mu;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        sigma = random_uniform( 0.1, 20.0 );
        y = stdlib_base_dists_normal_skewness( mu, sigma );
        printf( "µ: %.4f, σ: %.4f, skew(X;µ,σ): %.4f\n", mu, sigma, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
