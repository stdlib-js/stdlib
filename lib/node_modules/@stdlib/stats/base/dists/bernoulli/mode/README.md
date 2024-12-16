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

# Mode

> [Bernoulli][bernoulli-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_mode" align="center" raw="\operatorname{Mode}\left( X \right) = \begin{cases} 0 & \text{if } p < 1/2 \\ 0, 1 &\text{if } p = 1/2 \\ 1 & \text{if } p > 1/2 \end{cases}" alt="Mode for a Bernoulli distribution."> -->

```math
\mathop{\mathrm{Mode}}\left( X \right) = \begin{cases} 0 & \text{if } p < 1/2 \\ 0, 1 &\text{if } p = 1/2 \\ 1 & \text{if } p > 1/2 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Mode}\left( X \right) = \begin{cases} 0 &amp; \text{if } p &lt; 1/2 \\ 0, 1 &amp;\text{if } p = 1/2 \\ 1 &amp; \text{if } p &gt; 1/2 \end{cases}" data-equation="eq:bernoulli_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e1fbdee688c5409e4cc6b0cd06d90b1cd2abd67c/lib/node_modules/@stdlib/stats/base/dists/bernoulli/mode/docs/img/equation_bernoulli_mode.svg" alt="Mode for a Bernoulli distribution.">
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
var mode = require( '@stdlib/stats/base/dists/bernoulli/mode' );
```

#### mode( p )

Returns the [mode][mode] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var v = mode( 0.1 );
// returns 0

v = mode( 0.5 );
// returns 0

v = mode( 0.8 );
// returns 1
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = mode( NaN );
// returns NaN

v = mode( 1.5 );
// returns NaN

v = mode( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For `p = 0.5`, the mode is either `0` or `1`. This implementation returns `0` for `p = 0.5`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var mode = require( '@stdlib/stats/base/dists/bernoulli/mode' );

var v;
var i;
var p;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = mode( p );
    console.log( 'p: %d, Mode(X;p): %d', p.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/bernoulli/mode.h"
```

#### stdlib_base_dists_bernoulli_mode( p )

Returns the [mode][mode] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```c
double out = stdlib_base_dists_bernoulli_mode( 0.1 );
// returns 0
```

The function accepts the following arguments:

-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_bernoulli_mode( const double p );
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
#include "stdlib/stats/base/dists/bernoulli/mode.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        p = (double)rand() / ( (double)RAND_MAX + 1.0 );
        y = stdlib_base_dists_bernoulli_mode( p );
        printf( "x: %lf, M(X;p): %lf\n", p, y );
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

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
