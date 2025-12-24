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

# toWord

> Return an unsigned 16-bit integer corresponding to the [IEEE 754][ieee754] binary representation of a [half-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var toWord = require( '@stdlib/number/float16/base/to-word' );
```

#### toWord( x )

Returns an unsigned 16-bit integer corresponding to the [IEEE 754][ieee754] binary representation of a [half-precision floating-point number][ieee754].

```javascript
var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );

var f16 = float64ToFloat16( 1.05 );
// returns 1.0498046875

var w = toWord( f16 ); // => 0 01111 0000110011
// returns 15411
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var uniform = require( '@stdlib/random/array/uniform' );
var map = require( '@stdlib/array/base/map' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var pickArguments = require( '@stdlib/utils/pick-arguments' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var toWord = require( '@stdlib/number/float16/base/to-word' );

// Generate an array of random double-precision floating-point numbers:
var f64 = uniform( 1000, -50.0, 50.0 );

// Convert each value to a half-precision floating-point number:
var f16 = map( f64, naryFunction( float64ToFloat16, 1 ) );

// Convert half-precision floating-point numbers to integers representing the binary literal:
logEachMap( 'float64: %f => float16: %f => word: %d', f64, f16, pickArguments( toWord, [ 1 ] ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
