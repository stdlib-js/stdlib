<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# argv_bool

> Convert a Node-API value to a boolean.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/napi/argv-bool' );
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
var headerDir = require( '@stdlib/napi/argv-bool' );

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
#include "stdlib/napi/argv_bool.h"
```

#### stdlib_napi_argv_bool( env, value, \*out, \*message, \*err )

Converts a Node-API value to a boolean.

```c
#include "stdlib/napi/argv_bool.h"
#include <node_api.h>
#include <stdbool.h>

static napi_value addon( napi_env env, napi_callback_info info ) {
    napi_value value;

    // ...

    bool out;
    napi_value err;
    napi_status status = stdlib_napi_argv_bool( env, value, &out, "Must be a boolean.", &err );
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
-   **value**: `[in] napi_value` Node-API value.
-   **out**: `[out] bool*` destination for storing output value.
-   **message**: `[in] char*` error message.
-   **err**: `[out] napi_value*` pointer for storing a JavaScript error. If not provided a number, the function sets `err` with a JavaScript error; otherwise, `err` is set to `NULL`.

```c
napi_status stdlib_napi_argv_bool( const napi_env env, const napi_value value, bool *out, const char *message, napi_value *err );
```

The function returns a `napi_status` status code indicating success or failure (returns `napi_ok` if success).

#### STDLIB_NAPI_ARGV_BOOL( env, name, argv, index )

Macro for converting an add-on callback argument to a boolean.

```c
#include "stdlib/napi/argv_bool.h"
#include "stdlib/napi/argv.h"
#include <node_api.h>
#include <stdbool.h>

static bool fcn( const bool v ) {
    return v;
}

// ...

static napi_value addon( napi_env env, napi_callback_info info ) {
    // Retrieve add-on callback arguments:
    STDLIB_NAPI_ARGV( env, info, argv, argc, 1 );

    // Convert the first argument to a C type:
    STDLIB_NAPI_ARGV_BOOL( env, value, argv, 0 );

    // ...

    bool out = fcn( value );
}
```

The macro expects the following arguments:

-   **env**: environment under which the callback is invoked.
-   **name**: output variable name.
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
