<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

> C APIs for creating and managing ndarray function objects.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/ndarray/base/function-object' );
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
var headerDir = require( '@stdlib/ndarray/base/function-object' );

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
#include "stdlib/ndarray/base/function_object.h"
```

#### ndarrayFunctionObject

Structure for grouping ndarray function information.

```c
struct ndarrayFunctionObject {
    // ndarray function name:
    const char *name;

    // Number of input ndarrays:
    int32_t nin;

    // Number of output ndarrays:
    int32_t nout;

    // Total number of ndarray arguments (nin + nout):
    int32_t narrays;

    // Array containing ndarray functions:
    ndarrayFcn *functions;

    // Number of ndarray functions:
    int32_t nfunctions;

    // Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of ndarray argument types for a corresponding ndarray function:
    int32_t *types;

    // Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective ndarray function (note: the number of pointers should match the number of ndarray functions):
    void **data;
};
```

#### ndarrayFcn

Function pointer type for an ndarray function.

```c
typedef int8_t (*ndarrayFcn)( struct ndarray *arrays[], void *data );
```

An `ndarrayFcn` function should accept the following arguments:

-   **arrays**: `[in] struct ndarray**` array containing pointers to input and output ndarrays.
-   **data**: `[in] void*` function data (e.g., a callback).

An `ndarrayFcn` function should return a status code (with `0` indicating success).

<!-- lint disable maximum-heading-length -->

#### stdlib_ndarray_function_allocate( *name, nin, nout, *functions, nfunctions, *types, *data[] )

Returns a pointer to a dynamically allocated ndarray function object.

```c
#include "stdlib/ndarray/base/unary.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdlib.h>
#include <stdio.h>

// Define the function(s) we want to apply to ndarrays:
double scale( const double x ) {
    return x * 10.0;
}

// Define a function name:
const char name[] = "unary_ndarray_function";

// Define a list of ndarray functions (in this case, as the function to be applied accepts doubles, we only use ndarray functions which handle doubles as function arguments and, for the purposes of this example, we assume that the output ndarray is always a double-precision floating-point number array):
ndarrayFcn functions[] = {
    stdlib_ndarray_d_d,
    stdlib_ndarray_f_f_as_d_d,
    stdlib_ndarray_u_d_as_d_d,
    stdlib_ndarray_i_d_as_d_d,
    stdlib_ndarray_t_d_as_d_d,
    stdlib_ndarray_k_d_as_d_d,
    stdlib_ndarray_b_d_as_d_d,
    stdlib_ndarray_s_d_as_d_d
};

// Define the **ndarray** argument types for each ndarray function:
int32_t types[] = {
    STDLIB_NDARRAY_FLOAT64, STDLIB_NDARRAY_FLOAT64,
    STDLIB_NDARRAY_FLOAT32, STDLIB_NDARRAY_FLOAT64,
    STDLIB_NDARRAY_UINT32, STDLIB_NDARRAY_FLOAT64,
    STDLIB_NDARRAY_INT32, STDLIB_NDARRAY_FLOAT64,
    STDLIB_NDARRAY_UINT16, STDLIB_NDARRAY_FLOAT64,
    STDLIB_NDARRAY_INT16, STDLIB_NDARRAY_FLOAT64,
    STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_FLOAT64,
    STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_FLOAT64
};

// Define a list of ndarray function "data" (in this case, callbacks):
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

// Create a new ndarray function object:
struct ndarrayFunctionObject *obj = stdlib_ndarray_function_allocate( name, 1, 1, functions, 8, types, data );
if ( obj == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// Free allocated memory:
stdlib_ndarray_function_free( obj );
```

The function accepts the following arguments:

-   **name**: `[in] char*` ndarray function name.
-   **nin**: `[in] int32_t` number of input ndarrays.
-   **nout**: `[in] int32_t` number of output ndarrays.
-   **functions**: `[in] ndarrayFcn*` array containing ndarray functions.
-   **nfunctions**: `[in] int32_t` number of ndarray functions.
-   **types**: `[in] int32_t*` array of type "numbers", where the total number of types equals `(nin+nout)*nfunctions` and where each set of `nin+nout` consecutive types (non-overlapping) corresponds to the set of ndarray argument types for a corresponding ndarray function.
-   **data**: `[in] void*` array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective ndarray function.

```c
struct ndarrayFunctionObject * stdlib_ndarray_function_allocate( const char *name, int32_t nin, int32_t nout, ndarrayFcn *functions, int32_t nfunctions, int32_t *types, void *data[] )
```

The function returns a pointer to a dynamically allocated ndarray function or, if unable to allocate memory, a null pointer. The **user** is responsible for freeing the allocated memory.

#### stdlib_ndarray_function_free( *obj )

Frees an ndarray function object's allocated memory.

```c
#include "stdlib/ndarray/base/unary.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdlib.h>
#include <stdio.h>

// Define the function(s) we want to apply to ndarrays:
double scale( const double x ) {
    return x * 10.0;
}

// Define a function name:
const char name[] = "unary_ndarray_function";

// Define a list of ndarray functions:
ndarrayFcn functions[] = {
    stdlib_ndarray_d_d
};

// Define the **ndarray** argument types for each ndarray function:
int32_t types[] = {
    STDLIB_NDARRAY_FLOAT64, STDLIB_NDARRAY_FLOAT64
};

// Define a list of ndarray function "data" (in this case, callbacks):
void *data[] = {
    (void *)scale
};

// Create a new ndarray function object:
struct ndarrayFunctionObject *obj = stdlib_ndarray_function_allocate( name, 1, 1, functions, 1, types, data );
if ( obj == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Free allocated memory:
stdlib_ndarray_function_free( obj );
```

The function accepts the following arguments:

-   **obj**: `[in] ndarrayFunctionObject*` ndarray function object.

```c
void stdlib_ndarray_function_free( struct ndarrayFunctionObject *obj )
```

#### stdlib_ndarray_function_dispatch_index_of( *obj, *types )

Returns the first index of a function whose signature satisfies a provided list of array types.

```c
#include "stdlib/ndarray/base/unary.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdlib.h>
#include <stdio.h>

// Define the function(s) we want to apply to ndarrays:
double scale( const double x ) {
    return x * 10.0;
}

// ...

// Define a function name:
const char name[] = "unary_ndarray_function";

// Define a list of ndarray functions:
ndarrayFcn functions[] = {
    stdlib_ndarray_d_d,
    stdlib_ndarray_f_f_as_d_d
};

// Define the **ndarray** argument types for each ndarray function:
int32_t types[] = {
    STDLIB_NDARRAY_FLOAT64, STDLIB_NDARRAY_FLOAT64,
    STDLIB_NDARRAY_FLOAT32, STDLIB_NDARRAY_FLOAT64
};

// Define a list of ndarray function "data" (in this case, callbacks):
void *data[] = {
    (void *)scale,
    (void *)scale
};

// Create a new ndarray function object:
struct ndarrayFunctionObject *obj = stdlib_ndarray_function_allocate( name, 1, 1, functions, 2, types, data );
if ( obj == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Define a list of types on which to dispatch:
int32_t itypes[] = {
    STDLIB_NDARRAY_FLOAT32, STDLIB_NDARRAY_FLOAT64
};

// Find a function satisfying the list of types:
int64_t idx = stdlib_ndarray_function_dispatch_index_of( obj, itypes );
if ( idx < 0 ) {
    fprintf( stderr, "Unable to find function.\n" );
    exit( 1 );
}

// ...

// Free allocated memory:
stdlib_ndarray_function_free( obj );
```

The function accepts the following arguments:

-   **obj**: `[in] ndarrayFunctionObject*` ndarray function object.
-   **types**: `[in] int32_t*` list of array types on which to dispatch.

```c
int64_t stdlib_ndarray_function_dispatch_index_of( const struct ndarrayFunctionObject *obj, const int32_t *types )
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
