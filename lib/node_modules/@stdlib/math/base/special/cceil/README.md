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

# Ceil

> Round a complex number toward positive infinity.

<section class="usage">

## Usage

```javascript
var cceil = require( '@stdlib/math/base/special/cceil' );
```

#### cceil( \[out,] re, im )

Rounds a `complex` number comprised of a **real** component `re` and an **imaginary** component `im` toward positive infinity.

```javascript
var v = cceil( -4.2, 5.5 );
// returns [ -4.0, 6.0 ]

v = cceil( 9.99999, 0.1 );
// returns [ 10.0, 1.0 ]

v = cceil( 0.0, 0.0 );
// returns [ 0.0, 0.0 ]

v = cceil( NaN, NaN );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = cceil( out, -4.2, 5.5 );
// returns <Float32Array>[ -4.0, 6.0 ]

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
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var cceil = require( '@stdlib/math/base/special/cceil' );

var re;
var im;
var z;
var o;
var w;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = cceil( real(z), imag(z) );
    w = new Complex128( o[ 0 ], o[ 1 ] );
    console.log( 'ceil(%s) = %s', z.toString(), w.toString() );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
