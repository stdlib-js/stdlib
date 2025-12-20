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

# fromWord

> Create a [half-precision floating-point number][ieee754] from an unsigned integer corresponding to an [IEEE 754][ieee754] binary representation.

<section class="usage">

## Usage

```javascript
var fromWord = require( '@stdlib/number/float16/base/from-word' );
```

#### fromWord( word )

Creates a [half-precision floating-point number][ieee754] from an unsigned integer corresponding to an [IEEE 754][ieee754] binary representation.

```javascript
var word = 15411; // => 0 01111 0000110011

var f16 = fromWord( word ); // when printed, implicitly promoted to float64
// returns 1.0498046875
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var pickArguments = require( '@stdlib/utils/pick-arguments' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var MAX_UINT16 = require( '@stdlib/constants/uint16/max' );
var fromWord = require( '@stdlib/number/float16/base/from-word' );

// Generate an array of random numbers:
var word = discreteUniform( 1000, 0.0, MAX_UINT16 );

// Create half-precision floating-point numbers from unsigned integers...
logEachMap( 'word: %d => float16: %f', word, pickArguments( fromWord, [ 0 ] ) );
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
