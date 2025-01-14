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

# Mean

> [Bernoulli][bernoulli-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_expectation" align="center" raw="\mathbb{E}\left[ X \right] = p" alt="Expected value for a Bernoulli distribution."> -->

```math
\mathbb{E}\left[ X \right] = p
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = p" data-equation="eq:bernoulli_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/mean/docs/img/equation_bernoulli_expectation.svg" alt="Expected value for a Bernoulli distribution.">
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
var mean = require( '@stdlib/stats/base/dists/bernoulli/mean' );
```

#### mean( p )

Returns the [expected value][expected-value] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var v = mean( 0.1 );
// returns 0.1

v = mean( 0.5 );
// returns 0.5
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = mean( NaN );
// returns NaN

v = mean( 1.5 );
// returns NaN

v = mean( -1.0 );
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
var mean = require( '@stdlib/stats/base/dists/bernoulli/mean' );

var v;
var i;
var p;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = mean( p );
    console.log( 'p: %d, E(X;p): %d', p.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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
#include "stdlib/stats/base/dists/bernoulli/mean.h"
```

#### stdlib_base_dists_bernoulli_mean( p )

Returns the [expected value][expected-value] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```c
double out = stdlib_base_dists_bernoulli_mean( 0.1 );
// returns 0.1
```

The function accepts the following arguments:

-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_bernoulli_mean( const double p );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` 
element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/bernoulli/mean.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double p;
    double y;
    int i;
    for ( i = 0; i < 25; i++ ) {
        p = (double)rand() / ( (double)RAND_MAX + 1.0 );
        y = stdlib_base_dists_bernoulli_mean( p );
        printf( "x: %lf, E(X;p): %lf\n", p, y );
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

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
