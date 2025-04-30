<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Policies

> List of output ndarray data type policies.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var policies = require( '@stdlib/ndarray/output-dtype-policies' );
```

#### policies()

Returns a list of ndarray data type policies.

```javascript
var out = policies();
// e.g., returns [ 'same', 'promoted', ... ]
```

The output array contains the following data type policies:

-   `same`: return the same data type.
-   `promoted`: return a promoted data type.
-   `accumulation`: return a data type amenable to accumulation.
-   `boolean`: return a boolean data type.
-   `boolean_and_generic`: return a boolean or "generic" data type.
-   `signed_integer`: return a signed integer data type.
-   `signed_integer_and_generic`: return a signed integer or "generic" data type.
-   `unsigned_integer`: return an unsigned integer data type.
-   `unsigned_integer_and_generic`: return an unsigned integer or "generic" data type.
-   `integer`: return an integer data type (i.e., either signed or unsigned).
-   `integer_and_generic`: return an integer (i.e., either signed or unsigned) or "generic" data type.
-   `floating_point`: return a floating-point data type (i.e., either real-valued or complex-valued).
-   `floating_point_and_generic`: return a floating-point (i.e., either real-valued or complex-valued) or "generic" data type.
-   `real_floating_point`: return a real-valued floating-point data type.
-   `real_floating_point_and_generic`: return a real-valued or "generic" floating-point data type.
-   `complex_floating_point`: return a complex-valued floating-point data type.
-   `complex_floating_point_and_generic`: return a complex-valued or "generic" floating-point data type.
-   `real`: return a real-valued data type.
-   `real_and_generic`: return a real-valued or "generic" data type.
-   `numeric`: return a numeric data type.
-   `numeric_and_generic`: return a numeric or "generic" data type.
-   `integer_index`: return an integer index data type.
-   `integer_index_and_generic`: return an integer index or "generic" data type.
-   `boolean_index`: return a boolean index data type.
-   `boolean_index_and_generic`: return a boolean index or "generic" data type.
-   `mask_index`: return a mask index data type.
-   `mask_index_and_generic`: return a mask index or "generic" data type.
-   `default`: return the default data type.
-   `default_index`: return the default index data type.

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
var indexOf = require( '@stdlib/utils/index-of' );
var policies = require( '@stdlib/ndarray/output-dtype-policies' );

var POLICIES = policies();

function isPolicy( str ) {
    if ( indexOf( POLICIES, str ) === -1 ) {
        return false;
    }
    return true;
}

var bool = isPolicy( 'same' );
// returns true

bool = isPolicy( 'real_floating_point' );
// returns true

bool = isPolicy( 'promoted' );
// returns true

bool = isPolicy( 'beep' );
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
