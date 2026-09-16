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

# logGradient

> Compute the [log loss gradient][log-loss-gradient] with respect to a model parameter.

<section class="intro">

The [log loss gradient][log-loss-gradient] is defined as

<!-- <equation class="equation" label="eq:log_loss_gradient" align="center" raw="\frac{\partial \ell}{\partial w} = -\frac{y}{1+e^{yp}}x" alt="Equation for the log loss gradient."> -->

```math
\frac{\partial \ell}{\partial w} = -\frac{y}{1+e^{yp}}x
```

<!-- <div class="equation" align="center" data-raw-text="\frac{\partial \ell}{\partial w} = -\frac{y}{1+e^{yp}}x" data-equation="eq:log_loss_gradient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@2c32eb273fa95e2fd832845e12f129c4a07d2741/lib/node_modules/@stdlib/ml/base/loss/float64/log-gradient/docs/img/equation_log_loss_gradient.svg" alt="Equation for the log loss gradient.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logGradient = require( '@stdlib/ml/base/loss/float64/log-gradient' );
```

#### logGradient( x, y, p )

Computes the [log loss gradient][log-loss-gradient] with respect to a model parameter.

```javascript
var v = logGradient( 2.3, 1.0, 0.782 );
// returns ~-0.722

v = logGradient( 1.0, 1.0, -0.999 );
// returns ~-0.731
```

The function accepts the following arguments:

-   **x**: input value.
-   **y**: true target value.
-   **p**: predicted value.

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = logGradient( 1.0, NaN, 0.782 );
// returns NaN

v = logGradient( 3.0, 1.0, NaN );
// returns NaN
```

If `y` is not +1 or -1, the function returns `NaN`.

```javascript
var v = logGradient( 3.4, -0.9, 2.0 );
// returns NaN

v = logGradient( 0.453, 0.76, 2.0 );
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
var logGradient = require( '@stdlib/ml/base/loss/float64/log-gradient' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -10.0, 10.0, opts );
var y = sample( [ -1.0, 1.0 ], {
    'size': 100
});
var p = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'logGradient(%0.4f, %0.4f, %0.4f) = %0.4f', x, y, p, logGradient );
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
#include "stdlib/ml/base/loss/float64/log_gradient.h"
```

#### stdlib_base_float64_log_gradient( x, y, p )

Computes the [log loss gradient][log-loss-gradient] with respect to a model parameter.

```c
double out = stdlib_base_float64_log_gradient( 2.3, 1.0, 0.782 );
// returns ~-0.722
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` true target value.
-   **p**: `[in] double` predicted value.

```c
double stdlib_base_float64_log_gradient( const double x, const double y, const double p );
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
#include "stdlib/ml/base/loss/float64/log_gradient.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 };
    const double y[] = { -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0 };
    const double p[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_float64_log_gradient( x[ i ], y[ i ], p[ i ] );
        printf( "logGradient(%lf, %lf, %lf) = %lf\n", x[ i ], y[ i ], p[ i ], v );
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

[log-loss-gradient]: https://en.wikipedia.org/wiki/Cross-entropy#Relation_to_linear_regression

</section>

<!-- /.links -->
