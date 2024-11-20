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

# isRealDataType

> Test if an input value is a supported ndarray real-valued data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isRealDataType = require( '@stdlib/ndarray/base/assert/is-real-data-type' );
```

#### isRealDataType( value )

Tests if an input `value` is a supported ndarray real-valued data type.

```javascript
var bool = isRealDataType( 'float32' );
// returns true

bool = isRealDataType( 'uint32' );
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
var isRealDataType = require( '@stdlib/ndarray/base/assert/is-real-data-type' );

var bool = isRealDataType( 'binary' );
// returns false

bool = isRealDataType( 'float32' );
// returns true

bool = isRealDataType( 'float64' );
// returns true

bool = isRealDataType( 'complex128' );
// returns false

bool = isRealDataType( 'generic' );
// returns false

bool = isRealDataType( 'int16' );
// returns true

bool = isRealDataType( 'int32' );
// returns true

bool = isRealDataType( 'int8' );
// returns true

bool = isRealDataType( 'uint16' );
// returns true

bool = isRealDataType( 'uint32' );
// returns true

bool = isRealDataType( 'uint8' );
// returns true

bool = isRealDataType( 'uint8c' );
// returns true

bool = isRealDataType( '' );
// returns false

bool = isRealDataType( 'foo' );
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
