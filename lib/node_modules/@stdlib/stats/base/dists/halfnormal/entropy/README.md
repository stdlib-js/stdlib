<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

> [Half-normal][half-normal-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [half-normal][half-normal-distribution] random variable is

<!-- <equation class="equation" label="eq:halfnormal_entropy" align="center" raw="h\left( X \right) = \frac{1}{2}+\ln(\sigma)+\ln\left(\sqrt{\frac{\pi}{2}}\right)+\frac{\gamma}{2}" alt="Differential entropy for a half-normal distribution."> -->

```math
h\left( X \right) = \frac{1}{2}+\ln(\sigma)+\ln\left(\sqrt{\frac{\pi}{2}}\right)+\frac{\gamma}{2}
```

<!-- </equation> -->

where `σ > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/halfnormal/entropy' );
```

#### entropy( sigma )

Returns the [differential entropy][entropy] of a [half-normal][half-normal-distribution] distribution with scale `sigma` (in [nats][nats]).

```javascript
var y = entropy( 1.0 );
// returns ~0.7258

y = entropy( 5.0 );
// returns ~2.3352
```

If provided `sigma ≤ 0`, the function returns `NaN`.

```javascript
var y = entropy( -1.0 );
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
var entropy = require( '@stdlib/stats/base/dists/halfnormal/entropy' );

var opts = {
    'dtype': 'float64'
};
var sigma = uniform( 10, 0.1, 20.0, opts );

logEachMap( 'σ: %0.4f, h(X;σ): %0.4f', sigma, entropy );
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
#include "stdlib/stats/base/dists/halfnormal/entropy.h"
```

#### stdlib_base_dists_halfnormal_entropy( sigma )

Returns the differential entropy of a half-normal distribution.

```c
double out = stdlib_base_dists_halfnormal_entropy( 1.0 );
// returns ~0.7258
```

The function accepts the following arguments:

-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_halfnormal_entropy( const double sigma );
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
#include "stdlib/stats/base/dists/halfnormal/entropy.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        sigma = random_uniform( 0.1, 20.0 );
        y = stdlib_base_dists_halfnormal_entropy( sigma );
        printf( "σ: %lf, h(σ): %lf\n", sigma, y );
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

[half-normal-distribution]: https://en.wikipedia.org/wiki/Half-normal_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
