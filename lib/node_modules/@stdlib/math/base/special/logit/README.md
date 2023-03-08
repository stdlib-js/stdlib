<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# logit

> Compute the [logit][logit] function.

<section class="intro">

The [logit][logit] function is defined as the logarithm of the odds `p / (1-p)`; i.e.,

<!-- <equation class="equation" label="eq:logit_function" align="center" raw="\operatorname{logit}(p)=\log \left({\frac {p}{1-p}}\right)" alt="Logit function."> -->

```math
\operatorname{logit}(p)=\log \left({\frac {p}{1-p}}\right)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{logit}(p)=\log \left({\frac {p}{1-p}}\right)" data-equation="eq:logit_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/logit/docs/img/equation_logit_function.svg" alt="Logit function.">
    <br>
</div> -->

<!-- </equation> -->

The [logit][logit] function is the inverse of the [standard logistic][standard-logistic] function, sometimes also called the sigmoid function. 

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logit = require( '@stdlib/math/base/special/logit' );
```

#### logit( p )

Computes the [logit][logit] function.

```javascript
var v = logit( 0.2 );
// returns ~-1.386

v = logit( 0.9 );
// returns ~2.197
```

If `p < 0` or `p > 1`, the function returns `NaN`.

```javascript
var v = logit( 1.3 );
// returns NaN

v = logit( -0.2 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var logit = require( '@stdlib/math/base/special/logit' );

var p;
var i;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    console.log( 'logit(%d) = %d', p, logit( p ) );
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
#include "stdlib/math/base/special/logit.h"
```

#### stdlib_base_logit( p )

Computes the [logit][logit] function.

```c
double out = stdlib_base_logit( 0.2 );
// returns ~-1.386

out = stdlib_base_logit( 0.9 );
// returns ~2.197
```

The function accepts the following arguments:

-   **p**: `[in] double` input value.

```c
double stdlib_base_logit( const double p ); 
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
#include "stdlib/math/base/special/logit.h"
#include <stdlib.h>
#include <stdio.h>

int main() {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = (double)rand() / (double)RAND_MAX;
        v = stdlib_base_logit( x );
        printf( "logit(%lf) = %lf\n", x, v );
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

[logit]: https://en.wikipedia.org/wiki/Logit

[standard-logistic]: https://en.wikipedia.org/wiki/Logistic_function

</section>

<!-- /.links -->
