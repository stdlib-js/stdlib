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

# modifiedHuberGradient

> Compute the [modified Huber loss gradient][modified-huber-loss-gradient] with respect to a model parameter.

<section class="intro">

The [modified huber loss gradient][modified-huber-loss-gradient] is defined as

<!-- <equation class="equation" label="eq:modified_huber_loss_gradient" align="center" raw="
\frac{\partial \ell}{\partial w_i} = \begin{cases} -4yx_i & \text{if } yp < -1 \\ -2y(1 - yp)x_i & \text{if } -1 \le yp \le 1 \\ 0 & \text{if } yp > 1 \end{cases}" alt="Equation for the modified Huber loss gradient."> -->

```math
\frac{\partial \ell}{\partial w_i} =
\begin{cases}
-4yx_i & \text{if } yp < -1 \\
-2y(1 - yp)x_i & \text{if } -1 \le yp \le 1 \\
0 & \text{if } yp > 1
\end{cases}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var modifiedHuberGradient = require( '@stdlib/ml/base/loss/float64/modified-huber-gradient' );
```

#### modifiedHuberGradient( x, y, p )

Computes the [modified Huber loss gradient][modified-huber-loss-gradient] with respect to a model parameter.

```javascript
var v = modifiedHuberGradient( 3.4, 1.0, 0.782 );
// returns ~-1.482

v = modifiedHuberGradient( 2.3, 1.0, -0.999 );
// returns ~-9.195
```

The function accepts the following arguments:

-   **x**: input value.
-   **y**: true target value.
-   **p**: predicted value.

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = modifiedHuberGradient( 2.0, NaN, 0.782 );
// returns NaN

v = modifiedHuberGradient( 1.0, NaN, 0.782 );
// returns NaN

v = modifiedHuberGradient( NaN, NaN, NaN );
// returns NaN
```

If `y` is not +1 or -1, the function returns `NaN`.

```javascript
var v = modifiedHuberGradient( 3.0, -0.9, 1.0 );
// returns NaN

v = modifiedHuberGradient( 4.0, 0.453, 0.76 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var sample = require( '@stdlib/random/sample' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var modifiedHuberGradient = require( '@stdlib/ml/base/loss/float64/modified-huber-gradient' );

var x = uniform( 100, -10.0, 10.0, {
    'dtype': 'float64'
});
var y = sample( [ -1.0, 1.0 ], {
    'size': 100
});
var p = uniform( 100, -5.0, 5.0, {
    'dtype': 'float64'
});

logEachMap( 'modifiedHuberGradient(%0.4f, %0.4f, %0.4f) = %0.4f', x, y, p, modifiedHuberGradient );
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
#include "stdlib/ml/base/loss/float64/modified_huber_gradient.h"
```

#### stdlib_base_float64_modified_huber_gradient( x, y, p )

Computes the [modified Huber loss gradient][modified-huber-loss-gradient] with respect to a model parameter.

```c
double out = stdlib_base_float64_modified_huber_gradient( 3.4, 1.0, 0.782 );
// returns ~-1.482
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` true target value.
-   **p**: `[in] double` predicted value.

```c
double stdlib_base_float64_modified_huber_gradient( const double x, const double y, const double p );
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
#include "stdlib/ml/base/loss/float64/modified_huber_gradient.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 };
    const double y[] = { -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0 };
    const double p[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_float64_modified_huber_gradient( x[ i ], y[ i ], p[ i ] );
        printf( "modifiedHuberGradient(%lf, %lf, %lf) = %lf\n", x[ i ], y[ i ], p[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

## References

-   Zhang, Tong. 2004. "Solving Large Scale Linear Prediction Problems Using Stochastic Gradient Descent Algorithms." In _Proceedings of the Twenty-First International Conference on Machine Learning_, 116. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/1015330.1015332][@zhang:2004a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[modified-huber-loss-gradient]: https://en.wikipedia.org/wiki/Huber_loss#Variant_for_classification

[@zhang:2004a]: https://doi.org/10.1145/1015330.1015332

</section>

<!-- /.links -->
