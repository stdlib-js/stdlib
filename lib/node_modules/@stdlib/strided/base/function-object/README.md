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

# Function Object

> C APIs for creating and managing strided array function objects.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/strided/base/function-object' );
```

#### headerDir

Absolute file path for the directory containing header files for C APIs.

```javascript
var dir = headerDir;
// returns <string>
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

```javascript
var headerDir = require( '@stdlib/strided/base/function-object' );

console.log( headerDir );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/function_object.h"
```

#### StridedFunctionObject

Structure for grouping strided array function information.

```c
struct StridedFunctionObject {
    // Strided array function name:
    const char *name;

    // Number of input strided arrays:
    int32_t nin;

    // Number of output strided arrays:
    int32_t nout;

    // Total number of strided array arguments (nin + nout):
    int32_t narrays;

    // Array containing strided array functions:
    StridedArrayFcn *functions;

    // Number of strided array functions:
    int32_t nfunctions;

    // Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function:
    int32_t *types;

    // Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function (note: the number of pointers should match the number of strided array functions):
    void **data;
};
```

#### StridedArrayFcn

Function pointer type for a strided array function.

```c
typedef void (*StridedArrayFcn)( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *data );
```

A `StridedArrayFcn` function should accept the following arguments:

-   **arrays**: `[in] uint8_t**` array containing pointers to both input and output strided arrays.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strided**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **data**: `[in] void*` function data (e.g., a callback).

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_function_allocate( *name, nin, nout, *functions, nfunctions, *types, *data[] )

Returns a pointer to a dynamically allocated strided array function object.

```c
#include "stdlib/strided/base/unary.h"
#include "stdlib/strided/dtypes.h"
#include <stdlib.h>
#include <stdio.h>

// Define the function(s) we want to apply to strided arrays:
double scale( const double x ) {
    return x * 10.0;
}

// Define a function name:
const char name[] = "unary_strided_array_function";

// Define a list of strided array functions (in this case, as the function to be applied accepts doubles, we only use strided array functions which handle doubles as function arguments and, for the purposes of this example, we assume that the output strided array is always a double-precision floating-point number array):
StridedArrayFcn functions[] = {
    stdlib_strided_d_d,
    stdlib_strided_f_f_as_d_d,
    stdlib_strided_u_d_as_d_d,
    stdlib_strided_i_d_as_d_d,
    stdlib_strided_t_d_as_d_d,
    stdlib_strided_k_d_as_d_d,
    stdlib_strided_b_d_as_d_d,
    stdlib_strided_s_d_as_d_d
};

// Define the **strided array** argument types for each strided array function:
int32_t types[] = {
    STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
    STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
    STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
    STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
    STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
    STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
    STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
    STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64
};

// Define a list of strided array function "data" (in this case, callbacks):
void *data[] = {
    (void *)scale,
    (void *)scale,
    (void *)scale,
    (void *)scale,
    (void *)scale,
    (void *)scale,
    (void *)scale,
    (void *)scale
};

// Create a new strided function object:
struct StridedFunctionObject *obj = stdlib_strided_function_allocate( name, 1, 1, functions, 8, types, data );
if ( obj == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// Free allocated memory:
stdlib_strided_function_free( obj );
```

The function accepts the following arguments:

-   **name**: `[in] char*` strided array function name.
-   **nin**: `[in] int32_t` number of input strided arrays.
-   **nout**: `[in] int32_t` number of output strided arrays.
-   **functions**: `[in] StridedArrayFcn*` array containing strided array functions.
-   **nfunctions**: `[in] int32_t` number of strided array functions.
-   **types**: `[in] int32_t*` array of type "numbers", where the total number of types equals `(nin+nout)*nfunctions` and where each set of `nin+nout` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function.
-   **data**: `[in] void*` array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function.

```c
struct StridedFunctionObject * stdlib_strided_function_allocate( const char *name, int32_t nin, int32_t nout, StridedArrayFcn *functions, int32_t nfunctions, int32_t *types, void *data[] )
```

The function returns a pointer to a dynamically allocated strided array function or, if unable to allocate memory, a null pointer. The **user** is responsible for freeing the allocated memory.

#### stdlib_strided_function_free( *obj )

Frees a strided array function object's allocated memory.

```c
#include "stdlib/strided/base/unary.h"
#include "stdlib/strided/dtypes.h"
#include <stdlib.h>
#include <stdio.h>

// Define the function(s) we want to apply to strided arrays:
double scale( const double x ) {
    return x * 10.0;
}

// Define a function name:
const char name[] = "unary_strided_array_function";

// Define a list of strided array functions:
StridedArrayFcn functions[] = {
    stdlib_strided_d_d
};

// Define the **strided array** argument types for each strided array function:
int32_t types[] = {
    STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64
};

// Define a list of strided array function "data" (in this case, callbacks):
void *data[] = {
    (void *)scale
};

// Create a new strided function object:
struct StridedFunctionObject *obj = stdlib_strided_function_allocate( name, 1, 1, functions, 1, types, data );
if ( obj == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Free allocated memory:
stdlib_strided_function_free( obj );
```

The function accepts the following arguments:

-   **obj**: `[in] StridedFunctionObject*` strided array function object.

```c
void stdlib_strided_function_free( struct StridedFunctionObject *obj )
```

#### stdlib_strided_function_dispatch_index_of( *obj, *types )

Returns the first index of a function whose signature satisfies a provided list of array types.

```c
#include "stdlib/strided/base/unary.h"
#include "stdlib/strided/dtypes.h"
#include <stdlib.h>
#include <stdio.h>

// Define the function(s) we want to apply to strided arrays:
double scale( const double x ) {
    return x * 10.0;
}

// ...

// Define a function name:
const char name[] = "unary_strided_array_function";

// Define a list of strided array functions:
StridedArrayFcn functions[] = {
    stdlib_strided_d_d,
    stdlib_strided_f_f_as_d_d
};

// Define the **strided array** argument types for each strided array function:
int32_t types[] = {
    STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
    STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64
};

// Define a list of strided array function "data" (in this case, callbacks):
void *data[] = {
    (void *)scale,
    (void *)scale
};

// Create a new strided function object:
struct StridedFunctionObject *obj = stdlib_strided_function_allocate( name, 1, 1, functions, 2, types, data );
if ( obj == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Define a list of types on which to dispatch:
int32_t itypes[] = {
    STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64
};

// Find a function satisfying the list of types:
int64_t idx = stdlib_strided_function_dispatch_index_of( obj, itypes );
if ( idx < 0 ) {
    fprintf( stderr, "Unable to find function.\n" );
    exit( 1 );
}

// ...

// Free allocated memory:
stdlib_strided_function_free( obj );
```

The function accepts the following arguments:

-   **obj**: `[in] StridedFunctionObject*` strided array function object.
-   **types**: `[in] int32_t*` list of array types on which to dispatch.

```c
int64_t stdlib_strided_function_dispatch_index_of( const struct StridedFunctionObject *obj, const int32_t *types )
```

If a function is found, the function returns the index of the function, and the function returns `-1` if unable to find a function.

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
