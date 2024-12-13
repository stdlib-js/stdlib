<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# FLOAT64_MAX_SAFE_NTH_TRIBONACCI

> Maximum safe nth [Tribonacci number][tribonacci-number] when stored in [double-precision floating-point][ieee754] format.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var FLOAT64_MAX_SAFE_NTH_TRIBONACCI = require( '@stdlib/constants/float64/max-safe-nth-tribonacci' );
```

#### FLOAT64_MAX_SAFE_NTH_TRIBONACCI

Maximum [safe][safe-integers] nth [Tribonacci number][tribonacci-number] when stored in [double-precision floating-point][ieee754] format.

<!-- eslint-disable id-length -->

```javascript
var bool = ( FLOAT64_MAX_SAFE_NTH_TRIBONACCI === 63 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT64_MAX_SAFE_NTH_TRIBONACCI = require( '@stdlib/constants/float64/max-safe-nth-tribonacci' );

function tribonacci( n ) {
    var a;
    var b;
    var c;
    var d;
    var i;

    a = 0;
    b = 0;
    c = 1;
    if ( n === 0 ) {
        return a;
    }
    if ( n === 1 ) {
        return b;
    }
    if ( n === 2 ) {
        return c;
    }
    for ( i = 3; i <= n; i++ ) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return c;
}

var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = tribonacci( i );
    if ( i > FLOAT64_MAX_SAFE_NTH_TRIBONACCI ) {
        console.log( 'Unsafe: %d', v );
    } else {
        console.log( 'Safe:   %d', v );
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
#include "stdlib/constants/float64/max_safe_nth_tribonacci.h"
```

#### STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_TRIBONACCI

Maximum [safe][safe-integers] nth [Tribonacci number][tribonacci-number] when stored in [double-precision floating-point][ieee754] format.

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

[safe-integers]: http://www.2ality.com/2013/10/safe-integers.html

[tribonacci-number]: https://en.wikipedia.org/wiki/Tribonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
