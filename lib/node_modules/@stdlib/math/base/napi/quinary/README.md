<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# quinary

> C APIs for registering a Node-API module exporting interfaces for invoking quinary numerical functions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/math/base/napi/quinary' );
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
var headerDir = require( '@stdlib/math/base/napi/quinary' );

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
#include "stdlib/math/base/napi/quinary.h"
```

#### stdlib_math_base_napi_ddddd_d( env, info, fcn )

Invokes a quinary function accepting and returning double-precision floating-point numbers.

```c
#include <node_api.h>

// ...

static double add( const double x, const double y, const double z, const double w, const double u ) {
    return x + y + z + w + u;
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
    return stdlib_math_base_napi_ddddd_d( env, info, add );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] double (*fcn)( double, double, double, double, double )` quinary function.

```c
void stdlib_math_base_napi_ddddd_d( napi_env env, napi_callback_info info, double (*fcn)( double, double, double, double, double ) );
```

#### stdlib_math_base_napi_fffff_f( env, info, fcn )

Invokes a quinary function accepting and returning single-precision floating-point numbers.

```c
#include <node_api.h>

// ...

static float addf( const float x, const float y, const float z, const float w, const float u ) {
    return x + y + z + w + u;
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
    return stdlib_math_base_napi_fffff_f( env, info, addf );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] float (*fcn)( float, float, float, float, float )` quinary function.

```c
void stdlib_math_base_napi_fffff_f( napi_env env, napi_callback_info info, float (*fcn)( float, float, float, float, float ) );
```

#### STDLIB_MATH_BASE_NAPI_MODULE_DDDDD_D( fcn )

Macro for registering a Node-API module exporting an interface for invoking a quinary function accepting and returning double-precision floating-point numbers.

```c
static double add( const double x, const double y, const double z, const double w, const double u ) {
    return x + y + z + w + u;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_DDDDD_D( add );
```

The macro expects the following arguments:

-   **fcn**: `double (*fcn)( double, double, double, double, double )` quinary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### STDLIB_MATH_BASE_NAPI_MODULE_FFFFF_F( fcn )

Macro for registering a Node-API module exporting an interface for invoking a quinary function accepting and returning single-precision floating-point numbers.

```c
static float addf( const float x, const float y, const float z, const float w, const float u ) {
    return x + y + z + w + u;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_FFFFF_F( addf );
```

The macro expects the following arguments:

-   **fcn**: `float (*fcn)( float, float, float, float, float )` quinary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   The C-API functions expect that the callback `info` argument provides access to the following JavaScript arguments:

    -   `x`: input value.
    -   `y`: input value.
    -   `z`: input value.
    -   `w`: input value.
    -   `u`: input value.

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
