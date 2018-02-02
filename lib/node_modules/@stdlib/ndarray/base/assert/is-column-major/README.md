<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isColumnMajor

> Given a stride array, determine whether an array is column-major.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major' );
```

#### isColumnMajor( strides )

Returns a `boolean` indicating if an array is column-major based on a provided stride array.

```javascript
var bool = isColumnMajor( [ 1, 2 ] );
// returns true

bool = isColumnMajor( [ 2, 1 ] );
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

<!-- eslint no-undef: "error" -->

```javascript
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major' );

var shape = [ 10, 10, 10 ];

var strides = shape2strides( shape, 'column-major' );
// returns [ 1, 10, 100 ]

var bool = isColumnMajor( strides );
// returns true

strides = shape2strides( shape, 'row-major' );
// returns [ 100, 10, 1 ]

bool = isColumnMajor( strides );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
