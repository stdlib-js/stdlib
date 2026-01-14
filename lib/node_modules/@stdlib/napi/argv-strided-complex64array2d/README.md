<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

<!-- lint disable maximum-heading-length -->

# argv_strided_complex64array2d

> Convert a Node-API value representing a two-dimensional strided array to a single-precision complex floating-point array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/napi/argv-strided-complex64array2d' );
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
var headerDir = require( '@stdlib/napi/argv-strided-complex64array2d' );

console.log( headerDir );
// => <string>
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
#include "stdlib/napi/argv_strided_complex64array2d.h"
```

#### stdlib_napi_argv_strided_complex64array2d( env, M, N, strideX1, strideX2, value, \*\*data, \*message1, \*message2, \*err )

Converts a Node-API value representing a two-dimensional strided array to a single-precision complex floating-point array.

```c
#include "stdlib/napi/argv_strided_complex64array2d.h"
#include <node_api.h>
#include <stdint.h>

static napi_value addon( napi_env env, napi_callback_info info ) {
    napi_value value;

    // ...

    int64_t M = 100;
    int64_t N = 100;
    int64_t strideX1 = 100;
    int64_t strideX2 = 1;

    // ...

    float *X;
    napi_value err;
    napi_status status = stdlib_napi_argv_strided_complex64array2d( env, M, N, strideX1, strideX2, value, &X, "Must be a typed array.", "Must have sufficient elements.", &err );
    assert( status == napi_ok );
    if ( err != NULL ) {
        assert( napi_throw( env, err ) == napi_ok );
        return NULL;
    }

    // ...
}
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **M**: `[in] int64_t` number of rows.
-   **N**: `[in] int64_t` number of columns.
-   **strideX1**: `[in] int64_t` stride length along the first dimension.
-   **strideX2**: `[in] int64_t` stride length along the second dimension.
-   **value**: `[in] napi_value` Node-API value.
-   **data**: `[out] float**` pointer for returning a reference to the output array.
-   **message1**: `[in] char*` error message if a value is not a `Float32Array`.
-   **message2**: `[in] char*` error message if a value has insufficient elements.
-   **err**: `[out] napi_value*` pointer for storing a JavaScript error. If not provided a number, the function sets `err` with a JavaScript error; otherwise, `err` is set to `NULL`.

```c
napi_status stdlib_napi_argv_strided_complex64array2d( const napi_env env, const int64_t M, const int64_t N, const int64_t strideX1, const int64_t strideX2, const napi_value value, float **data, const char *message1, const char *message2, napi_value *err );
```

The function returns a `napi_status` status code indicating success or failure (returns `napi_ok` if success).

#### STDLIB_NAPI_ARGV_STRIDED_COMPLEX64ARRAY2D( env, X, M, N, strideX1, strideX2, argv, index )

Macro for converting an add-on callback argument to a strided single-precision complex floating-point array.

```c
#include "stdlib/napi/argv_strided_complex64array2d.h"
#include "stdlib/napi_argv_int64.h"
#include "stdlib/napi/argv.h"
#include <node_api.h>
#include <stdint.h>

static void fcn( const int64_t M, const int64_t N, const float *X, const int64_t strideX1, const int64_t strideX2, float *Y, const int64_t strideY1, const int64_t strideY2 ) {
    int64_t i;
    int64_t j;
    for ( i = 0; i < M*2; i += 2 ) {
        for ( j = 0; j < N*2; j += 2 ) {
            Y[ (i*strideY1)+(j*strideY2) ] = X[ (i*strideX1)+(j*strideX2) ];
            Y[ (i*strideY1)+(j*strideY2)+1 ] = X[ (i*strideX1)+(j*strideX2)+1 ];
        }
    }
}

// ...

static napi_value addon( napi_env env, napi_callback_info info ) {
    // Retrieve add-on callback arguments:
    STDLIB_NAPI_ARGV( env, info, argv, argc, 8 );

    // Convert the number of rows and columns to C types:
    STDLIB_NAPI_ARGV_INT64( env, M, argv, 0 );
    STDLIB_NAPI_ARGV_INT64( env, N, argv, 1 );

    // Convert the stride arguments to C types:
    STDLIB_NAPI_ARGV_INT64( env, strideX1, argv, 3 );
    STDLIB_NAPI_ARGV_INT64( env, strideX2, argv, 4 );
    STDLIB_NAPI_ARGV_INT64( env, strideY1, argv, 6 );
    STDLIB_NAPI_ARGV_INT64( env, strideY2, argv, 7 );

    // Convert the arrays to C types:
    STDLIB_NAPI_ARGV_STRIDED_COMPLEX64ARRAY2D( env, X, M, N, strideX1, strideX2, argv, 2 );
    STDLIB_NAPI_ARGV_STRIDED_COMPLEX64ARRAY2D( env, Y, M, N, strideY1, strideY2, argv, 5 );

    // ...

    fcn( M, N, X, strideX1, strideX2, Y, strideY1, strideY2 );
}
```

The macro expects the following arguments:

-   **env**: environment under which the callback is invoked.
-   **X**: output variable name for the array.
-   **M**: number of rows.
-   **N**: number of columns.
-   **strideX1**: stride length along the first dimension.
-   **strideX2**: stride length along the second dimension.
-   **argv**: name of the variable containing add-on callback arguments.
-   **index**: argument index.

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

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
