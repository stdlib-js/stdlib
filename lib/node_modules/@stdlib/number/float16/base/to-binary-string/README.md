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

# toBinaryString

> Return a string giving the literal bit representation of a [half-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var toBinaryString = require( '@stdlib/number/float16/base/to-binary-string' );
```

#### toBinaryString( x )

Returns a string giving the literal bit representation of a [half-precision floating-point number][ieee754].

```javascript
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );

var str = toBinaryString( toFloat16( 4.0 ) );
// returns '0100010000000000'

str = toBinaryString( toFloat16( 3.1415926 ) );
// returns '0100001001001000'

str = toBinaryString( toFloat16( -1.0e3 ) );
// returns '1110001111010000'
```

The function handles [subnormals][subnormals].

```javascript
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );

var str = toBinaryString( toFloat16( -3.14e-6 ) );
// returns '1000000000110101'

str = toBinaryString( toFloat16( 1.4e-7 ) );
// returns '0000000000000010'
```

The function handles special values.

```javascript
var PINF = require( '@stdlib/constants/float16/pinf' );
var NINF = require( '@stdlib/constants/float16/ninf' );

var str = toBinaryString( 0.0 );
// returns '0000000000000000'

str = toBinaryString( -0.0 );
// returns '1000000000000000'

str = toBinaryString( NaN );
// returns '0111111000000000'

str = toBinaryString( PINF );
// returns '0111110000000000'

str = toBinaryString( NINF );
// returns '1111110000000000'
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
var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var toBinaryString = require( '@stdlib/number/float16/base/to-binary-string' );

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
    exp = round( randu()*10.0 );
    if ( randu() < 0.5 ) {
        exp = -exp;
    }
    x = sign * frac * pow( 2.0, exp );
    x = float64ToFloat16( x );
    b = toBinaryString( x );
    console.log( b );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-2008

[subnormals]: https://en.wikipedia.org/wiki/Denormal_number

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
