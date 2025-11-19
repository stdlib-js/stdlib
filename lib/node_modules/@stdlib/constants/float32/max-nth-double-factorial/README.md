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

# FLOAT32_MAX_NTH_DOUBLE_FACTORIAL

> Maximum nth [double factorial][double-factorial] when stored in [single-precision floating-point][ieee754] format.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var FLOAT32_MAX_NTH_DOUBLE_FACTORIAL = require( '@stdlib/constants/float32/max-nth-double-factorial' );
```

#### FLOAT32_MAX_NTH_DOUBLE_FACTORIAL

The maximum nth [double factorial][double-factorial] when stored in [single-precision floating-point][ieee754] format.

<!-- eslint-disable id-length -->

```javascript
var bool = ( FLOAT32_MAX_NTH_DOUBLE_FACTORIAL === 56 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT32_MAX_NTH_DOUBLE_FACTORIAL = require( '@stdlib/constants/float32/max-nth-double-factorial' );

function factorial2( n ) {
    var a;
    var i;

    a = 1;
    for ( i = n; i >= 2; i -= 2 ) {
        a *= i;
    }
    return a;
}

var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = factorial2( i );
    if ( i > FLOAT32_MAX_NTH_DOUBLE_FACTORIAL ) {
        console.log( 'Overflow: %d', v );
    } else {
        console.log( 'Valid:    %d', v );
    }
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
#include "stdlib/constants/float32/max_nth_double_factorial.h"
```

#### STDLIB_CONSTANT_FLOAT32_MAX_NTH_DOUBLE_FACTORIAL

Macro for the maximum nth [double factorial][double-factorial] when stored in [single-precision floating-point][ieee754] format.

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

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

[double-factorial]: https://en.wikipedia.org/wiki/Double_factorial

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
