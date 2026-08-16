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

# isAlmostSameValue

> Test if two arguments are approximately the same value within a specified number of ULPs (units in the last place).

<section class="usage">

## Usage

```javascript
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
```

#### isAlmostSameValue( a, b, maxULP )

Tests if two arguments are approximately the same value within a specified number of ULPs (units in the last place).

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );

var bool = isAlmostSameValue( 1.0, 1.0+EPS, 1 );
// returns true

bool = isAlmostSameValue( '', '', 0 );
// returns true

bool = isAlmostSameValue( {}, {}, 1 );
// returns false
```

In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var bool = isAlmostSameValue( NaN, 1.0, 1 );
// returns false

bool = isAlmostSameValue( NaN, NaN, 1 );
// returns true

var z1 = new Complex128( NaN, 3.0 );
var z2 = new Complex128( 1.0, 3.0 );

bool = isAlmostSameValue( z1, z2, 1 );
// returns false

z1 = new Complex128( NaN, NaN );
z2 = new Complex128( NaN, NaN );

bool = isAlmostSameValue( z1, z2, 1 );
// returns true

bool = isAlmostSameValue( 0.0, -0.0, 0 );
// returns false

z1 = new Complex128( 0.0, 0.0 );
z2 = new Complex128( -0.0, -0.0 );

bool = isAlmostSameValue( z1, z2, 0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function implements the [SameValue Algorithm][ecma-262-same-value-algorithm] as specified in ECMAScript 5.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );

console.log( isAlmostSameValue( true, true, 0 ) );
// => true

console.log( isAlmostSameValue( true, false, 1 ) );
// => false

console.log( isAlmostSameValue( 'beep', 'beep', 1 ) );
// => true

console.log( isAlmostSameValue( 1.0, 1.0+EPS, 1 ) );
// => true

console.log( isAlmostSameValue( null, null, 0 ) );
// => true

console.log( isAlmostSameValue( 0.0, -0.0, 0 ) );
// => false

console.log( isAlmostSameValue( NaN, NaN, 1 ) );
// => true

var z1 = new Complex128( 1.0, 3.0+EPS );
var z2 = new Complex128( 1.0+EPS, 3.0 );
console.log( isAlmostSameValue( z1, z2, 1 ) );
// => true

console.log( isAlmostSameValue( {}, {}, 1 ) );
// => false

console.log( isAlmostSameValue( [], [], 1 ) );
// => false

console.log( isAlmostSameValue( isAlmostSameValue, isAlmostSameValue, 0 ) );
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

[ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
