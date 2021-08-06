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

# Add-on Arguments

> C API for validating, extracting, and transforming (to native C types) function arguments provided to an ndarray Node-API add-on interface.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/ndarray/base/napi/addon-arguments' );
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
var headerDir = require( '@stdlib/ndarray/base/napi/addon-arguments' );

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
#include "stdlib/ndarray/base/napi/addon_arguments.h"
```

<!-- lint disable maximum-heading-length -->

#### stdlib_ndarray_napi_addon_arguments( env, argv, nargs, nin, \*arrays[], \*err )

Validates, extracts, and transforms (to native C types) function arguments provided to an ndarray Node-API add-on interface.

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

    int64_t nargs = 6;
    int64_t nin = 2;

    // Get callback arguments:
    size_t argc = 6;
    napi_value argv[ 6 ];
    status = napi_get_cb_info( env, info, &argc, argv, nullptr, nullptr );
    assert( status == napi_ok );

    // ...

    // Process the provided arguments:
    struct ndarray *arrays[ 3 ];

    napi_value err;
    status = stdlib_ndarray_napi_addon_arguments( env, argv, nargs, nin, arrays, &err );
    assert( status == napi_ok );

    // ...

}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **argv**: `[in] napi_value*` ndarray function arguments.
-   **nargs**: `[in] int64_t` total number of expected arguments.
-   **nin**: `[in] int64_t` number of input ndarray arguments.
-   **arrays**: `[out] struct ndarrays**` destination array for storing pointers to both input and output ndarrays.
-   **err**: `[out] napi_value*` pointer for storing a JavaScript error.

```c
napi_status stdlib_ndarray_napi_addon_arguments( const napi_env env, const napi_value *argv, const int64_t nargs, const int64_t nin, struct ndarray *arrays[], napi_value *err );
```

The function returns a `napi_status` status code indicating success or failure (returns `napi_ok` if success).

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   The function assumes the following argument order:

    ```text
    [ ib1, im1, ib2, im2, ..., ob1, om1, ob2, om2, ... ]
    ```
    where

    -   `ib#` is a data buffer for an input ndarray.
    -   `im#` is meta data for an input ndarray.
    -   `ob#` is a data buffer for an output ndarray.
    -   `om#` is meta data for an output ndarray.

-   The function may return one of the following JavaScript errors:

    -   `Error`: unable to allocate memory when processing input ndarray.
    -   `Error`: unable to allocate memory when processing output ndarray.

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
