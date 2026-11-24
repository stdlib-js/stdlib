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

# hasAlmostSameValues

> Test if two arrays have respective elements which are approximately the same value within a specified number of ULPs (units in the last place).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hasAlmostSameValues = require( '@stdlib/array/base/assert/has-almost-same-values' );
```

#### hasAlmostSameValues( x, y, maxULP )

Tests if two arrays have respective elements which are approximately the same value within a specified number of ULPs (units in the last place).

```javascript
var x = [ 0, 0, 1, 0 ];
var y = [ 0, 0, 1, 0 ];

var bool = hasAlmostSameValues( x, y, 1 );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.
-   If provided arrays of unequal length, the function returns `false`.
-   The function does **not** skip `undefined` elements and is thus not optimized for sparse arrays.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var Complex128Array = require( '@stdlib/array/complex128' );
var hasAlmostSameValues = require( '@stdlib/array/base/assert/has-almost-same-values' );

var buf = uniform( 10, 0, 10 );
// returns <Float64Array>

var x = new Complex128Array( buf );
// returns <Complex128Array>

var y = new Complex128Array( buf );
// returns <Complex128Array>

var out = hasAlmostSameValues( x, y, 1 );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
