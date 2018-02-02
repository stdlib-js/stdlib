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

# isInt16Array

> Test if a value is an [Int16Array][mdn-int16array].

<section class="usage">

## Usage

```javascript
var isInt16Array = require( '@stdlib/assert/is-int16array' );
```

#### isInt16Array( value )

Tests if a value is an [`Int16Array`][mdn-int16array].

```javascript
var Int16Array = require( '@stdlib/array/int16' );

var bool = isInt16Array( new Int16Array( 10 ) );
// returns true

bool = isInt16Array( [] );
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
var isInt16Array = require( '@stdlib/assert/is-int16array' );

var bool = isInt16Array( new Int16Array( 10 ) );
// returns true

bool = isInt16Array( new Int8Array( 10 ) );
// returns false

bool = isInt16Array( new Uint8Array( 10 ) );
// returns false

bool = isInt16Array( new Uint8ClampedArray( 10 ) );
// returns false

bool = isInt16Array( new Uint16Array( 10 ) );
// returns false

bool = isInt16Array( new Int32Array( 10 ) );
// returns false

bool = isInt16Array( new Uint32Array( 10 ) );
// returns false

bool = isInt16Array( new Float32Array( 10 ) );
// returns false

bool = isInt16Array( new Float64Array( 10 ) );
// returns false

bool = isInt16Array( new Array( 10 ) );
// returns false

bool = isInt16Array( {} );
// returns false

bool = isInt16Array( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-int16array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array

</section>

<!-- /.links -->
