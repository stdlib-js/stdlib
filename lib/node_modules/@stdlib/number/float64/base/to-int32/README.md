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

# toInt32

> Convert a [double-precision floating-point number][ieee754] to a signed 32-bit integer.

<section class="usage">

## Usage

```javascript
var float64ToInt32 = require( '@stdlib/number/float64/base/to-int32' );
```

#### float64ToInt32( x )

Converts a [double-precision floating-point number][ieee754] to a signed 32-bit integer.

```javascript
var y = float64ToInt32( 4294967295.0 );
// returns -1

y = float64ToInt32( 3.14 );
// returns 3

y = float64ToInt32( -3.14 );
// returns -3

y = float64ToInt32( NaN );
// returns 0

y = float64ToInt32( Infinity );
// returns 0

y = float64ToInt32( -Infinity );
// returns 0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var MAX_INT = require( '@stdlib/constants/uint32/max' );
var float64ToInt32 = require( '@stdlib/number/float64/base/to-int32' );

var int32;
var f64;
var i;

for ( i = 0; i < 500; i++ ) {
    // Generate a random double-precision floating-point integer:
    f64 = round( randu()*MAX_INT );

    // Convert the double-precision floating-point integer to a signed integer:
    int32 = float64ToInt32( f64 );

    console.log( 'float64: %d => int32: %d', f64, int32 );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
