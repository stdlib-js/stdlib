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

# Mode

> [Half-normal][half-normal-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [half-normal][half-normal-distribution] random variable with scale parameter `σ > 0` is

<!-- <equation class="equation" label="eq:halfnormal_mode" align="center" raw="\operatorname{mode}\left( X \right) = 0" alt="Mode for a half-normal distribution."> -->

```math
\mathop{\mathrm{mode}}\left( X \right) = 0
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = 0" data-equation="eq:halfnormal_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/halfnormal/mode/docs/img/equation_halfnormal_mode.svg" alt="Mode for a half-normal distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/halfnormal/mode' );
```

#### mode( sigma )

Returns the [mode][mode] for a [half-normal][half-normal-distribution] distribution with scale parameter `sigma`.

```javascript
var y = mode( 1.0 );
// returns 0.0

y = mode( 2.0 );
// returns 0.0
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = mode( NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = mode( 0.0 );
// returns NaN

y = mode( -1.0 );
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
var mode = require( '@stdlib/stats/base/dists/halfnormal/mode' );

var opts = {
    'dtype': 'float64'
};
var sigma = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'σ: %0.4f, mode(X;σ): %0.4f', sigma, mode );
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
#include "stdlib/stats/base/dists/halfnormal/mode.h"
```

#### stdlib_base_dists_halfnormal_mode( sigma )

Returns the mode for a [half-normal][half-normal-distribution] distribution with scale parameter `sigma`.

```c
double out = stdlib_base_dists_halfnormal_mode( 1.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_halfnormal_mode( const double sigma );
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
#include "stdlib/stats/base/dists/halfnormal/mode.h"
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

    for ( i = 0; i < 10; i++ ) {
        sigma = random_uniform( 0.1, 20.0 );
        y = stdlib_base_dists_halfnormal_mode( sigma );
        printf( "σ: %lf, mode(X;σ): %lf\n", sigma, y );
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

[half-normal-distribution]: https://en.wikipedia.org/wiki/Half-normal_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
