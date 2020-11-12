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

# Byte Order

> Platform [byte order][endianness].

<section class="usage">

## Usage

```javascript
var BYTE_ORDER = require( '@stdlib/os/byte-order' );
```

#### BYTE_ORDER

Platform byte order.

```javascript
console.log( BYTE_ORDER );
// => <string>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The following values are possible:

    -   `'little-endian'`
    -   `'big-endian'`
    -   `'mixed-endian'` (also known as "middle-endian")
    -   `'unknown'`

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var BYTE_ORDER = require( '@stdlib/os/byte-order' );

if ( BYTE_ORDER === 'little-endian' ) {
    console.log( 'Least significant byte comes first...' );
} else if ( BYTE_ORDER === 'big-endian' ) {
    console.log( 'Most significant byte comes first...' );
} else {
    console.log( 'This is uncommon...' );
}
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
#include "stdlib/os/byte_order.h"
```

#### STDLIB_OS_ORDER_LITTLE_ENDIAN

Macro for an arbitrary constant indicating little-endian order.

```c
#if defined(STDLIB_OS_BYTE_ORDER) && STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN

// Do something for little-endian...

#endif
```

If compiled on an unrecognized/unsupported platform, the macro is **not** defined.

#### STDLIB_OS_ORDER_BIG_ENDIAN

Macro for an arbitrary constant indicating big-endian order.

```c
#if defined(STDLIB_OS_BYTE_ORDER) && STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN

// Do something for big-endian...

#endif
```

If compiled on an unrecognized/unsupported platform, the macro is **not** defined.

#### STDLIB_OS_BYTE_ORDER

Macro which equals either `STDLIB_OS_ORDER_LITTLE_ENDIAN` or `STDLIB_OS_ORDER_BIG_ENDIAN` (or host defined) depending on the resolved platform byte order.

```c
#if defined(STDLIB_OS_BYTE_ORDER)

#if STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN

// Do something for little-endian...

#elif STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN

// Do something for big-endian...

#endif

#endif
```

If compiled on an unrecognized/unsupported platform, the macro is **not** defined.

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/os/byte_order.h"
#include <stdio.h>

int main() {
#if defined(STDLIB_OS_BYTE_ORDER)
#if STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN
    printf( "Platform is little-endian...\n" );
#elif STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN
    printf( "Platform is big-endian...\n" );
#else
    printf( "Platform endianness is either mixed-endian or unknown...\n" )
#endif
#endif
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: byte-order [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ byte-order
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[endianness]: https://en.wikipedia.org/wiki/Endianness

</section>

<!-- /.links -->
