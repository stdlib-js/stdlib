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

# Learning rates

> SGD classification learning rate schedulers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var learningRates = require( '@stdlib/ml/base/sgd-classification/learning-rates' );
```

#### learningRates()

Returns a list of SGD classification learning rate schedulers.

```javascript
var out = learningRates();
// e.g., returns [ 'basic', 'constant', 'invscaling', 'pegasos' ]
```

The output array contains the following learning rate schedulers:

-   `basic`: basic learning rate function according to the formula `10/(10+t)` where `t` is the current iteration.
-   `constant`: constant learning rate function.
-   `invscaling`: inverse scaling learning rate function according to the formula `eta0/pow(t, power_t)` where `eta0` is the initial learning rate and `power_t` is the exponent controlling how quickly the learning rate decreases.
-   `pegasos`: Pegasos learning rate function according to the formula `1/(lambda*t)` where `t` is the current iteration and `lambda` is the regularization parameter.

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
var learningRates = require( '@stdlib/ml/base/sgd-classification/learning-rates' );

var isLearningRate = contains( learningRates() );

var bool = isLearningRate( 'constant' );
// returns true

bool = isLearningRate( 'pegasos' );
// returns true

bool = isLearningRate( 'beep' );
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
#include "stdlib/ml/base/sgd-classification/learning_rates.h"
```

#### STDLIB_ML_SGD_CLASSIFICATION_LEARNING_RATE

An enumeration of SGD classification learning rate schedulers with the following fields:

-   **STDLIB_ML_SGD_CLASSIFICATION_BASIC**: basic learning rate function according to the formula `10/(10+t)` where `t` is the current iteration.
-   **STDLIB_ML_SGD_CLASSIFICATION_CONSTANT**: constant learning rate function.
-   **STDLIB_ML_SGD_CLASSIFICATION_INVSCALING**: inverse scaling learning rate function according to the formula `eta0/pow(t, power_t)` where `eta0` is the initial learning rate and `power_t` is the exponent controlling how quickly the learning rate decreases.
-   **STDLIB_ML_SGD_CLASSIFICATION_PEGASOS**: Pegasos learning rate function according to the formula `1/(lambda*t)` where `t` is the current iteration and `lambda` is the regularization parameter.

```c
#include "stdlib/ml/base/sgd-classification/learning_rates.h"

const enum STDLIB_ML_SGD_CLASSIFICATION_LEARNING_RATE v = STDLIB_ML_SGD_CLASSIFICATION_BASIC;
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
