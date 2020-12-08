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

# Filled Array

> Create a filled array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var filledarray = require( '@stdlib/array/filled' );
```

#### filledarray( \[dtype] )

Creates a filled array having a specified data type `dtype`.

```javascript
var arr = filledarray();
// returns <Float64Array>
```

The function recognizes the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `generic`: generic JavaScript values

By default, the output array data type is `float64` (i.e., a [typed array][mdn-typed-array]). To specify an alternative data type, provide a `dtype` argument.

```javascript
var arr = filledarray( 'int32' );
// returns <Int32Array>
```

#### filledarray( value, length\[, dtype] )

Returns a filled array having a specified `length`.

```javascript
var arr1 = filledarray( 1.0, 5 );
// returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]

var arr2 = filledarray( 1, 5, 'uint8' );
// returns <Uint8Array>[ 1, 1, 1, 1, 1 ]
```

#### filledarray( value, array\[, dtype] )

Creates a filled array from another array (or array-like object).

```javascript
var arr0 = {
    '0': 0.5,
    '1': 0.5,
    '2': 0.5,
    'length': 3
};

var arr1 = filledarray( 1.0, arr0 );
// returns <Float64Array>[ 1.0, 1.0, 1.0 ]

var arr2 = filledarray( 2.0, arr1 );
// returns <Float64Array>[ 2.0, 2.0, 2.0 ]

var arr3 = filledarray( 3, arr1, 'int32' );
// returns <Int32Array>[ 3, 3, 3 ]
```

#### filledarray( value, iterable\[, dtype] )

Creates a filled array from an iterable.

```javascript
var iterConstant = require( '@stdlib/iter/constant' );

var it = iterConstant( 3.0, {
    'iter': 3
});
var arr1 = filledarray( 1.0, it );
// returns <Float64Array>[ 1.0, 1.0, 1.0 ]

var arr2 = filledarray( 1.0, it, 'float32' );
// returns <Float32Array>[ 1.0, 1.0, 1.0 ]
```

#### filledarray( value, buffer\[, byteOffset\[, length]]\[, dtype] )

Returns a filled [typed array][mdn-typed-array] view of an [`ArrayBuffer`][mdn-arraybuffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var buf = new ArrayBuffer( 32 );
var arr = filledarray( 1.0, buf );
// returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1.0, buf, 'float32' );
// returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1.0, buf, 16 );
// returns <Float64Array>[ 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1.0, buf, 16, 'float32' );
// returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1.0, buf, 16, 1 );
// returns <Float64Array>[ 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1, buf, 10, 4, 'int16' );
// returns <Int16Array>[ 1, 1, 1, 1 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Creating a generic [array][mdn-array] from an [`ArrayBuffer`][mdn-arraybuffer] is **not** supported.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var dtypes = require( '@stdlib/array/dtypes' );
var filledarray = require( '@stdlib/array/filled' );

// Generate a random number:
var r = discreteUniform( 0, 100 );

// Get the list of supported array data types:
var dt = dtypes();

// Generate filled arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = filledarray( r, 10, dt[ i ] );
    console.log( arr );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

</section>

<!-- /.links -->
