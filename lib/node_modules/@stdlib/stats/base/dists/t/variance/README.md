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

# Variance

> [Student's t][t-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [Student's t][t-distribution] random variable with degrees of freedom `ν` is

<!-- <equation class="equation" label="eq:t_variance" align="center" raw="\operatorname{Var}\left( X \right) = \begin{cases} \frac{\nu }{\nu-2} & \text{ for } \nu > 2 \\ \infty & \text{ for } 1 < \nu \le 2 \end{cases}" alt="Variance for a Student's t distribution."> -->

```math
\mathop{\mathrm{Var}}\left( X \right) = \begin{cases} \frac{\nu }{\nu-2} & \text{ for } \nu > 2 \\ \infty & \text{ for } 1 < \nu \le 2 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = \begin{cases} \frac{\nu }{\nu-2} &amp; \text{ for } \nu &gt; 2 \\ \infty &amp; \text{ for } 1 &lt; \nu \le 2 \end{cases}" data-equation="eq:t_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/t/variance/docs/img/equation_t_variance.svg" alt="Variance for a Student's t distribution.">
    <br>
</div> -->

<!-- </equation> -->

For `ν` smaller than one, the variance is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/t/variance' );
```

#### variance( v )

Returns the [variance][variance] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = variance( 9.0 );
// returns ~1.286

y = variance( 3.5 );
// returns ~2.333
```

If provided `1 < v <= 2`, the function returns `infinity`.

```javascript
var y = variance( 1.5 );
// returns Infinity

y = variance( 2.0 );
// returns Infinity
```

If provided `v <= 1`, the function returns `NaN`.

```javascript
var y = variance( -1.0 );
// returns NaN

y = variance( 0.8 );
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
var variance = require( '@stdlib/stats/base/dists/t/variance' );

var v;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    v = randu() * 20.0;
    y = variance( v );
    console.log( 'v: %d, Var(X,v): %d', v.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/t/variance.h"
```

#### stdlib_base_dists_t_variance( v )

Returns the variance for a Student's t-distribution.

```c
double out = stdlib_base_dists_t_variance( 5.0 );
// returns ~1.667
```

The function accepts the following arguments:

-   **v**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_t_variance( const double v );
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
#include "stdlib/stats/base/dists/t/variance.h"
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
        v = random_uniform( 2.1, 100.0 );
        y = stdlib_base_dists_t_variance( v );
        printf( "v: %.4f, Var(X;v): %.4f\n", v, y );
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

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
