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

# Add-on Arguments

> C API for validating, extracting, and transforming (to native C types) function arguments provided to a strided array Node-API add-on interface.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/strided/napi/addon-arguments' );
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
var headerDir = require( '@stdlib/strided/napi/addon-arguments' );

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
#include "stdlib/strided/napi/addon_arguments.h"
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_napi_addon_arguments( env, argv, nargs, nin, \*arrays[], \*shape, \*strides, \*types, \*err )

Validates, extracts, and transforms (to native C types) function arguments provided to a strided array Node-API add-on interface.

```c
#include <node_api.h>
#include <stdint.h>
#include <assert.h>

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    napi_status status;

    // ...

    int64_t nargs = 7;
    int64_t nin = 2;

    // Get callback arguments:
    size_t argc = 7;
    napi_value argv[ 7 ];
    status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
    assert( status == napi_ok );

    // ...

    // Initialize destination arrays:
    uint8_t *arrays[ 3 ];
    int64_t strides[ 3 ];
    int64_t shape[ 1 ];
    int32_t types[ 3 ];

    // Process the provided arguments:
    napi_value err;
    status = stdlib_strided_napi_addon_arguments( env, argv, nargs, nin, arrays, shape, strides, types, &err );
    assert( status == napi_ok );

    // ...

}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **argv**: `[in] napi_value*` strided function arguments.
-   **nargs**: `[in] int64_t` total number of expected arguments.
-   **nin**: `[in] int64_t` number of input strided array arguments.
-   **arrays**: `[out] uint8_t**` destination array for storing pointers to both input and output strided byte arrays.
-   **shape**: `[out] int64_t*` destination array for storing the array shape (dimensions).
-   **strides**: `[out] int64_t*` destination array for storing array strides (in bytes) for each strided array.
-   **types**: `[out] int32_t*` destination array for storing strided array argument data types.
-   **err**: `[out] napi_value*` pointer for storing a JavaScript error.

```c
napi_status stdlib_strided_napi_addon_arguments( const napi_env env, const napi_value *argv, const int64_t nargs, const int64_t nin, uint8_t *arrays[], int64_t *shape, int64_t *strides, int32_t *types, napi_value *err );
```

The function returns a `napi_status` status code indicating success or failure (returns `napi_ok` if success).

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   The function assumes the following argument order:

    ```text
    [ N, ia1, is1, ia2, is2, ..., oa1, os1, oa2, os2, ... ]
    ```

    where

    -   `N` is the number of elements over which to iterate.
    -   `ia#` is an input strided array.
    -   `is#` is a corresponding input strided array stride (in units of elements).
    -   `oa#` is an output strided array.
    -   `os#` is a corresponding output strided array stride (in units of elements).

-   The function may return one of the following JavaScript errors:

    -   `TypeError`: first argument must be an integer.
    -   `TypeError`: input array stride argument must be an integer.
    -   `TypeError`: output array stride argument must be an integer.
    -   `TypeError`: input array argument must be a typed array.
    -   `TypeError`: output array argument must be a typed array.
    -   `RangeError`: input array argument must have sufficient elements based on the associated stride and the number of indexed elements.
    -   `RangeError`: output array argument must have sufficient elements based on the associated stride and the number of indexed elements.

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
