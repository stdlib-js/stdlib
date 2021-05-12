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

# To Binary String

> Return a string giving the literal bit representation of a [single-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var toBinaryStringf = require( '@stdlib/number/float32/base/to-binary-string' );
```

#### toBinaryStringf( x )

Returns a `string` giving the literal bit representation of a [single-precision floating-point number][ieee754].

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );

var str = toBinaryStringf( toFloat32( 4.0 ) );
// returns '01000000100000000000000000000000'

str = toBinaryStringf( toFloat32( 3.141592653589793 ) );
// returns '01000000010010010000111111011011'

str = toBinaryStringf( toFloat32( -1.0e38 ) );
// returns '11111110100101100111011010011001'
```

The function handles [subnormals][subnormals].

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );

str = toBinaryStringf( toFloat32( -3.14e-39 ) );
// returns '10000000001000100011000100001011'

str = toBinaryStringf( toFloat32( 1.4e-45 ) );
// returns '00000000000000000000000000000001'
```

The function handles special values.

```javascript
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );

str = toBinaryStringf( 0.0 );
// returns '00000000000000000000000000000000'

str = toBinaryStringf( -0.0 );
// returns '10000000000000000000000000000000'

str = toBinaryStringf( NaN );
// returns '01111111110000000000000000000000'

str = toBinaryStringf( PINF );
// returns '01111111100000000000000000000000'

str = toBinaryStringf( NINF );
// returns '11111111100000000000000000000000'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var toBinaryStringf = require( '@stdlib/number/float32/base/to-binary-string' );

var frac;
var sign;
var exp;
var b;
var x;
var i;

// Convert random numbers to literal bit representations...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    frac = randu() * 10.0;
    exp = round( randu()*100.0 );
    if ( randu() < 0.5 ) {
        exp = -exp;
    }
    x = sign * frac * pow( 2.0, exp );
    x = float64ToFloat32( x );
    b = toBinaryStringf( x );
    console.log( b );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-2008

[subnormals]: https://en.wikipedia.org/wiki/Denormal_number

</section>

<!-- /.links -->
