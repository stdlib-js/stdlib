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

# Typed Array Pool

> Allocate typed arrays from a typed array memory pool.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var typedarraypool = require( '@stdlib/array/pool' );
```

#### typedarraypool( \[dtype] )

Returns an **uninitialized** [typed array][mdn-typed-array] having a specified data type `dtype`.

```javascript
var arr = typedarraypool();
// returns <Float64Array>[]

// ...

typedarraypool.free( arr );
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

By default, the output [typed array][mdn-typed-array] is `float64`. To specify an alternative data type, set the `dtype` parameter.

```javascript
var arr = typedarraypool( 'int32' );
// returns <Int32Array>[]

// ...

typedarraypool.free( arr );
```

#### typedarraypool( length\[, dtype] )

Returns an **uninitialized** [typed array][mdn-typed-array] having a specified `length` from a [typed array][mdn-typed-array] memory pool.

```javascript
var arr1 = typedarraypool( 5 );
// returns <Float64Array>

var arr2 = typedarraypool( 5, 'uint8' );
// returns <Uint8Array>

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool( typedarray\[, dtype] )

Returns a pooled [typed array][mdn-typed-array] from another [typed array][mdn-typed-array].

```javascript
var arr1 = typedarraypool( [ 5.0, -3.0, 2.0 ] );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr2 = typedarraypool( arr1 );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr3 = typedarraypool( arr1, 'int32' );
// returns <Int32Array>[ 5, -3, 2 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
typedarraypool.free( arr3 );
```

#### typedarraypool( obj\[, dtype] )

Returns a pooled [typed array][mdn-typed-array] from an array-like `object`.

```javascript
var arr1 = typedarraypool( [ 0.5, 0.5, 0.5 ] );
// returns <Float64Array>[ 0.5, 0.5, 0.5 ]

var arr2 = typedarraypool( [ 0.5, 0.5, 0.5 ], 'float32' );
// returns <Float32Array>[ 0.5, 0.5, 0.5 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.malloc( \[dtype] )

Returns an **uninitialized** [typed array][mdn-typed-array] having a specified data type `dtype`.

```javascript
var arr1 = typedarraypool.malloc();
// returns <Float64Array>[]

var arr2 = typedarraypool.malloc( 'int32' );
// returns <Int32Array>[]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.malloc( length\[, dtype] )

Returns an **uninitialized** [typed array][mdn-typed-array] having a specified `length` from a [typed array][mdn-typed-array] memory pool.

```javascript
var arr1 = typedarraypool.malloc( 5 );
// returns <Float64Array>

var arr2 = typedarraypool.malloc( 5, 'uint8' );
// returns <Uint8Array>

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.malloc( typedarray\[, dtype] )

Returns a pooled [typed array][mdn-typed-array] from another [typed array][mdn-typed-array].

```javascript
var arr1 = typedarraypool.malloc( [ 5.0, -3.0, 2.0 ] );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr2 = typedarraypool.malloc( arr1 );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr3 = typedarraypool.malloc( arr1, 'int32' );
// returns <Int32Array>[ 5, -3, 2 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
typedarraypool.free( arr3 );
```

#### typedarraypool.malloc( obj\[, dtype] )

Returns a pooled [typed array][mdn-typed-array] from an array-like `object`.

```javascript
var arr1 = typedarraypool.malloc( [ 0.5, 0.5, 0.5 ] );
// returns <Float64Array>[ 0.5, 0.5, 0.5 ]

var arr2 = typedarraypool.malloc( [ 0.5, 0.5, 0.5 ], 'float32' );
// returns <Float32Array>[ 0.5, 0.5, 0.5 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.calloc( \[dtype] )

Returns a **zero-initialized** [typed array][mdn-typed-array] having a specified data type `dtype`.

```javascript
var arr1 = typedarraypool.calloc();
// returns <Float64Array>[]

var arr2 = typedarraypool.calloc( 'int32' );
// returns <Int32Array>[]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.calloc( length\[, dtype] )

Returns a **zero-initialized** [typed array][mdn-typed-array] having a specified `length` from a [typed array][mdn-typed-array] memory pool.

```javascript
var arr1 = typedarraypool.calloc( 5 );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

var arr2 = typedarraypool.calloc( 5, 'uint8' );
// returns <Uint8Array>[ 0, 0, 0, 0, 0 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.free( buf )

Frees a [typed array][mdn-typed-array] or typed array [buffer][mdn-arraybuffer] for use in a future allocation.

```javascript
var arr = typedarraypool( 10, 'float64' );
// returns <Float64Array>

// ...

// Free the allocated typed array for use in a future allocation:
typedarraypool.free( arr );

// Create another typed array:
arr = typedarraypool( 10, 'float64' );
// returns <Float64Array>

// ...

// Free the allocated typed array buffer for use in a future allocation:
typedarraypool.free( arr.buffer );
```

#### typedarraypool.clear()

Clears the [typed array][mdn-typed-array] pool allowing garbage collection of previously allocated (and currently free) [array buffers][mdn-arraybuffer].

```javascript
var arr = typedarraypool( 10, 'float64' );
// returns <Float64Array>

// ...

typedarraypool.free( arr );

// ...

// Clear all freed buffers:
typedarraypool.clear();
```

#### typedarraypool.highWaterMark

**Read-only** property returning the pool's high water mark (in bytes).

```javascript
var limit = typedarraypool.highWaterMark;
// returns <number>
```

Once a high water mark is reached, [typed array][mdn-typed-array] allocation **fails**.

#### typedarraypool.nbytes

**Read-only** property returning the total number of allocated bytes.

```javascript
var arr = typedarraypool( 5, 'float64' );

var nbytes = typedarraypool.nbytes;
// returns <number>
```

The returned value is the total **accumulated** value. Hence, anytime a pool must allocate a new [array buffer][mdn-arraybuffer] (i.e., more memory), the pool increments this value. The only time this value is decremented is when a pool is cleared. This behavior means that, while allocated buffers which are never freed may, in fact, be garbage collected, they continue to count against the high water mark limit. Accordingly, you should **always** free allocated buffers in order to prevent the pool from believing that non-freed buffers are continually in use.

#### typedarraypool.factory( \[options] )

Creates a new [typed array][mdn-typed-array] pool.

```javascript
var pool = typedarraypool.factory();

var arr = pool( 5, 'float64' );
// returns <Float64Array>

// ...

pool.free( arr );
```

The method accepts the following `options`:

-   **highWaterMark**: maximum total memory (in bytes) which can be allocated. Default: `2^53` bytes.

By default, the maximum total memory a pool may allocate is `2^53` bytes (approximately `1` petabyte, which, in practical terms, means a pool has **unlimited** capacity). To specify an alternative limit, set the `highWaterMark` option.

```javascript
// Create a new typed array pool which can allocate up to 1MB:
var pool = typedarraypool.factory({
    'highWaterMark': 1e6
});

var arr = pool( 5, 'float64' );
// returns <Float64Array>

// ...

pool.free( arr );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Uninitialized typed arrays may contain sensitive contents. If security is paramount (e.g., if freed [typed arrays][mdn-typed-array] have been used to store sensitive contents), use `calloc`.
-   An allocated [typed array][mdn-typed-array] is **guaranteed** to have an underlying [array buffer][mdn-arraybuffer] with _at least_ `N * w` bytes, where `N` is the number of [typed array][mdn-typed-array] elements and `w` is the number of bytes per element. Note, however, that the underlying [array buffer][mdn-arraybuffer] is likely to have **excess** capacity. Thus, if you create many [typed arrays][mdn-typed-array] which are held in memory and are **not** freed, you are likely to consume significantly more memory than if you had directly used [typed array][mdn-typed-array] constructors. However, if you create many [typed arrays][mdn-typed-array] which are rapidly discarded and of relatively large size, then using a [typed array][mdn-typed-array] pool can offer significant performance advantages.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var typedarraypool = require( '@stdlib/array/pool' ).factory;

// Create a typed array pool which can allocate at most 1GB:
var typedarray = typedarraypool({
    'highWaterMark': 1e9
});

// Inspect the pool:
console.log( 'Max bytes: %d', typedarray.highWaterMark );
console.log( 'nbytes: %d', typedarray.nbytes );

// Allocate an array for storing double-precision floating-point numbers:
var arr1 = typedarray( 5, 'float64' );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

// Inspect the pool:
console.log( 'nbytes: %d', typedarray.nbytes );

// Fill the array...
var i;
for ( i = 0; i < arr1.length; i++ ) {
    arr1[ i ] = randu();
}

// Inspect array contents:
console.log( arr1 );

// Free the array:
typedarray.free( arr1 );

// Allocate another array similar to the previous one:
var arr2 = typedarray( 5, 'float64' );
// returns <Float64Array>

// Check that we have been returned a new typed array view:
console.log( arr2 === arr1 );
// => false

// Inspect array contents:
console.log( arr2 );

// Free the array:
typedarray.free( arr2 );

// Allocate an initialized array:
var arr3 = typedarray.calloc( 5, 'float64' );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

// Inspect array contents:
console.log( arr3 );

// Free the array:
typedarray.free( arr3 );

// Clear the pool:
typedarray.clear();

// Inspect the pool:
console.log( 'nbytes: %d', typedarray.nbytes );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

</section>

<!-- /.links -->
