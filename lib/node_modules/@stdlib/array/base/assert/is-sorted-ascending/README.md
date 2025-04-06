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

# isSortedAscending

> Test if an array is sorted in ascending order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isSortedAscending = require( '@stdlib/array/base/assert/is-sorted-ascending' );
```

#### isSortedAscending( x )

Tests if an array is sorted in ascending order.

```javascript
var out = isSortedAscending( [ 1, 2, 3 ] );
// returns true

out = isSortedAscending( [ 3, 2, 1 ] );
// returns false
```

If provided an empty array, the function returns `false`.

```javascript
var out = isSortedAscending( [] );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var AccessorArray = require( '@stdlib/array/base/accessor' );
var isSortedAscending = require( '@stdlib/array/base/assert/is-sorted-ascending' );

var x = new AccessorArray( [ 1, 2, 3, 4 ] );
var bool = isSortedAscending( x );
// returns true

x = new AccessorArray( [ 1, 1, 1, 1 ] );
bool = isSortedAscending( x );
// returns true

x = new AccessorArray( [ 1 ] );
bool = isSortedAscending( x );
// returns true

x = new AccessorArray( [ 1, 3, 2, 4 ] );
bool = isSortedAscending( x );
// returns false

x = new AccessorArray( [ 4, 3, 2, 1 ] );
bool = isSortedAscending( x );
// returns false
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
