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

# isUint8ClampedArray

> Test if a value is a [Uint8ClampedArray][mdn-uint8clampedarray].

<section class="usage">

## Usage

```javascript
var isUint8ClampedArray = require( '@stdlib/assert/is-uint8clampedarray' );
```

#### isUint8ClampedArray( value )

Tests if a value is a [`Uint8ClampedArray`][mdn-uint8clampedarray].

```javascript
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );

var bool = isUint8ClampedArray( new Uint8ClampedArray( 10 ) );
// returns true

bool = isUint8ClampedArray( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var isUint8ClampedArray = require( '@stdlib/assert/is-uint8clampedarray' );

var bool = isUint8ClampedArray( new Uint8ClampedArray( 10 ) );
// returns true

bool = isUint8ClampedArray( new Int8Array( 10 ) );
// returns false

bool = isUint8ClampedArray( new Uint8Array( 10 ) );
// returns false

bool = isUint8ClampedArray( new Int16Array( 10 ) );
// returns false

bool = isUint8ClampedArray( new Uint16Array( 10 ) );
// returns false

bool = isUint8ClampedArray( new Int32Array( 10 ) );
// returns false

bool = isUint8ClampedArray( new Uint32Array( 10 ) );
// returns false

bool = isUint8ClampedArray( new Float32Array( 10 ) );
// returns false

bool = isUint8ClampedArray( new Float64Array( 10 ) );
// returns false

bool = isUint8ClampedArray( new Array( 10 ) );
// returns false

bool = isUint8ClampedArray( {} );
// returns false

bool = isUint8ClampedArray( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-uint8clampedarray]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray

</section>

<!-- /.links -->
