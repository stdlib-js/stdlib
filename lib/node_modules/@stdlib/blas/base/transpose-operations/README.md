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

# Transpose Operations

> BLAS transpose operations.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var transposeOperations = require( '@stdlib/blas/base/transpose-operations' );
```

#### transposeOperations()

Returns a list of BLAS transpose operations.

```javascript
var out = transposeOperations();
// e.g., returns [ 'none', 'transpose', 'conjugate-transpose' ]
```

The output array contains the following operations:

-   `none`: no transposition.
-   `transpose`: transposition.
-   `conjugate-transpose`: conjugate transposition.

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
var transposeOperations = require( '@stdlib/blas/base/transpose-operations' );

var isOp = contains( transposeOperations() );

var bool = isOp( 'transpose' );
// returns true

bool = isOp( 'conjugate-transpose' );
// returns true

bool = isOp( 'beep' );
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
#include "stdlib/blas/base/transpose_operations.h"
```

#### STDLIB_BLAS_TRANSPOSE_OPERATION

An enumeration of BLAS transpose operations with the following fields:

-   **STDLIB_BLAS_NO_TRANSPOSE**: no transposition.
-   **STDLIB_BLAS_TRANSPOSE**: transposition.
-   **STDLIB_BLAS_CONJUGATE_TRANSPOSE**: conjugate transposition.

```c
#include "stdlib/blas/base/transpose_operations.h"

const enum STDLIB_BLAS_TRANSPOSE_OPERATION op = STDLIB_BLAS_TRANSPOSE;
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
