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

# isComplexFloatingPointDataTypeChar

> Test if an input value is a supported ndarray complex-valued floating-point data type single letter character abbreviation.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isComplexFloatingPointDataTypeChar = require( '@stdlib/ndarray/base/assert/is-complex-floating-point-data-type-char' );
```

#### isComplexFloatingPointDataTypeChar( value )

Tests if an input value is a supported ndarray complex-valued floating-point data type single letter character abbreviation.

<!-- eslint-disable id-length -->

```javascript
var bool = isComplexFloatingPointDataTypeChar( 'z' );
// returns true

bool = isComplexFloatingPointDataTypeChar( 'u' );
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

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var isComplexFloatingPointDataTypeChar = require( '@stdlib/ndarray/base/assert/is-complex-floating-point-data-type-char' );

var bool = isComplexFloatingPointDataTypeChar( 'r' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'z' );
// returns true

bool = isComplexFloatingPointDataTypeChar( 'c' );
// returns true

bool = isComplexFloatingPointDataTypeChar( 'f' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'd' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'o' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'k' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'i' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 's' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 't' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'u' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'b' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'a' );
// returns false

bool = isComplexFloatingPointDataTypeChar( '' );
// returns false

bool = isComplexFloatingPointDataTypeChar( 'foo' );
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
