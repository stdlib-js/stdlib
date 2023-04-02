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

# isIntegralDataType

> Test if an input value is a supported ndarray integral data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isIntegralDataType = require( '@stdlib/ndarray/base/assert/is-integral-data-type' );
```

#### isIntegralDataType( value )

Tests if an input `value` is a supported ndarray integral (i.e., signed or unsigned integer) data type.

```javascript
var bool = isIntegralDataType( 'float32' );
// returns false

bool = isIntegralDataType( 'uint32' );
// returns true
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

<!-- eslint no-undef: "error" -->

```javascript
var isIntegralDataType = require( '@stdlib/ndarray/base/assert/is-integral-data-type' );

var bool = isIntegralDataType( 'binary' );
// returns false

bool = isIntegralDataType( 'float32' );
// returns false

bool = isIntegralDataType( 'float64' );
// returns false

bool = isIntegralDataType( 'generic' );
// returns false

bool = isIntegralDataType( 'int16' );
// returns true

bool = isIntegralDataType( 'int32' );
// returns true

bool = isIntegralDataType( 'int8' );
// returns true

bool = isIntegralDataType( 'uint16' );
// returns true

bool = isIntegralDataType( 'uint32' );
// returns true

bool = isIntegralDataType( 'uint8' );
// returns true

bool = isIntegralDataType( 'uint8c' );
// returns true

bool = isIntegralDataType( '' );
// returns false

bool = isIntegralDataType( 'foo' );
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
