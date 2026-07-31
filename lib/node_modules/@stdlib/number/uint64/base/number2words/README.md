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

# number2words

> Split a number into the high and low 32-bit words of a 64-bit unsigned integer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var number2words = require( '@stdlib/number/uint64/base/number2words' );
```

#### number2words( value )

Splits a number into the high and low 32-bit words of a 64-bit unsigned integer.

```javascript
var w = number2words( 1234 );
// returns [ 0, 1234 ]
```

The function returns an array containing two elements: a higher order word and a lower order word. The lower order word contains the less significant bits, while the higher order word contains the more significant bits.

#### number2words.assign( value, out, stride, offset )

Splits a number into the high and low 32-bit words of a 64-bit unsigned integer and assigns results to a provided output array.

```javascript
var Uint32Array = require( '@stdlib/array/uint32' );

var out = new Uint32Array( 2 );
// returns <Uint32Array>[ 0, 0 ]

var w = number2words.assign( 9007199254740991, out, 1, 0 );
// returns <Uint32Array>[ 2097151, 4294967295 ]

var bool = ( w === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For accurate results, the input value should be an integer in the range \[`0`, `2^53-1`\].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var number2words = require( '@stdlib/number/uint64/base/number2words' );

var w = number2words( 1234 );
console.log( w );
// => [ 0, 1234 ]

w = number2words( 0x100000000 );
console.log( w );
// => [ 1, 0 ]

w = number2words( 9007199254740991 );
console.log( w );
// => [ 2097151, 4294967295 ]
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
