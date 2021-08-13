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

# isArrayBufferView

> Test if a value is an [ArrayBuffer][mdn-arraybuffer] view.

<section class="usage">

## Usage

```javascript
var isArrayBufferView = require( '@stdlib/assert/is-arraybuffer-view' );
```

#### isArrayBufferView( value )

Tests if a value is an [`ArrayBuffer`][mdn-arraybuffer] view such as a [`DataView`][mdn-dataview] or [`TypedArray`][mdn-typed-array].

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );

var bool = isArrayBufferView( new Int8Array( 10 ) );
// returns true

bool = isArrayBufferView( new ArrayBuffer( 10 ) );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint16Array = require( '@stdlib/array/uint16' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var isArrayBufferView = require( '@stdlib/assert/is-arraybuffer-view' );

var bool = isArrayBufferView( new Int8Array( 10 ) );
// returns true

bool = isArrayBufferView( new Int16Array( 10 ) );
// returns true

bool = isArrayBufferView( new Uint16Array( 10 ) );
// returns true

bool = isArrayBufferView( new Int32Array( 10 ) );
// returns true

bool = isArrayBufferView( new Float64Array( 10 ) );
// returns true

bool = isArrayBufferView( new Float32Array( 10 ) );
// returns true

bool = isArrayBufferView( new ArrayBuffer( 10 ) );
// returns false

bool = isArrayBufferView( [] );
// returns false

bool = isArrayBufferView( {} );
// returns false

bool = isArrayBufferView( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-dataview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

</section>

<!-- /.links -->
