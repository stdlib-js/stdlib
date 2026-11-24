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

# string2words

> Parse a string representation of a 64-bit unsigned integer into high and low 32-bit words.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var string2words = require( '@stdlib/number/uint64/base/string2words' );
```

#### string2words( str, radix )

Parses a string representation of a 64-bit unsigned integer into high and low 32-bit words.

```javascript
var w = string2words( '1234', 10 );
// returns [ 0, 1234 ]
```

The function returns an array containing two elements: a higher order word and a lower order word. The lower order word contains the less significant bits, while the higher order word contains the more significant bits.

#### string2words.assign( str, radix, out, stride, offset )

Parses a string representation of a 64-bit unsigned integer into high and low 32-bit words and assigns results to a provided output array.

```javascript
var Uint32Array = require( '@stdlib/array/uint32' );

var out = new Uint32Array( 2 );
// returns <Uint32Array>[ 0, 0 ]

var w = string2words.assign( 'ffffffffffffffff', 16, out, 1, 0 );
// returns <Uint32Array>[ 4294967295, 4294967295 ]

var bool = ( w === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The input string must be a valid representation of an unsigned 64-bit integer in the specified radix, containing no whitespace, sign symbols, or leading zeros.
-   If the provided string represents a value greater than `2^64-1` or the radix is not an integer on the interval `[2, 36]`, the function throws a `RangeError`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var string2words = require( '@stdlib/number/uint64/base/string2words' );

var w = string2words( '1234', 10 );
console.log( w );
// => [ 0, 1234 ]

w = string2words( 'abcd', 16 );
console.log( w );
// => [ 0, 43981 ]

w = string2words( '18446744073709551615', 10 );
console.log( w );
// => [ 4294967295, 4294967295 ]

w = string2words( '3w5e11264sgsf', 36 );
console.log( w );
// => [ 4294967295, 4294967295 ]
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
