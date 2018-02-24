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

# floorb

> Round a numeric value to the nearest multiple of b^n toward negative infinity.

<section class="usage">

## Usage

```javascript
var floorb = require( '@stdlib/math/base/special/floorb' );
```

#### floorb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` toward negative infinity.

```javascript
// Round a value to 4 decimal places:
var v = floorb( 3.141592653589793, -4, 10 );
// returns 3.1415

// If n = 0 or b = 1, `floorb` behaves like `floor`:
v = floorb( 3.141592653589793, 0, 2 );
// returns 3.0

// Round a value to the nearest multiple of two toward negative infinity:
v = floorb( 5.0, 1, 2 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to rounding error in [floating-point numbers][ieee754], rounding may **not** be exact. For example,

    ```javascript
    var x = -0.2 - 0.1;
    // returns -0.30000000000000004

    // Should round to -0.3...
    var v = floorb( x, -16, 10 );
    // returns -0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var floorb = require( '@stdlib/math/base/special/floorb' );

var x;
var n;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = round( (randu()*10.0) - 5.0 );
    b = round( randu()*10.0 );
    v = floorb( x, n, b );
    console.log( 'x: %d. %d^%d: %d. Rounded: %d.', x, b, n, pow( b, n ), v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
