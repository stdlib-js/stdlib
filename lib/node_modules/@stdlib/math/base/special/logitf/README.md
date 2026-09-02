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

# logitf

> Compute the [logit][logit] function for a single-precision floating-point number.

<section class="intro">

The [logit][logit] function is defined as the logarithm of the odds `p / (1-p)`; i.e.,

<!-- <equation class="equation" label="eq:logitf_function" align="center" raw="\operatorname{logitf}(p)=\log \left({\frac {p}{1-p}}\right)" alt="Logitf function."> -->

```math
\mathop{\mathrm{logitf}}(p)=\log \left({\frac {p}{1-p}}\right)
```

<!-- </equation> -->

The [logit][logit] function is the inverse of the [standard logistic][standard-logistic] function, sometimes also called the sigmoid function.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logitf = require( '@stdlib/math/base/special/logitf' );
```

#### logitf( p )

Computes the [logit][logit] function for a single-precision floating-point number.

```javascript
var v = logitf( 0.2 );
// returns ~-1.386

v = logitf( 0.9 );
// returns ~2.197
```

If `p < 0` or `p > 1`, the function returns `NaN`.

```javascript
var v = logitf( 1.3 );
// returns NaN

v = logitf( -0.2 );
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
var logitf = require( '@stdlib/math/base/special/logitf' );

var opts = {
    'dtype': 'float32'
};
var p = uniform( 100, 0.0, 1.0, opts );

logEachMap( 'logitf(%0.4f) = %0.4f', p, logitf );
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
#include "stdlib/math/base/special/logitf.h"
```

#### stdlib_base_logitf( p )

Computes the [logit][logit] function for a single-precision floating-point number.

```c
float out = stdlib_base_logitf( 0.2f );
// returns ~-1.386f

out = stdlib_base_logitf( 0.9f );
// returns ~2.197f
```

The function accepts the following arguments:

-   **p**: `[in] float` input value.

```c
float stdlib_base_logitf( const float p );
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
#include "stdlib/math/base/special/logitf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float x;
    float v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = (float)rand() / (float)RAND_MAX;
        v = stdlib_base_logitf( x );
        printf( "logitf(%f) = %f\n", x, v );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
