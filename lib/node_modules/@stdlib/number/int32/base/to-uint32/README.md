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

# toUint32

> Convert a signed 32-bit integer to an unsigned 32-bit integer.

<section class="usage">

## Usage

```javascript
var int32ToUint32 = require( '@stdlib/number/int32/base/to-uint32' );
```

#### int32ToUint32( x )

Converts a signed 32-bit integer to an unsigned 32-bit integer.

```javascript
var float64ToInt32 = require( '@stdlib/number/float64/base/to-int32' );

var y = int32ToUint32( float64ToInt32( -1 ) );
// returns 4294967295

y = int32ToUint32( float64ToInt32( 3 ) );
// returns 3
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var MAX_INT32 = require( '@stdlib/constants/int32/max' );
var float64ToInt32 = require( '@stdlib/number/float64/base/to-int32' );
var int32ToUint32 = require( '@stdlib/number/int32/base/to-uint32' );

var uint32;
var int32;
var sign;
var i;

for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    // Generate a random signed 32-bit integer:
    int32 = float64ToInt32( sign*randu()*MAX_INT32 );

    // Convert the signed integer to an unsigned 32-bit integer:
    uint32 = int32ToUint32( int32 );

    console.log( 'int32: %d => uint32: %d', int32, uint32 );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
