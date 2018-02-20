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

# floorn

> Round a numeric value to the nearest multiple of 10^n toward negative infinity.

<section class="usage">

## Usage

```javascript
var floorn = require( '@stdlib/math/base/special/floorn' );
```

#### floorn( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n` toward negative infinity.

```javascript
// Round a value to 4 decimal places:
var v = floorn( 3.141592653589793, -4 );
// returns 3.1415

// If n = 0, `floorn` behaves like `floor`:
v = floorn( 3.141592653589793, 0 );
// returns 3.0

// Round a value to the nearest thousand:
v = floorn( 12368.0, 3 );
// returns 12000.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var x = -0.2 - 0.1;
    // returns -0.30000000000000004

    // Should round to -0.3:
    var v = floorn( x, -16 );
    // returns -0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floorn = require( '@stdlib/math/base/special/floorn' );

var x;
var n;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = floorn( randu()*5.0, 0 );
    v = floorn( x, -n );
    console.log( 'x: %d. Number of decimals: %d. Rounded: %d.', x, n, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
