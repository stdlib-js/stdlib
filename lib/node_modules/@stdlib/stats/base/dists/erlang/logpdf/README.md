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

# Logarithm of Probability Density Function

> Evaluate the natural logarithm of the probability density function (PDF) for an [Erlang][erlang-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for an [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_pdf" align="center" raw="f(x; k,\lambda)={\lambda^k x^{k-1} e^{-\lambda x} \over (k-1)!} 1(x \ge 0)" alt="Probability density function (PDF) for an Erlang distribution."> -->

```math
f(x; k,\lambda)={\lambda^k x^{k-1} e^{-\lambda x} \over (k-1)!} 1(x \ge 0)
```

<!-- <div class="equation" align="center" data-raw-text="f(x; k,\lambda)={\lambda^k x^{k-1} e^{-\lambda x} \over (k-1)!} 1(x \ge 0)" data-equation="eq:erlang_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/erlang/logpdf/docs/img/equation_erlang_pdf.svg" alt="Probability density function (PDF) for an Erlang distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the shape parameter and `lambda` is the rate parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/erlang/logpdf' );
```

#### logpdf( x, k, lambda )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for an [Erlang][erlang-distribution]  distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var y = logpdf( 0.1, 1, 1.0 );
// returns ~-0.1

y = logpdf( 0.5, 2, 2.5 );
// returns ~-0.111

y = logpdf( -1.0, 4, 2.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 1, NaN );
// returns NaN
```

If not provided a nonnegative integer for `k`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -2, 0.5 );
// returns NaN

y = logpdf( 2.0, 0.5, 0.5 );
// returns NaN
```

If provided `k = 0`, the function evaluates the logarithm of the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logpdf( 2.0, 0.0, 2.0 );
// returns -Infinity

y = logpdf( 0.0, 0.0, 2.0 );
// returns Infinity
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 1, 0.0 );
// returns NaN

y = logpdf( 2.0, 1, -1.0 );
// returns NaN
```

#### logpdf.factory( k, lambda )

Returns a `function` for evaluating the [PDF][pdf] for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var mylogpdf = logpdf.factory( 3, 1.5 );

var y = mylogpdf( 1.0 );
// returns ~-0.977

y = mylogpdf( 4.0 );
// returns ~-2.704
```

</section>

<!-- /.usage -->

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
#include "stdlib/stats/base/dists/erlang/logpdf.h"
```

#### stdlib_base_dists_erlang_logpdf( x, k, lambda )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for an [Erlang][erlang-distribution] distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.

```c
double y = stdlib_base_dists_erlang_logpdf( 1.0, 3.0, 1.5 );
// returns ~-0.977
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **k**: `[in] double` shape parameter.
-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_erlang_logpdf( const double x, const double k, const double lambda );
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
#include "stdlib/stats/base/dists/erlang/logpdf.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double x;
    double k;
    double y;
    int i;

    for ( i = 0; i < 5; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        k = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        lambda = random_uniform( 0.0, 5.0 );
        y = stdlib_base_dists_erlang_logpdf( x, k, lambda );
        printf( "x: %lf, k: %lf, λ: %lf, ln(f(x;k,λ)): %lf\n", x, k, lambda, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var logpdf = require( '@stdlib/stats/base/dists/erlang/logpdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 20, 0.0, 10.0, opts );
var k = discreteUniform( 20, 0, 10, opts );
var lambda = uniform( 20, 0.0, 5.0, opts );

logEachMap( 'x: %0.4f, k: %d, λ: %0.4f, ln(f(x;k,λ)): %0.4f', x, k, lambda, logpdf );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
