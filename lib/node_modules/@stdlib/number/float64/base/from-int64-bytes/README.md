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

# fromInt64Bytes

> Convert a signed 64-bit integer byte array to a [double-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var fromInt64Bytes = require( '@stdlib/number/float64/base/from-int64-bytes' );
```

#### fromInt64Bytes( bytes, stride, offset )

Converts a signed 64-bit integer byte array to a [double-precision floating-point number][ieee754].

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );

var bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
var out = fromInt64Bytes( bytes, 1, 0 );
// returns -1.0
```

The function supports providing a `stride` and an index `offset` for indexing into a provided byte array.

<!-- eslint-disable max-len -->

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );

var bytes = new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255 ] );
var out = fromInt64Bytes( bytes, 2, 1 );
// returns -1.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes host byte order (endianness).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var Uint8Array = require( '@stdlib/array/uint8' );
var fromInt64Bytes = require( '@stdlib/number/float64/base/from-int64-bytes' );

var bytes;
var sgn;
var x;
var b;
var s;
var i;
var j;
var k;

bytes = new Uint8Array( 8 );
if ( IS_LITTLE_ENDIAN ) {
    k = 0;
    s = 1;
} else {
    k = 7;
    s = -1;
}
// Generate random integer-valued doubles on the interval (-2^16, 2^16)...
for ( i = 0; i < 10; i++ ) {
    // Determine the sign:
    sgn = ( bernoulli( 0.5 ) ) ? 0 : 128; // 2^7

    // Set a subset of individual (lower-order) bytes:
    for ( j = 0; j < 2; j++ ) {
        b = discreteUniform( 0, 255 ); // 2^8-1
        bytes[ k+(j*s) ] = b;
    }
    // Set higher-order bytes using two's complement:
    for ( j = 2; j < 8; j++ ) {
        bytes[ k+(j*s) ] = ( sgn ) ? 255 : 0; // 2^8-1
    }
    // Convert the bytes to a double:
    x = fromInt64Bytes( bytes, 1, 0 );
    console.log( bytes + ' => ' + x );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
