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

# isIntegerIndexDataType

> Test if an input value is a supported ndarray integer index data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isIntegerIndexDataType = require( '@stdlib/ndarray/base/assert/is-integer-index-data-type' );
```

#### isIntegerIndexDataType( value )

Tests if an input value is a supported ndarray integer index data type.

```javascript
var bool = isIntegerIndexDataType( 'float32' );
// returns false

bool = isIntegerIndexDataType( 'int32' );
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
var isIntegerIndexDataType = require( '@stdlib/ndarray/base/assert/is-integer-index-data-type' );

var bool = isIntegerIndexDataType( 'binary' );
// returns false

bool = isIntegerIndexDataType( 'float32' );
// returns false

bool = isIntegerIndexDataType( 'float64' );
// returns false

bool = isIntegerIndexDataType( 'generic' );
// returns false

bool = isIntegerIndexDataType( 'int16' );
// returns false

bool = isIntegerIndexDataType( 'int32' );
// returns true

bool = isIntegerIndexDataType( 'int8' );
// returns false

bool = isIntegerIndexDataType( 'uint16' );
// returns false

bool = isIntegerIndexDataType( 'uint32' );
// returns false

bool = isIntegerIndexDataType( 'uint8' );
// returns false

bool = isIntegerIndexDataType( 'uint8c' );
// returns false

bool = isIntegerIndexDataType( '' );
// returns false

bool = isIntegerIndexDataType( 'foo' );
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
