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

> [Bernoulli][bernoulli-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{1-2p}{\sqrt{p(1-p)}}" alt="Skewness for a Bernoulli distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = \frac{1-2p}{\sqrt{p(1-p)}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{1-2p}{\sqrt{p(1-p)}}" data-equation="eq:bernoulli_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/skewness/docs/img/equation_bernoulli_skewness.svg" alt="Skewness for a Bernoulli distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/bernoulli/skewness' );
```

#### skewness( p )

Returns the [skewness][skewness] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var v = skewness( 0.1 );
// returns ~2.667

v = skewness( 0.5 );
// returns 0.0
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = skewness( NaN );
// returns NaN

v = skewness( 1.5 );
// returns NaN

v = skewness( -1.0 );
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
var skewness = require( '@stdlib/stats/base/dists/bernoulli/skewness' );

var v;
var i;
var p;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = skewness( p );
    console.log( 'p: %d, skew(X;p): %d', p.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/bernoulli/skewness.h"
```

#### stdlib_base_dists_bernoulli_skewness( p )

Returns the skewness of a Bernoulli distribution with success probability 'p'.

```c
double y = stdlib_base_dists_bernoulli_skewness( 0.1 );
// returns ~2.667
```

The function accepts the following arguments:

-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_bernoulli_skewness( const double p );
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
#include "stdlib/stats/base/dists/bernoulli/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double p;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_bernoulli_skewness( p );
        printf( "x: %lf , skew(X;p): %lf\n", p , y );
    }
}
```

</section>

<!-- /.examples -->

</section>

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

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
