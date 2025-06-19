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

# Entropy

> [Normal][normal-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [normal][normal-distribution] random variable with mean `μ` and standard deviation `σ > 0` is

<!-- <equation class="equation" label="eq:normal_entropy" align="center" raw="h\left( X \right) = \tfrac{1}{2}\ln(2\pi \,e\,\sigma ^{2})" alt="Differential entropy for a normal distribution."> -->

```math
h\left( X \right) = \tfrac{1}{2}\ln(2\pi \,e\,\sigma ^{2})
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \tfrac{1}{2}\ln(2\pi \,e\,\sigma ^{2})" data-equation="eq:normal_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/normal/entropy/docs/img/equation_normal_entropy.svg" alt="Differential entropy for a normal distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/normal/entropy' );
```

#### entropy( mu, sigma )

Returns the [differential entropy][entropy] for a [normal][normal-distribution] distribution with mean `mu` and standard deviation `sigma` (in [nats][nats]).

```javascript
var y = entropy( 2.0, 1.0 );
// returns ~1.419

y = entropy( -1.0, 4.0 );
// returns ~2.805
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = entropy( NaN, 1.0 );
// returns NaN

y = entropy( 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = entropy( 0.0, 0.0 );
// returns NaN

y = entropy( 0.0, -1.0 );
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
var randu = require( '@stdlib/random/base/randu' );
var entropy = require( '@stdlib/stats/base/dists/normal/entropy' );

var sigma;
var mu;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    sigma = randu() * 20.0;
    y = entropy( mu, sigma );
    console.log( 'µ: %d, σ: %d, h(X;µ,σ): %d', mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
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
#include "stdlib/stats/base/dists/normal/entropy.h"
```

#### stdlib_base_dists_normal_entropy( mu, sigma )

Evaluates the differential entropy of a normal distribution.

```c
double out = stdlib_base_dists_normal_entropy( 0.0, 1.0 );
// returns ~1.4189
```

The function accepts the following arguments:

-   **mu**: `[in] double` mean.
-   **sigma**: `[in] double` standard deviation.

```c
double stdlib_base_dists_normal_entropy( const double mu, const double sigma );
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
#include "stdlib/stats/base/dists/normal/entropy.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double sigma;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        sigma = random_uniform( 0.1, 20.0 );
        y = stdlib_base_dists_normal_entropy( mu, sigma );
        printf( "\u00b5: %.4f, \u03c3: %.4f, h(X;\u00b5,\u03c3): %.4f\n", mu, sigma, y );
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

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
