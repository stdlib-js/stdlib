<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isBigUint64Array

> Test if a value is a [BigUint64Array][mdn-biguint64array].

<section class="usage">

## Usage

```javascript
var isBigUint64Array = require( '@stdlib/assert/is-biguint64array' );
```

#### isBigUint64Array( value )

Tests if a value is a [`BigUint64Array`][mdn-biguint64array].

<!-- eslint-disable stdlib/require-globals, no-undef -->

```javascript
var bool = isBigUint64Array( new BigUint64Array( 10 ) );
// returns true

bool = isBigUint64Array( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable stdlib/require-globals, no-undef -->

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
var isBigUint64Array = require( '@stdlib/assert/is-biguint64array' );

var bool = isBigUint64Array( new BigUint64Array( 10 ) );
// returns true

bool = isBigUint64Array( new Int8Array( 10 ) );
// returns false

bool = isBigUint64Array( new Uint8Array( 10 ) );
// returns false

bool = isBigUint64Array( new Uint8ClampedArray( 10 ) );
// returns false

bool = isBigUint64Array( new Int16Array( 10 ) );
// returns false

bool = isBigUint64Array( new Uint16Array( 10 ) );
// returns false

bool = isBigUint64Array( new Int32Array( 10 ) );
// returns false

bool = isBigUint64Array( new Uint32Array( 10 ) );
// returns false

bool = isBigUint64Array( new Float64Array( 10 ) );
// returns false

bool = isBigUint64Array( new Float32Array( 10 ) );
// returns false

bool = isBigUint64Array( new Array( 10 ) );
// returns false

bool = isBigUint64Array( {} );
// returns false

bool = isBigUint64Array( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-biguint64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array

</section>

<!-- /.links -->
