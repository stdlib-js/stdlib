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

# Matrix Orientations

> BLAS matrix orientations.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var orientations = require( '@stdlib/blas/base/matrix-orientations' );
```

#### orientations()

Returns a list of matrix orientations.

```javascript
var out = orientations();
// e.g., returns [ 'rows', 'columns' ]
```

The output array contains the following types:

-   `rows`: data is stored along matrix rows.
-   `columns`: data is stored along matrix columns.

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
var orientations = require( '@stdlib/blas/base/matrix-orientations' );

var isMatrixOrientation = contains( orientations() );

var bool = isMatrixOrientation( 'rows' );
// returns true

bool = isMatrixOrientation( 'columns' );
// returns true

bool = isMatrixOrientation( 'beep' );
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
#include "stdlib/blas/base/matrix_orientations.h"
```

#### STDLIB_BLAS_MATRIX_ORIENTATION

An enumeration of matrix orientations with the following fields:

-   **STDLIB_BLAS_ROW_MATRIX**: data is stored along matrix rows.
-   **STDLIB_BLAS_COLUMN_MATRIX**: data is stored along matrix columns.

```c
#include "stdlib/blas/base/matrix_orientations.h"

const enum STDLIB_BLAS_MATRIX_ORIENTATION v = STDLIB_BLAS_ROW_MATRIX;
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
