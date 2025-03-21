<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# hasEqualShape

> Test if two ndarrays have the same shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hasEqualShape = require( '@stdlib/ndarray/base/assert/has-equal-shape' );
```

#### hasEqualShape( x, y )

Tests if two ndarrays have the same shape.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ 1, 2, 3, 4 ] );
var y = array( [ 5, 6, 7, 8 ] );

var bool = hasEqualShape( x, y );
// returns true
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
var array = require( '@stdlib/ndarray/array' );
var hasEqualShape = require( '@stdlib/ndarray/base/assert/has-equal-shape' );

var x1 = array( [ [ 1, 2 ], [ 3, 4 ] ] );
var y1 = array( [ [ 5, 6 ], [ 7, 8 ] ] );

var bool = hasEqualShape( x1, y1 );
// returns true

var x2 = array( [ [ 1, 2 ], [ 3, 4 ] ] );
var y2 = array( [ [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ] );

bool = hasEqualShape( x2, y2 );
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
