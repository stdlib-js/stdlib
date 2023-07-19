<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# ok status

> C utilities for asserting that a Node-API call returns an "ok" status.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/assert/napi/status-ok' );
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
var headerDir = require( '@stdlib/assert/napi/status-ok' );

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
#include "stdlib/assert/napi/status_ok.h"
```

#### STDLIB_ASSERT_NAPI_STATUS_OK_RET_VOID( env, call, message )

Macro for asserting that a Node-API API call returns an "ok" status.

```c
#include <node_api.h>

static void foo( const napi_env env, const napi_value value, double *out ) {
    // ...

    STDLIB_ASSERT_NAPI_STATUS_OK_RET_VOID( env, napi_get_value_double( env, value, out ), "" )

    // ...

    return;
}
```

The macro expects the following arguments:

-   **env**: environment under which the function is invoked.
-   **call**: expression which returns a Node-API status.
-   **message**: error message.

If a status is not "ok", an exception is raised and `void` returned.

#### STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, call, message )

Macro for asserting that a Node-API API call returns an "ok" status.

```c
#include <node_api.h>

static napi_value foo( const napi_env env, const napi_value value, double *out ) {
    // ...

    STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_get_value_double( env, value, out ), "" )

    // ...

    return NULL;
}
```

The macro expects the following arguments:

-   **env**: environment under which the function is invoked.
-   **call**: expression which returns a Node-API status.
-   **message**: error message.

If a status is not "ok", an exception is raised and `NULL` returned.

#### STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, call, message, value )

Macro for asserting that a Node-API API call returns an "ok" status.

```c
#include <node_api.h>

static double foo( const napi_env env, const napi_value value ) {
    // ...

    double *out;
    STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_get_value_double( env, value, out ), "", 0.0/0.0 )

    // ...

    return out;
}
```

The macro expects the following arguments:

-   **env**: environment under which the function is invoked.
-   **call**: expression which returns a Node-API status.
-   **message**: error message.
-   **value**: return value.

If a status is not "ok", an exception is raised and the value specified by `value` returned.

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
