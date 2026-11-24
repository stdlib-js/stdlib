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

# Alternative Hypotheses

> Z-test alternative hypotheses.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var alternatives = require( '@stdlib/stats/base/ztest/alternatives' );
```

#### alternatives()

Returns a list of Z-test alternative hypotheses.

```javascript
var out = alternatives();
// e.g., returns [ 'two-sided', 'less', 'greater' ]
```

The output array contains the following alternatives:

-   `two-sided`: mean is not equal to the null hypothesis value.
-   `less`: mean is less than the null hypothesis value.
-   `greater`: mean is greater than the null hypothesis value.

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
var alternatives = require( '@stdlib/stats/base/ztest/alternatives' );

var isAlternative = contains( alternatives() );

var bool = isAlternative( 'two-sided' );
// returns true

bool = isAlternative( 'greater' );
// returns true

bool = isAlternative( 'beep' );
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
#include "stdlib/stats/base/ztest/alternatives.h"
```

#### STDLIB_STATS_ZTEST_ALTERNATIVE

An enumeration of Z-test alternative hypotheses with the following fields:

-   **STDLIB_STATS_ZTEST_TWO_SIDED**: mean is not equal to the null hypothesis value.
-   **STDLIB_STATS_ZTEST_LESS**: mean is less than the null hypothesis value.
-   **STDLIB_STATS_ZTEST_GREATER**: mean is greater than the null hypothesis value.

```c
#include "stdlib/stats/base/ztest/alternatives.h"

const enum STDLIB_STATS_ZTEST_ALTERNATIVE v = STDLIB_STATS_ZTEST_TWO_SIDED;
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
