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

# squaredErrorGradient

> Compute the [squared error loss gradient][squared-error-loss-gradient] with respect to a model parameter.

<section class="intro">

The [squared error loss gradient][squared-error-loss-gradient] is defined as

<!-- <equation class="equation" label="eq:squared_error_loss_gradient" align="center" raw="\frac{\partial \ell}{\partial w} = -(y-p)x" alt="Equation for the squared error loss gradient."> -->

```math
\frac{\partial \ell}{\partial w} = -(y-p)x
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var squaredErrorGradient = require( '@stdlib/ml/base/loss/float64/squared-error-gradient' );
```

#### squaredErrorGradient( x, y, p )

Computes the [squared error loss gradient][squared-error-loss-gradient] with respect to a model parameter.

```javascript
var v = squaredErrorGradient( 5.0, -2.0, -1.782 );
// returns ~1.09

v = squaredErrorGradient( -4.0, 1.0, -0.999 );
// returns 7.996
```

The function accepts the following arguments:

-   **x**: input value.
-   **y**: true target value.
-   **p**: predicted value.

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = squaredErrorGradient( NaN, 2.0, 0.782 );
// returns NaN

v = squaredErrorGradient( 1.0, NaN, 0.782 );
// returns NaN

v = squaredErrorGradient( 1.0, 2.0, NaN );
// returns NaN

v = squaredErrorGradient( NaN, NaN, NaN );
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
var squaredErrorGradient = require( '@stdlib/ml/base/loss/float64/squared-error-gradient' );

var x = uniform( 100, -100.0, 100.0, {
    'dtype': 'float64'
});
var y = uniform( 100, -100.0, 100.0, {
    'dtype': 'float64'
});
var p = uniform( 100, -100.0, 100.0, {
    'dtype': 'float64'
});
logEachMap( 'squaredErrorGradient(%0.4f, %0.4f, %0.4f) = %0.4f', x, y, p, squaredErrorGradient );
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
#include "stdlib/ml/base/loss/float64/squared_error_gradient.h"
```

#### stdlib_base_float64_squared_error_gradient( x, y, p )

Computes the [squared error loss gradient][squared-error-loss-gradient] with respect to a model parameter.

```c
double out = stdlib_base_float64_squared_error_gradient( 5.0, -2.0, -1.782 );
// returns ~1.09
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` true target value.
-   **p**: `[in] double` predicted value.

```c
double stdlib_base_float64_squared_error_gradient( const double x, const double y, const double p );
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
#include "stdlib/ml/base/loss/float64/squared_error_gradient.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -10.0, -9.56, -8.67, -7.78, -6.89, 6.89, 7.78, 8.67, 9.56, 10.0 };
    const double y[] = { -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0 };
    const double p[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_float64_squared_error_gradient( x[ i ], y[ i ], p[ i ] );
        printf( "squaredErrorGradient(%lf, %lf, %lf) = %lf\n", x[ i ], y[ i ], p[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[squared-error-loss-gradient]: https://en.wikipedia.org/wiki/Mean_squared_error#Loss_function

</section>

<!-- /.links -->
