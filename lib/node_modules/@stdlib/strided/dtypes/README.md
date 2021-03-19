<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Data Types

> List of strided array data types.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtypes = require( '@stdlib/strided/dtypes' );
```

#### dtypes()

Returns a list of strided array data types.

```javascript
var out = dtypes();
// returns [ 'float32', 'float64', 'generic', 'int16', 'int32', 'int8', 'uint16', 'uint32', 'uint8' ]
```

The output `array` contains the following data types:

-   `float32`: single-precision floating-point numbers.
-   `float64`: double-precision floating-point numbers.
-   `generic`: values of any type.
-   `int16`: signed 16-bit integers.
-   `int32`: signed 32-bit integers.
-   `int8`: signed 8-bit integers.
-   `uint16`: unsigned 16-bit integers.
-   `uint32`: unsigned 32-bit integers.
-   `uint8`: unsigned 8-bit integers.

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
var dtypes = require( '@stdlib/strided/dtypes' );

var DTYPES = dtypes();
var bool;

function isdtype( str ) {
    return ( indexOf( DTYPES, str ) >= 0 );
}

bool = isdtype( 'float64' );
// returns true

bool = isdtype( 'int16' );
// returns true

bool = isdtype( 'uint8' );
// returns true

bool = isdtype( 'beep' );
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
