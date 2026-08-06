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

# hingeGradient

> Compute the [hinge loss gradient][hinge-loss-gradient] with respect to a model parameter.

<section class="intro">

The [hinge loss gradient][hinge-loss-gradient] is defined as

<!-- <equation class="equation" label="eq:hinge_loss_gradient" align="center" raw="\frac{\partial \ell}{\partial w} = \begin{cases} -yx & \text{if } yp \leq t \\ 0 & \text{otherwise} \end{cases}" alt="Equation for the hinge loss gradient."> -->

```math
\frac{\partial \ell}{\partial w} = \begin{cases} -yx & \text{if } yp \leq t \\ 0 & \text{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\frac{\partial \ell}{\partial w} = \begin{cases} -yx &amp; \text{if } yp \leq t \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:hinge_loss_gradient">
    <img src="" alt="Equation for the hinge loss gradient.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var hingeGradient = require( '@stdlib/ml/base/loss/float64/hinge-gradient' );
```

#### hingeGradient( x, t, y, p )

Computes the [hinge loss gradient][hinge-loss-gradient] with respect to a model parameter.

```javascript
var v = hingeGradient( 3.0, 1.0, 1.0, 0.782 );
// returns -3.0

v = hingeGradient( -1.3, 1.0, 1.0, -0.999 );
// returns 1.3
```

The function accepts the following arguments:

-   **x**: input value.
-   **t**: margin threshold.
-   **y**: true target value.
-   **p**: predicted value.

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = hingeGradient( NaN, 1.0, 1.0, 0.782 );
// returns NaN

v = hingeGradient( 1.0, 1.0, NaN, 0.782 );
// returns NaN

v = hingeGradient( NaN, NaN, 1.0, 0.782 );
// returns NaN

v = hingeGradient( NaN, NaN, NaN, NaN );
// returns NaN
```

If `y` is not +1 or -1, the function returns `NaN`.

```javascript
var v = hingeGradient( 3.0, 1.0, -0.9, 1.0 );
// returns NaN

v = hingeGradient( 2.4, 1.0, 0.453, 0.76 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When `t = 1.0`, we get the loss used by SVM; whereas, when `t = 0.0`, we get the loss used by the Perceptron.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var sample = require( '@stdlib/random/sample' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var hingeGradient = require( '@stdlib/ml/base/loss/float64/hinge-gradient' );

var y = sample( [ -1.0, 1.0 ], {
    'size': 100
});
var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -100.0, 100.0, opts );
var t = uniform( 100, 0.0, 5.0, opts );
var p = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'hingeGradient(%0.4f, %0.4f, %0.4f, %0.4f) = %0.4f', x, t, y, p, hingeGradient );
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
#include "stdlib/ml/base/loss/float64/hinge_gradient.h"
```

#### stdlib_base_float64_hinge_gradient( x, t, y, p )

Computes the [hinge loss gradient][hinge-loss-gradient] with respect to a model parameter.

```c
double out = stdlib_base_float64_hinge_gradient( 3.0, 1.0, 1.0, 0.782 );
// returns -3.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **t**: `[in] double` margin threshold.
-   **y**: `[in] double` true target value.
-   **p**: `[in] double` predicted value.

```c
double stdlib_base_float64_hinge_gradient( const double x, const double t, const double y, const double p );
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
#include "stdlib/ml/base/loss/float64/hinge_gradient.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -10.0, -9.56, -8.67, -7.78, -6.89, 6.89, 7.78, 8.67, 9.56, 10.0 };
    const double t[] = { 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };
    const double y[] = { -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0 };
    const double p[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_float64_hinge_gradient( x[ i ], t[ i ], y[ i ], p[ i ] );
        printf( "hingeGradient(%lf, %lf, %lf, %lf) = %lf\n", x[ i ], t[ i ], y[ i ], p[ i ], v );
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

[hinge-loss-gradient]: https://en.wikipedia.org/wiki/Hinge_loss#Optimization

</section>

<!-- /.links -->
