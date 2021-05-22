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

# add

> Add two complex numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cadd = require( '@stdlib/math/base/ops/cadd' );
```

#### cadd( \[out,] re1, im1, re2, im2 )

Adds two `complex` numbers where each `complex` number is comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var v = cadd( 5.0, 3.0, -2.0, 1.0 );
// returns [ 3.0, 4.0 ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = cadd( out, 5.0, 3.0, -2.0, 1.0 );
// returns <Float32Array>[ 3.0, 4.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var cadd = require( '@stdlib/math/base/ops/cadd' );

var re;
var im;
var z1;
var z2;
var z3;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z1 = new Complex128( re, im );

    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z2 = new Complex128( re, im );

    o = cadd( real(z1), imag(z1), real(z2), imag(z2) );
    z3 = new Complex128( o[ 0 ], o[ 1 ] );

    console.log( '(%s) + (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
