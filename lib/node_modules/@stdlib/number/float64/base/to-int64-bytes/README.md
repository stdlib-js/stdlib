<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# toInt64Bytes

> Convert an integer-valued [double-precision floating-point number][ieee754] to a signed 64-bit integer byte array according to host byte order (endianness).

<section class="usage">

## Usage

```javascript
var float64ToInt64Bytes = require( '@stdlib/number/float64/base/to-int64-bytes' );
```

#### float64ToInt64Bytes( x )

Converts an integer-valued [double-precision floating-point number][ieee754] to a signed 64-bit integer byte array according to host byte order (endianness).

```javascript
var out = float64ToInt64Bytes( 4294967297.0 );
// returns <Uint8Array>
```

#### float64ToInt64Bytes.assign( x, out, stride, offset )

Converts an integer-valued [double-precision floating-point number][ieee754] to a signed 64-bit integer byte array according to host byte order (endianness) and assigns results to a provided output array.

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );

var out = new Uint8Array( 16 );
var y = float64ToInt64Bytes.assign( 4294967297.0, out, 2, 1 );
// returns <Uint8Array>

var bool = ( y === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The functions assume that the input value is less than the maximum safe [double-precision floating-point][ieee754] integer plus one (i.e., `2**53`).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toBinaryStringUint8 = require( '@stdlib/number/uint8/base/to-binary-string' );
var float64ToInt64Bytes = require( '@stdlib/number/float64/base/to-int64-bytes' );

var bytes;
var str;
var sgn;
var x;
var i;
var j;

str = [ '', '', '', '', '', '', '', '', '' ];
x = 1;

for ( i = 0; i < 54; i++ ) {
    sgn = ( i&1 ) ? -1 : 1;
    bytes = float64ToInt64Bytes( x*sgn );
    for ( j = 0; j < bytes.length; j++ ) {
        str[ j ] = toBinaryStringUint8( bytes[ j ] );
    }
    console.log( '%s2**%d => %s', ( sgn < 0 ) ? '-' : '+', i, str.join( ' ' ) );
    x *= 2;
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
