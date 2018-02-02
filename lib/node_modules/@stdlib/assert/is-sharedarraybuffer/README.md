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

# isSharedArrayBuffer

> Test if a value is a [SharedArrayBuffer][mdn-sharedarraybuffer].

<section class="usage">

## Usage

```javascript
var isSharedArrayBuffer = require( '@stdlib/assert/is-sharedarraybuffer' );
```

#### isSharedArrayBuffer( value )

Tests if a value is a [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable no-unused-vars -->

```javascript
var SharedArrayBuffer = require( '@stdlib/array/shared-buffer' );

var bool;
try {
    bool = isSharedArrayBuffer( new SharedArrayBuffer( 10 ) );
    // returns true
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}

bool = isSharedArrayBuffer( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-unused-vars -->

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var SharedArrayBuffer = require( '@stdlib/array/shared-buffer' );
var isSharedArrayBuffer = require( '@stdlib/assert/is-sharedarraybuffer' );

var bool;
try {
    bool = isSharedArrayBuffer( new SharedArrayBuffer( 10 ) );
    // returns true
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
bool = isSharedArrayBuffer( new ArrayBuffer( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Float32Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Int8Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Uint8Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Uint8ClampedArray( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Int16Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Uint16Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Int32Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Uint32Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Float64Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( new Array( 10 ) );
// returns false

bool = isSharedArrayBuffer( {} );
// returns false

bool = isSharedArrayBuffer( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-sharedarraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

</section>

<!-- /.links -->
