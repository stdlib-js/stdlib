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

# Data Type Strings

> List of ndarray data type strings.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtypeStrings = require( '@stdlib/ndarray/base/dtype-strings' );
```

#### dtypeStrings( \[kind] )

Returns a list of ndarray data type strings.

```javascript
var out = dtypeStrings();
// e.g., returns [ 'binary', 'complex32', 'complex64', 'complex128', ... ]
```

When not provided a data type "kind", the function returns an array containing the following data type strings:

-   `binary`: binary.
-   `bool`: boolean values.
-   `complex32`: half-precision complex floating-point numbers.
-   `complex64`: single-precision complex floating-point numbers.
-   `complex128`: double-precision complex floating-point numbers.
-   `float16`: half-precision floating-point numbers.
-   `float32`: single-precision floating-point numbers.
-   `float64`: double-precision floating-point numbers.
-   `generic`: values of any type.
-   `int16`: signed 16-bit integers.
-   `int32`: signed 32-bit integers.
-   `int8`: signed 8-bit integers.
-   `uint16`: unsigned 16-bit integers.
-   `uint32`: unsigned 32-bit integers.
-   `uint8`: unsigned 8-bit integers.
-   `uint8c`: unsigned clamped 8-bit integers.

To return the subset of data type strings belonging to a specified data type kind, provide a `kind` argument.

```javascript
var out = dtypeStrings( 'floating_point' );
// returns [...]
```

The function supports the following data type kinds:

-   `floating_point`: floating-point data types.
-   `real_floating_point`: real-valued floating-point data types.
-   `complex_floating_point`: complex-valued floating-point data types.
-   `boolean`: boolean data types.
-   `integer`: integer data types.
-   `signed_integer`: signed integer data types.
-   `unsigned_integer`: unsigned integer data types.
-   `real`: real-valued data types.
-   `numeric`: numeric data types.
-   `typed`: typed data types.
-   `integer_index`: integer index data types.
-   `boolean_index`: boolean index data types.
-   `mask_index`: mask index data types.
-   `typed_index`: typed index data types.
-   `index`: index data types.
-   `all`: all data types.

Additionally, the function supports extending the "kinds" listed above by appending an `_and_generic` suffix to the kind name (e.g., `real_and_generic`).

```javascript
var out = dtypeStrings( 'floating_point_and_generic' );
// returns [...]
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
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var dtypeStrings = require( '@stdlib/ndarray/base/dtype-strings' );

var isdtype = contains( dtypeStrings() );

var bool = isdtype( 'float64' );
// returns true

bool = isdtype( 'int16' );
// returns true

bool = isdtype( 'uint8' );
// returns true

bool = isdtype( 'beep' );
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
