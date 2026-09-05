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

# squaredEpsilonInsensitiveGradient

> Compute the squared epsilon insensitive loss gradient with respect to a model parameter.

<section class="intro">

The squared epsilon insensitive loss gradient is defined as

<!-- <equation class="equation" label="eq:squared_epsilon_insensitive_loss_gradient" align="center" raw="\frac{\partial \ell}{\partial w_i} = \begin{cases} -2((y - p) - \epsilon)x_i & \text{if } y - p > \epsilon, \\2((p - y) - \epsilon)x_i & \text{if } p - y > \epsilon, \\0 & \text{otherwise.}\end{cases}" alt="Equation for the squared epsilon insensitive loss gradient."> -->

```math
\frac{\partial \ell}{\partial w_i} =
\begin{cases}
-2((y - p) - \epsilon)x_i & \text{if } y - p > \epsilon, \\
2((p - y) - \epsilon)x_i & \text{if } p - y > \epsilon, \\
0 & \text{otherwise.}
\end{cases}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var squaredEpsilonInsensitiveGradient = require( '@stdlib/ml/base/loss/float64/squared-epsilon-insensitive-gradient' );
```

#### squaredEpsilonInsensitiveGradient( x, e, y, p )

Computes the squared epsilon insensitive loss gradient with respect to a model parameter.

<!-- eslint-disable id-length -->

```javascript
var v = squaredEpsilonInsensitiveGradient( 3.0, 5.0, 10.2, 0.782 );
// returns ~-26.508

v = squaredEpsilonInsensitiveGradient( -1.3, 1.0, 23.2, -0.999 );
// returns ~60.317
```

The function accepts the following arguments:

-   **x**: input value.
-   **e**: insensitivity parameter.
-   **y**: true target value.
-   **p**: predicted value.

If any argument is `NaN`, the function returns `NaN`.

<!-- eslint-disable id-length -->

```javascript
var v = squaredEpsilonInsensitiveGradient( NaN, 1.0, 1.0, 0.782 );
// returns NaN

v = squaredEpsilonInsensitiveGradient( 1.0, 1.0, NaN, 0.782 );
// returns NaN

v = squaredEpsilonInsensitiveGradient( NaN, NaN, 1.0, 0.782 );
// returns NaN

v = squaredEpsilonInsensitiveGradient( NaN, NaN, NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var squaredEpsilonInsensitiveGradient = require( '@stdlib/ml/base/loss/float64/squared-epsilon-insensitive-gradient' );

var x = uniform( 100, -100.0, 100.0, {
    'dtype': 'float64'
});
var e = uniform( 100, 0.0, 5.0, {
    'dtype': 'float64'
});
var y = uniform( 100, -100.0, 100.0, {
    'dtype': 'float64'
});
var p = uniform( 100, -5.0, 5.0, {
    'dtype': 'float64'
});

logEachMap( 'squaredEpsilonInsensitiveGradient(%0.4f, %0.4f, %0.4f, %0.4f) = %0.4f', x, e, y, p, squaredEpsilonInsensitiveGradient );
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
#include "stdlib/ml/base/loss/float64/squared_epsilon_insensitive_gradient.h"
```

#### stdlib_base_float64_squared_epsilon_insensitive_gradient( x, e, y, p )

Computes the squared epsilon insensitive loss gradient with respect to a model parameter.

```c
double out = stdlib_base_float64_squared_epsilon_insensitive_gradient( 3.0, 5.0, 10.2, 0.782 );
// returns ~-26.508
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **e**: `[in] double` insensitivity parameter.
-   **y**: `[in] double` true target value.
-   **p**: `[in] double` predicted value.

```c
double stdlib_base_float64_squared_epsilon_insensitive_gradient( const double x, const double e, const double y, const double p );
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
#include "stdlib/ml/base/loss/float64/squared_epsilon_insensitive_gradient.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -10.0, -9.56, -8.67, -7.78, -6.89, 6.89, 7.78, 8.67, 9.56, 10.0 };
    const double e[] = { 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };
    const double y[] = { -9.9, -7.7, -5.5, -3.3, -1.1, 1.1, 3.3, 5.5, 7.7, 9.9 };
    const double p[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_float64_squared_epsilon_insensitive_gradient( x[ i ], e[ i ], y[ i ], p[ i ] );
        printf( "squaredEpsilonInsensitiveGradient(%lf, %lf, %lf, %lf) = %lf\n", x[ i ], e[ i ], y[ i ], p[ i ], v );
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

</section>

<!-- /.links -->
