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

# sizeOf

> Return the size (in bytes) of the canonical binary representation of a specified numeric type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sizeOf = require( '@stdlib/utils/size-of' );
```

#### sizeOf( dtype )

Returns the size (in bytes) of the canonical binary representation of a specified numeric type.

```javascript
var s = sizeOf( 'int8' );
// returns 1
```

The following numeric types are supported:

-   `float64`: double-precision floating-point numbers
-   `float32`: single-precision floating-point numbers
-   `float16`: half-precision floating-point numbers
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `complex128`: 128-bit complex numbers
-   `complex64`: 64-bit complex numbers

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
var sizeOf = require( '@stdlib/utils/size-of' );

var s = sizeOf( 'float64' );
// returns 8

s = sizeOf( 'float32' );
// returns 4

s = sizeOf( 'float16' );
// returns 2

s = sizeOf( 'int32' );
// returns 4

s = sizeOf( 'uint32' );
// returns 4

s = sizeOf( 'int16' );
// returns 2

s = sizeOf( 'uint16' );
// returns 2

s = sizeOf( 'int8' );
// returns 1

s = sizeOf( 'uint8' );
// returns 1

s = sizeOf( 'uint8c' );
// returns 1

s = sizeOf( 'complex128' );
// returns 16

s = sizeOf( 'complex64' );
// returns 8
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: sizeof [options] <dtype>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ sizeof int16
2
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
