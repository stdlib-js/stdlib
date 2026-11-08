<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# xor

> Compute the bitwise XOR of two 64-bit unsigned integers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var xor = require( '@stdlib/number/uint64/base/xor' );
```

#### xor( a, b )

Computes the bitwise XOR of two 64-bit unsigned integers.

```javascript
var Uint64 = require( '@stdlib/number/uint64/ctor' );

var a = new Uint64( 5 );
var b = new Uint64( 15 );

var v = xor( a, b );
// returns <Uint64>[ 10n ]
```

#### xor.assign( ah, al, bh, bl, out, stride, offset )

Computes the bitwise XOR of two 64-bit unsigned integers and assigns results to a provided output array.

```javascript
var Uint32Array = require( '@stdlib/array/uint32' );

var out = new Uint32Array( 2 );
var v = xor.assign( 1, 2, 3, 4, out, 1, 0 );
// returns <Uint32Array>[ 2, 6 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **ah**: high 32-bit word of the first 64-bit unsigned integer.
-   **al**: low 32-bit word of the first 64-bit unsigned integer.
-   **bh**: high 32-bit word of the second 64-bit unsigned integer.
-   **bl**: low 32-bit word of the second 64-bit unsigned integer.
-   **out**: output array.
-   **stride**: stride length for `out`.
-   **offset**: starting index for `out`.

#### xor.strided( a, sa, oa, b, sb, ob, out, so, oo )

Computes the bitwise XOR of two 64-bit unsigned integers stored in integer-valued strided array views and assigns results to a provided strided output array.

```javascript
var Uint32Array = require( '@stdlib/array/uint32' );

var a = new Uint32Array( [ 1, 2 ] );
var b = new Uint32Array( [ 3, 4 ] );
var out = new Uint32Array( 2 );

var v = xor.strided( a, 1, 0, b, 1, 0, out, 1, 0 );
// returns <Uint32Array>[ 2, 6 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **a**: first 64-bit unsigned integer strided array view containing interleaved 32-bit unsigned integer high and low order words.
-   **sa**: stride length for `a`.
-   **oa**: starting index for `a`.
-   **b**: second 64-bit unsigned integer strided array view containing interleaved 32-bit unsigned integer high and low order words.
-   **sb**: stride length for `b`.
-   **ob**: starting index for `b`.
-   **out**: output array.
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var xor = require( '@stdlib/number/uint64/base/xor' );

var a = new Uint64( 1234567890 );
var v = xor( a, a );
console.log( v.toString() );
// => '0'

var b = new Uint64( 0xffffffff );
v = xor( a, b );
console.log( v.toString() );
// => '3060399405'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
