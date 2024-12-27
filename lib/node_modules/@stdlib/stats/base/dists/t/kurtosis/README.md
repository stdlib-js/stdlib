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

# Kurtosis

> [Student's t][t-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Student's t][t-distribution] random variable with degrees of freedom `ν` is

<!-- <equation class="equation" label="eq:t_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \begin{cases} \frac{6}{\nu-4} & \text{ for } \nu > 2 \\ \infty & \text{ for } 2 < \nu \le 4 \end{cases}" alt="Excess kurtosis for a Student's t distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = \begin{cases} \frac{6}{\nu-4} & \text{ for } \nu > 2 \\ \infty & \text{ for } 2 < \nu \le 4 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \begin{cases} \frac{6}{\nu-4} &amp; \text{ for } \nu &gt; 2 \\ \infty &amp; \text{ for } 2 &lt; \nu \le 4 \end{cases}" data-equation="eq:t_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/t/kurtosis/docs/img/equation_t_kurtosis.svg" alt="Excess kurtosis for a Student's t distribution.">
    <br>
</div> -->

<!-- </equation> -->

For `ν` smaller than two, the kurtosis is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/t/kurtosis' );
```

#### kurtosis( v )

Returns the [excess kurtosis][kurtosis] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = kurtosis( 9.0 );
// returns 1.2

y = kurtosis( 4.5 );
// returns 12.0
```

If provided `2 < v <= 4`, the function returns `infinity`.

```javascript
var y = kurtosis( 3.5 );
// returns Infinity

y = kurtosis( 2.9 );
// returns Infinity

y = kurtosis( 4.0 );
// returns Infinity
```

If provided `v <= 2`, the function returns `NaN`.

```javascript
var y = kurtosis( -1.0 );
// returns NaN

y = kurtosis( 0.8 );
// returns NaN

y = kurtosis( 2.0 );
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
var round = require( '@stdlib/math/base/special/round' );
var kurtosis = require( '@stdlib/stats/base/dists/t/kurtosis' );

var v;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    v = randu() * 20.0;
    y = kurtosis( v );
    console.log( 'v: %d, Kurt(X,v): %d', v.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/t/kurtosis.h"
```

#### stdlib_base_dists_t_kurtosis( v )

Returns the excess kurtosis of a Student's t distribution.

```c
double out = stdlib_base_dists_t_kurtosis( 9.0 );
// returns 1.2
```

The function accepts the following arguments:

-   **v**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_t_kurtosis( const double v );
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
#include "stdlib/stats/base/dists/t/kurtosis.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double v;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        v = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_t_kurtosis( v );
        printf( "v: %lf, Kurt(X;v): %lf\n", v, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
