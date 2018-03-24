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

# Binary String

> Return a string giving the literal bit representation of a [double-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var toBinaryString = require( '@stdlib/number/float64/base/to-binary-string' );
```

#### toBinaryString( x )

Returns a `string` giving the literal bit representation of a [double-precision floating-point number][ieee754].

```javascript
var str = toBinaryString( 4.0 );
// returns '0100000000010000000000000000000000000000000000000000000000000000'

str = toBinaryString( 3.141592653589793 );
// returns '0100000000001001001000011111101101010100010001000010110100011000'

str = toBinaryString( -1.0e308 );
// returns '1111111111100001110011001111001110000101111010111100100010100000'
```

The function handles [subnormals][subnormals].

```javascript
str = toBinaryString( -3.14e-320 );
// returns '1000000000000000000000000000000000000000000000000001100011010011'

str = toBinaryString( 5.0e-324 );
// returns '0000000000000000000000000000000000000000000000000000000000000001'
```

The function handles special values.

```javascript
str = toBinaryString( 0.0 );
// returns '0000000000000000000000000000000000000000000000000000000000000000'

str = toBinaryString( -0.0 );
// returns '1000000000000000000000000000000000000000000000000000000000000000'

str = toBinaryString( NaN );
// returns '0111111111111000000000000000000000000000000000000000000000000000'

str = toBinaryString( Infinity );
// returns '0111111111110000000000000000000000000000000000000000000000000000'

str = toBinaryString( -Infinity );
// returns '1111111111110000000000000000000000000000000000000000000000000000'
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
var toBinaryString = require( '@stdlib/number/float64/base/to-binary-string' );

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
    b = toBinaryString( x );
    console.log( b );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[subnormals]: https://en.wikipedia.org/wiki/Denormal_number

</section>

<!-- /.links -->
