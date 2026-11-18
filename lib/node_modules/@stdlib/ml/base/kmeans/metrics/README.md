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

# Distance Metrics

> k-means distance metrics.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var metrics = require( '@stdlib/ml/base/kmeans/metrics' );
```

#### metrics()

Returns a list of k-means distance metrics.

```javascript
var out = metrics();
// e.g., returns [ 'sqeuclidean', 'cosine', 'cityblock', 'correlation' ]
```

The output array contains the following metrics:

-   `sqeuclidean`: squared euclidean distance.
-   `cosine`: cosine distance.
-   `cityblock`: cityblock (taxicab) distance.
-   `correlation`: correlation distance.

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
var metrics = require( '@stdlib/ml/base/kmeans/metrics' );

var isMetric = contains( metrics() );

var bool = isMetric( 'sqeuclidean' );
// returns true

bool = isMetric( 'cosine' );
// returns true

bool = isMetric( 'beep' );
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
#include "stdlib/ml/base/kmeans/metrics.h"
```

#### STDLIB_ML_KMEANS_METRIC

An enumeration of k-means distance metrics with the following fields:

-   **STDLIB_ML_KMEANS_SQEUCLIDEAN**: squared euclidean distance.
-   **STDLIB_ML_KMEANS_COSINE**: cosine distance.
-   **STDLIB_ML_KMEANS_CITYBLOCK**: cityblock (taxicab) distance.
-   **STDLIB_ML_KMEANS_CORRELATION**: correlation distance.

```c
#include "stdlib/ml/base/kmeans/metrics.h"

const enum STDLIB_ML_KMEANS_METRIC v = STDLIB_ML_KMEANS_SQEUCLIDEAN;
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
