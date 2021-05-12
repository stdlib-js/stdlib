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

> Convert an unsigned 32-bit integer to a signed 32-bit integer.

<section class="usage">

## Usage

```javascript
var uint32ToInt32 = require( '@stdlib/number/uint32/base/to-int32' );
```

#### uint32ToInt32( x )

Converts an unsigned 32-bit integer to a signed 32-bit integer.

```javascript
var float64ToUint32 = require( '@stdlib/number/float64/base/to-uint32' );

var y = uint32ToInt32( float64ToUint32( 4294967295 ) );
// returns -1

y = uint32ToInt32( float64ToUint32( 3 ) );
// returns 3
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var MAX_UINT32 = require( '@stdlib/constants/uint32/max' );
var float64ToUint32 = require( '@stdlib/number/float64/base/to-uint32' );
var uint32ToInt32 = require( '@stdlib/number/uint32/base/to-int32' );

var uint32;
var int32;
var i;

for ( i = 0; i < 100; i++ ) {
    // Generate a random unsigned 32-bit integer:
    uint32 = float64ToUint32( randu()*MAX_UINT32 );

    // Convert the unsigned integer to a signed 32-bit integer:
    int32 = uint32ToInt32( uint32 );

    console.log( 'uint32: %d => int32: %d', uint32, int32 );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
