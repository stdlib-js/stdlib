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

# unary

> C APIs for registering a Node-API module exporting interfaces for invoking unary numerical functions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/math/base/napi/unary' );
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
var headerDir = require( '@stdlib/math/base/napi/unary' );

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
#include "stdlib/math/base/napi/unary.h"
```

#### stdlib_math_base_napi_d_d( env, info, fcn )

Invokes a unary function accepting and returning double-precision floating-point numbers.

```c
#include <node_api.h>

// ...

static double identity( const double x ) {
    return x;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_d_d( env, info, identity );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] double (*fcn)( double )` unary function.

```c
void stdlib_math_base_napi_d_d( napi_env env, napi_callback_info info, double (*fcn)( double ) );
```

#### stdlib_math_base_napi_f_f( env, info, fcn )

Invokes a unary function accepting and returning single-precision floating-point numbers.

```c
#include <node_api.h>

// ...

static float identityf( const float x ) {
    return x;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_f_f( env, info, identityf );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] float (*fcn)( float )` unary function.

```c
void stdlib_math_base_napi_f_f( napi_env env, napi_callback_info info, float (*fcn)( float ) );
```

#### stdlib_math_base_napi_z_z( env, info, fcn )

Invokes a unary function accepting and returning double-precision complex floating-point numbers.

```c
#include "stdlib/complex/float64/ctor.h"
#include <node_api.h>

// ...

static stdlib_complex128_t identity( const stdlib_complex128_t x ) {
    return x;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_z_z( env, info, identity );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] stdlib_complex128_t (*fcn)( stdlib_complex128_t )` unary function.

```c
void stdlib_math_base_napi_z_z( napi_env env, napi_callback_info info, stdlib_complex128_t (*fcn)( stdlib_complex128_t ) );
```

#### stdlib_math_base_napi_z_d( env, info, fcn )

Invokes a unary function accepting a double-precision complex floating-point number and returning a double-precision floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"
#include <node_api.h>

// ...

static double fcn( const stdlib_complex128_t x ) {
    // ...
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_z_d( env, info, fcn );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] double (*fcn)( stdlib_complex128_t )` unary function.

```c
void stdlib_math_base_napi_z_d( napi_env env, napi_callback_info info, double (*fcn)( stdlib_complex128_t ) );
```

#### stdlib_math_base_napi_c_c( env, info, fcn )

Invokes a unary function accepting and returning single-precision complex floating-point numbers.

```c
#include "stdlib/complex/float32/ctor.h"
#include <node_api.h>

// ...

static stdlib_complex64_t identity( const stdlib_complex64_t x ) {
    return x;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_c_c( env, info, identity );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] stdlib_complex64_t (*fcn)( stdlib_complex64_t )` unary function.

```c
void stdlib_math_base_napi_c_c( napi_env env, napi_callback_info info, stdlib_complex64_t (*fcn)( stdlib_complex64_t ) );
```

#### stdlib_math_base_napi_c_f( env, info, fcn )

Invokes a unary function accepting a single-precision complex floating-point number and returning a single-precision floating-point number.

```c
#include "stdlib/complex/float32/ctor.h"
#include <node_api.h>

// ...

static float fcn( const stdlib_complex64_t x ) {
    // ...
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_c_f( env, info, fcn );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] float (*fcn)( stdlib_complex64_t )` unary function.

```c
void stdlib_math_base_napi_c_f( napi_env env, napi_callback_info info, float (*fcn)( stdlib_complex64_t ) );
```

#### stdlib_math_base_napi_i_i( env, info, fcn )

Invokes a unary function accepting and returning signed 32-bit integers.

```c
#include <node_api.h>
#include <stdint.h>

// ...

static int32_t identity( const int32_t x ) {
    return x;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_i_i( env, info, identity );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] int32_t (*fcn)( int32_t )` unary function.

```c
void stdlib_math_base_napi_i_i( napi_env env, napi_callback_info info, int32_t (*fcn)( int32_t ) );
```

#### stdlib_math_base_napi_i_d( env, info, fcn )

Invokes a unary function accepting a signed 32-bit integer and returning a single-precision floating-point number.

```c
#include <node_api.h>
#include <stdint.h>

// ...

static double scale( const int32_t x ) {
    return x * 10.0;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_i_d( env, info, scale );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] double (*fcn)( int32_t )` unary function.

```c
void stdlib_math_base_napi_i_i( napi_env env, napi_callback_info info, double (*fcn)( int32_t ) );
```

#### stdlib_math_base_napi_f_i( env, info, fcn )

Invokes a unary function accepting a single-precision floating-point number and returning a signed 32-bit integer.

```c
#include <node_api.h>
#include <stdint.h>

// ...

static int32_t fcn( const float x ) {
    // ...
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_f_i( env, info, fcn );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] int32_t (*fcn)( float )` unary function.

```c
void stdlib_math_base_napi_f_i( napi_env env, napi_callback_info info, int32_t (*fcn)( float ) );
```

#### stdlib_math_base_napi_i_f( env, info, fcn )

Invokes a unary function accepting a signed 32-bit integer and returning a single-precision floating-point number.

```c
#include <node_api.h>
#include <stdint.h>

// ...

static float fcn( const int32_t x ) {
    // ...
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_i_f( env, info, fcn );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] float (*fcn)( int32_t )` unary function.

```c
void stdlib_math_base_napi_i_f( napi_env env, napi_callback_info info, float (*fcn)( int32_t ) );
```

#### STDLIB_MATH_BASE_NAPI_MODULE_D_D( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting and returning double-precision floating-point numbers.

```c
static double scale( const double x ) {
    return x * 10.0;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_D_D( scale );
```

The macro expects the following arguments:

-   **fcn**: `double (*fcn)( double )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_F_F( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting and returning single-precision floating-point numbers.

```c
static float scale( const float x ) {
    return x * 10.0f;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_F_F( scale );
```

The macro expects the following arguments:

-   **fcn**: `float (*fcn)( float )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_Z_Z( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting and returning double-precision complex floating-point numbers.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"

static stdlib_complex128_t scale( const stdlib_complex128_t x ) {
    double re;
    double im;

    stdlib_complex128_reim( x, &re, &im );

    re *= 10.0;
    im *= 10.0;

    return stdlib_complex128( re, im );
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_Z_Z( scale );
```

The macro expects the following arguments:

-   **fcn**: `stdlib_complex128_t (*fcn)( stdlib_complex128_t )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_Z_D( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting a double-precision complex floating-point number and returning a double-precision floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"

static double fcn( const stdlib_complex128_t x ) {
    // ...
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_Z_D( fcn );
```

The macro expects the following arguments:

-   **fcn**: `double (*fcn)( stdlib_complex128_t )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_C_C( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting and returning single-precision complex floating-point numbers.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"

static stdlib_complex64_t scale( const stdlib_complex64_t x ) {
    float re;
    float im;

    stdlib_complex64_reim( x, &re, &im );

    re *= 10.0f;
    im *= 10.0f;

    return stdlib_complex64( re, im );
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_C_C( scale );
```

The macro expects the following arguments:

-   **fcn**: `stdlib_complex64_t (*fcn)( stdlib_complex64_t )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_C_F( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting a single-precision complex floating-point number and returning a single-precision floating-point number.

```c
#include "stdlib/complex/float32/ctor.h"

static float fcn( const stdlib_complex64_t x ) {
    // ...
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_C_F( fcn );
```

The macro expects the following arguments:

-   **fcn**: `float (*fcn)( stdlib_complex64_t )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_I_I( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting and returning 32-bit signed integers.

```c
#include <stdint.h>

static int32_t scale( const int32_t x ) {
    return x * 10;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_I_I( scale );
```

The macro expects the following arguments:

-   **fcn**: `int32_t (*fcn)( int32_t )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_I_D( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting a signed 32-bit integer and returning a double-precision floating-point number.

```c
#include <stdint.h>

static double scale( const int32_t x ) {
    return x * 10.0;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_I_D( scale );
```

The macro expects the following arguments:

-   **fcn**: `double (*fcn)( int32_t )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_F_I( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting a single-precision floating-point number and returning a signed 32-bit integer.

```c
#include <stdint.h>

static int32_t fcn( const float x ) {
    // ...
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_F_I( fcn );
```

The macro expects the following arguments:

-   **fcn**: `int32_t (*fcn)( float )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_I_F( fcn )

Macro for registering a Node-API module exporting an interface for invoking a unary function accepting a signed 32-bit integer and returning a single-precision floating-point number.

```c
#include <stdint.h>

static float fcn( const int32_t x ) {
    // ...
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_I_F( fcn );
```

The macro expects the following arguments:

-   **fcn**: `float (*fcn)( int32_t )` unary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   The C-API functions expect that the callback `info` argument provides access to the following JavaScript arguments:

    -   **x**: input value.

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
