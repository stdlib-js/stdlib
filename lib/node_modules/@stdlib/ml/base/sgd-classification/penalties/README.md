<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# Penalties

> SGD classification penalties.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var penalties = require( '@stdlib/ml/base/sgd-classification/penalties' );
```

#### penalties()

Returns a list of SGD classification penalties.

```javascript
var out = penalties();
// e.g., returns [ 'elasticnet', 'l1', 'l2' ]
```

The output array contains the following penalties:

-   `elasticnet`: regularization method that linearly combines the L1 and L2 penalties of the lasso and ridge methods.
-   `l1`: L1 regularization (also called LASSO) leads to sparse models by adding a penalty based on the absolute value of coefficients.
-   `l2`: L2 regularization (also called ridge regression) encourages smaller, more evenly distributed weights by adding a penalty based on the square of the coefficients.

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
var penalties = require( '@stdlib/ml/base/sgd-classification/penalties' );

var isPenalty = contains( penalties() );

var bool = isPenalty( 'l1' );
// returns true

bool = isPenalty( 'l2' );
// returns true

bool = isPenalty( 'beep' );
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
#include "stdlib/ml/base/sgd-classification/penalties.h"
```

#### STDLIB_ML_SGD_CLASSIFICATION_PENALTY

An enumeration of SGD classification penalties with the following fields:

-   **STDLIB_ML_SGD_CLASSIFICATION_ELASTICNET**: regularization method that linearly combines the L1 and L2 penalties of the lasso and ridge methods.
-   **STDLIB_ML_SGD_CLASSIFICATION_L1**: L1 regularization (also called LASSO) leads to sparse models by adding a penalty based on the absolute value of coefficients.
-   **STDLIB_ML_SGD_CLASSIFICATION_L2**: L2 regularization (also called ridge regression) encourages smaller, more evenly distributed weights by adding a penalty based on the square of the coefficients.

```c
#include "stdlib/ml/base/sgd-classification/penalties.h"

const enum STDLIB_ML_SGD_CLASSIFICATION_PENALTY v = STDLIB_ML_SGD_CLASSIFICATION_ELASTICNET;
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
