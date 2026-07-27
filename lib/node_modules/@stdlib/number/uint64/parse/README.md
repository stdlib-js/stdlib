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

# parseUint64

> Parse a string representation of a 64-bit unsigned integer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var parseUint64 = require( '@stdlib/number/uint64/parse' );
```

#### parseUint64( str\[, radix\] )

Parses a string representation of a 64-bit unsigned integer.

```javascript
var a = parseUint64( '1234' );
// returns <Uint64>[ 1234n ]

a = parseUint64( '0xffffffffffffffff' );
// returns <Uint64>[ 18446744073709551615n ]

a = parseUint64( '123abcxyz', 36 );
// returns <Uint64>[ 2984992324091n ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The input string must be a valid representation of an 64-bit unsigned integer.
-   If the provided string is malformed (e.g., contains invalid characters or is incomplete), the function throws a `SyntaxError`.
-   If the provided string represents a value greater than `2^64-1` or the radix is not an integer on the interval `[2, 36]`, the function throws a `RangeError`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var parseUint64 = require( '@stdlib/number/uint64/parse' );

var a = parseUint64( '9876543210' );
console.log( 'value: %s', a );
// => 'value: 9876543210'

a = parseUint64( '0xdeadbeef0badf00d' );
console.log( 'value: %s', a );
// => 'value: 16045690981293355021'

a = parseUint64( 'ilovestdlib', 36 );
console.log( 'value: %s', a );
// => 'value: 68013779155385123'

console.log( a instanceof Uint64 );
// => true
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
