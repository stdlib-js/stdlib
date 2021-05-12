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

# Bitwise Rotation

> Bitwise rotation to the left.

<section class="usage">

## Usage

```javascript
var rotl32 = require( '@stdlib/number/uint32/base/rotl' );
```

#### rotl32( x, shift )

Performs a bitwise rotation to the left.

```javascript
var toBinaryStringUint32 = require( '@stdlib/number/uint32/base/to-binary-string' );

var x = 2147483649;
var bstr = toBinaryStringUint32( x );
// returns '10000000000000000000000000000001'

var y = rotl32( x, 10 );
// returns 1536

bstr = toBinaryStringUint32( y );
// returns '00000000000000000000011000000000'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided a `shift` equal to `0`, the function returns the input value.

    ```javascript
    var y = rotl32( 3, 0 );
    // returns 3
    ```

-   If provided a `shift` greater than `31`, the function performs a bitwise rotation based on the `5` least significant bits of `shift` (i.e., `shift % 32`).

    ```javascript
    var shift = 34; // 00000000000000000000000000100010

    var y = rotl( 1, shift ); // 00000000000000000000000000000100
    // returns 4
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toBinaryStringUint32 = require( '@stdlib/number/uint32/base/to-binary-string' );
var MAX_INT = require( '@stdlib/constants/uint32/max' );
var rotl32 = require( '@stdlib/number/uint32/base/rotl' );

var HALF;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = i;
    y = rotl32( x, 10 );
    console.log( '%d => %s => %s => %d', x, toBinaryStringUint32( x ), toBinaryStringUint32( y ), y );
}

HALF = (MAX_INT+1) / 2;
for ( i = 0; i < 100; i++ ) {
    x = HALF + i;
    y = rotl32( x, 10 );
    console.log( '%d => %s => %s => %d', x, toBinaryStringUint32( x ), toBinaryStringUint32( y ), y );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
