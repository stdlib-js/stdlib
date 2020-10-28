<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# deg2rad

> Convert an angle from degrees to radians.

<section class="usage">

## Usage

```javascript
var deg2rad = require( '@stdlib/math/base/special/deg2rad' );
```

#### deg2rad( x )

Converts an angle from degrees to radians.

```javascript
var r = deg2rad( 90.0 );
// returns ~1.571

r = deg2rad( -45.0 );
// returns ~-0.785

r = deg2rad( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var deg2rad = require( '@stdlib/math/base/special/deg2rad' );

var d;
var r;
var i;

for ( i = 0; i < 100; i++ ) {
    d = (randu()*720.0) - 360.0;
    r = deg2rad( d );
    console.log( 'degrees: %d => radians: %d', d, r );
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
#include "stdlib/math/base/special/deg2rad.h"
```

#### stdlib_base_deg2rad( x )

Converts an angle from degrees to radians.

```c
double y = stdlib_base_deg2rad( 90.0 );
// returns ~1.571
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_deg2rad( const double x );
```

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
#include "stdlib/math/base/special/deg2rad.h"
#include <stdio.h>

int main() {
    double x[] = { 45.0, 90.0, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_deg2rad( x[ i ] );
        printf( "deg2rad(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

</section>

<!-- /.links -->
