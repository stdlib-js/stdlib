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

# Dispatch

> Create a strided array function interface which performs multiple dispatch.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dispatch = require( '@stdlib/strided/dispatch' );
```

#### dispatch( fcns, types, data, nargs, nin, nout )

Returns a strided array function interface which performs multiple dispatch.

<!-- eslint-disable array-element-newline -->

```javascript
var unary = require( '@stdlib/strided/base/unary' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );

function foo( x ) {
    return x * 10.0;
}

function bar( x ) {
    return x * 5.0;
}

// Define a list of strided array functions for applying a unary callback:
var fcns = [
    unary,
    unary
];

// Define a one-dimensional list of input and output array types:
var types = [
    'float64', 'float64', // input, output
    'float32', 'float32'  // input, output
];

// Define a list of callbacks which should be applied based on the provided array types:
var data = [
    foo,
    bar
];

// Define the total number of input arguments:
var nargs = 5; // N + input_array + input_array_stride + output_array + output_array_stride

// Define the number of input strided arrays:
var nin = 1;

// Define the number of output strided arrays:
var nout = 1;

// Create a strided array function interface:
var strided = dispatch( fcns, types, data, nargs, nin, nout );

// ...

var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float64Array( x.length );

strided( x.length, x, 1, y, 1 );
// y => <Float64Array>[ 10.0, 20.0, 30.0 ]

x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
y = new Float32Array( x.length );

strided( x.length, x, 1, y, 1 );
// y => <Float32Array>[ 5.0, 10.0, 15.0 ]
```

The function accepts the following arguments:

-   **fcns**: list of strided array functions.
-   **types**: one-dimensional list of strided array argument data types. The length of `types` must be the number of strided array functions multiplied by `nin+nout`. If `fcns` is a function, rather than a list, the number of strided array functions is computed as `types.length / (nin+nout)`.
-   **data**: strided array function data (e.g., callbacks). If a list, the length of `data` must equal the number of strided array functions. If `null`, a returned strided array function interface does **not** provide a `data` argument to an invoked strided array function.
-   **nargs**: total number of strided array function interface arguments (including strides and offsets).
-   **nin**: number of input strided arrays.
-   **nout**: number of output strided arrays.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Without offsets, a returned strided array function interface has the following signature:

    ```text
    f( N, x, strideX, y, strideY, ... )
    ```

    where

    -   **N**: number of indexed elements.
    -   **x**: strided array.
    -   **strideX**: index increment for `x`.
    -   **y**: strided array.
    -   **strideY**: index increment for `y`.
    -   **...**: additional strided arrays and associated strides.

-   The number of strided array function interface parameters is derived from `nargs`, the number of input strided arrays is derived from `nin`, and the number of output strided arrays is derived from `nout`.

-   Without offsets, the number of parameters must obey the following relation:

    ```text
    nargs = 2*(nout+nin) + 1
    ```

-   With offsets, the number of parameters must obey the following relation:

    ```text
    nargs = 3*(nout+nin) + 1
    ```

-   With offsets, a returned strided array function interface has the following signature:

    ```text
    f( N, x, strideX, offsetX, y, strideY, offsetY, ... )
    ```

    where

    -   **N**: number of indexed elements.
    -   **x**: strided array.
    -   **strideX**: index increment for `x`.
    -   **offsetX**: starting index for `x`.
    -   **y**: strided array.
    -   **strideY**: index increment for `y`.
    -   **offsetY**: starting index for `y`.
    -   **...**: additional strided arrays and associated strides and offsets.

    The choice of which strided array function interface to return depends on the use case. The former is suitable for typed array views; while the latter affords alternative indexing semantics more suitable for n-dimensional arrays (ndarrays).

-   Without offsets, a strided array function (i.e., a value provided for the `fcns` argument) should have the following signature:

    ```text
    f( arrays, shape, strides[, data] )
    ```

    where

    -   **arrays**: array containing strided input and output arrays.
    -   **shape**: array containing a single element, the number of indexed elements.
    -   **strides**: array containing the stride lengths for the strided input and output arrays.
    -   **data**: strided array function data (e.g., a callback).

-   With offsets, a strided array function should have the following signature:

    ```text
    f( arrays, shape, strides, offsets[, data] )
    ```

    where

    -   **offsets**: array containing the starting indices (i.e., index offsets) for the strided input and output arrays.

-   For convenience, a single strided array function may be provided which will be invoked whenever the strided array argument data types match a sequence of types in `types`. Providing a single strided array function is particularly convenient for the case where, regardless of array data types, traversing arrays remains the same, but the strided array function `data` differs (e.g., callbacks which differ based on the array data types). For example, the following

    <!-- eslint-disable array-element-newline -->

    ```javascript
    var unary = require( '@stdlib/strided/base/unary' );
    
    function foo( x ) {
        return x * 10.0;
    }

    function bar( x ) {
        return x * 5.0;
    }

    var fcns = [
        unary,
        unary
    ];
    var types = [
        'float64', 'float64',
        'float32', 'float32'
    ];
    var data = [
        foo,
        bar
    ];

    var strided = dispatch( fcns, types, data, 5, 1, 1 );
    ```

    is equivalent to

    <!-- eslint-disable array-element-newline -->

    ```javascript
    var unary = require( '@stdlib/strided/base/unary' );
    
    function foo( x ) {
        return x * 10.0;
    }

    function bar( x ) {
        return x * 5.0;
    }

    var types = [
        'float64', 'float64',
        'float32', 'float32'
    ];
    var data = [
        foo,
        bar
    ];

    var strided = dispatch( unary, types, data, 5, 1, 1 );
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var unary = require( '@stdlib/strided/base/unary' ).ndarray;
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var dispatch = require( '@stdlib/strided/dispatch' );

var types = [ 'float64', 'float64' ];

var data = [
    abs
];

var strided = dispatch( unary, types, data, 7, 1, 1 );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

strided( x.length, x, 1, 2, y, 1, 2 );
console.log( y );
// => <Float64Array>[ 0.0, 0.0, 3.0, 4.0, 5.0 ]
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
