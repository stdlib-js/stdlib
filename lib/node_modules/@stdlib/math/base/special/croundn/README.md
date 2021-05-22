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

# roundn

> Round a complex number to the nearest multiple of `10^n`.

<section class="usage">

## Usage

```javascript
var croundn = require( '@stdlib/math/base/special/croundn' );
```

#### croundn( \[out,] re, im, n )

Rounds a `complex` number comprised of a **real** component `re` and an **imaginary** component `im` to the nearest multiple of `10^n`.

```javascript
// Round components to 2 decimal places:
var v = croundn( -3.141592653589793, 3.141592653589793, -2 );
// returns [ -3.14, 3.14 ]

// If n = 0, `croundn` behaves like `cround`:
v = croundn( -3.141592653589793, 3.141592653589793, 0 );
// returns [ -3.0, 3.0 ]

// Round components to the nearest thousand:
v = croundn( -12368.0, 12368.0, 3 );
// returns [ -12000.0, 12000.0 ]

v = croundn( NaN, NaN, 0 );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = croundn( out, -4.6, 5.5, 0 );
// returns <Float32Array>[ -5.0, 6.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round components to 0.3:
    var v = croundn( x, x, -16 );
    // returns [ 0.3000000000000001, 0.3000000000000001 ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64' );
var randu = require( '@stdlib/random/base/randu' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var croundn = require( '@stdlib/math/base/special/croundn' );

var re;
var im;
var z;
var o;
var w;
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );

    n = ceil( randu()*5.0 );
    o = croundn( real(z), imag(z), -n );
    w = new Complex128( o[ 0 ], o[ 1 ] );

    console.log( 'roundn(%s,%s) = %s', z.toString(), n.toString(), w.toString() );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
