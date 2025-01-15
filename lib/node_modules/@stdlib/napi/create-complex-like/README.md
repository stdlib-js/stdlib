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

# create_complex_like

> Create a Node-API value representing a complex number-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/napi/create-complex-like' );
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
var headerDir = require( '@stdlib/napi/create-complex-like' );

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
#include "stdlib/napi/create_complex_like.h"
```

#### stdlib_napi_create_complex_like( env, re, im, \*out )

Returns a Node-API value representing a complex number-like object.

```c
#include "stdlib/napi/create_complex_like.h"
#include <node_api.h>

static napi_value addon( napi_env env, napi_callback_info info ) {

    // ...

    napi_value value;
    napi_status status = stdlib_napi_create_complex_like( env, 3.0, 5.0, &value );
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
-   **re**: `[in] double` double-precision floating-point number corresponding to the real component.
-   **im**: `[in] double` double-precision floating-point number corresponding to the imaginary component.
-   **out**: `[out] napi_value*` destination for storing output value.

```c
napi_status stdlib_napi_create_complex_like( const napi_env env, const double re, const double im, napi_value *out );
```

The function returns a `napi_status` status code indicating success or failure (returns `napi_ok` if success).

#### STDLIB_NAPI_CREATE_COMPLEX_LIKE( env, re, im, name )

Macro for creating a Node-API value representing a complex number-like object.

```c
#include "stdlib/napi/create_complex_like.h"
#include "stdlib/napi/argv_complex128.h"
#include "stdlib/napi/argv.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include <node_api.h>

static stdlib_complex128_t fcn( const stdlib_complex128_t v ) {
    return v;
}

// ...

static napi_value addon( napi_env env, napi_callback_info info ) {
    // Retrieve add-on callback arguments:
    STDLIB_NAPI_ARGV( env, info, argv, argc, 1 );

    // Convert the first argument to a C type:
    STDLIB_NAPI_ARGV_COMPLEX128( env, value, argv, 0 );

    // ...

    stdlib_complex128_t z = fcn( value );

    // Convert a value having a C type to a Node-API value:
    STDLIB_NAPI_CREATE_COMPLEX_LIKE( env, stdlib_complex128_real( z ), stdlib_complex128_imag( z ), out );

    return out;
}
```

The macro expects the following arguments:

-   **env**: environment under which the callback is invoked.
-   **re**: expression returning a double-precision floating-point number corresponding to the real component.
-   **im**: expression returning a double-precision floating-point number corresponding to the imaginary component.
-   **name**: output variable name.

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
