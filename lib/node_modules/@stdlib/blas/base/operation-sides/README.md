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

# Operation Sides

> BLAS operation sides.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var operationSides = require( '@stdlib/blas/base/operation-sides' );
```

#### operationSides()

Returns a list of BLAS operation sides.

```javascript
var out = operationSides();
// e.g., returns [ 'left', 'right' ]
```

The output array contains the following types:

-   `left`: a triangular matrix is on the left side of a matrix-matrix operation (e.g., AX = B, where A is a triangular matrix).
-   `right`: a triangular matrix is on the right side of a matrix-matrix operation (e.g., XA = B, where A is a triangular matrix).

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
var operationSides = require( '@stdlib/blas/base/operation-sides' );

var isOperationSide = contains( operationSides() );

var bool = isOperationSide( 'right' );
// returns true

bool = isOperationSide( 'left' );
// returns true

bool = isOperationSide( 'beep' );
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
#include "stdlib/blas/base/operation_sides.h"
```

#### STDLIB_BLAS_OPERATION_SIDE

An enumeration of BLAS operation sides with the following fields:

-   **STDLIB_BLAS_LEFT**: a triangular matrix is on the left side of a matrix-matrix operation (e.g., `XA = B`, where `A` is a triangular matrix).
-   **STDLIB_BLAS_RIGHT**: a triangular matrix is on the right side of a matrix-matrix operation (e.g., `XA = B`, where `A` is a triangular matrix).

```c
#include "stdlib/blas/base/operation_sides.h"

const enum STDLIB_BLAS_OPERATION_SIDE v = STDLIB_BLAS_RIGHT;
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
