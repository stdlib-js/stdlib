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

# isRealFloatingPointDataType

> Test if an input value is a supported ndarray real-valued floating-point data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isRealFloatingPointDataType = require( '@stdlib/ndarray/base/assert/is-real-floating-point-data-type' );
```

#### isRealFloatingPointDataType( value )

Tests if an input `value` is a supported ndarray real-valued floating-point data type.

<!-- eslint-disable id-length -->

```javascript
var bool = isRealFloatingPointDataType( 'float32' );
// returns true

bool = isRealFloatingPointDataType( 'uint32' );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var isRealFloatingPointDataType = require( '@stdlib/ndarray/base/assert/is-real-floating-point-data-type' );

var bool = isRealFloatingPointDataType( 'binary' );
// returns false

bool = isRealFloatingPointDataType( 'float32' );
// returns true

bool = isRealFloatingPointDataType( 'float64' );
// returns true

bool = isRealFloatingPointDataType( 'generic' );
// returns false

bool = isRealFloatingPointDataType( 'int16' );
// returns false

bool = isRealFloatingPointDataType( 'int32' );
// returns false

bool = isRealFloatingPointDataType( 'int8' );
// returns false

bool = isRealFloatingPointDataType( 'uint16' );
// returns false

bool = isRealFloatingPointDataType( 'uint32' );
// returns false

bool = isRealFloatingPointDataType( 'uint8' );
// returns false

bool = isRealFloatingPointDataType( 'uint8c' );
// returns false

bool = isRealFloatingPointDataType( '' );
// returns false

bool = isRealFloatingPointDataType( 'foo' );
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
