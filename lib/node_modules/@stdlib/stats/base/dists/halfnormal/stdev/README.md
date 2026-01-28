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

# Standard Deviation

> [Half-normal][half-normal-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [half-normal][half-normal-distribution] random variable is

<!-- <equation class="equation" label="eq:half_normal_stdev" align="center" raw="\sigma \sqrt{1-\frac{2}{\pi}}" alt="Standard deviation for a half-normal distribution."> -->

```math
\sigma \sqrt{1-\frac{2}{\pi}}
```

<!-- </equation> -->

where `σ > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/halfnormal/stdev' );
```

#### stdev( sigma )

Returns the [standard deviation][standard-deviation] of a [half-normal][half-normal-distribution] distribution with scale `sigma`.

```javascript
var y = stdev( 9.0 );
// returns ~5.425

y = stdev( 3.5 );
// returns ~2.1098
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = stdev( -1.0 );
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
var stdev = require( '@stdlib/stats/base/dists/halfnormal/stdev' );

var opts = {
    'dtype': 'float64'
};
var sigma = uniform( 10, 0.1, 20.0, opts );

logEachMap( 'σ: %0.4f, SD(X;σ): %0.4f', sigma, stdev );
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
#include "stdlib/stats/base/dists/halfnormal/stdev.h"
```

### stdlib_base_dists_halfnormal_stdev( sigma )

Returns the [standard deviation][standard-deviation] of a [half-normal][half-normal-distribution] distribution with scale `sigma`.

```c
double out = stdlib_base_dists_halfnormal_stdev( 9.0 ); 
// returns ~5.425
```

The function accepts the following arguments:

-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_halfnormal_stdev( const double sigma );
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
#include "stdlib/stats/base/dists/halfnormal/stdev.h"
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
        y = stdlib_base_dists_halfnormal_stdev( sigma );
        printf( "σ: %lf, SD(X;σ): %lf\n", sigma, y );
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

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
