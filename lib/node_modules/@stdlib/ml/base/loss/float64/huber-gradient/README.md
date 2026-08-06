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

# huberGradient

> Compute the [Huber loss gradient][huber-loss-gradient] with respect to a model parameter.

<section class="intro">

The [Huber loss gradient][huber-loss-gradient] is defined as

<!-- <equation class="equation" label="eq:huber_loss_gradient" align="center" raw="\frac{\partial \ell}{\partial w} = \begin{cases} -(y-p)x & \text{if } \left|y-p\right| \leq \delta \\ -\delta\,\operatorname{sign}(y-p)\,x & \text{otherwise} \end{cases}" alt="Equation for the Huber loss gradient."> -->

```math
\frac{\partial \ell}{\partial w} = \begin{cases} -(y-p)x & \text{if } \left|y-p\right| \leq \delta \\ -\delta\,\operatorname{sign}(y-p)\,x & \text{otherwise} \end{cases}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var huberGradient = require( '@stdlib/ml/base/loss/float64/huber-gradient' );
```

#### huberGradient( x, d, y, p )

Computes the [Huber loss gradient][huber-loss-gradient] with respect to a model parameter.

```javascript
var v = huberGradient( 3.0, 5.0, 10.2, 0.782 );
// returns -15.0

v = huberGradient( -1.3, 1.0, 23.2, -0.999 );
// returns 1.3
```

The function accepts the following arguments:

-   **x**: input value.
-   **d**: threshold.
-   **y**: true target value.
-   **p**: predicted value.

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = huberGradient( NaN, 1.0, 1.0, 0.782 );
// returns NaN

v = huberGradient( 1.0, 1.0, NaN, 0.782 );
// returns NaN

v = huberGradient( NaN, NaN, 1.0, 0.782 );
// returns NaN

v = huberGradient( NaN, NaN, NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var huberGradient = require( '@stdlib/ml/base/loss/float64/huber-gradient' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -100.0, 100.0, opts );
var d = uniform( 100, 0.0, 5.0, opts );
var y = uniform( 100, -100.0, 100.0, opts );
var p = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'huberGradient(%0.4f, %0.4f, %0.4f, %0.4f) = %0.4f', x, d, y, p, huberGradient );
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
#include "stdlib/ml/base/loss/float64/huber_gradient.h"
```

#### stdlib_base_float64_huber_gradient( x, d, y, p )

Computes the [Huber loss gradient][huber-loss-gradient] with respect to a model parameter.

```c
double out = stdlib_base_float64_huber_gradient( 3.0, 5.0, 10.2, 0.782 );
// returns -15.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **d**: `[in] double` threshold.
-   **y**: `[in] double` true target value.
-   **p**: `[in] double` predicted value.

```c
double stdlib_base_float64_huber_gradient( const double x, const double d, const double y, const double p );
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
#include "stdlib/ml/base/loss/float64/huber_gradient.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -10.0, -9.56, -8.67, -7.78, -6.89, 6.89, 7.78, 8.67, 9.56, 10.0 };
    const double d[] = { 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };
    const double y[] = { -9.9, -7.7, -5.5, -3.3, -1.1, 1.1, 3.3, 5.5, 7.7, 9.9 };
    const double p[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_float64_huber_gradient( x[ i ], d[ i ], y[ i ], p[ i ] );
        printf( "huberGradient(%lf, %lf, %lf, %lf) = %lf\n", x[ i ], d[ i ], y[ i ], p[ i ], v );
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

[huber-loss-gradient]: https://en.wikipedia.org/wiki/Huber_loss

</section>

<!-- /.links -->
