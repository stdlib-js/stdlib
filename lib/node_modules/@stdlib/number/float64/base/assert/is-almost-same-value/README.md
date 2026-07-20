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

> Test if two double-precision floating-point numbers are approximately the same value within a specified number of ULPs (units in the last place).

<section class="usage">

## Usage

```javascript
var isAlmostSameValue = require( '@stdlib/number/float64/base/assert/is-almost-same-value' );
```

#### isAlmostSameValue( a, b, maxULP )

Tests if two double-precision floating-point numbers are approximately the same value within a specified number of ULPs (units in the last place).

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );

var bool = isAlmostSameValue( 1.0, 1.0+EPS, 1 );
// returns true

bool = isAlmostSameValue( 1.0, 1.0+EPS, 0 );
// returns false
```

In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.

```javascript
var bool = isAlmostSameValue( NaN, 1.0, 1 );
// returns false

bool = isAlmostSameValue( 1.0, NaN, 1 );
// returns false

bool = isAlmostSameValue( NaN, NaN, 1 );
// returns true

bool = isAlmostSameValue( 0.0, -0.0, 0 );
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
var isAlmostSameValue = require( '@stdlib/number/float64/base/assert/is-almost-same-value' );

var bool = isAlmostSameValue( 1.0, 1.0+EPS, 1 );
console.log( bool );
// => true

bool = isAlmostSameValue( 1.0+EPS, 1.0, 1 );
console.log( bool );
// => true

bool = isAlmostSameValue( 1.0, 1.0+EPS+EPS, 1 );
console.log( bool );
// => false

bool = isAlmostSameValue( 1.0, 1.0+EPS, 0 );
console.log( bool );
// => false

bool = isAlmostSameValue( -0.0, 0.0, 0 );
console.log( bool );
// => false

bool = isAlmostSameValue( 1.0, NaN, 1 );
console.log( bool );
// => false

bool = isAlmostSameValue( NaN, NaN, 1 );
console.log( bool );
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

</section>

<!-- /.links -->
