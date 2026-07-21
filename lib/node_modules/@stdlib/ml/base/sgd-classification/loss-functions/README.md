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

# Loss functions

> SGD classification loss functions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var lossFunctions = require( '@stdlib/ml/base/sgd-classification/loss-functions' );
```

#### lossFunctions()

Returns a list of SGD classification loss functions.

```javascript
var out = lossFunctions();
// e.g., returns [ 'epsilon-insensitive', 'hinge', 'huber', 'log', 'modified-huber', 'perceptron', 'squared-epsilon-insensitive', 'squared-error', 'squared-hinge' ]
```

The output array contains the following loss functions:

-   `epsilon-insensitive`: penalty is the absolute value of the error whenever the absolute error exceeds epsilon and zero otherwise.
-   `hinge`: hinge loss function. Corresponds to a soft-margin linear Support Vector Machine (SVM), which can handle non-linearly separable data.
-   `huber`: squared-error loss for observations with error smaller than epsilon in magnitude, linear loss otherwise. Should be used in order to decrease the influence of outliers on the model fit.
-   `log`: logistic loss function. Corresponds to Logistic Regression.
-   `modified-huber`: Huber loss function variant for classification.
-   `perceptron`: hinge loss function without a margin. Corresponds to the original perceptron by Rosenblatt (1957).
-   `squared-epsilon-insensitive`: squared epsilon insensitive loss function.
-   `squared-error`: squared error loss (i.e., the squared difference of the observed and fitted values).
-   `squared-hinge`: squared hinge loss function SVM (L2-SVM).

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
var lossFunction = require( '@stdlib/ml/base/sgd-classification/loss-functions' );

var isLossFunction = contains( lossFunction() );

var bool = isLossFunction( 'hinge' );
// returns true

bool = isLossFunction( 'log' );
// returns true

bool = isLossFunction( 'beep' );
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
#include "stdlib/ml/base/sgd-classification/loss_functions.h"
```

#### STDLIB_ML_SGD_CLASSIFICATION_LOSS_FUNCTION

An enumeration of SGD classification loss functions with the following fields:

-   **STDLIB_ML_SGD_CLASSIFICATION_EPSILON_INSENSITIVE**: penalty is the absolute value of the error whenever the absolute error exceeds epsilon and zero otherwise.
-   **STDLIB_ML_SGD_CLASSIFICATION_HINGE**: corresponds to a soft-margin linear Support Vector Machine (SVM), which can handle non-linearly separable data.
-   **STDLIB_ML_SGD_CLASSIFICATION_HUBER**: squared-error loss for observations with error smaller than epsilon in magnitude, linear loss otherwise.
-   **STDLIB_ML_SGD_CLASSIFICATION_LOG**: corresponds to Logistic Regression.
-   **STDLIB_ML_SGD_CLASSIFICATION_MODIFIED_HUBER**: Huber loss function variant for classification.
-   **STDLIB_ML_SGD_CLASSIFICATION_PERCEPTRON**: corresponds to the original perceptron by Rosenblatt (1957).
-   **STDLIB_ML_SGD_CLASSIFICATION_SQUARED_EPSILON_INSENSITIVE**: squared epsilon insensitive loss function.
-   **STDLIB_ML_SGD_CLASSIFICATION_SQUARED_ERROR**: squared difference of the observed and fitted values.
-   **STDLIB_ML_SGD_CLASSIFICATION_SQUARED_HINGE**: squared hinge loss function SVM (L2-SVM).

```c
#include "stdlib/ml/base/sgd-classification/loss_functions.h"

const enum STDLIB_ML_SGD_CLASSIFICATION_LOSS_FUNCTION v = STDLIB_ML_SGD_CLASSIFICATION_HINGE;
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
