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

# toUint32

> Convert a [double-precision floating-point number][ieee754] to an unsigned 32-bit integer.

<section class="usage">

## Usage

```javascript
var float64ToUint32 = require( '@stdlib/number/float64/base/to-uint32' );
```

#### float64ToUint32( x )

Converts a [double-precision floating-point number][ieee754] to an unsigned 32-bit integer.

```javascript
var y = float64ToUint32( 4294967297.0 );
// returns 1

y = float64ToUint32( 3.14 );
// returns 3

y = float64ToUint32( -3.14 );
// returns 4294967293

y = float64ToUint32( NaN );
// returns 0

y = float64ToUint32( Infinity );
// returns 0

y = float64ToUint32( -Infinity );
// returns 0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var MAX_INT = require( '@stdlib/constants/uint32/max' );
var float64ToUint32 = require( '@stdlib/number/float64/base/to-uint32' );

var uint32;
var half;
var f64;
var i;

half = ( MAX_INT-1 ) / 2;
for ( i = 0; i < 500; i++ ) {
    // Generate a random double-precision floating-point integer:
    f64 = round( randu()*MAX_INT ) - half;

    // Convert the double-precision floating-point value to an unsigned 32-bit integer:
    uint32 = float64ToUint32( f64 );

    console.log( 'float64: %d => uint32: %d', f64, uint32 );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
