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

# isDataView

> Test if a value is a [DataView][mdn-dataview].

<section class="usage">

## Usage

```javascript
var isDataView = require( '@stdlib/assert/is-dataview' );
```

#### isDataView( value )

Tests if a value is a [`DataView`][mdn-dataview].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );

var bool = isDataView( new DataView( new ArrayBuffer( 10 ) ) );
// returns true

bool = isDataView( [] );
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
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var isDataView = require( '@stdlib/assert/is-dataview' );

var bool = isDataView( new DataView( new ArrayBuffer( 10 ) ) );
// returns true

bool = isDataView( new Float32Array( 10 ) );
// returns false

bool = isDataView( new Int8Array( 10 ) );
// returns false

bool = isDataView( new Uint8Array( 10 ) );
// returns false

bool = isDataView( new Uint8ClampedArray( 10 ) );
// returns false

bool = isDataView( new Int16Array( 10 ) );
// returns false

bool = isDataView( new Uint16Array( 10 ) );
// returns false

bool = isDataView( new Int32Array( 10 ) );
// returns false

bool = isDataView( new Uint32Array( 10 ) );
// returns false

bool = isDataView( new Float64Array( 10 ) );
// returns false

bool = isDataView( new Array( 10 ) );
// returns false

bool = isDataView( new ArrayBuffer( 10 ) );
// returns false

bool = isDataView( {} );
// returns false

bool = isDataView( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-dataview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

</section>

<!-- /.links -->
