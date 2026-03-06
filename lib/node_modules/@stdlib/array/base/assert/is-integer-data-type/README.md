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

# isIntegerDataType

> Test if an input value is a supported array integer data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isIntegerDataType = require( '@stdlib/array/base/assert/is-integer-data-type' );
```

#### isIntegerDataType( value )

Tests if an input `value` is a supported array integer (i.e., signed or unsigned integer) data type.

```javascript
var bool = isIntegerDataType( 'float32' );
// returns false

bool = isIntegerDataType( 'uint32' );
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
var isIntegerDataType = require( '@stdlib/array/base/assert/is-integer-data-type' );

var bool = isIntegerDataType( 'float32' );
// returns false

bool = isIntegerDataType( 'float64' );
// returns false

bool = isIntegerDataType( 'generic' );
// returns false

bool = isIntegerDataType( 'int16' );
// returns true

bool = isIntegerDataType( 'int32' );
// returns true

bool = isIntegerDataType( 'int8' );
// returns true

bool = isIntegerDataType( 'uint16' );
// returns true

bool = isIntegerDataType( 'uint32' );
// returns true

bool = isIntegerDataType( 'uint8' );
// returns true

bool = isIntegerDataType( 'uint8c' );
// returns true

bool = isIntegerDataType( '' );
// returns false

bool = isIntegerDataType( 'foo' );
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
