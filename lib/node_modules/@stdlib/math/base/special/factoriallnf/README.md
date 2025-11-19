<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# factoriallnf

> Natural logarithm of the [factorial][factorial-function] of a single-precision floating-point number.

<section class="intro">

The natural logarithm of the factorial function may be expressed

<!-- <equation class="equation" label="eq:factorialln_function" align="center" raw="f(n)=\ln (n!)" alt="Equation of the natural logarithm of the factorial."> -->

```math
f(n)=\ln (n!)
```

<!-- </equation> -->

The [factorial function][factorial-function] may be defined as the product

<!-- <equation class="equation" label="eq:factorial_function" align="center" raw="n! = \prod_{k=1}^n k" alt="Factorial function definition"> -->

```math
n! = \prod_{k=1}^n k
```

<!-- </equation> -->

or according to the recurrence relation

<!-- <equation class="equation" label="eq:factorial_recurrence_relation" align="center" raw="n! = \begin{cases}1 & \textrm{if } n = 0,\\(n-1)! \times n & \textrm{if } n > 1\end{cases}" alt="Factorial function recurrence relation"> -->

```math
n! = \begin{cases}1 & \textrm{if } n = 0,\\(n-1)! \times n & \textrm{if } n > 1\end{cases}
```

<!-- </equation> -->

Following the convention for an [empty product][empty-product], in all definitions,

<!-- <equation class="equation" label="eq:zero_factorial" align="center" raw="0! = 1" alt="Zero factorial"> -->

```math
0! = 1
```

<!-- </equation> -->

The [Gamma][gamma-function] function extends the [factorial function][factorial-function] for non-integer values.

<!-- <equation class="equation" label="eq:factorial_function_and_gamma" align="center" raw="n! = \Gamma(n+1)" alt="Factorial function extension via the Gamma function"> -->

```math
n! = \Gamma(n+1)
```

<!-- </equation> -->

The [factorial][factorial-function] of a **negative** integer is not defined.

Evaluating the natural logarithm of [factorial function][factorial-function] is useful as the [factorial function][factorial-function] can overflow for large `n`. Thus, `factoriallnf( n )` is generally preferred to `lnf( n! )`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var factoriallnf = require( '@stdlib/math/base/special/factoriallnf' );
```

#### factoriallnf( x )

Evaluates the natural logarithm of the [factorial][factorial-function] of a single-precision floating-point number. For input values other than negative integers, the function returns `ln( x! ) = ln( Γ(x+1) )`, where `Γ` is the [Gamma][gamma-function] function. For negative integers, the function returns `NaN`.

```javascript
var v = factoriallnf( 3.0 );
// returns ~1.792

v = factoriallnf( 2.4 );
// returns ~1.092

v = factoriallnf( -1.0 );
// returns NaN

v = factoriallnf( -1.5 );
// returns ~1.266
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = factoriallnf( NaN );
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
var factoriallnf = require( '@stdlib/math/base/special/factoriallnf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -10.0, 50.0, opts );

logEachMap( 'factoriallnf(%0.4f) = %0.4f', x, factoriallnf );
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
#include "stdlib/math/base/special/factoriallnf.h"
```

#### stdlib_base_factoriallnf( x )

Evaluates the natural logarithm of the [factorial][factorial-function] of a single-precision floating-point number. For input values other than negative integers, the function returns `ln( x! ) = ln( Γ(x+1) )`, where `Γ` is the [Gamma][gamma-function] function. For negative integers, the function returns `NaN`.

```c
float out = stdlib_base_factoriallnf( 3.0f );
// returns ~1.792f

out = stdlib_base_factoriallnf( -1.5f );
// returns ~1.266f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_factoriallnf( const float x );
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
#include "stdlib/math/base/special/factoriallnf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 2.0f, 3.0f, 5.0f, 8.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_factoriallnf( x[ i ] );
        printf( "factoriallnf(%f) = %f\n", x[ i ], y );
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

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_Function

[factorial-function]: https://en.wikipedia.org/wiki/Factorial

[empty-product]: https://en.wikipedia.org/wiki/Empty_product

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
