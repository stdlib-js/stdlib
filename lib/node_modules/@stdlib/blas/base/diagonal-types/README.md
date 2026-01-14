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

# Diagonal Element Types

> BLAS diagonal element types.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var diagonalTypes = require( '@stdlib/blas/base/diagonal-types' );
```

#### diagonalTypes()

Returns a list of BLAS diagonal element types.

```javascript
var out = diagonalTypes();
// e.g., returns [ 'non-unit', 'unit' ]
```

The output array contains the following types:

-   `non-unit`: elements along a diagonal are **not** all equal to one.
-   `unit`: elements along a diagonal are all equal to one.

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
var diagonalTypes = require( '@stdlib/blas/base/diagonal-types' );

var isDiagonalType = contains( diagonalTypes() );

var bool = isDiagonalType( 'non-unit' );
// returns true

bool = isDiagonalType( 'unit' );
// returns true

bool = isDiagonalType( 'beep' );
// returns false
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/base/diagonal_types.h"
```

#### STDLIB_BLAS_DIAGONAL_TYPE

An enumeration of BLAS diagonal element types with the following fields:

-   **STDLIB_BLAS_NON_UNIT_DIAGONAL**: elements along a diagonal are **not** all equal to one.
-   **STDLIB_BLAS_UNIT_DIAGONAL**: elements along a diagonal are all equal to one.

```c
#include "stdlib/blas/base/diagonal_types.h"

const enum STDLIB_BLAS_DIAGONAL_TYPE v = STDLIB_BLAS_UNIT_DIAGONAL;
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   Enumeration constants should be considered opaque values, and one should **not** rely on specific integer values.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

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
