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

# Skewness

> [Negative binomial][negative-binomial-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [negative binomial][negative-binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:negative_binomial_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{1+p}{\sqrt{pr}}" alt="Skewness for a negative binomial distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = \frac{1+p}{\sqrt{pr}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{1+p}{\sqrt{pr}}" data-equation="eq:negative_binomial_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/skewness/docs/img/equation_negative_binomial_skewness.svg" alt="Skewness for a negative binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `r` is the number of successes until experiment is stopped and `p` is the success probability in each trial. The random variable `X` denotes the number of failures until the `r` success is reached.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/negative-binomial/skewness' );
```

#### skewness( r, p )

Returns the [skewness][skewness] of a [negative binomial][negative-binomial-distribution] distribution with parameters `r` (number of successes until experiment is stopped) and `p` (success probability).

```javascript
var v = skewness( 100, 0.2 );
// returns ~0.201

v = skewness( 50, 0.5 );
// returns ~0.3
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 0.5 );
// returns NaN

v = skewness( 20, NaN );
// returns NaN
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var v = skewness( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = skewness( 20, -1.0 );
// returns NaN

v = skewness( 20, 1.5 );
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
var skewness = require( '@stdlib/stats/base/dists/negative-binomial/skewness' );

var opts = {
    'dtype': 'float64'
};
var r = uniform( 10, 0.0, 100.0, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'r: %0.4f, p: %0.4f, skew(X;r,p): %0.4f', r, p, skewness );
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
#include "stdlib/stats/base/dists/negative-binomial/skewness.h"
```

#### stdlib_base_dists_negative_binomial_skewness( r, p )

Returns the skewness of a negative binomial distribution.

```c
 double y = stdlib_base_dists_negative_binomial_skewness( 100.0, 0.2 );
// returns ~0.201
```

The function accepts the following arguments:

-   **r**: `[in] double` number of failures until experiment is stopped.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_negative_binomial_skewness( const double r, const double p );
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
#include "stdlib/stats/base/dists/negative-binomial/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
   double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
   return min + ( v*(max-min) );
}

int main( void ) {
   double r;
   double p;
   double y;
   int i;

   for ( i = 0; i < 10; i++ ) {
       r = random_uniform( 1.0, 100.0 );
       p = random_uniform( 0.01, 0.99 );
       y = stdlib_base_dists_negative_binomial_skewness( r, p );
       printf( "r: %.2f, p: %.4f, skew(X;r,p): %.4f\n", r, p, y );
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

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
