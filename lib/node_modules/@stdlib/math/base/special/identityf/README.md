<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Identity Function

> Evaluate the [identity function][identity-function] of a single-precision floating-point number.

<section class="intro">

The [identity-function][identity-function] is defined as

<!-- <equation class="equation" label="eq:identity_function" align="center" raw="f(x) = x" alt="Identity function"> -->

<div class="equation" align="center" data-raw-text="f(x) = x" data-equation="eq:identity_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ad4524117c3cf89854aeb12d7210102220874d31/lib/node_modules/@stdlib/math/base/special/identityf/docs/img/equation_identity_function.svg" alt="Identity function">
    <br>
</div>

<!-- </equation> -->

for all `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var identityf = require( '@stdlib/math/base/special/identityf' );
```

#### identityf( x )

Evaluates the [identity function][identity-function] for a single-precision floating-point number.

```javascript
var v = identityf( -1.0 );
// returns -1.0

v = identityf( 2.0 );
// returns 2.0

v = identityf( 0.0 );
// returns 0.0

v = identityf( -0.0 );
// returns -0.0

v = identityf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var identityf = require( '@stdlib/math/base/special/identityf' );

var rand;
var i;

for ( i = 0; i < 100; i++ ) {
    rand = round( randu() * 100.0 ) - 50.0;
    console.log( 'identity(%d) = %d', rand, identityf( rand ) );
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
#include "stdlib/math/base/special/identityf.h"
```

#### stdlib_base_identityf( x )

Evaluates the identity function for a single-precision floating-point number.

```c
float y = stdlib_base_identityf( 2.0f );
// returns 2.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_identityf( const float x );
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
#include "stdlib/math/base/special/identityf.h"
#include <stdio.h>

int main() {
    float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_identityf( x[ i ] );
        printf( "f(%f) = %f\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[identity-function]: https://en.wikipedia.org/wiki/Identity_function

</section>

<!-- /.links -->
